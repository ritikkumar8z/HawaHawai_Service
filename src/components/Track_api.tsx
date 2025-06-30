import React, { useState } from "react";
import { trackShipment } from "../apis/track_api";
import {
  FaSpinner,
  FaBoxOpen,
  FaCalendarAlt,
  FaUser,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaHourglassHalf,
  FaTimesCircle,
  FaShippingFast,
  FaCircle,
  FaInfoCircle,
  FaClipboardList,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

interface BookedShipment {
  trackingId: string;
  userId: string;
  status: string;
  origin: string;
  destination: string;
  senderName: string;
  receiverName: string;
  bookingDate: string;
  expectedDeliveryDate?: string;
  history: Array<{
    timestamp: string;
    location: string;
    status: string;
    message: string;
  }>;
  courierPartnerTrackingId?: string;
}

interface TrackingData {
  type: "firebase" | "aftership";
  data: BookedShipment | string;
}

const TrackShipmentComponent: React.FC = () => {
  const [pickup, setPickup] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [trackingResult, setTrackingResult] = useState<TrackingData | null>(
    null
  );
  const [loadingTracking, setLoadingTracking] = useState<boolean>(false);

  const handleSubmit = async () => {
    setError("");
    setTrackingResult(null);

    if (!pickup) {
      setError("⚠️ Please enter a tracking number.");
      toast.error("Tracking number is required.", {
        icon: "⚠️",
        style: {
          border: "1px solid #ffc107",
          padding: "16px",
          color: "#856404",
          backgroundColor: "#fff3cd",
          fontWeight: "bold",
        },
      });
      return;
    }

    setLoadingTracking(true);

    try {
      const result = await trackShipment(pickup);

      if (result.success) {
        if (typeof result.data === "string") {
          setTrackingResult({ type: "aftership", data: result.data });
        } else {
          setTrackingResult({
            type: "firebase",
            data: result.data as BookedShipment,
          });
        }
        toast.success("📦 Tracking information fetched!", {
          icon: "✅",
          style: {
            border: "1px solid #28a745",
            padding: "16px",
            color: "#155724",
            backgroundColor: "#d4edda",
            fontWeight: "bold",
          },
        });
      } else {
        setError(result.error || "❌ Something went wrong.");
        toast.error("Tracking failed!", {
          icon: "❌",
          style: {
            border: "1px solid #dc3545",
            padding: "16px",
            color: "#721c24",
            backgroundColor: "#f8d7da",
            fontWeight: "bold",
          },
        });
      }
    } catch (err) {
      setError("❌ An unexpected error occurred during tracking.");
      toast.error("An unexpected error occurred.", {
        icon: "⚠️",
        style: {
          border: "1px solid #ffc107",
          padding: "16px",
          color: "#856404",
          backgroundColor: "#fff3cd",
          fontWeight: "bold",
        },
      });
    } finally {
      setLoadingTracking(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return <FaCheckCircle className="text-green-500" />;
      case "in transit":
        return <FaShippingFast className="text-blue-500" />;
      case "picked up":
        return <FaBoxOpen className="text-purple-500" />;
      case "booked":
        return <FaHourglassHalf className="text-orange-500" />;
      case "cancelled":
        return <FaTimesCircle className="text-red-500" />;
      default:
        return <FaCircle className="text-gray-400 text-sm" />;
    }
  };

  const renderTrackingResults = () => {
    if (error) {
      return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl relative shadow-md animate-fade-in text-center mt-4">
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      );
    }

    if (!trackingResult) {
      return null;
    }

    if (trackingResult.type === "aftership") {
      return (
        <div className="bg-white p-6 rounded-xl shadow-lg animate-fade-in border border-gray-200 mt-4">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FaShippingFast className="text-blue-600" /> External Tracking
            Details
          </h3>
          <pre className="whitespace-pre-wrap text-gray-700 text-sm bg-gray-50 p-4 rounded-lg border border-gray-200">
            {typeof trackingResult.data === "object"
              ? JSON.stringify(trackingResult.data, null, 2)
              : trackingResult.data}
          </pre>
          <p className="mt-4 text-sm text-gray-500">
            <FaInfoCircle className="inline-block mr-1" /> This information is
            provided by an external courier partner.
          </p>
        </div>
      );
    }

    const shipment = trackingResult.data as BookedShipment;

    return (
      <div className="bg-white p-6 rounded-3xl shadow-xl animate-fade-in border border-blue-100 mt-4">
        <h3 className="text-2xl font-extrabold text-blue-900 mb-4 flex items-center gap-3">
          <FaBoxOpen className="text-3xl text-blue-600" /> Shipment Status:{" "}
          {shipment.status}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-gray-700 mb-6">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" />{" "}
            <strong>Tracking ID:</strong> {shipment.trackingId}
          </p>
          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" />{" "}
            <strong>Booking Date:</strong>{" "}
            {new Date(shipment.bookingDate).toLocaleDateString()}
          </p>
          <p className="flex items-center gap-2">
            <FaUser className="text-blue-500" /> <strong>Sender:</strong>{" "}
            {shipment.senderName}
          </p>
          <p className="flex items-center gap-2">
            <FaUser className="text-blue-500" /> <strong>Receiver:</strong>{" "}
            {shipment.receiverName}
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" />{" "}
            <strong>Origin:</strong> {shipment.origin}
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" />{" "}
            <strong>Destination:</strong> {shipment.destination}
          </p>
          {shipment.expectedDeliveryDate && (
            <p className="flex items-center gap-2 col-span-1 md:col-span-2">
              <FaCalendarAlt className="text-blue-500" />{" "}
              <strong>Estimated Delivery:</strong>{" "}
              {new Date(shipment.expectedDeliveryDate).toLocaleDateString()}
            </p>
          )}
        </div>

        <h4 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
          <FaClipboardList className="text-blue-600" /> Shipment History
        </h4>
        <div className="relative border-l-2 border-gray-200 pl-4">
          {shipment.history && shipment.history.length > 0 ? (
            [...shipment.history].reverse().map((checkpoint, index) => (
              <div key={index} className="mb-6 relative">
                <div className="absolute w-4 h-4 rounded-full bg-blue-600 -left-6 top-0 flex items-center justify-center text-white">
                  {getStatusIcon(checkpoint.status)}
                </div>
                <p className="text-sm text-gray-500">
                  {new Date(checkpoint.timestamp).toLocaleString()}
                </p>
                <p className="font-semibold text-gray-800">
                  {checkpoint.status} - {checkpoint.location}
                </p>
                <p className="text-sm text-gray-600">{checkpoint.message}</p>
              </div>
            ))
          ) : (
            <div className="p-4 bg-blue-50 text-blue-800 rounded-lg flex items-center gap-2">
              <FaInfoCircle /> No detailed history available yet.
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-6">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1rem",
          },
          success: {
            iconTheme: {
              primary: "#00C853",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#D50000",
              secondary: "#fff",
            },
          },
        }}
      />

      <h2 className="text-3xl font-extrabold text-blue-800 text-center flex items-center justify-center gap-3">
        <FaShippingFast className="text-blue-600" /> Track Your Shipment
      </h2>

      <div className="relative">
        <input
          type="text"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          placeholder="Enter Tracking Number (e.g., HH123456789)"
          className="w-full border-2 border-gray-300 p-3 rounded-full focus:outline-none focus:border-blue-500 transition-all pl-12 pr-4 text-lg"
        />
        <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-all duration-300 text-lg font-semibold shadow-md flex items-center justify-center gap-2"
        disabled={loadingTracking}
      >
        {loadingTracking ? (
          <>
            <FaSpinner className="animate-spin" /> Tracking...
          </>
        ) : (
          "🚀 Track Now"
        )}
      </button>

      {renderTrackingResults()}
    </div>
  );
};

export default TrackShipmentComponent;

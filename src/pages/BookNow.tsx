import React, { useState, useRef } from "react";
import {
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaBox,
  FaCalendarAlt,
  FaHome,
  FaTruckLoading,
} from "react-icons/fa";
import { db } from "../pages/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import shipmentBg from "../assets/images/Shipment_Form_Bg.png";
import { useNavigate } from "react-router-dom";

interface BookingData {
  senderName: string;
  senderPhone: string;
  senderPincode: string;
  pickupPoint: string;
  weight: string;
  packages: string;
  arrivalDate: string;
  receiverName: string;
  receiverPhone: string;
  receiverAltPhone: string;
  receiverPincode: string;
  dropPoint: string;
  deliveryType: "Home" | "Office" | "Warehouse";
  description: string;
}

const BookNow: React.FC = () => {
  const navigate = useNavigate();

  const initialState: BookingData = {
    senderName: "",
    senderPhone: "",
    senderPincode: "",
    pickupPoint: "",
    weight: "",
    packages: "",
    arrivalDate: "",
    receiverName: "",
    receiverPhone: "",
    receiverAltPhone: "",
    receiverPincode: "",
    dropPoint: "",
    deliveryType: "Home",
    description: "",
  };

  const [formData, setFormData] = useState<BookingData>(initialState);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmedBooking, setConfirmedBooking] = useState<
    (BookingData & { id: string }) | null
  >(null);

  const fieldRefs = useRef<{
    [key: string]:
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
      | null;
  }>({});

  const confirmationRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidName = (name: string) => /^[A-Za-z\s]{2,}$/.test(name.trim());
  const isValidPhone = (phone: string) => /^\d{10}$/.test(phone);
  const isValidPincode = (pincode: string) => /^\d{6}$/.test(pincode);
  const isValidWeightOrPackages = (value: string) =>
    /^\d+(\.\d{1,2})?$/.test(value) && parseFloat(value) > 0;
  const isValidDate = (date: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);
    return Boolean(Date.parse(date)) && selectedDate >= today;
  };
  const isValidDescription = (desc: string) => desc.trim().length >= 10;
  const validateForm = () => {
    const {
      senderName,
      senderPhone,
      senderPincode,
      pickupPoint,
      weight,
      packages,
      arrivalDate,
      receiverName,
      receiverPhone,
      receiverAltPhone,
      receiverPincode,
      dropPoint,
      description,
    } = formData;

    if (!isValidName(senderName)) {
      toast.error(
        "❌ Sender name is required and must contain at least 2 letters."
      );
      return false;
    }
    if (!isValidPhone(senderPhone)) {
      toast.error("❌ Invalid sender phone number. Must be 10 digits.");
      return false;
    }
    if (!isValidPincode(senderPincode)) {
      toast.error("❌ Invalid sender pincode. Must be 6 digits.");
      return false;
    }
    if (!pickupPoint.trim()) {
      toast.error("❌ Pickup point is required.");
      return false;
    }
    if (!isValidWeightOrPackages(weight)) {
      toast.error("❌ Invalid weight. Must be a positive number.");
      return false;
    }
    if (!isValidWeightOrPackages(packages)) {
      toast.error("❌ Invalid package count. Must be a positive number.");
      return false;
    }
    if (!isValidDate(arrivalDate)) {
      toast.error(
        "❌ Invalid arrival date. Date must be valid and not in the past."
      );
      return false;
    }
    if (!isValidName(receiverName)) {
      toast.error(
        "❌ Receiver name is required and must contain at least 2 letters."
      );
      return false;
    }
    if (!isValidPhone(receiverPhone)) {
      toast.error("❌ Invalid receiver phone number. Must be 10 digits.");
      return false;
    }
    if (receiverAltPhone && !isValidPhone(receiverAltPhone)) {
      toast.error(
        "❌ Invalid alternate phone number. Must be 10 digits if provided."
      );
      return false;
    }
    if (!isValidPincode(receiverPincode)) {
      toast.error("❌ Invalid receiver pincode. Must be 6 digits.");
      return false;
    }
    if (!dropPoint.trim()) {
      toast.error("❌ Drop-out point is required.");
      return false;
    }
    if (!isValidDescription(description)) {
      toast.error("❌ Description must be at least 10 characters long.");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    toast.loading("⌛ Booking your shipment...", { id: "booking" });

    try {
      const docRef = await addDoc(collection(db, "shipments"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      toast.success(
        "✅ Shipment booked successfully! Your tracking ID is " +
          docRef.id +
          "📦🚀",
        {
          id: "booking",
          duration: 7000,
          icon: "🚚",
          style: {
            border: "1px solid #10b981",
            padding: "16px",
            color: "#064e3b",
            background: "#ecfdf5",
            fontWeight: "bold",
            fontSize: "15px",
            boxShadow: "0 4px 14px rgba(16, 185, 129, 0.3)",
          },
        }
      );

      setConfirmedBooking({ id: docRef.id, ...formData });
      setFormData(initialState);

      setTimeout(() => {
        confirmationRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("❌ Booking failed. Please try again later.", {
        id: "booking",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getNextField = (currentName: string) => {
    const order: (keyof BookingData)[] = [
      "senderName",
      "senderPhone",
      "senderPincode",
      "pickupPoint",
      "weight",
      "packages",
      "arrivalDate",
      "receiverName",
      "receiverPhone",
      "receiverAltPhone",
      "receiverPincode",
      "dropPoint",
      "deliveryType",
      "description",
    ];
    const currentIndex = order.indexOf(currentName as keyof BookingData);
    return currentIndex >= 0 && currentIndex < order.length - 1
      ? order[currentIndex + 1]
      : null;
  };

  const handleKeyDown = (e: React.KeyboardEvent, fieldName: string) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const nextField = getNextField(fieldName);
      if (nextField && fieldRefs.current[nextField]) {
        fieldRefs.current[nextField]?.focus();
      } else if (fieldName === "description") {
        handleSubmit();
      }
    }
  };
  const renderInput = (
    name: keyof BookingData,
    placeholder: string,
    icon: React.ReactNode,
    type = "text",
    isTextArea = false
  ) => (
    <div className="flex items-center bg-white/90 border border-gray-300 px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
      <span className="text-teal-600 mr-3">{icon}</span>
      {isTextArea ? (
        <textarea
          ref={(el) => {
            fieldRefs.current[name] = el;
          }}
          name={name}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e, name)}
          rows={3}
          className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm resize-none"
        />
      ) : (
        <input
          ref={(el) => {
            fieldRefs.current[name] = el;
          }}
          name={name}
          type={type}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e, name)}
          className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm"
        />
      )}
    </div>
  );

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center p-6 relative"
      style={{
        backgroundImage: `url(${shipmentBg})`,
      }}
    >
      <div className="absolute top-6 right-6 flex space-x-4 z-20">
        <button
          onClick={() => navigate("/")}
          className="flex items-center px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          title="Go to Home"
        >
          <FaHome className="mr-2" /> Home
        </button>
        <button
          onClick={() => navigate("/track")}
          className="flex items-center px-4 py-2 cursor-pointer bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
          title="Track your Shipment"
        >
          <FaTruckLoading className="mr-2" /> Track
        </button>
      </div>

      <Toaster
        position="top-right"
        toastOptions={{ className: "text-sm font-medium" }}
      />

      <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-8 w-full max-w-4xl shadow-2xl border border-white/10 mt-16 md:mt-24">
        <h2 className="text-4xl font-extrabold text-center text-white drop-shadow mb-8">
          📦 Book Your Shipment
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Sender Info Section */}
          <div className="space-y-5">
            <div className="text-xl font-bold text-blue-700">
              Sender's Details
            </div>
            {renderInput("senderName", "Full Name", <FaUser />)}
            {renderInput("senderPhone", "Phone Number", <FaPhone />, "tel")}
            {renderInput(
              "senderPincode",
              "Pincode",
              <FaMapMarkerAlt />,
              "text"
            )}
            {renderInput(
              "pickupPoint",
              "Pick-up Point Address",
              <FaMapMarkerAlt />
            )}
            {renderInput("weight", "Weight (kg)", <FaBox />, "number")}
            {renderInput("packages", "Number of Packages", <FaBox />, "number")}
            <div className="flex items-center bg-white/90 border border-gray-300 px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
              <FaCalendarAlt className="text-teal-600 mr-3" />
              <input
                title="Arrival Date"
                placeholder="Expected Arrival Date"
                ref={(el) => {
                  fieldRefs.current["arrivalDate"] = el;
                }}
                name="arrivalDate"
                type="date"
                value={formData.arrivalDate}
                onChange={handleChange}
                onKeyDown={(e) => handleKeyDown(e, "arrivalDate")}
                className="flex-1 bg-transparent outline-none text-sm text-gray-700"
              />
            </div>
          </div>

          {/* Receiver Info Section */}
          <div className="space-y-5">
            <div className="text-xl font-bold text-blue-700">
              Receiver's Details
            </div>
            {renderInput("receiverName", "Full Name", <FaUser />)}
            {renderInput("receiverPhone", "Phone Number", <FaPhone />, "tel")}
            {renderInput(
              "receiverAltPhone",
              "Alt. Phone Number (Optional)",
              <FaPhone />,
              "tel"
            )}
            {renderInput(
              "receiverPincode",
              "Pincode",
              <FaMapMarkerAlt />,
              "text"
            )}
            {renderInput(
              "dropPoint",
              "Drop-off Point Address",
              <FaMapMarkerAlt />
            )}

            <div className="flex items-center bg-white/90 border border-gray-300 px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
              <FaMapMarkerAlt className="text-teal-600 mr-3" />
              <select
                title="Delivery Type"
                ref={(el) => {
                  fieldRefs.current["deliveryType"] = el;
                }}
                name="deliveryType"
                value={formData.deliveryType}
                onChange={handleChange}
                onKeyDown={(e) => handleKeyDown(e, "deliveryType")}
                className="flex-1 bg-transparent outline-none text-sm text-gray-700 cursor-pointer"
              >
                <option value="Home">Home Delivery</option>
                <option value="Office">Office Delivery</option>
                <option value="Warehouse">Warehouse Pickup</option>
              </select>
            </div>
            {renderInput(
              "description",
              "Shipment Description (e.g., clothes, electronics)",
              <FaBox />,
            )}
          </div>
        </div>

        <div className="mt-14 flex justify-center items-center relative z-10">
          <button
            onClick={handleSubmit}
            className={`relative overflow-hidden px-12 py-4 cursor-pointer rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 shadow-xl text-white font-extrabold text-xl tracking-wide flex items-center gap-3 transition-all duration-300 ${
              isSubmitting
                ? "opacity-60 cursor-not-allowed"
                : "hover:scale-105 hover:shadow-emerald-500/50 active:scale-95 group"
            }`}
            disabled={isSubmitting}
          >
            <span
              className={`text-2xl ${
                isSubmitting
                  ? "animate-spin"
                  : "animate-[pulse_2s_ease-in-out_infinite]"
              }`}
            >
              {isSubmitting ? "🌀" : "✈️"}{" "}
            </span>
            <span className="z-10">
              {isSubmitting ? "Booking..." : "Book Now"}
            </span>
            <span className="absolute inset-0 bg-white/10 blur-xl opacity-20 rounded-full group-hover:opacity-40 transition duration-500"></span>
            <span className="absolute inset-0 pointer-events-none">
              <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/30 opacity-50 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-active:animate-[ping_0.6s_linear]"></span>
            </span>
          </button>
        </div>
      </div>

      {/* Confirmation Message */}
      {confirmedBooking && (
        <div
          ref={confirmationRef}
          className="mt-12 mb-8 bg-white/95 rounded-2xl p-6 shadow-xl border border-green-200 w-full max-w-3xl text-gray-800 animate-fade-in-up"
        >
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            🎉 Shipment Confirmed!
          </h3>
          <p className="mb-2">
            <strong>Booking ID:</strong>{" "}
            <span className="font-mono bg-gray-100 px-2 py-1 rounded-md text-sm">
              {confirmedBooking.id}
            </span>
          </p>
          <p className="mb-2">
            <strong>Sender:</strong> {confirmedBooking.senderName} (
            {confirmedBooking.senderPhone})
          </p>
          <p className="mb-2">
            <strong>Receiver:</strong> {confirmedBooking.receiverName} (
            {confirmedBooking.receiverPhone})
          </p>
          <p className="mb-2">
            <strong>Pickup:</strong> {confirmedBooking.pickupPoint} (
            {confirmedBooking.senderPincode})
          </p>
          <p className="mb-2">
            <strong>Drop:</strong> {confirmedBooking.dropPoint} (
            {confirmedBooking.receiverPincode})
          </p>
          <p className="mb-2">
            <strong>Weight:</strong> {confirmedBooking.weight} kg
          </p>
          <p className="mb-2">
            <strong>Packages:</strong> {confirmedBooking.packages}
          </p>
          <p className="mb-2">
            <strong>Expected Arrival:</strong> {confirmedBooking.arrivalDate}
          </p>
          <p className="mb-2">
            <strong>Delivery Type:</strong> {confirmedBooking.deliveryType}
          </p>
          <p className="mb-2">
            <strong>Description:</strong> {confirmedBooking.description}
          </p>
          <p className="mt-4 text-green-600 font-semibold text-lg">
            Your shipment has been successfully booked. 📦 Tracking updates will
            be available shortly once the courier picks it up.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={() => navigate(`/track?id=${confirmedBooking.id}`)}
              className="flex items-center px-6 py-3 cursor-pointer bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
            >
              <FaTruckLoading className="mr-2" /> Track Your Shipment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookNow;

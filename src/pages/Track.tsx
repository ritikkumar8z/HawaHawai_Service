import React, { useState, useEffect, useCallback } from "react";
import {
  FaHome,
  FaTruck,
  FaClipboardList,
  FaMapMarkedAlt,
  FaBook,
  FaInfoCircle,
  FaCog,
  FaPhone,
  FaGlobe,
  FaBars,
  FaTimes,
  FaFileAlt,
  FaSignInAlt,
  FaSpinner,
  FaBoxOpen,
  FaCalendarAlt,
  FaUser,
  FaCheckCircle,
  FaHourglassHalf,
  FaCircle,
  FaTimesCircle,
  FaMapMarkerAlt,
  FaShippingFast,
} from "react-icons/fa";

import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import trackBg from "../assets/images/first_page.png";
import logo from "../assets/images/Logo.png";
import { trackShipment } from "../apis/track_api";

interface TrackingData {
  type: "firebase" | "aftership";
  data: any;
}

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

const Track: React.FC = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState<"domestic" | "international">("domestic");
  const [pickup, setPickup] = useState("");
  const [error, setError] = useState("");
  const [trackingResult, setTrackingResult] = useState<TrackingData | null>(
    null
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Track");
  const [user, setUser] = useState<any>(null);
  const [loadingTracking, setLoadingTracking] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingPage(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        navigate("/signup");
      } else {
        const origin = sessionStorage.getItem("auth_origin");
        if (origin === "signup") {
          toast.success("🎉 Signed up successfully!", { duration: 4000 });
        } else if (origin === "login") {
          toast.success("👋 Welcome back!", { duration: 4000 });
        }
        sessionStorage.removeItem("auth_origin");
      }
    });
    return () => unsubscribe();
  }, [auth, navigate]);

  const handleNavigation = useCallback(
    (path: string) => {
      setLoadingPage(true);
      setTimeout(() => {
        navigate(path);
        setLoadingPage(false);
      }, 300);
    },
    [navigate]
  );

  const handleSubmit = async () => {
    setError("");
    setTrackingResult(null);

    if (mode === "international") {
      toast.error("🌐 International tracking is not available at the moment.", {
        icon: "🚫",
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

    if (!pickup) {
      setError("⚠️ Please enter a tracking number.");
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
      console.error("Tracking submission error:", err);
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

  const navItems = [
    { label: "Home", icon: <FaHome />, link: "/home", external: true },
    { label: "Track", icon: <FaTruck /> },
    { label: "Services", icon: <FaClipboardList /> },
    { label: "Locate us", icon: <FaMapMarkedAlt /> },
    { label: "Booking", icon: <FaBook />, link: "/book", external: true },
    { label: "FAQs", icon: <FaInfoCircle /> },
    { label: "T&C", icon: <FaFileAlt /> },
    { label: "Settings", icon: <FaCog /> },
    { label: "Logout", icon: <FaTimes />, action: "logout" },
  ];

  const renderTrackingResults = () => {
    if (error) {
      return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl relative shadow-md animate-fade-in text-center">
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
        <div className="bg-white p-6 rounded-xl shadow-lg animate-fade-in border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FaTruck className="text-blue-600" /> External Tracking Details
          </h3>
          <pre className="whitespace-pre-wrap text-gray-700 text-sm bg-gray-50 p-4 rounded-lg border border-gray-200">
            {trackingResult.data}
          </pre>
          <p className="mt-4 text-sm text-gray-500">
            <FaInfoCircle className="inline-block mr-1" /> This information is
            provided by our external courier partner.
          </p>
        </div>
      );
    }

    const shipment = trackingResult.data as BookedShipment;

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

    return (
      <div className="bg-white p-6 rounded-3xl shadow-xl animate-fade-in border border-blue-100">
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
                <div className="absolute w-4 h-4 rounded-full bg-blue-600 -left-6 top-0 flex items-center justify-center">
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

  const renderSection = () => {
    if (activeSection !== "Track") {
      return (
        <div className="text-center text-xl font-semibold text-gray-50 py-10 animate-fade-in">
          📦 <span className="text-pink-600">{activeSection}</span> section is
          currently under construction. Please check back later!
        </div>
      );
    }

    return (
      <>
        {/* Main Card */}
        <div className="relative z-10 w-full max-w-3xl bg-white/50 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10 animate-fade-in">
          <div className="flex justify-center gap-6 mb-8">
            {[
              ["domestic", <FaHome />, "Domestic"],
              ["international", <FaGlobe />, "International"],
            ].map(([id, icon, label]) => (
              <button
                key={String(label)}
                onClick={() => setMode(id as "domestic" | "international")}
                className={`px-6 py-2 flex items-center gap-2 cursor-pointer rounded-full font-bold text-sm transition-all duration-200 ${
                  mode === id
                    ? "bg-blue-900 text-white shadow-md"
                    : "bg-gray-200 text-gray-800 hover:bg-blue-100"
                }`}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            <div className="mb-6">
              <label className="block font-semibold mb-2 text-gray-700">
                Tracking Number
              </label>
              <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                <FaMapMarkerAlt className="mr-3 text-blue-600" />
                <input
                  type="text"
                  placeholder="Enter your tracking number (e.g., HH123456789)"
                  className="w-full bg-transparent outline-none text-base text-gray-800"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-blue-900 text-white cursor-pointer rounded-full font-semibold hover:bg-blue-950 shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              disabled={loadingTracking}
            >
              {loadingTracking ? (
                <>
                  <FaSpinner className="animate-spin" /> Tracking...
                </>
              ) : (
                "🚚 Let's Track"
              )}
            </button>
          </div>

          <div className="mt-8">{renderTrackingResults()}</div>
        </div>
      </>
    );
  };

  return (
    <>
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

      {loadingPage && (
        <div className="fixed inset-0 bg-blue-900/90 z-50 flex items-center justify-center animate-fade-in">
          <div className="flex flex-col items-center text-white">
            <FaSpinner className="animate-spin text-6xl text-emerald-400" />
            <p className="mt-4 text-2xl font-semibold tracking-wide">
              Loading HawaHawai...
            </p>
            <p className="text-sm mt-1 text-gray-300">
              Your journey begins shortly!
            </p>
          </div>
        </div>
      )}

      <div className="flex min-h-screen font-sans">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-blue-900 text-white py-4 pt-1 pl-5 shadow-xl">
          <div className="flex items-start gap-4 px-4 pt-0 mt-0">
            <img
              src={logo}
              alt="HawaHawai Logo"
              className="h-24 w-24 object-contain drop-shadow-md"
            />
          </div>

          <nav className="flex flex-col gap-3 mt-6">
            {navItems.map(({ label, icon, link, external, action }) =>
              action === "logout" ? (
                <button
                  key={label}
                  onClick={() => {
                    signOut(auth)
                      .then(() => {
                        toast.success("🔒 Logged out successfully!", {
                          style: {
                            border: "1px solid #28a745",
                            padding: "16px",
                            color: "#155724",
                            backgroundColor: "#d4edda",
                            fontWeight: "bold",
                          },
                        });
                        handleNavigation("/login");
                      })
                      .catch((error) =>
                        toast.error("Logout failed: " + error.message)
                      );
                  }}
                  className="flex items-center gap-3 px-4 py-2 cursor-pointer rounded hover:bg-red-600/10 text-sm text-red-500 font-semibold transition"
                >
                  {icon}
                  <span>{label}</span>
                </button>
              ) : external ? (
                <Link
                  key={label}
                  to={link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link);
                  }}
                  className="flex items-center gap-3 px-4 py-2 rounded hover:bg-blue-800 text-sm transition"
                >
                  {icon}
                  <span>{label}</span>
                </Link>
              ) : (
                <button
                  key={label}
                  onClick={() => {
                    setActiveSection(label);
                  }}
                  className={`flex items-center gap-3 px-4 py-2 rounded text-sm transition cursor-pointer ${
                    activeSection === label
                      ? "bg-white text-blue-900 font-bold shadow-sm"
                      : "hover:bg-blue-800"
                  }`}
                >
                  {icon}
                  <span>{label}</span>
                </button>
              )
            )}
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col relative">
          <header className="bg-blue-900 text-white p-5 flex justify-between items-center shadow-md relative md:justify-between">
            <div className="flex-1 text-center font-bold text-lg tracking-wide hidden md:block">
              ✈️ Take your courier to fly with{" "}
              <span className="font-extrabold">HawaHawai</span>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => {
                  if (user) {
                    signOut(auth)
                      .then(() => {
                        toast.success(
                          "🔁 Please log in with another account!",
                          {
                            style: {
                              border: "1px solid #28a745",
                              padding: "16px",
                              color: "#155724",
                              backgroundColor: "#d4edda",
                              fontWeight: "bold",
                            },
                          }
                        );
                        sessionStorage.setItem("auth_origin", "login");
                        handleNavigation("/login");
                      })
                      .catch((err) =>
                        toast.error("Logout failed: " + err.message)
                      );
                  } else {
                    sessionStorage.setItem("auth_origin", "login");
                    handleNavigation("/login");
                  }
                }}
                className="flex items-center gap-2 h-9 px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-emerald-500 hover:text-black transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm"
              >
                <FaSignInAlt className="animate-pulse" />
                <span>Login</span>
              </button>

              <button
                onClick={() => {
                  if (user) {
                    toast("⚠️ You are already signed in!", {
                      icon: "⚠️",
                      style: {
                        background: "#fff3cd",
                        color: "#856404",
                        fontWeight: "bold",
                      },
                    });
                  } else {
                    sessionStorage.setItem("auth_origin", "signup");
                    handleNavigation("/signup");
                  }
                }}
                className="bg-white text-blue-900 font-semibold px-4 py-1.5 rounded-full shadow hover:bg-white/10 hover:text-white transition"
              >
                Sign Up
              </button>

              <Link
                to="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/contact");
                }}
                className="flex items-center gap-2 h-9 px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-emerald-500 hover:text-black transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm"
              >
                <FaPhone className="animate-pulse" />
                <span>Contact</span>
              </Link>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden flex justify-between w-full items-center px-4 py-3 bg-blue-900 shadow-lg rounded-b-xl">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 text-white shadow-lg"
              >
                {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>

              <span className="text-lg font-extrabold text-white tracking-wide drop-shadow-md">
                HawaHawai <span className="animate-pulse">🚀</span>
              </span>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/contact");
                }}
                className="flex items-center gap-1 text-sm font-semibold text-white hover:text-emerald-300 transition duration-300"
              >
                <FaPhone className="animate-pulse" />
                <span>Contact</span>
              </a>
            </div>
          </header>

          {mobileMenuOpen && (
            <nav className="absolute top-16 left-0 w-full bg-white shadow-md z-20 md:hidden animate-slide-in">
              <div className="flex flex-col p-4 gap-3 text-sm sm:text-base">
                {navItems.map(({ label, icon, link, external, action }) =>
                  action === "logout" ? (
                    <button
                      key={label}
                      onClick={() => {
                        signOut(auth)
                          .then(() => {
                            toast.success("🔒 Logged out successfully!", {
                              style: {
                                border: "1px solid #28a745",
                                padding: "16px",
                                color: "#155724",
                                backgroundColor: "#d4edda",
                                fontWeight: "bold",
                              },
                            });
                            handleNavigation("/login");
                          })
                          .catch((error) =>
                            toast.error("Logout failed: " + error.message)
                          );
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-3 p-2 rounded text-red-500 font-semibold hover:bg-red-50 transition"
                    >
                      {icon}
                      <span>{label}</span>
                    </button>
                  ) : external ? (
                    <Link
                      key={label}
                      to={link}
                      className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 text-gray-800 transition"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(link);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {icon}
                      <span>{label}</span>
                    </Link>
                  ) : (
                    <button
                      key={label}
                      onClick={() => {
                        setActiveSection(label);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 p-2 rounded transition ${
                        activeSection === label
                          ? "bg-blue-100 text-blue-900 font-semibold"
                          : "hover:bg-gray-100 text-gray-800"
                      }`}
                    >
                      {icon}
                      <span>{label}</span>
                    </button>
                  )
                )}

                <hr className="my-2 border-gray-300" />

                {!user ? (
                  <>
                    <Link
                      to="/login"
                      onClick={(e) => {
                        e.preventDefault();
                        sessionStorage.setItem("auth_origin", "login");
                        handleNavigation("/login");
                        setMobileMenuOpen(false);
                      }}
                      className="text-blue-900 font-semibold hover:underline px-2 py-1 transition"
                    >
                      Login
                    </Link>

                    <Link
                      to="/signup"
                      onClick={(e) => {
                        e.preventDefault();
                        sessionStorage.setItem("auth_origin", "signup");
                        handleNavigation("/signup");
                        setMobileMenuOpen(false);
                      }}
                      className="text-white bg-blue-900 text-center rounded-full px-4 py-2 shadow font-semibold hover:bg-blue-800 transition"
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      signOut(auth)
                        .then(() => {
                          toast.success("🔁 Switched account!", {
                            style: {
                              border: "1px solid #28a745",
                              padding: "16px",
                              color: "#155724",
                              backgroundColor: "#d4edda",
                              fontWeight: "bold",
                            },
                          });
                          handleNavigation("/login");
                        })
                        .catch((err) =>
                          toast.error("Failed to switch: " + err.message)
                        );
                      setMobileMenuOpen(false);
                    }}
                    className="text-orange-500 hover:text-orange-600 font-semibold text-left px-2 py-1 transition"
                  >
                    Switch Account
                  </button>
                )}
              </div>
            </nav>
          )}

          <section
            className="relative flex-grow flex justify-center items-center p-0 h-screen"
            style={{
              backgroundImage: `url(${trackBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/30 z-0" />
            {renderSection()}
          </section>
        </div>
      </div>
    </>
  );
};

export default Track;

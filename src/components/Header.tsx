import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/Logo.png"; // adjust path if needed

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const targetId = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth",
          });
        }
      }, 500);
    }
  }, [location]);

  const handleSmoothScroll = (targetId: string) => {
    setTimeout(() => {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const handleNavigation = (section: string) => {
  const normalized = section.toLowerCase().replace(/\s+/g, "-"); 
  if (location.pathname === "/") {
    handleSmoothScroll(`#${normalized}`);
  } else {
    navigate(`/#${normalized}`);
  }
};


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
        switch (e.key) {
          case "1":
            handleSmoothScroll("#home");
            break;
          case "2":
            handleSmoothScroll("#about");
            break;
          case "3":
            handleSmoothScroll("#services");
            break;
          case "4":
            handleSmoothScroll("#features");
            break;
          case "5":
            handleSmoothScroll("#faq");
            break;
          case "6":
            handleSmoothScroll("#contact");
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
      <div className="w-full max-w-[100vw] mx-auto px-6 flex justify-between items-center py-4">
        <Link
          to="/"
          className="flex items-center w-8 h-8 md:w-16 md:h-12 object-contain text-2xl md:text-3xl font-bold text-white hover:text-blue-600 transition-transform duration-300 hover:scale-110"
        >
          <img src={logo} alt="Logo" className="logo-image pt-2" />
          <span className="ml-3 text-lg md:text-2xl md:hidden lg:block">
            Hawa
            <span className="text-lg md:text-2xl text-green-600">Hawai</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {["home", "about", "features", "contact", "Our Team"].map((section) => (
              <button
                key={section}
                className="relative md:cursor-pointer text-gray-300 text-xl font-semibold transition-all duration-300 group hover:text-green-600"
                onClick={() => handleNavigation(section)}
                type="button"
              >
                <span className="inline-block transform group-hover:scale-125 group-hover:-translate-y-0.5 transition-transform">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-green-600 transition-all duration-300 group-hover:w-full group-hover:opacity-100 opacity-0"></span>
              </button>
            ))}
          </nav>

          <div className="relative">
            <input
              type="text"
              placeholder="Enter your pincode"
              className="px-4 py-2 pl-12 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 w-48 lg:w-64"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z"
              />
            </svg>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {/* Login and Signup Buttons */}
          {/* <div className="flex space-x-3">
            <button
              className="relative px-6 py-3 text-xl font-semibold border border-green-600 text-green-600 rounded-md overflow-hidden transition-all duration-300 group hover:bg-green-600 hover:text-white hover:shadow-lg"
              onClick={() => navigate("/login")}
              type="button"
            >
              <span className="absolute inset-0 w-full h-full bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative">Login</span>
            </button>

            <button
              className="relative px-6 py-3 text-xl font-semibold bg-green-600 text-white rounded-md overflow-hidden transition-all duration-300 group hover:bg-white hover:text-green-600 hover:shadow-lg"
              onClick={() => navigate("/signup")}
              type="button"
            >
              <span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
              <span className="relative z-10">Sign Up</span>
            </button>
          </div> */}

          <button
            className="relative px-6 py-3 text-lg font-bold text-white rounded-lg group bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 transition-all duration-300 ease-in-out flex items-center justify-center cursor-pointer shadow-lg transform hover:scale-105"
            onClick={() => navigate("/book")}
            type="button"
          >
            <span className="mr-3">Book a Session</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 transform group-hover:translate-x-2 transition-all duration-300 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
              <path d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z" />
            </svg>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition-all duration-300"></span>
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`p-2 transform transition-all duration-300 focus:outline-none ${
              mobileMenuOpen ? "rotate-180" : ""
            }`}
            title="Open Menu"
            type="button"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-8 h-8 text-white" />
            ) : (
              <Bars3Icon className="w-8 h-8 text-white" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-transperent bg-opacity-50 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-screen w-64 z-50 bg-white shadow-md rounded-[30px] transition-transform duration-500 ease-in-out transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } p-6`}
        >
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2"
            title="Close Menu"
            type="button"
          >
            <XMarkIcon className="w-8 h-8 text-black" />
          </button>

          <div className="relative w-full px-1 mt-12 mb-6">
            <input
              type="text"
              placeholder="Enter your pincode"
              className="w-full py-3 pl-14 pr-4 rounded-xl bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-green-600 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
              <path d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z" />
            </svg>
          </div>

          <nav className="flex flex-col space-y-6 mt-6">
            {["home", "about", "features","contact","Our Team"].map((section) => (
              <button
                key={section}
                className="text-gray-700 text-lg font-medium transition hover:text-green-600"
                onClick={() => {
                  handleNavigation(section);
                  setMobileMenuOpen(false);
                }}
                type="button"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>

          <div className="mt-8 space-y-4">
            {/* <button
              className="relative w-full px-6 py-3 text-xl font-semibold border border-green-600 text-green-600 rounded-md overflow-hidden transition-all duration-300 group hover:bg-green-600 hover:text-white hover:shadow-lg"
              onClick={() => navigate("/login")}
              type="button"
            >
              <span className="absolute inset-0 w-full h-full bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative">Login</span>
            </button>

            <button
              className="relative w-full px-6 py-3 text-xl font-semibold bg-green-600 text-white rounded-md overflow-hidden transition-all duration-300 group hover:bg-white hover:text-green-600 hover:shadow-lg"
              onClick={() => navigate("/signup")}
              type="button"
            >
              <span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
              <span className="relative z-10">Sign Up</span>
            </button> */}

            <button
              className="relative w-full px-6 py-3 text-xl font-semibold text-blue-600 transition-all duration-300 group hover:scale-105 transform transition duration-300 ease-in-out"
              onClick={() => navigate("/book")}
              type="button"
            >
              BOOKING
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

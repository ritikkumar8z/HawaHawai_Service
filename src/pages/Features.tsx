import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const featuresData = [
  {
    title: "Real-Time Tracking",
    description: "Monitor your parcels live with accurate location updates.",
  },
  {
    title: "Fast & On-Time Delivery",
    description: "Guaranteed timely deliveries, every single time.",
  },
  {
    title: "24/7 Customer Support",
    description: "Always available to assist with queries or updates.",
  },
  {
    title: "Affordable Rates",
    description: "Competitive pricing without compromising service quality.",
  },
  {
    title: "Easy Online Booking",
    description: "Book your shipment in just a few clicks.",
  },
  {
    title: "Secure Handling",
    description: "Your packages are handled with care and complete security.",
  },
  {
    title: "Flexible Scheduling",
    description: "Book pickups and deliveries that fit your timeline.",
  },
  {
    title: "Nationwide Coverage",
    description: "We deliver across cities, towns, and remote areas.",
  },
  
  {
    title: "Business Logistics Solutions",
    description: "Custom shipping plans for SMEs and enterprises.",
  },
  
];

export default function Features() {
  const [visibleCount, setVisibleCount] = useState(4);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .timeline-line-desktop {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 6px;
        height: 100%;
        z-index: 0;
        background: linear-gradient(to bottom, #34d399, #10b981);
        border-radius: 3px;
      }

      .dot {
        position: absolute;
        width: 42px;
        height: 42px;
        background-color: #111827;
        border: 5px solid white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        box-shadow: 0 0 16px #10b981;
        left: 50%;
        transform: translateX(-50%);
      }

      .dot::after {
        content: '';
        width: 16px;
        height: 16px;
        background-color: #10b981;
        border-radius: 9999px;
        box-shadow: 0 0 12px #10b981;
      }

      @media (max-width: 639px) {
        .timeline-line-desktop {
          display: none;
        }
        .dot {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const visibleFeatures = isMobile ? featuresData.slice(0, visibleCount) : featuresData;

  return (
    <section
      id="features"
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-green-50 to-green-100 dark:from-gray-950 dark:via-black dark:to-gray-900"
    >
      <div className="absolute inset-0 pointer-events-none opacity-10 blur-2xl bg-[radial-gradient(circle,rgba(34,197,94,0.3)_0%,transparent_70%)]" />

      <div className="max-w-4xl mx-auto text-center mb-20 z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white"
        >
          Our Delivery Promise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Discover the roots of our services and how we branch out with smarter
          logistics every step of the way.
        </motion.p>
      </div>

      <div className="relative max-w-6xl mx-auto z-10 px-2">
        <div
          className="timeline-line-desktop"
          style={{ height: `${featuresData.length * 220}px` }}
        />

        {visibleFeatures.map((feature, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 + index * 0.06 }}
              className={`relative mb-24 flex flex-col sm:flex-row items-center ${
                isLeft ? "sm:flex-row-reverse" : ""
              } ${!isMobile && index > 2 ? "hidden md:flex" : "flex"}`}
            >
              <div className="dot" style={{ top: "50%" }} />

              <div className="w-full sm:w-1/2 px-4">
                <div
                  className={`relative bg-white/90 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border border-green-200 dark:border-green-700 
                    rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group 
                    backdrop-blur-md ring-1 ring-green-200/30 dark:ring-green-400/20
                    ${isLeft ? "sm:ml-auto" : "sm:mr-auto"}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <FaCheckCircle className="text-green-500 text-2xl drop-shadow" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors duration-200">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}

        {isMobile && (
          <div className="text-center mt-8">
            <button
              onClick={() =>
                setVisibleCount((prev) =>
                  prev >= featuresData.length ? 4 : featuresData.length
                )
              }
              className="px-6 py-3 rounded-full text-white font-semibold bg-green-500 hover:bg-green-600 transition-all duration-300 shadow-md"
            >
              {visibleCount >= featuresData.length ? "Hide" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      className="relative w-full py-20 px-6 lg:px-24 bg-[url('/src/assets/images/about_page.png')] bg-cover bg-center bg-no-repeat"
      id="about"
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto text-white text-center"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-tight mb-6 tracking-tight">
          Delivering Speed with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-400">
            HawaHawai
          </span>{" "}
          Courier Solutions
        </h2>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          At HawaHawai, we don’t just move parcels — we move them fast. From local pickups to international deliveries, we combine speed, reliability, and real-time tracking to keep your world connected.
        </p>

        <ul className="space-y-4 text-base sm:text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto text-left">
          {[
            "🚀 Real-time GPS tracking & instant delivery updates",
            "🛡️ Guaranteed safe & on-time deliveries",
            "📦 2+ years serving businesses & individuals nationwide",
          ].map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="text-lime-400 text-xl">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-6">
          <Link
            to="/team"
            className="bg-gradient-to-r from-lime-400 to-green-400 text-black px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-lg rounded-xl font-bold shadow-md hover:scale-105 transition-transform"
          >
            Meet Our Couriers
          </Link>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/book"
              className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold border-2 rounded-xl shadow-md border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition-all duration-300"
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="flex items-center justify-center w-9 h-9 bg-lime-400 rounded-full"
              >
                <PhoneCall className="w-4 h-4 text-black" />
              </motion.span>
              Book A Pickup
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import { CheckCircle, MapPin, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";

// Import courier images
import man1 from "/src/assets/Teamates/man_1.png";
import man2 from "/src/assets/Teamates/man_2.png";
import man3 from "/src/assets/Teamates/man_3.png";
import man4 from "/src/assets/Teamates/man_4.png";
import man5 from "/src/assets/Teamates/man_5.png";
import man6 from "/src/assets/Teamates/man_6.png";
import man7 from "/src/assets/Teamates/man_7.png";
import man8 from "/src/assets/Teamates/man_8.png";
import man9 from "/src/assets/Teamates/man_9.png";

const couriers = [
  {
    name: "Arjun Singh",
    image: man1,
    role: "Senior Delivery Executive",
    rating: 4.9,
    reviews: 132,
    deliveries: 2500,
    skills: ["Metro Logistics", "Premium Shipments", "Safety-First"],
    bio: "Known for impeccable speed and safe handling of premium shipments in metro zones.",
  },
  {
    name: "Ravi Sharma",
    image: man2,
    role: "Express Route Specialist",
    rating: 4.8,
    reviews: 101,
    deliveries: 2150,
    skills: ["Time Critical", "Urban Delivery", "Traffic Optimization"],
    bio: "Masters the clock with timely deliveries, even during peak traffic hours.",
  },
  {
    name: "Vikram Patel",
    image: man3,
    role: "Rural Dispatch Coordinator",
    rating: 5.0,
    reviews: 160,
    deliveries: 2700,
    skills: ["Rural Routes", "Long-Distance", "Reliability"],
    bio: "Delivers across remote villages with a 100% success rate and unmatched dedication.",
  },
  {
    name: "Amit Joshi",
    image: man4,
    role: "Night-Shift Logistician",
    rating: 4.7,
    reviews: 88,
    deliveries: 1900,
    skills: ["Night Routes", "Secure Drops", "Efficiency"],
    bio: "Ensures your late-night orders are delivered before sunrise, without fail.",
  },
  {
    name: "Manoj Verma",
    image: man5,
    role: "Safety & Compliance Lead",
    rating: 4.9,
    reviews: 110,
    deliveries: 2100,
    skills: ["Safety Audits", "Parcel Checks", "Compliance"],
    bio: "Guarantees every parcel meets safety standards through rigorous checks.",
  },
  {
    name: "Siddharth Rao",
    image: man6,
    role: "Citywide Bike Dispatcher",
    rating: 4.6,
    reviews: 73,
    deliveries: 1600,
    skills: ["Eco-Delivery", "City Routes", "Bike Navigation"],
    bio: "Navigates dense city lanes with precision and eco-friendly e-bikes.",
  },
  {
    name: "Karan Thakur",
    image: man7,
    role: "Same-Day Delivery Expert",
    rating: 4.9,
    reviews: 145,
    deliveries: 2300,
    skills: ["Fast Delivery", "Customer Experience", "Time Efficiency"],
    bio: "Famed for lightning-fast deliveries and unbeatable customer service.",
  },
  {
    name: "Nikhil Desai",
    image: man8,
    role: "International Parcel Pro",
    rating: 4.8,
    reviews: 95,
    deliveries: 1800,
    skills: ["Customs Clearance", "Global Delivery", "Tracking"],
    bio: "Handles overseas shipments with deep customs knowledge and client transparency.",
  },
  {
    name: "Suresh Reddy",
    image: man9,
    role: "Heavy Goods Handler",
    rating: 4.7,
    reviews: 67,
    deliveries: 1400,
    skills: ["Heavy Lifting", "Fragile Handling", "Secure Packing"],
    bio: "Specialist in transporting large packages with professional care.",
  },
];

const MeetOurCouriers = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-green-950 pt-32 pb-28 px-6 lg:px-24 relative overflow-hidden">
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
        >
          🚚 Meet Our Elite Courier Force
        </motion.h2>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          More than delivery — we’re about reliability, safety, and smiles at
          every doorstep. Meet the team that ensures your packages arrive on
          time, every time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {couriers.map((courier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-lg hover:shadow-green-400/30 transition-all duration-300 overflow-hidden relative group"
            >
              <div className="overflow-hidden h-64">
                <img
                  src={courier.image}
                  alt={`Courier ${courier.name}`}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {courier.name}
                  </h3>
                  <span className="bg-green-600/20 text-green-300 px-3 py-1 text-xs rounded-full font-semibold">
                    ⭐ {courier.rating}
                  </span>
                </div>
                <p className="text-sm text-green-400 font-medium mb-1">
                  {courier.role}
                </p>
                <p className="text-gray-300 text-sm mb-3 italic">
                  "{courier.bio}"
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {courier.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-800/60 text-gray-100 px-3 py-1 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>
                    <Users className="inline mr-1 text-green-400" size={16} />
                    {courier.reviews} Reviews
                  </span>
                  <span>
                    <ShieldCheck
                      className="inline mr-1 text-green-400"
                      size={16}
                    />
                    {courier.deliveries.toLocaleString()} Deliveries
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={16} className="text-green-400" />
                  <span>Base: Metro City</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 animate-pulse">
                <div className="bg-gradient-to-r from-green-400 to-green-600 text-black text-xs px-2 py-1 rounded-full shadow font-bold">
                  Verified Pro
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-6"
          >
            Why Our Couriers Are Trusted Nationwide
          </motion.h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left text-md text-gray-300">
            {[
              "Trained in GPS routing, live tracking & route optimization",
              "Verified identities and comprehensive background checks",
              "Dedicated support during and after delivery",
              "Native speakers across regions for smoother communication",
              "98.7% on-time delivery rate across 14 cities",
              "Green delivery fleet: e-bikes, EVs, paperless processes",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-green-400 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/book"
            className="px-10 py-4 bg-green-500 text-black text-lg font-semibold rounded-xl shadow-lg hover:scale-105 hover:bg-green-400 transition-transform"
          >
            🚀 Book A Pickup Now
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white/10 border border-green-500 text-green-300 text-lg font-semibold rounded-xl shadow hover:scale-105 transition-transform"
          >
            🤝 Get Help or Talk to Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MeetOurCouriers;

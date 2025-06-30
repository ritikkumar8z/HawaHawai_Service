import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const features: { text: string; icon: string }[][] = [
  [
    {
      text: "Real-Time Package Tracking",
      icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    },
    {
      text: "Instant Delivery Notifications",
      icon: "https://cdn-icons-png.flaticon.com/512/1039/1039719.png",
    },
    {
      text: "Flexible Pickup Scheduling",
      icon: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
    },
    {
      text: "Live Fleet Monitoring",
      icon: "https://cdn-icons-png.flaticon.com/512/2356/2356935.png",
    },
    {
      text: "Secure Package Handling",
      icon: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
    },
  ],
  [
    {
      text: "Automated Delivery Routes",
      icon: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
    },
    {
      text: "Proof of Delivery System",
      icon: "https://cdn-icons-png.flaticon.com/512/943/943642.png",
    },
    {
      text: "E-commerce Platform Integration",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      text: "Multi-Courier Support",
      icon: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
    },
    {
      text: "Scheduled Delivery Management",
      icon: "https://cdn-icons-png.flaticon.com/512/864/864685.png",
    },
  ],
  [
    {
      text: "24/7 Customer Assistance",
      icon: "https://cdn-icons-png.flaticon.com/512/724/724664.png",
    },
    {
      text: "Instant Refund Processing",
      icon: "https://cdn-icons-png.flaticon.com/512/2910/2910763.png",
    },
    {
      text: "Real-Time ETA Updates",
      icon: "https://cdn-icons-png.flaticon.com/512/3514/3514491.png",
    },
    {
      text: "Automated SMS Alerts",
      icon: "https://cdn-icons-png.flaticon.com/512/189/189677.png",
    },
    {
      text: "Mobile App Support",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
    },
  ],
  [
    {
      text: "Digital Signature Capture",
      icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    },
    {
      text: "Route Optimization Engine",
      icon: "https://cdn-icons-png.flaticon.com/512/3602/3602145.png",
    },
    {
      text: "COD Collection Support",
      icon: "https://cdn-icons-png.flaticon.com/512/2276/2276931.png",
    },
    {
      text: "API for Enterprise Clients",
      icon: "https://cdn-icons-png.flaticon.com/512/4320/4320337.png",
    },
    {
      text: "Multi-Language UI",
      icon: "https://cdn-icons-png.flaticon.com/512/1107/1107953.png",
    },
  ],
  [
    {
      text: "Bulk Order Processing",
      icon: "https://cdn-icons-png.flaticon.com/512/1159/1159633.png",
    },
    {
      text: "Performance Analytics Dashboard",
      icon: "https://cdn-icons-png.flaticon.com/512/3305/3305788.png",
    },
    {
      text: "Warehouse Integration",
      icon: "https://cdn-icons-png.flaticon.com/512/2203/2203204.png",
    },
    {
      text: "Driver Activity Tracking",
      icon: "https://cdn-icons-png.flaticon.com/512/2972/2972885.png",
    },
    {
      text: "Geo-Fencing Notifications",
      icon: "https://cdn-icons-png.flaticon.com/512/854/854866.png",
    },
  ],
];

const InfiniteScrollRow = ({
  items,
  reverse,
}: {
  items: { text: string; icon: string }[];
  reverse?: boolean;
}) => {
  return (
    <div className="relative overflow-hidden w-full max-w-[1920px] mx-auto">
      <motion.div
        className="flex gap-8 min-w-full"
        initial={{ x: reverse ? "0%" : "-100%" }}
        animate={{ x: reverse ? "-100%" : "0%" }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...items, ...items].map((feature, index) => (
          <div
            key={index}
            className="flex items-center min-w-[385px] px-4 py-3 bg-white text-[15px] leading-[20px] font-medium text-gray-800 shadow-md rounded-xl border border-gray-200 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
          >
            <img src={feature.icon} alt="icon" className="w-8 h-8 mr-3" />
            {feature.text}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : 100));
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return <span className="text-green-600">{count}+</span>;
};

export default function Solutions() {
  return (
    <section
      className="bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black py-10 flex flex-col items-center gap-10 w-full text-gray-900 dark:text-white"
      id="blog"
    >
      <div className="w-full overflow-hidden flex pt-10">
        <motion.div
          className="flex whitespace-nowrap text-[5vw] md:text-[3vw] font-semibold opacity-40 tracking-wide"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
        >
          {Array(4)
            .fill(
              "🚚 On-Time. Every Time.   •   📍 Real-Time Tracking Available   •   🎯 Your Package, Our Priority"
            )
            .map((text, index) => (
              <span key={index} className="mx-12">
                {text}
              </span>
            ))}
        </motion.div>
      </div>

      <div className="text-center px-4">
        <h2 className="text-4xl md:text-4xl font-bold">
          <Counter /> Smart Logistics Features
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-2">
          Delivering more than just parcels – we offer robust, real-time, and
          automated logistics tools tailored to your courier business.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-[1920px] px-4">
        {features.map((row, index) => (
          <InfiniteScrollRow
            key={index}
            items={row}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}

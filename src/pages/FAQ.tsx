import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiChevronRight, FiCheckCircle } from "react-icons/fi";

const faqData = [
  {
    title: "What delivery options do you offer?",
    content:
      "We offer same-day, next-day, and scheduled deliveries—choose what fits your needs.",
  },
  {
    title: "How can I track my package in real-time?",
    content:
      "Track your parcel live via GPS using our dashboard or mobile app.",
  },
  {
    title: "Is my shipment insured?",
    content:
      "Yes, all shipments are insured by default. Extra coverage is available if needed.",
  },
  {
    title: "What if my package gets delayed or lost?",
    content:
      "Our team acts fast to resolve delays or losses and compensates as per policy.",
  },
  {
    title: "Do you deliver internationally?",
    content:
      "Yes, we handle global shipments with customs support and reliable partners.",
  },
  {
    title: "Can I set up recurring pickups?",
    content:
      "Yes, recurring pickups can be automated from your business dashboard.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="min-h-screen px-6 py-20 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left side with title and CTAs */}
        <div className="md:w-1/3 flex flex-col justify-center gap-12">
          <div>
            <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
              FAQ & Support
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Got questions? We're here to help with quick answers and expert
              support.
            </p>
          </div>

          <div className="space-y-6">
            <button
              onClick={() => navigate("/contact")}
              className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md transition"
            >
              Contact Support
            </button>

            <button
              onClick={() => navigate("/lets-talk")}
              className="w-full py-3 rounded-lg bg-transparent border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-semibold transition"
            >
              Get a Quote
            </button>
          </div>
        </div>

        {/* Right side FAQ list */}
        <div className="md:w-2/3 flex flex-col space-y-6">
          {faqData.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md cursor-pointer select-none`}
                onClick={() => toggleAccordion(index)}
              >
                {/* Question part */}
                <div className="flex items-center md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-gray-300 dark:border-gray-700">
                  <FiCheckCircle
                    className={`text-3xl flex-shrink-0 mr-4 transition-colors duration-300 ${
                      isActive ? "text-green-500" : "text-gray-400"
                    }`}
                  />
                  <h3
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      isActive ? "text-green-600 dark:text-green-400" : ""
                    }`}
                  >
                    {item.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: isActive ? 90 : 0 }}
                    className="ml-auto hidden md:block text-green-600 dark:text-green-400"
                  >
                    <FiChevronRight size={24} />
                  </motion.div>
                </div>

                {/* Answer part */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.3 }}
                      className="md:w-2/3 p-6 text-gray-700 dark:text-gray-300 border-t md:border-t-0 md:border-l border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-b-xl md:rounded-bl-none md:rounded-r-xl shadow-inner"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { ShieldCheck, Truck, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = {
  services: ['Same Day Delivery', 'Overnight Shipping', 'AI-Powered Tracking', 'International Dispatch', 'Eco-Friendly Routes', 'Drone Delivery'],
  company: ['About Us', 'Careers', 'Global Partners', 'Press Room', 'Investor Relations', 'Trust & Safety'],
  socials: [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn],
  badges: [
    { Icon: ShieldCheck, label: 'Secure' },
    { Icon: Truck, label: 'Fast' },
    { Icon: Lock, label: 'Private' },
  ]
};

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-tr from-[#0a0a1f] via-[#0b0b22] to-[#0f112e] text-white pt-32 px-6 sm:px-12 md:px-24 pb-20 overflow-hidden font-sans">
       <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[900px] h-[900px] bg-gradient-to-br from-cyan-500/20 via-purple-600/20 to-fuchsia-500/10 rounded-full blur-[200px] top-[-20%] left-[-10%] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-tl from-fuchsia-500/30 to-cyan-400/20 blur-[200px]" />
      </div>

       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20 pb-20 z-10">
         <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
          <h2 className="text-5xl md:text-3xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-400 to-fuchsia-500 whitespace-nowrap">
            HawaHawai
          </h2>
          <p className="text-sm text-gray-400 leading-loose">
            🚀 Revolutionizing delivery — lightning-fast, ultra-secure, and powered by AI. Welcome to the next era of logistics.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            {footerLinks.badges.map(({ Icon, label }, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow hover:shadow-fuchsia-500/20 transition duration-300">
                <Icon size={16} className="text-cyan-400" />
                <span className="text-xs text-white/90">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

         <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 gap-8 sm:col-span-2"
        >
          <div>
            <h4 className="text-xl font-bold text-cyan-400 mb-5">📦 Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {footerLinks.services.map((item, i) => (
                <li key={i} className="hover:text-white hover:translate-x-2 transition duration-200 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-fuchsia-400 mb-5">🏙️ Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {footerLinks.company.map((item, i) => (
                <li key={i} className="hover:text-white hover:translate-x-2 transition duration-200 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

         <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h4 className="text-xl font-bold text-cyan-400 mb-2 whitespace-nowrap">📨 Stay Updated</h4>
          <p className="text-sm text-gray-400">
            Get the latest logistics insights & promo offers — straight to your inbox.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-white/10 p-2 rounded-full border border-white/10 backdrop-blur-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent text-sm px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
            />
            <button type="submit" className="bg-gradient-to-r from-cyan-500 to-fuchsia-600 hover:opacity-90 px-5 py-2 rounded-full cursor-pointer text-sm font-semibold transition">
              Subscribe
            </button>
          </form>
          <div className="flex gap-3 pt-4">
            {footerLinks.socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="group p-3 bg-white/10 rounded-full hover:bg-gradient-to-br from-cyan-500 to-fuchsia-600 transition"
              >
                <Icon className="text-white group-hover:scale-125 transform transition" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

       <div className="text-center mt-12">
        <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 mb-4 rounded-full opacity-80" />
        <p className="text-xs text-gray-400">
          <span className="text-cyan-400">&copy; 2025 HawaHawai</span> — Designed with ❤️, built for tomorrow.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaRocket, FaHandshake, FaGlobe, FaLaptopCode, FaUsers } from 'react-icons/fa';
import { Link } from 'react-scroll';
// import { motion } from "framer-motion";

const ExploreMorePage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans overflow-x-hidden">
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center py-20 transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: 'url(https://t3.ftcdn.net/jpg/03/54/17/86/360_F_354178616_uSdqA6i1A1vkkskFPKOoxQOED0ZMIcn3.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-cover bg-center sm:hidden"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?q=80&w=3127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Mobile background image
          }}
        ></div>

        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative text-center z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-yellow-400 transform transition duration-500 ease-in-out hover:scale-110">
            Discover a World of Freelance Opportunities
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300 opacity-90">
            Find your next big project or your ideal freelancer, and experience seamless collaboration like never before.
          </p>

          <Link
            to="aboutUs"
            smooth={true}
            duration={500}  
            offset={-70}  
            className="inline-block text-lg text-blue-600 bg-yellow-500 py-3 px-8 rounded-full hover:bg-yellow-600 transition duration-300 transform hover:scale-110 cursor-pointer"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      <section id='aboutUs' className="relative py-25 md:py-48 px-8 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_0%,_rgba(0,0,0,0)_90%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            About Us
          </h3>
          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            We are redefining the freelance marketplace by seamlessly connecting top-tier professionals with businesses in need of expertise. Our **technology-driven** platform ensures secure, efficient, and high-quality collaborations.
          </p>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            With a growing global network of skilled freelancers, every project—**big or small**—is handled with unmatched professionalism, dedication, and innovation.
          </p>
          <a
            href="/about"
            className="mt-12 inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-blue-500/50 duration-300"
          >
            Learn More About Us
          </a>
        </div>
        <div className="absolute top-16 left-10 w-28 h-28 bg-blue-500 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-16 w-36 h-36 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-24 left-1/4 w-20 h-20 bg-cyan-400 rounded-full opacity-10 blur-2xl animate-pulse"></div>
      </section>


      <section className="relative bg-black text-white py-24 md:py-48 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,255,255,0.15)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wide">
            The Future Starts Here
          </h3>

          <p className="mt-8 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            We’re not just witnessing the future—we’re **building it.** A world where freelancing is **limitless, AI-powered, and borderless.**
          </p>

          <div className="relative mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="relative group">
              <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center text-3xl font-bold text-cyan-400 border border-cyan-500 shadow-lg shadow-cyan-500/50">
                2015
              </div>
              <p className="mt-4 text-lg text-gray-400">
                Freelancing was **challenging**. Scattered platforms, no AI-driven matching, and limited global reach.
              </p>
            </div>

            <div className="relative group">
              <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center text-3xl font-bold text-blue-400 border border-blue-500 shadow-lg shadow-blue-500/50">
                2025
              </div>
              <p className="mt-4 text-lg text-gray-400">
                Today, freelancing is **growing faster than ever.** AI, automation, and community-driven networks are reshaping opportunities.
              </p>
            </div>

            <div className="relative group">
              <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center text-3xl font-bold text-purple-400 border border-purple-500 shadow-lg shadow-purple-500/50">
                2035
              </div>
              <p className="mt-4 text-lg text-gray-400">
                A world where **work is 100% decentralized,** skills matter more than resumes, and AI matches the right talent instantly.
              </p>
            </div>
          </div>

          <a
            href="/about"
            className="mt-12 inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-cyan-500/50 duration-300"
          >
            Be Part of the Future
          </a>
        </div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-16 w-40 h-40 bg-blue-500 rounded-full opacity-15 blur-3xl animate-pulse delay-2000"></div>
      </section>


      <section id="OurServices" className="relative py-24 md:py-32 px-8 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 via-purple-700/30 to-pink-600/20 blur-3xl opacity-50"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-wide">
            Our <span className="text-blue-500">Services</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            We offer a wide range of high-quality services designed to help freelancers and businesses thrive.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="group relative flex flex-col items-center p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-blue-500">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <FaRocket className="text-7xl text-blue-400 mb-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
              <h4 className="text-2xl font-semibold text-white mb-4">Project Management</h4>
              <p className="text-lg text-gray-300 text-center leading-relaxed">
                Our platform provides powerful tools for managing and tracking projects from start to finish.
              </p>
            </div>

            <div className="group relative flex flex-col items-center p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-green-500">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-500/20 to-transparent opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <FaHandshake className="text-7xl text-green-400 mb-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
              <h4 className="text-2xl font-semibold text-white mb-4">Freelancer Matching</h4>
              <p className="text-lg text-gray-300 text-center leading-relaxed">
                Get matched with top freelancers using AI-driven technology to ensure the best fit.
              </p>
            </div>

            <div className="group relative flex flex-col items-center p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-yellow-500">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-500/20 to-transparent opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <FaUsers className="text-7xl text-yellow-400 mb-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
              <h4 className="text-2xl font-semibold text-white mb-4">Team Collaboration</h4>
              <p className="text-lg text-gray-300 text-center leading-relaxed">
                Collaborate effectively with freelancers and teams using our integrated communication tools.
              </p>
            </div>
          </div>

          <a
            href="/services"
            className="relative mt-12 inline-block text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
          >
            Explore Our Services
            <span className="absolute inset-0 bg-white opacity-10 rounded-full blur-md"></span>
          </a>
        </div>
      </section>




      <section className="relative py-24 md:py-32 px-8 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 via-purple-700/20 to-pink-600/10 blur-3xl opacity-50"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-wide">
            How <span className="text-purple-500">It Works</span>
          </h3>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Begin your freelance journey in 3 simple steps. No complicated setups, just seamless collaboration.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="group relative flex flex-col items-center text-center p-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-purple-500">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <FaLaptopCode className="text-7xl text-purple-400 mb-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
              <h4 className="text-2xl font-semibold text-white mb-4">Step 1: Sign Up</h4>
              <p className="text-lg text-gray-300 leading-relaxed">
                Create your profile effortlessly and join our vibrant community of freelancers and businesses.
              </p>
            </div>

            <div className="group relative flex flex-col items-center text-center p-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-green-500">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-500/20 to-transparent opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <FaGlobe className="text-7xl text-green-400 mb-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
              <h4 className="text-2xl font-semibold text-white mb-4">Step 2: Connect</h4>
              <p className="text-lg text-gray-300 leading-relaxed">
                Find the perfect freelancers or projects tailored to your expertise and needs.
              </p>
            </div>

            <div className="group relative flex flex-col items-center text-center p-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-yellow-500">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-500/20 to-transparent opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <FaUsers className="text-7xl text-yellow-400 mb-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
              <h4 className="text-2xl font-semibold text-white mb-4">Step 3: Collaborate</h4>
              <p className="text-lg text-gray-300 leading-relaxed">
                Work together, track progress, and achieve success with our built-in collaboration tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-25 px-8 bg-gray-900 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 via-purple-700/30 to-pink-600/20 blur-3xl opacity-50"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 tracking-wide">
            Start Your <span className="text-blue-400">Freelance Journey</span> Today
          </h3>
          <p className="text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Whether you're a freelancer or a business, it's time to unlock endless opportunities.
            Join our community and build your future with us.
          </p>
          <a
            href="/contact"
            className="relative inline-block text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
          >
            Join Now
            <span className="absolute inset-0 bg-white opacity-10 rounded-full blur-md"></span>
          </a>
        </div>
      </section>

    </div>
  );
};

export default ExploreMorePage;

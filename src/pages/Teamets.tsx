import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

// Images
import RitikImg from "../assets/Owners/RiTiK_45.png";
import TanmoyImg from "../assets/Owners/Tanmoy_2.png";
import MijanurImg from "../assets/Owners/mk.jpg";
import MainakImg from "../assets/Owners/Mainak.jpg";
import FathmaImg from "../assets/Owners/Fathma.jpg";
import SwapnilImg from "../assets/Owners/swapnil.jpg";

const TeamPage = () => {
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const teamMembers = [
    {
      name: "Ritik Kumar",
      role: "Web Developer",
      description: 
        "Dedicated web developer creating clean, fast, and impactful websites that deliver real value. Focused on quality, performance, and making every user interaction count.",

      image: RitikImg,
      linkedin:"https://www.linkedin.com/in/ritik-kumar-a40537263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/ritikkumar8z",
      twitter: "https://twitter.com/ritikkumar8z",
      instagram: "https://www.instagram.com/ritik.kumar8z/",
      facebook: "https://facebook.com/ritikkumar8z",
      portfolio: "https://astonishing-dolphin-2b9271.netlify.app/",
    },
    {
      name: "Mijanur Rahman",
      role: "Creative Designer & Content Strategist",
      description:
        "Designer, content creator, and visual storyteller with a strong eye for aesthetics and detail. Passionate about exploring trends and delivering engaging digital content.",
      image: MijanurImg,
      linkedin: "/not-found",
      github: "/not-found",
      twitter: "not-found",
      instagram:"https://www.instagram.com/mi_ja_nu_r?igsh=MWp0dDh0OWFreDYzdQ==",
      facebook: "/not-found",
      portfolio: "/not-found",
    },
    {
      name: "Fathma Kusar",
      role: "UI/UX Designer & Content Creator",
      description:
        "UI/UX Designer & Creative Strategist — I craft intuitive, user-centered designs and develop creative strategies that align visual experiences with project goals, ensuring both functionality and brand impact",
      image: FathmaImg,
      linkedin: "https://www.linkedin.com/in/fathma-kusar-456745256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "/not-found",
      twitter: "/not-found",
      instagram: "https://www.instagram.com/fathma_1012?igsh=MTdzNHVpbW5sYWhtZg==",
      facebook: "https://www.facebook.com/share/16D9oWMvVy/",
      portfolio: " https://fathmasayyedportfolio.my.canva.site/welcome-to-fathma-s-portfolio",
    },
    {
      name: "Tanmoy Mondal",
      role: "Software Engineer & Data Analyst",
      description:
        "Aspiring software engineer with a strong foundation in web development and a passion for creating impactful applications. Eager to contribute and grow in dynamic teams.",
      image: TanmoyImg,
      linkedin: "https://in.linkedin.com/in/tanmoy-mondal-544722269 ",
      github: "not-found",
      twitter: "/not-found",
      instagram:
        "https://www.instagram.com/tanmoy._mondal_official?igsh=MXU2bHp2MXQwbnd3bA==",
      facebook:
        "https://www.facebook.com/tanmoy.mondol.92?mibextid=rS40aB7S9Ucbxw6v",
      portfolio: "/not-found",
    },
    {
      name: "Swapnil Sarkar",
      role: "Tech Enthusiast & Cloud Learner",
      description:
        "BCA graduate exploring cloud technologies and modern software development. Known by all, brings enthusiasm and collaboration to every project.",
      image: SwapnilImg,
      linkedin: "/not-found",
      github: "/not-found",
      twitter: "/not-found",
      instagram:
        "https://www.instagram.com/lmaoitsswapnil?igsh=bDB2MnIzaWV1dnlh",
      facebook: " https://www.facebook.com/share/18v8vV19C5/ ",
      portfolio: "/not-found",
    },
    {
      name: "Mainak Saha ",
      role: "Automation Enthusiast & DevOps Learner",
      description:
        "BCA graduate passionate about DevOps, automation, and collaborative development. Friendly, well-known, and always ready to lend a hand.",
      image: MainakImg,
      linkedin: "/not-found",
      github: "/not-found",
      twitter: "/not-found",
      instagram: "https://www.instagram.com/mainakfilms?igsh=eHh2YzNkcHV5NWUx ",
      facebook: "/not-found",
      portfolio: "/not-found",
    },
  ];

  return (
    <section
      id="our-team"
      className="w-full min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-16"
        >
          Meet Our <span className="text-green-500">Core Team</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {teamMembers.map((member, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.02}
              transitionSpeed={1000}
              className="rounded-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 hover:border-green-400 rounded-3xl p-5 sm:p-6 shadow-xl hover:shadow-green-500/20 transition-all duration-500 group"
              >
                <div className="mb-4 w-full aspect-[4/3] flex items-center justify-center overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="max-h-full max-w-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-green-600 dark:text-green-400 hover:underline text-center">
                  <a href={member.portfolio} target="_blank" rel="noreferrer">
                    {member.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 text-center">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                  {member.description}
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-5">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:scale-125 hover:text-blue-400 transition-transform duration-300"
                    >
                      <FaLinkedin size={22} />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-800 dark:text-white hover:scale-125 hover:text-gray-400 transition-transform duration-300"
                    >
                      <FaGithub size={22} />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:scale-125 hover:text-blue-300 transition-transform duration-300"
                    >
                      <FaTwitter size={22} />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="text-pink-500 hover:scale-125 hover:text-pink-400 transition-transform duration-300"
                    >
                      <FaInstagram size={22} />
                    </a>
                  )}
                  {member.facebook && (
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-700 hover:scale-125 hover:text-blue-500 transition-transform duration-300"
                    >
                      <FaFacebook size={22} />
                    </a>
                  )}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;

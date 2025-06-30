import React from "react";
import { useNavigate } from "react-router-dom";

const ContactPage: React.FC<{ title: string; description: string; buttonText?: string; chatLink?: string }> = ({ title, description, buttonText, chatLink }) => {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-black text-white px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-700 opacity-20 animate-pulse" />
      
      <h1 className="text-5xl sm:text-6xl font-bold mb-6 relative z-10 animate-fade-in-up">{title}</h1>
      <p className="text-lg text-gray-300 max-w-2xl mb-6 relative z-10 animate-fade-in-up delay-200">{description}</p>
      
      {buttonText && (
        <button
          className="relative px-8 py-4 text-lg font-semibold bg-green-500 text-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 group hover:bg-white hover:text-green-500 hover:scale-105"
          onClick={() => chatLink ? navigate("/chatbot") : navigate("/contact-form")}
        >
          <span className="absolute left-0 w-0 bg-white h-full transition-all duration-300 group-hover:w-full opacity-10"></span>
          {buttonText}
        </button>
      )}
    </section>
  );
};

const ContactPages = () => {
  return (
    <>
      <ContactPage 
        title="Let's Chat" 
        description="Have questions? Need support? Chat with us and get instant assistance!" 
        buttonText="Start Chat" 
        chatLink="/chatbot" 
      />
    </>
  );
};

export default ContactPages;

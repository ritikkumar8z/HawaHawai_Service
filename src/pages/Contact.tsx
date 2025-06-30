import React, { useEffect } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject too short"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  useEffect(() => {
     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    return new Promise<void>((res) => {
      setTimeout(() => {
        toast.success(`Thank you, ${data.name}! Your message has been sent.`, {
          position: "bottom-center",
          autoClose: 5000,
        });
        reset();
        res();
      }, 1500);
    });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-700"
    >
      <AnimatedBackgroundShapes />

       <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 flex flex-col justify-center px-10 py-24 max-w-2xl mx-auto md:mx-0 md:px-16 z-10"
      >
        <h2 className="text-5xl font-extrabold mb-12 text-gray-900 dark:text-gray-50">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-10"
          noValidate
        >
          <FloatingInput
            id="name"
            label="Your Name"
            type="text"
            icon={<Mail />}
            {...register("name")}
            error={errors.name?.message}
          />
          <FloatingInput
            id="email"
            label="Your Email"
            type="email"
            icon={<Mail />}
            {...register("email")}
            error={errors.email?.message}
          />
          <FloatingInput
            id="subject"
            label="Subject"
            type="text"
            icon={<Send />}
            {...register("subject")}
            error={errors.subject?.message}
          />
          <FloatingTextarea
            id="message"
            label="Your Message"
            icon={<Send />}
            {...register("message")}
            error={errors.message?.message}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-cyan-500 text-black font-semibold rounded-full shadow-lg hover:bg-cyan-600 transition-colors cursor-pointer"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>

          {isSubmitSuccessful && (
            <p className="text-green-500 mt-4 font-semibold">Message sent!</p>
          )}
        </form>
      </motion.div>

       <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 bg-gradient-to-tr from-cyan-600 via-teal-500 to-cyan-700 text-white flex flex-col justify-center px-12 py-28 space-y-14 rounded-3xl shadow-2xl"
      >
        <h3 className="text-4xl font-bold text-center">Contact HawaHawai</h3>
        <p className="text-lg leading-relaxed max-w-md mx-auto text-center">
          Have questions about your courier or booking? We’re just a message or
          call away.
        </p>

        <div className="space-y-10">
          <ContactInfoItem icon={<Phone />} text="+91 1234 567 890" />
          <ContactInfoItem icon={<Mail />} text="contact@HawaHawai.com" />
          <ContactInfoItem icon={<MapPin />} text="123 Green Street, NY, USA" />
        </div>

        <div className="flex space-x-8 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="tel:+911234567890"
            className="flex-1 py-4 bg-white/20 rounded-lg text-center font-semibold hover:bg-white/40 transition-colors"
          >
            Call Us
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:contact@HawaHawai.com"
            className="flex-1 py-4 bg-white text-black rounded-lg text-center font-semibold hover:bg-gray-200 transition-colors"
          >
            Email Us
          </motion.a>
        </div>

        <SocialLinks />
      </motion.div>

      <ToastContainer />
    </section>
  );
}

function AnimatedBackgroundShapes() {
  return (
    <svg
      aria-hidden="true"
      className="fixed inset-0 -z-10 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <motion.circle
        cx="20%"
        cy="25%"
        r="200"
        fill="#14B8A6"
        opacity={0.15}
        animate={{ r: [180, 220, 180] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.circle
        cx="80%"
        cy="75%"
        r="300"
        fill="#0E7490"
        opacity={0.1}
        animate={{ r: [280, 320, 280] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
  );
}

function FloatingInput({
  id,
  label,
  icon,
  error,
  type,
  ...rest
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  error?: string;
  type: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative group">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-cyan-400">
        {icon}
      </div>
      <input
        id={id}
        type={type}
        placeholder=" "
        {...(error ? { "aria-invalid": true } : {})}
        className={`peer w-full py-4 pl-10 pr-4 border-b-2 bg-transparent text-gray-900 dark:text-gray-100 placeholder-transparent focus:outline-none transition-all ${
          error
            ? "border-red-500 focus:border-red-600"
            : "border-gray-300 dark:border-gray-600 focus:border-cyan-400"
        }`}
        {...rest}
      />

      <label
        htmlFor={id}
        className={`absolute left-10 top-4 text-sm transition-all
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500
          peer-focus:top-[-0.6rem] peer-focus:text-cyan-400 peer-focus:text-xs
          peer-not-placeholder-shown:top-[-0.6rem] peer-not-placeholder-shown:text-cyan-400 peer-not-placeholder-shown:text-xs
          ${
            error
              ? "text-red-500 peer-focus:text-red-600 peer-not-placeholder-shown:text-red-600"
              : "text-gray-500"
          }
        `}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

function FloatingTextarea({
  id,
  label,
  icon,
  error,
  ...rest
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="relative group">
      <div className="absolute top-3 left-3 flex items-start pointer-events-none text-cyan-400">
        {icon}
      </div>
      <textarea
        id={id}
        placeholder=" "
        rows={5}
        {...(error ? { "aria-invalid": true } : {})}
        className={`peer w-full py-4 pl-10 pr-4 border-b-2 bg-transparent text-gray-900 dark:text-gray-100 placeholder-transparent resize-none focus:outline-none transition-all ${
          error
            ? "border-red-500 focus:border-red-600"
            : "border-gray-300 dark:border-gray-600 focus:border-cyan-400"
        }`}
        {...rest}
      />

      <label
        htmlFor={id}
        className={`absolute left-10 top-4 text-sm transition-all
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500
          peer-focus:top-[-0.6rem] peer-focus:text-cyan-400 peer-focus:text-xs
          peer-not-placeholder-shown:top-[-0.6rem] peer-not-placeholder-shown:text-cyan-400 peer-not-placeholder-shown:text-xs
          ${
            error
              ? "text-red-500 peer-focus:text-red-600 peer-not-placeholder-shown:text-red-600"
              : "text-gray-500"
          }
        `}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

function ContactInfoItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white">
        {icon}
      </div>
      <p className="text-lg font-medium">{text}</p>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex space-x-6 mt-12 justify-center">
      {[
        { href: "https://facebook.com", label: "Facebook", icon: "facebook" },
        { href: "https://twitter.com", label: "Twitter", icon: "twitter" },
        { href: "https://linkedin.com", label: "LinkedIn", icon: "linkedin" },
      ].map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          whileHover={{ scale: 1.2, color: "#14B8A6" }}
          whileTap={{ scale: 0.9 }}
          className="text-white hover:text-cyan-300 transition-colors"
        >
          <i className={`fab fa-${social.icon} text-2xl`}></i>
        </motion.a>
      ))}
    </div>
  );
}

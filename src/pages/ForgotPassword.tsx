import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../pages/firebaseConfig";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Password reset email sent. Check your inbox.");
    } catch (error: any) {
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-gray-900/80 backdrop-blur-md border border-gray-700 shadow-xl rounded-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-green-500 text-center mb-6">
          Reset Your Password
        </h2>

        {message && (
          <p
            className={`text-center text-sm mb-4 ${
              message.includes("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleReset} className="space-y-6">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-transparent text-white border-2 border-gray-600 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          <a href="/login" className="text-green-400 hover:underline">
            Back to Login
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;

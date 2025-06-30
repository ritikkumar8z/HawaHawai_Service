import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import { auth } from "../pages/firebaseConfig";

import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaApple,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      setMessage("✅ Account created successfully!");
      navigate("/main");
    } catch (error: any) {
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthLogin = async (provider: string) => {
    let providerObj;
    switch (provider) {
      case "google":
        providerObj = new GoogleAuthProvider();
        break;
      case "facebook":
        providerObj = new FacebookAuthProvider();
        break;
      case "twitter":
        providerObj = new TwitterAuthProvider();
        break;
      case "github":
        providerObj = new GithubAuthProvider();
        break;
      case "apple":
        providerObj = new OAuthProvider("apple.com");
        break;
      default:
        return;
    }

    try {
      setLoading(true);
      await signInWithPopup(auth, providerObj);
      setMessage(`✅ ${provider} login successful!`);
      navigate("/main");
    } catch (error: any) {
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-gray-700"
      >
        <h2 className="text-3xl font-semibold text-center text-sky-500 mb-4 flex items-center justify-center gap-2">
          <span className="text-2xl">✈️</span>
          <span className="whitespace-nowrap">Join HawaHawai</span>
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

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-transparent text-white border-2 border-gray-600 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              required
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent text-white border-2 border-gray-600 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute top-3 right-4 text-xl text-gray-400 hover:text-green-400"
            >
              {passwordVisible ? "🙈" : "👁"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6 mb-3">
          Or sign up with
        </p>

        <div className="flex justify-center gap-4 text-2xl text-gray-400 mb-4">
          <button
            onClick={() => handleOAuthLogin("google")}
            className="hover:text-green-400 transition"
            title="Google"
          >
            <FaGoogle />
          </button>
          <button
            onClick={() => handleOAuthLogin("github")}
            className="hover:text-green-400 transition"
            title="GitHub"
          >
            <FaGithub />
          </button>
          <button
            onClick={() => handleOAuthLogin("facebook")}
            className="hover:text-green-400 transition"
            title="Facebook"
          >
            <FaFacebook />
          </button>
          <button
            onClick={() => handleOAuthLogin("twitter")}
            className="hover:text-green-400 transition"
            title="Twitter"
          >
            <FaTwitter />
          </button>
          <button
            onClick={() => handleOAuthLogin("apple")}
            className="hover:text-green-400 transition"
            title="Apple"
          >
            <FaApple />
          </button>
        </div>

        <p className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-green-400 hover:underline">
            Log in
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;

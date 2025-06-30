// src/pages/NotFound.tsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <h1 className="text-6xl font-extrabold text-green-500 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition-all duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
}

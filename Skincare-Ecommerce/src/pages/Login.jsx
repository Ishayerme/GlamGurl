import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaHeart } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(""); // State to hold the login message
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if the email and password match the admin credentials
    if (email === "admin@gmail.com" && password === "admin123") {
      setLoginMessage("Admin login successful! Redirecting to Admin Panel...");
      setTimeout(() => {
        navigate("/admin");
      }, 1000); // Redirect after 2 seconds to show the message
    }
    // Check for user login
    else if (email && password) {
      setLoginMessage("Login successful! Redirecting Cart...");
      setTimeout(() => {
        navigate("/cart");
      }, 1000); // Redirect after 2 seconds to show the message
    } else {
      setLoginMessage("Please enter valid credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md border border-pink-100">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-white mb-4">
            <FaHeart size={30} />
          </div>
          <h2 className="text-2xl font-bold text-purple-800">Welcome Back!</h2>
          <p className="text-pink-500 text-sm">Please login to continue</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 pl-10 pr-4 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50/50 placeholder-pink-400"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 pl-10 pr-4 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50/50 placeholder-pink-400"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Login
          </button>
        </div>

        {/* Show login message */}
        {loginMessage && (
          <div className="mt-4 text-center text-pink-600">
            <p>{loginMessage}</p>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="ml-1 text-pink-600 hover:text-pink-700">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

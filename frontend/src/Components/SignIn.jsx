import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import instance from '../Api/axios';
import { useNavigate } from "react-router-dom";
function SignIn() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // ✅ validation function
  const isFormValid = () => {
    const { email, password } = formData;

    if (!email.trim()) return false;
    if (!password.trim()) return false;

    return true;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setError("Please fill all required fields");
      return;
    }
    try {
      const res = await instance.post("/auth/signin", {
        email: formData.email,
        password: formData.password,
      });

      console.log("Sign in successful:", res.data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));  

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

    } catch (err) {
      setError(
        err.response?.data?.message || "Sign in failed. Please try again."
      );
    } 
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-6">
          Sign In
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="User Email"
            className="py-2.5 px-4 rounded-xl outline-none border border-white/30"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="py-2.5 px-4 rounded-xl outline-none border border-white/30"
          />

          {/* ✅ Error message */}
          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={!isFormValid()}
            className={`mt-3 text-white py-2.5 rounded-xl text-lg transition
              ${
                !isFormValid()
                  ? "bg-pink-300 cursor-not-allowed"
                  : "bg-pink-500 hover:bg-pink-600"
              }
            `}
          >
            Sign In
          </button>

          <Link
            to="/signup"
            className='flex justify-center items-center hover:text-blue-950'
          >
            Don't have an account? Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

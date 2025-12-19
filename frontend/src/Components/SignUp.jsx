import React, { useState } from "react";
import { Link } from 'react-router-dom';
import instance from "../Api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  // ✅ validation function
  const isFormValid = () => {
    const { username, email, password, confirmPassword } = formData;

    if (!username.trim()) return false;
    if (!email.trim()) return false;
    if (!password.trim()) return false;
    if (!confirmPassword.trim()) return false;
    if (password !== confirmPassword) return false;

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!isFormValid()) {
      setError("Please fill all required fields correctly");
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const res = await instance.post("/auth/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      //console.log("Sign up successful:", res.data);
      toast.success("Sign up successful! You can now sign in.");
      setTimeout(() => {
        navigate("/signin");
      }, 1500);

    } catch (err) {
      setError(
        err.response?.data?.message || "Sign up failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-6">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="User Name"
            className="py-2.5 px-4 rounded-xl outline-none border border-white/30 "
          />

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

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="py-2.5 px-4 rounded-xl outline-none border border-white/30"
          />

          {/* ✅ Error message */}
          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !isFormValid()}
            className={`mt-3 text-white py-2.5 rounded-xl text-lg transition
              ${
                loading || !isFormValid()
                  ? "bg-pink-300 cursor-not-allowed"
                  : "bg-pink-500 hover:bg-pink-600"
              }
            `}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          
          <Link to="/signin" className='flex justify-center items-center hover:text-blue-950'>
            have an account? Sign In
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

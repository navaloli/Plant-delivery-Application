import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Auth = () => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);  
  const [useOtp, setUseOtp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (location.state?.mode === "signup") setIsLogin(false);
    else setIsLogin(true);
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!useOtp && !formData.password)
      newErrors.password = "Password is required";

    if (!isLogin && !useOtp) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.confirmPassword)
        newErrors.confirmPassword = "Confirm Password is required";
      else if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (useOtp) {
        console.log("Send OTP to email:", formData.email);
      } else {
        console.log("Form submitted", formData);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-green-900 text-center mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <div className="flex gap-4 mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-100 transition cursor-pointer">
            <FaGoogle className="text-red-500" /> Google
          </button>
        </div>

        {isLogin && (
          <div className="text-center mb-4">
            <button
              onClick={() => setUseOtp(!useOtp)}
              className="text-green-700 font-semibold hover:underline"
            >
              {useOtp ? "Use Password Login" : "Login with OTP"}
            </button>
          </div>
        )}

        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && !useOtp && (
            <div>
              <label className="block mb-1 font-semibold">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border rounded-lg p-2 outline-none ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
          )}

          <div>
            <label className="block mb-1 font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded-lg p-2 outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {!useOtp && (
            <div>
              <label className="block mb-1 font-semibold">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full border rounded-lg p-2 outline-none ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
          )}

          {!isLogin && !useOtp && (
            <div>
              <label className="block mb-1 font-semibold">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full border rounded-lg p-2 outline-none ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          )}

          <button className="bg-green-700 text-white p-3 rounded-lg font-semibold hover:bg-green-800 transition mt-2">
            {useOtp ? "Send OTP" : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setUseOtp(false);
              setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              });
              setErrors({});
            }}
            className="text-green-700 font-semibold hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;

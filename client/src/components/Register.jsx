import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = ({ onOpen }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    onOpen(true);
  }, []);

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/register-user", data, {
        headers: { "Content-Type": "application/json" },
      });
      navigate("/login-page");
    } catch (error) {
      console.error("Failed to register the user with error", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div
        className="w-full max-w-md p-8 space-y-8 shadow-lg rounded-lg"
        style={{ backgroundColor: "#fdfdfd" }}
      >
        <h1 className="text-center text-4xl text-blue-600 font-bold mb-4">
          Register
        </h1>
        <div className="flex justify-center mb-8">
          <img
            src="https://i.pinimg.com/originals/a7/12/3a/a7123a124ba35c74c421e1678e2bb677.gif" // Rocket GIF URL
            alt="Rocket"
            className="h-32 w-32"
          />
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              className="h-12 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="fullName"
              id="fullName"
              value={data.fullName}
              onChange={handleChange}
              placeholder="Full Name"
            />
          </div>
          <div className="relative">
            <input
              className="h-12 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="relative">
            <input
              className="h-12 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
              type="password"
              name="password"
              id="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <button
            className="h-12 w-full bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 transition duration-300 mt-4"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

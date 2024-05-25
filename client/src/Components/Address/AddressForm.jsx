// src/AddressForm.js
import React, { useState } from "react";
import axios from "axios";

const AddressForm = () => {
  const SERVER_URL = "http://localhost:5000";
  const [formData, setFormData] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${SERVER_URL}/api/auth/address`,
        formData,
        {
          withCredentials: true, // to send cookies with the request
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMessage("* Address updated successfully");
      console.log(response.data);
    } catch (error) {
      setMessage("Failed to update address");
      console.error("Error updating address:", error);
    }
  };

  return (
    <div className="h-screen flex items-center w-full">
      <form
        onSubmit={handleSubmit}
        className="w-1/4 min-w-96 mx-auto p-8 bg-white shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="street"
            className="block text-gray-700 font-bold mb-1"
          >
            Street
          </label>
          <input
            type="text"
            name="street"
            id="street"
            value={formData.street}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-bold mb-1">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block text-gray-700 font-bold mb-1">
            State
          </label>
          <input
            type="text"
            name="state"
            id="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="zip" className="block text-gray-700 font-bold mb-1">
            Zip
          </label>
          <input
            type="text"
            name="zip"
            id="zip"
            value={formData.zip}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-gray-700 font-bold mb-1"
          >
            Country
          </label>
          <input
            type="text"
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="flex items-center justify-center mt-2 flex-col">
          <button
            type="submit"
            className="bg-lime-600 mx-auto w-2/5 hover:bg-green-700 text-white font-bold py-2 px-14  rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
        {message && (
          <p className="mt-4 text-center text-green-500">{message}</p>
        )}
      </form>
    </div>
  );
};

export default AddressForm;

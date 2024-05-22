import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import LoadingSpinner from "../LoadingSpinner";

function Contact() {
  const form = useRef();
  const navigate = useNavigate();
  const path = `/ContactSubmitted`;
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form.current); // Create FormData object from the form
    const name = formData.get("user_name"); // Accessing the value of the name input field
    const email = formData.get("user_email"); // Accessing the value of the email input field
    const message = formData.get("message"); // Accessing the value of the message textarea
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_if8h6ca",
        "template_sqrv4nv",
        form.current,
        "GyIxGuJKszHiA5GgB",
        { user_name: name, user_email: email, message: message }
      );
      console.log("Email sent successfully!");
      setLoading(false);
      navigate(path);
      if (form.current) { // Check if form.current is not null
        form.current.reset();
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setLoading(false);
      alert("Failed to send email. Please try again later.");
    }
  };

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="min-h-screen flex flex-col justify-evenly items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md border-2 border-green-100">
        <h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          Have questions or feedback? Feel free to reach out to us. We would
          love to hear from you!
        </p>

        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label
              htmlFor="user_name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="user_email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="capitalize w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="mt-8 flex justify-center items-center space-x-6">
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-green-500 text-3xl"
          />
          <a href="mailto:CropCompass@connect.com">
            <p className="text-gray-700 mt-2">CropCompass@connect.com</p>
          </a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon
            icon={faPhoneAlt}
            className="text-green-500 text-3xl"
          />
          <a href="tel:+91 1234 567 890">
            <p className="text-gray-700 mt-2">+91 1234 567 890</p>
          </a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-green-500 text-3xl"
          />
          <p className="text-gray-700 mt-2">
            CropCompass Headquarters, Bankura, India
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

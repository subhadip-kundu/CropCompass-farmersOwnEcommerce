import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "animate.css/animate.min.css";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const returnHome = () => {
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-100 via-cyan-100 to-purple-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center animate__animated animate__fadeIn animate__delay-1s">
        <div className="relative inline-block animate-spin-once">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-green-500 text-6xl "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 text-6xl animate__animated animate__zoomIn"
            />
          </div>
        </div>
        <h1 className="mt-5 text-3xl font-bold text-gray-800 animate__animated animate__fadeInUp">
          Submission Successful!
        </h1>
        <p className="mt-3 text-lg text-gray-600 animate__animated animate__fadeInUp animate__delay-1s">
          Thank you for your submission. We have received your information and
          will process it shortly.
        </p>
        <button
          onClick={returnHome}
          className="mt-6 px-5 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 animate__animated animate__pulse animate__delay-2s"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Success;

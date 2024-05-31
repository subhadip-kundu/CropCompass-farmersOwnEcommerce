import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import 'animate.css/animate.min.css';

const PleaseLogin = () => {
    const goHome = () => {
      window.location.href = '/register';
    };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-200 via-cyan-300 to-pink-200">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center animate__animated animate__fadeIn animate__delay-1s">
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          className="text-red-500 text-6xl animate__animated animate__flash animate__infinite"
        />
        <h1 className="mt-5 text-3xl font-bold text-gray-800 animate__animated animate__fadeInDown">
          Please Log In
        </h1>
        <p className="mt-3 text-lg text-gray-600 animate__animated animate__fadeInDown animate__delay-1s">
          You need to log in to access this page.
        </p>
        <button onClick={goHome} className="mt-6 px-5 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 animate__animated animate__pulse animate__infinite">
          Log In
        </button>
      </div>
    </div>
  );
};

export default PleaseLogin;

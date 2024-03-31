import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md border-2 border-green-100">
        <h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
        <p className="text-gray-700 mb-6">Have questions or feedback? Feel free to reach out to us. We would love to hear from you!</p>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
            <input type="text" id="name" name="name" className="capitalize w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500" placeholder="Enter your name" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500" placeholder="Enter your email" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500" placeholder="Write your message here" required></textarea>
          </div>
          <button type="submit" className="capitalize w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">Send Message</button>
        </form>
      </div>
      <div className="mt-8 flex justify-center items-center space-x-6">
        <div className='flex flex-col justify-center items-center'>
          <FontAwesomeIcon icon={faEnvelope} className="text-green-500 text-3xl" />
          <a href="mailto:Agroconnect@connect.com"><p className="text-gray-700 mt-2">Agroconnect@connect.com</p></a>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <FontAwesomeIcon icon={faPhoneAlt} className="text-green-500 text-3xl" />
          <a href="tel:+91 1234 567 890"><p className="text-gray-700 mt-2">+91 1234 567 890</p></a>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-500 text-3xl" />
          <p className="text-gray-700 mt-2">Agroconnect Headquarters, Bankura, India</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
Contact
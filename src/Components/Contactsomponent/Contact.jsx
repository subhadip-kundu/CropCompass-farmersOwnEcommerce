import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    const name = form.current.user_name.value; // Accessing the value of the name input field
    const email = form.current.user_email.value; // Accessing the value of the email input field
    const message = form.current.message.value; // Accessing the value of the message textarea
  
    emailjs
      .sendForm('service_tcp86zm', 'template_ldoqx2p', form.current, 'B_7NephVlmZWB5jIp' , {
        user_name: name,
        user_email: email,
        message: message
      })
      .then(
        (result) => {
          console.log(result.text);
          alert('Email sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send email. Please try again later.');
        }
      );
  };
  
    
    // .sendForm('service_tcp86zm', 'template_ldoqx2p', form.current, 'B_7NephVlmZWB5jIp')
  

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md border-2 border-green-100">
        <h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
        <p className="text-gray-700 mb-6">Have questions or feedback? Feel free to reach out to us. We would love to hear from you!</p>

        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label htmlFor="user_name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input type="text" id="user_name" name="user_name" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500" placeholder="Enter your name" required />
          </div>
          <div className="mb-4">
            <label htmlFor="user_email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="user_email" name="user_email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500" placeholder="Enter your email" required />
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
          <a href="mailto:CropCompass@connect.com"><p className="text-gray-700 mt-2">CropCompass@connect.com</p></a>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <FontAwesomeIcon icon={faPhoneAlt} className="text-green-500 text-3xl" />
          <a href="tel:+91 1234 567 890"><p className="text-gray-700 mt-2">+91 1234 567 890</p></a>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-500 text-3xl" />
          <p className="text-gray-700 mt-2">CropCompass Headquarters, Bankura, India</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;


{/* <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
            <input type="text" id="name" name="name" className="capitalize w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500" placeholder="Write your message here" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="capitalize w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">Send Message</button>
        </form> */}
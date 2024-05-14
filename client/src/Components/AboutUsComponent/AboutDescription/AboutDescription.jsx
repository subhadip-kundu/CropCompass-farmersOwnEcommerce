import React from 'react';
import image1 from '../../../assets/Farmer-image-college-1.jpg';
import image2 from '../../../assets/Farmer-image-college-2.jpg';
import image3 from '../../../assets/Farmer-image-college-3.jpg';
import image4 from '../../../assets/Farmer-image-college-4.webp';

const images = [image1, image2, image3, image4];

function AboutDescription() {
  return (
    <div className='flex flex-col items-center justify-center font-Rubik'>
      <div className="container">
        <h2 className='text-lg  text-center first-letter:text-teal-600 first-letter:text-2xl mt-8'>
          Embarking on a mission to create the ultimate hub for organic agriculture, we're cultivating a community that harmonizes premium products with farmer empowerment and health consciousness. Join us in crafting a greener, healthier world as we celebrate the synergy between sustainable farming, farmer well-being, and exceptional organic offerings.
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-6 px-10 m-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-md">
              <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutDescription;

import React from 'react';
import './Page404.css'

const Page404 = () => {
  return (
    <main className="bg-blue-900 py-8 flex flex-col items-center justify-center text-white font-sans font-Rubik">
      <h1 className="text-3xl md:text-5xl mb-8 uppercase">Error 404. The page does not exist</h1>
      <p className="max-w-lg mb-8">Sorry! The page you are looking for cannot be found. Perhaps the page you requested was moved or deleted. It is also possible that you made a small typo when entering the address. Go to the main page.</p>
      <div className="relative w-full max-w-md flex justify-center items-center">
        <img src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/cloud_warmcasino.png?raw=true" alt="cloud_warmcasino.png" className="w-2/3 " />
        <div className="absolute top-12 left-16 animate-el1">
          <img src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/404-1.png?raw=true" alt="404-1" className="w-24 h-32" />
        </div>
        <div className="absolute top-10 left-32 animate-el2">
          <img src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/404-2.png?raw=true" alt="404-2" className="w-40 h-28" />
        </div>
        <div className="absolute top-12 left-44 animate-el3">
          <img src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/404-3.png?raw=true" alt="404-3" className="w-52 h-32" />
        </div>
      </div>
      <a href="/" className="bg-orange-500 text-white px-6 py-3 rounded-full text-md uppercase mt-8 hover:bg-orange-600 transition-colors duration-300 ease-in-out">Go Home</a>
    </main>
  );
}

export default Page404;

import React from 'react';
import {Link} from 'react-router-dom';
const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/175711/pexels-photo-175711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Cafe Bliss</h1>
        <p className="text-lg md:text-xl mb-6">
          Reserve your perfect table and enjoy cozy moments with coffee & conversation.
        </p>
       <Link
  to="/reservation-form"
  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 inline-block text-center"
>
  Reserve Now
</Link>
      </div>
    </div>
  );
};

export default Hero;

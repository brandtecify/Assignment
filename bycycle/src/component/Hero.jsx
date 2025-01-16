import React from "react";
import Card from "./Card";
import FooterElement from "./FooterElement";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="relative bg-primary min-h-screen">
      <Navbar />
      <section
        id="home"
        className="flex items-center justify-between min-h-screen text-center px-4 ml-8"
      >
        {/* Left Side Content */}
        <div className="flex flex-col items-start justify-center text-white w-1/2">
          <h1 className="text-6xl font-bold mb-4">
            Welcome to Our <br /> Bicycle Store
          </h1>
          <p className="text-lg mb-6">
            Find the best bicycles tailored to your needs
          </p>
          <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg shadow-md hover:bg-gray-100">
            Explore Now
          </button>
        </div>

        {/* Right Side - Image Centered */}
        <div className="flex items-center justify-center w-1/2 mb-12">
          <img
            src="https://via.placeholder.com/400" // Replace with your image URL
            alt="Bicycle Image"
            className="object-contain w-full max-w-lg" // Ensures image fits and stays centered
          />
        </div>

        <Card/>
      </section>

      {/* Footer Element Fixed at the Bottom */}
      <FooterElement />
    </div>
  );
};

export default HeroSection;

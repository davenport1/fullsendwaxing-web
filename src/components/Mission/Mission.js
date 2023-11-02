import React from "react";

const Mission = () => {
  return (
    <section className="bg-slate-700 text-white py-16 shadow-xl rounded-xl m-8 transition duration-300 transform hover:scale-105">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
        <p className="text-lg mb-12 mx-12">
          At Full Send Waxing, we're dedicated to providing top-quality waxing services to enhance your snowboarding experience. Our team of experts is committed to using the best products and techniques to ensure your board performs at its best. We believe in helping you achieve the ultimate ride down the slopes.
        </p>
        <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full font-semibold text-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Mission;
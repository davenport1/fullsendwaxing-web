'use client'
import React from "react";
import { useRouter } from "next/navigation";

const Mission = () => {
  const route = useRouter();

  function NavigateToMission() {
    route.push('/mission');
  }


  return (
    <section className="bg-slate-700 text-white py-16 shadow-xl rounded-xl m-8 transition duration-300 transform hover:scale-105">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
        <p className="text-lg mb-12 mx-12">
        We're on a mission to redefine your snowboarding and skiing experience, 
        blending expertise with a laid-back vibe. 
        Our custom waxing and repair services not only elevate your gear's performance but also pay homage to our mountain havens.
        </p>
        <button onClick={NavigateToMission}
        className="bg-slate-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full font-semibold text-lg">Learn More</button>
      </div>
    </section>
  );
};

export default Mission;
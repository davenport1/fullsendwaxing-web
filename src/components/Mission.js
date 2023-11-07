'use client'
import React from "react";
import { useRouter, usePathname } from "next/navigation";

const Mission = () => {
  const route = useRouter();
  const pathname = usePathname();

function isMission() {
  return pathname.includes('mission');
}

  function NavigateToMission() {
    route.push('/mission');
  }


  return (
    <div>
    <section className=" bg-slate-700 text-white py-4 sm:py-8 md:py-16 shadow-xl rounded-xl sm:m-2 md:m-8 transition duration-300 transform hover:scale-105">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 md:mb-16 lg:mb-32">Our Mission</h2>
        <p className="text-lg m-2 md:m-16 lg:m-32 xl:m-64">
        We're on a mission to redefine your snowboarding and skiing experience, 
        blending expertise with a laid-back vibe. 
        Our custom waxing and repair services not only elevate your gear's performance but also pay homage to our mountain havens.
        </p>
        {!isMission() &&
                <button onClick={NavigateToMission}
                className="bg-slate-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full font-semibold text-lg">Learn More</button>
        }
      </div>
    </section>
    {isMission() &&
    <section className=" bg-slate-700 text-white py-4 sm:py-8 md:py-16 shadow-xl rounded-xl sm:m-2 md:m-8 transition duration-300 transform hover:scale-105">
        <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 md:mb-16 lg:mb-32">Our Mission</h2>
        <p className="text-lg m-2 md:m-16 lg:m-32 xl:m-64">
        We're on a mission to redefine your snowboarding and skiing experience, 
        blending expertise with a laid-back vibe. 
        Our custom waxing and repair services not only elevate your gear's performance but also pay homage to our mountain havens.
        </p>
        </div>
    </section>
    }
    </div>
  );
};

export default Mission;
import React from 'react';
import Image from "next/legacy/image";
import closebest from '../../public/closebest.jpg';
import edgework from '../../public/edgework1.jpg';

const About = () => {
  return (
    <section className="bg-slate-700 text-white py-8 md:py-16 shadow-xl rounded-xl m-4 md:m-8 flex flex-col md:flex-row items-center transition duration-300 transform hover:scale-105">
      <div className="container mx-auto text-center flex-1 mb-8 md:mb-0 md:mr-8">
        <h2 className="text-3xl font-bold mb-4 md:mb-8">About Us</h2>
        <div className="mb-8 md:ml-8 md:mr-4"> {/* Adjusted margin for mobile */}
          <p className="text-lg">
            Our story kicks off with a heartfelt love for snow sports and a profound respect for the mountain landscapes. 
            We've finely tuned our skills to become your ultimate choice for snowboard and ski maintenance. 
            Our commitment to excellence fuels our attention to the nitty-gritty, tailored to your unique style. 
          </p>
        </div>
        <div className="mb-8 md:ml-8 md:mr-4"> {/* Adjusted margin for mobile */}
          <p className="text-lg">
            Plus, we're eco-warriors at heart, rocking biodegradable waxes to keep our mountain playgrounds as fresh as the powder you love. 
            And guess what? We've got your back, offering pickup and delivery right to your doorstep, wherever you're hanging out. 
            Join us in safeguarding the mountains we cherish while experiencing the very best of snowboarding and skiing.
          </p>
        </div>
      </div>
      <div className="flex flex-col mx-auto m-4 md:m-0"> {/* Centered and adjusted margin */}
        <div className="relative w-60 h-60 rounded-3xl overflow-hidden mb-4"> {/* Added margin bottom */}
          <Image src={closebest} fill="true" objectFit="cover" alt="Founder Alec Emery waxing a libtech orca" />
        </div>
        <div className="relative w-60 h-60 rounded-3xl overflow-hidden"> {/* No margin for the last image */}
          <Image src={edgework} fill="true" objectFit="cover" alt="Founder Alec Emery tuning edges" />
        </div>
      </div>
    </section>
  );
}

export default About;

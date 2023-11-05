import React from 'react';
import Image from "next/legacy/image";
import closebest from '../../public/closebest.jpg';
import edgework from '../../public/edgework1.jpg';

const About = () => {
  return (
    <section className="bg-slate-700 text-white py-16 shadow-xl rounded-xl m-8 flex items-center transition duration-300 transform hover:scale-105">
      <div className="container mx-auto text-center flex-1">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <div>
        <p className="text-lg mb-12 ml-8 mr-4">
        Our story kicks off with a heartfelt love for snow sports and a profound respect for the mountain landscapes. 
        We've finely tuned our skills to become your ultimate choice for snowboard and ski maintenance. 
        Our commitment to excellence fuels our attention to the nitty-gritty, tailored to your unique style. 
        </p>
        </div>
        <div>
        <p className="text-lg mb-12 ml-8 mr-4">
        Plus, we're eco-warriors at heart, rocking biodegradable waxes to keep our mountain playgrounds as fresh as the powder you love. 
        And guess what? We've got your back, offering pickup and delivery right to your doorstep, wherever you're hanging out. 
        Join us in safeguarding the mountains we cherish while experiencing the very best of snowboarding and skiing.
        </p>
        </div>
      </div>
      <div className="flex flex-col m-8">
        <div className="relative w-60 h-60 rounded-3xl overflow-hidden m-4">
          <Image src={closebest} fill="true" objectFit="cover" alt="Founder Alec Emery waxing a libtech orca" />
        </div>
        <div className="relative w-60 h-60 rounded-3xl overflow-hidden m-4">
          <Image src={edgework}  fill="true" objectFit="cover" alt="Founder Alec Emery tuning edges" />
        </div>
      </div>
    </section>
  );
}

export default About;
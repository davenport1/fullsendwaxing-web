import React from 'react';
import Image from 'next/image';
import closebest from '../../../public/closebest.jpg';
import edgework from '../../../public/edgework1.jpg';

const About = () => {
  return (
    <section className="bg-slate-700 text-white py-16 shadow-xl rounded-xl m-8 flex items-center">
      <div className="container mx-auto text-center flex-1">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <p className="text-lg mb-12 mx-10">
          Meet our founder and snowboarding enthusiast, Alec Emery. 
          With a passion for snow sports and years of experience, 
          Alec decided to open Full Send Waxing to provide the best waxing services for fellow riders. 
          His dedication to quality and attention to detail ensures that your board will always perform at its peak.
        </p>
      </div>
      <div className="flex flex-col m-8">
        <div className="relative w-60 h-60 rounded-3xl overflow-hidden shadow-xl m-4">
          <Image src={closebest} layout="fill" objectFit="cover" alt="John Doe" />
        </div>
        <div className="relative w-60 h-60 rounded-3xl overflow-hidden shadow-xl m-4">
          <Image src={edgework}  layout="fill" objectFit="cover" alt="Team" />
        </div>
      </div>
    </section>
  );
}

export default About;
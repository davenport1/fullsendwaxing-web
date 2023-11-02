import React from 'react';
import Image from 'next/image';
import closebest from '../../../public/closebest.jpg';
import edgework from '../../../public/edgework1.jpg';

const Tuning = () => {
  return (
    <section className="bg-slate-700 text-white py-16 shadow-xl rounded-xl m-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Tuning Services</h2>
        <p className="text-lg mb-12">
          Meet our founder and snowboarding enthusiast, Alec Emery. 
          With a passion for snow sports and years of experience, 
          Alec decided to open Full Send Waxing to provide the best waxing services for fellow riders. 
          His dedication to quality and attention to detail ensures that your board will always perform at its peak.
        </p>
        <div className="flex justify-center space-x-8">
          <div className="relative w-40 h-40 rounded-full overflow-hidden">
            <Image src={closebest} layout="fill" objectFit="cover" alt="John Doe" />
          </div>
          <div className="relative w-40 h-40 rounded-full overflow-hidden">
            <Image src={edgework}  layout="fill" objectFit="cover" alt="Team" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tuning;
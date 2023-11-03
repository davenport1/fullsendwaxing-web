'use client'
import React from 'react';
import Image from "next/legacy/image";
import closebest from '../../public/closebest.jpg';
import edgework from '../../public/edgework1.jpg';
import { useRouter } from 'next/navigation';

const Tuning = () => {
  const router = useRouter();

  function handleClickServices() {
    router.push('/services');
  }

  return (
    <section className="bg-slate-700 text-white py-16 shadow-xl rounded-xl m-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Tuning Services</h2>
        <p className="text-lg mb-12 mx-16">
        We're all about delivering next-level expertise with a commitment to eco-friendliness. Our convenient pick-up and delivery service brings top-notch gear and service right to your doorstep, wherever you are. 
        Join us in supporting snow sports excellence and preserving the beauty of our beloved mountains. Let's ride, and make the mountain experience yours, no matter where you call home!
        </p>
        <div className="flex justify-center space-x-8">
          <div className="relative w-40 h-40 rounded-full overflow-hidden">
            <Image src={closebest} fill="true" objectFit="cover" alt="tuning img" />
          </div>
          <div className="relative w-40 h-40 rounded-full overflow-hidden">
            <Image src={edgework}  fill="true" objectFit="cover" alt="tuning img" />
          </div>
        </div>
        <button onClick={handleClickServices}
        className="bg-slate-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full font-semibold text-lg">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Tuning;
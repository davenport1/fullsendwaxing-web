'use client'
import React from 'react';
import Image from "next/legacy/image";
import closebest from '../../public/closebest.jpg';
import edgework from '../../public/edgework1.jpg';
import { useRouter } from 'next/navigation';

const Repairs = () => {
  const router = useRouter();

  function handleClickServices() {
    router.push('/services');
  }

  return (
    <section className="bg-slate-700 text-white py-16 shadow-xl rounded-xl m-8 transition duration-300 transform hover:scale-105">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Ski and Board Repairs</h2>
        <div>
        <p className="text-lg mb-12">
        🔧 Ptex Repairs: Say goodbye to those unsightly base gouges and scratches. Our meticulous Ptex repairs seamlessly blend with your equipment, ensuring smooth, uninterrupted glides down the slopes.
        </p>
        </div>
        <div>
        <p className="text-lg mb-12">
        🔪 Edge Repairs: Cracked or damaged edges can spell trouble on the mountain. Let our experts restore your edges to their former glory, providing you with precision control and confidence on every turn.
        </p>
        </div>
        <div className="flex justify-center space-x-8">
          <div className="relative w-40 h-40 rounded-full overflow-hidden">
            <Image src={closebest} fill="true" objectFit="cover" alt="img repairs" />
          </div>
          <div className="relative w-40 h-40 rounded-full overflow-hidden">
            <Image src={edgework}  fill="true" objectFit="cover" alt="img repairs" />
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

export default Repairs;
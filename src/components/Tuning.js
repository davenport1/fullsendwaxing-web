'use client'
import React from 'react';
import Image from "next/legacy/image";
import productbest from '../../public/productbest.jpg';
import farshot1 from '../../public/farshot1.jpg';
import { useRouter } from 'next/navigation';

const Tuning = () => {
  const router = useRouter();

  function handleClickServices() {
    router.push('/services');
  }

  return (
    <section className="bg-slate-700 text-white py-16 shadow-xl rounded-xl m-8 transition duration-300 transform hover:scale-105">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 md:mb-8">Tuning Services</h2>
        <p className="text-lg mb-8 mx-4 md:mx-16"> {/* Added md:mx-16 */}
          We're all about delivering next-level expertise with a commitment to eco-friendliness. Our convenient pick-up and delivery service brings top-notch gear and service right to your doorstep, wherever you are. 
          Join us in supporting snow sports excellence and preserving the beauty of our beloved mountains. Let's ride, and make the mountain experience yours, no matter where you call home!
        </p>
        <div className="flex justify-center flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0 mx-auto"> {/* Changed space-y-8 to space-y-4 */}
          <div className="relative w-60 h-60 rounded-3xl overflow-hidden mx-auto"> {/* Added mx-auto for centering */}
            <Image src={productbest} fill="true" objectFit="cover" alt="tuning img" />
          </div>
          <div className="relative w-60 h-60 rounded-3xl overflow-hidden mx-auto"> {/* Added mx-auto for centering */}
            <Image src={farshot1} fill="true" objectFit="cover" alt="tuning img" />
          </div>
        </div>
        <button onClick={handleClickServices}
          className="bg-slate-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full font-semibold text-lg mt-8 md:mt-0"> {/* Added md:mt-0 */}
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Tuning;

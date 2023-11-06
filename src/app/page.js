import "next";
import React from 'react';
import HomeSplash from '../components/HomeSplash.js';
import Mission from '@/components/Mission.js';
import About from '@/components/About.js';
import Tuning from '@/components/Tuning.js';
import Repairs from '@/components/Repairs.js';
import Products from '@/components/Products.js';
import Header from '@/components/Header.js';
import Footer from '@/components/Footer.js';
import Reviews from '@/components/Reviews.js';

export default function Home() {

  return (
    <div>
      <Header className="z-0"/>
      <main className="bg-zinc-800 z-50">
      <HomeSplash className />
      <div className="mb-4" id="mission">
            <Mission />
      </div>
      <div className='flex flex-wrap'>
        <div className="w-full lg:w-1/2 p-4">
          <div className="mb-4" id="tuning">
            <Tuning />
          </div>
          <div className='mb-4' id="products">
          <Products />
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <div className="mb-4" id="about">
            <About />
          </div>
          <div className="mb-4" id="repairs">
            <Repairs />
          </div>
        </div>
      </div>
      <div className="mb-4" id="Reviews">
        <Reviews />
      </div>
      <Footer className />
      </main>
    </div>
  )
}

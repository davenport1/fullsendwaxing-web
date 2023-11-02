'use client'
import React, { useState, useEffect } from 'react';

import Header from '../components/Header/Header.js';
import HomeSplash from '../components/HomeSplash/HomeSplash.js';
import Mission from '@/components/Mission/Mission.js';
import About from '@/components/About/About.js';
import Tuning from '@/components/Services/Tuning.js';
import Repairs from '@/components/Services/Repairs.js';
import Products from '@/components/Products/Products.js';
import Reviews from '@/components/Reviews/Reviews.js';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [componentHeight, setComponentHeight] = useState(null);

  useEffect(() => {
    const missionElement = document.getElementById('mission');
    const aboutElement = document.getElementById('about');

    if (missionElement && aboutElement) {
      const aboutHeight = aboutElement.clientHeight;
      setComponentHeight(aboutHeight);
    }
  }, []);

  return (
    <div>
      <main className="bg-slate-800">
        <HomeSplash darkMode={darkMode} />
        <div className="bg-slate-800 flex flex-wrap">
          <div className="w-full lg:w-1/2" id="mission" style={{ height: componentHeight }}>
            <Mission />
          </div>
          <div className="w-full lg:w-1/2" id="about">
            <About />
          </div>
        </div>
        <div className="bg-slate-800 flex flex-wrap">
          <div className="w-full lg:w-1/2" id="tuning">
          <Tuning />
          </div>
          <div className="w-full lg:w-1/2" id="repairs">
            <Repairs />
          </div>
        </div>

        <Products />

      </main>
    </div>
  )
}
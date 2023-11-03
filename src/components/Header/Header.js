'use client'
import React, { useState } from 'react';
import { BsFillMoonStarsFill } from "react-icons/bs";
import Logo from "../../../public/logodark.png";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function handleClick() {
    history.push('/contact');
  }

  return (
    <div>
      <nav className="fixed top-0 w-full bg-slate-900 p-4 text-white flex justify-between items-center">
      <div className="flex items-center">
        <a href="#" onClick={scrollToTop}>
          <Image src={Logo} alt="Logo" className="h-12 w-12 mr-4 rounded-full" />
        </a>
        <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full font-semibold text-lg mx-5">Shred Blog</button>
      </div>
      <div className="flex items-center">
          <button onClick={handleClick} className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full font-semibold text-lg mx-5">
            Contact
          </button>
        <button
          className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full font-semibold text-lg mx-5"
          onClick={() => setDarkMode(!darkMode)}
        >
          <BsFillMoonStarsFill className="hover:text-slate-300" />
        </button>
      </div>
      </nav>
    </div>
  );
}

export default Header;
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

  return (
    <nav className="fixed top-0 w-full bg-slate-900 p-4 text-white flex justify-between items-center">
      <div className="flex items-center">
        <a href="#" onClick={scrollToTop}>
          <Image src={Logo} alt="Logo" className="h-12 w-12 mr-4 rounded-full" />
        </a>
        <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full font-semibold text-lg mx-5">Shred Blog</button>
      </div>
      <div className="flex items-center">
        <Link href="/contact">
          <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full font-semibold text-lg mx-5">
            Contact
          </button>
        </Link>
        <button
          className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full font-semibold text-lg mx-5"
          onClick={() => setDarkMode(!darkMode)}
        >
          <BsFillMoonStarsFill className="hover:text-slate-300" />
        </button>
      </div>
    </nav>
  );
}

export default Header;
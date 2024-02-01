'use client'
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Logo from "../../public/logodark.png";
import Image from "next/image";

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function handleClickContact() {
    router.push('/contact');
    setMenuOpen(false); // Close menu after clicking a link
  }
  function handleClickServices() {
    router.push('/services');
    setMenuOpen(false); // Close menu after clicking a link
  }
  function handleClickBlog() {
    router.push('/blog');
    setMenuOpen(false); // Close menu after clicking a link
  }
  function handleClickHome() {
    if (pathname === '/') {
      scrollToTop();
    }
    else {
      router.push('/');
      setMenuOpen(false); // Close menu after clicking a link
    }
  }
  function handleClickLogin() {
    router.push('/login');
    setMenuOpen(false);
  }

  return (
    <div>
      <nav className="fixed top-0 w-full bg-zinc-900 p-4 opacity-80 text-white flex justify-between items-center z-50">
        <div className="flex items-center">
          <a href="#" onClick={handleClickHome}>
            <Image src={Logo} className='h-12 w-12 rounded-full' alt="fsw logo" priority="true"/>
          </a>
          <div className="md:hidden ml-3">
            <button 
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:flex items-center ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="md:flex items-center">
            <a href="#" onClick={handleClickBlog} className="block mx-3 md:mx-5 my-2 md:my-0 text-lg text-white">
              Shred Blog
            </a>
            <a href="#" onClick={handleClickContact} className="block mx-3 md:mx-5 my-2 md:my-0 text-lg text-white">
              Contact
            </a>
            <a href="#" onClick={handleClickServices} className="block mx-3 md:mx-5 my-2 md:my-0 text-lg text-white">
              Services
            </a>
            <a href="#" onClick={handleClickLogin} className="block mx-3 md:mx-5 my-2 md:my-0 text-lg text-white">
              Login
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Logo from "../../public/logodark.png";
import Image from "next/image";

const Header = () => {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function handleClickContact() {
    router.push('/contact');
  }
  function handleClickServices() {
    router.push('/services');
  }
  function handleClickBlog() {
    router.push('/blog');
  }

  return (
    <div>
      <nav className="fixed top-0 w-full bg-zinc-900 p-4 text-white flex justify-between items-center z-50">
      <div className="flex items-center">
        <a href="#" onClick={scrollToTop}>
          <Image src={Logo} className='h-12 w-12 rounded-full' alt="fsw logo"/>
        </a>
        <button onClick={handleClickBlog}
        className="bg-slate-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full font-semibold text-lg mx-5">
          Shred Blog
          </button>
      </div>
      <div className="flex items-center">
          <button onClick={handleClickContact} className="bg-slate-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full font-semibold text-lg mx-5">
            Contact
          </button>
        <button onClick={handleClickServices}
          className="bg-slate-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full font-semibold text-lg mx-5"
        >
          Services
        </button>
      </div>
      </nav>
    </div>
  );
}

export default Header;
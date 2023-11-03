import React from 'react';
import Image from "next/legacy/image";
import {
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import FswLogoWhite from "../../public/logolight.png"

const HomeSplash = () => {
  return (
    <section className="min-h-screen bg-[url('../../public/farshotbest.jpg')] bg-cover bg-bottom">
      <nav className="py-10 mb-12 flex justify-between text-white">
        <h1 className="font-burtons text-xl px-10">Contact</h1>
        <ul className="flex items-center">
          <li className="px-10">
            <BsFillMoonStarsFill
              className="cursor-pointer text-2xl"
            />
          </li>
          <li>
          </li>
        </ul>
      </nav>
      <div className="mx-auto rounded-full w-80 h-80 mt-20 md:h-96 md:w-96">
          <Image src={FswLogoWhite} 
          fill="true"
          objectFit="cover"
          alt ="Main splash image"
          className='rounded-full'/>
      </div>
      <div className="text-center p-10 py-10">
        <p className="text-md py-5 leading-8 text-white max-w-xl mx-auto md:text-xl">
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-white">
          <AiFillInstagram />
          <AiFillLinkedin />
        </div>
      </div>
    </section>
  );
}

export default HomeSplash;
import React from 'react';
import Image from "next/legacy/image";
import {
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import FswLogoWhite from "../../public/logolight.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/globals.css'

import { Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faF } from '@fortawesome/free-solid-svg-icons';

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
        < Container className="text-5xl flex justify-center gap-16 py-3 text-white">
          <a href='https://instagram.com' target='_blank'>
          <FontAwesomeIcon icon={faInstagram} className='h-10 w-10 text-white hover:scale-125'/>
          </a>
          <a href='https://facebook.com' target='_blank'>
          <FontAwesomeIcon icon={faFacebook} className='h-10 w-10 text-white hover:scale-125'/>
          </a>
          <a href='https://tiktok.com' target='_blank'>
          <FontAwesomeIcon icon={faTiktok} className='h-10 w-10 text-white hover:scale-125'/>
          </a>
        </Container>
      </div>
    </section>
  );
}

export default HomeSplash;
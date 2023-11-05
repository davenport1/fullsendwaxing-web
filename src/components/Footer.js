'use client'
import React from "react"
import Image from "next/image"
import { useRouter } from 'next/navigation'
import Logo from '../../public/logodark.png';
import mammothlogo from '../../public/mammothlogo.jpg';
import kirkwoodlogo from '../../public/logo-kirkwood.png';
import keeptahoeblue from '../../public/keeptahoeblue.png';
import POW from '../../public/POW.png';
import purllogo from '../../public/purllogo.png';
import swixlogo from '../../public/swixlogo.png';

const Footer = () => {
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

    return (
        <div>
        <nav className="bottom-0 w-full bg-zinc-900 p-4 opacity-90 text-white flex justify-between items-center z-50">
            <div className="flex items-center space-x-4">
            <a href="#">
                <Image src={Logo} onClick={handleClickContact} className='h-12 w-12 rounded-full hover:scale-125' alt="fsw logo"/>
            </a>
            <a href="https://www.keeptahoeblue.org/" target="_blank">
                <Image src={keeptahoeblue} className="h-12 w-12 rounded-xl hover:scale-125" alt="keep tahoe blue" />
            </a>
            <a href="https://protectourwinters.org/" target="_blank">
                <Image src={POW} className="w-12 rounded-xl hover:scale-125" alt="protect our winters" />
            </a>
            <a href="https://www.mammothmountain.com/" target="_blank">
                <Image src={mammothlogo} className='h-12 w-12 rounded-xl hover:scale-125' alt="mammoth logo" />
            </a>
            <a href="https://www.kirkwood.com/" target="_blank">
                <Image src={kirkwoodlogo} className="h-12 w-12 rounded-xl hover:scale-125" alt="kirkwood logo" />
            </a>
            <a href="https://purlwax.com/" target="_blank">
                <Image src={purllogo} className="h-12 w-12 rounded-xl hover:scale-125" alt="purl logo" />
            </a>
            <a href="https://www.swixsport.com/en/" target="_blank">
                <Image src={swixlogo} className="h-12 w-12 rounded-xl hover:scale-125" alt="swix logo" />
            </a>
            </div>
        </nav>
      </div>
    );
}


export default Footer;
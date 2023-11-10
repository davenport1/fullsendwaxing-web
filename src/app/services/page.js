'use client'
import NavBar from "@/components/NavBar";
import Image from "next/image";
import React from "react";
import { useRouter } from 'next/navigation';
import '../globals.css'
import Footer from "@/components/Footer";
import logocolordark from '../../../public/logocolordark.png';

export default function Page() {
    const router = useRouter();

    function handleClickContact() {
        router.push('/contact')
    }

    return (
        <div>
            <title>FSW Services</title>
            <NavBar className="z-10 relative" />
            <main className="min-h-screen bg-[url('../../public/natski.JPG')] bg-cover bg-top">
                <nav className="py-10 mb-12 flex justify-between text-white">
                </nav>
                <div className="flex flex-col justify-center items-center lg:h-full">
                    <section className="bg-slate-700 flex flex-col justify-center items-center mb-8 w-11/12 sm:w-3/5 text-white shadow-2xl text-center text-lg rounded-3xl">
                        <div className="m-4 flex justify-center items-center space-x-10">
                            <Image src={logocolordark} className="rounded-full h-32 w-32 shadow-xl" alt="fsw color logo" />
                            <h1 className="text-3xl font-bold mb-8">Services</h1>
                            <nav></nav>
                        </div>
                        <div className="m-8 m:m-16">
                            <p className="text-large font-bold mb-8">
                            At Full Send Waxing, we're all about supercharging your snowboarding and skiing mojo. Check out our offerings:
                            </p>
                        </div>
                        <div className="flex flex-col items-center m-1 sm:m-16 rounded-3xl p-1 md:p-16 lg:p-32 text-left my-24 shadow-2xl shadow-black">
                            <ol style={{ listStyle: 'disc', paddingLeft: '1em' }}>
                                <li>
                                    <p><span className="inline-block w-40">🛷 Standard Wax</span> 
                                    <span className="inline-block w-4">:</span>$35 </p>
                                </li>
                                <li>
                                    <p><span className="inline-block w-40">🔪 Edge Work</span>
                                    <span className="inline-block w-4">:</span> $10-20 </p>
                                </li>
                                <li>
                                    <p><span className="inline-block w-40">🔧 Minor Repairs</span>
                                    <span className="inline-block w-4">:</span>Consultation</p>
                                </li>
                                <li>
                                    <p><span className="inline-block w-40">🛠️ Core Repairs</span>
                                    <span className="inline-block w-4">:</span> $40/hour </p>
                                </li>
                            </ol>
                        </div>

                        <div className="text-center m-8 m:m-24 max-w-5xl">
                            <p className="text-large font-bold mb-8">
                            We're all about delivering next-level expertise with a commitment to eco-friendliness. 
                            Our convenient pick-up and delivery service brings top-notch gear and service right
                             to your doorstep, wherever you are. Join us in supporting snow sports excellence
                              and preserving the beauty of our beloved mountains. Let's ride, 
                              and make the mountain experience yours, no matter where you call home!
                            </p>
                        </div>
                        <div className="m-4 text-large font-bold mb-8">
                            <button onClick={handleClickContact}
                            className="bg-slate-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full font-semibold text-lg shadow-2xl">
                                Get In Touch!
                            </button>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}

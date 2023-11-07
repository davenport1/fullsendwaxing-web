'use client'
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Contact from '@/components/Contact';
import '../globals.css';

export default function ContactPage() {

    return (
        <div>
            <title>FSW Contact</title>
            <NavBar className="z-10 relative" />
            <main className="min-h-screen bg-[url('../../public/threeboarders.jpg')] bg-cover bg-top">
            <nav className="py-10 mb-12 flex justify-between text-white">
                </nav>
                <div className="flex justify-center items-center h-full">
                    <Contact />
                </div>
            </main>
            <Footer />
        </div>
    )
}

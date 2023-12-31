
import React from "react";
import NavBar from '../../components/NavBar.js'
import Contact from "../../components/Contact.js";
import Footer from "../../components/Footer.js";
import '../globals.css';

export default function ContactPage() {

    return (
        <div>
            <title>FSW Contact</title>
            <NavBar className="z-10 relative" />
            <main className="min-h-screen bg-[url('../../public/steggyboot.jpg')] bg-cover bg-top">
            <nav className="py-10 flex justify-between text-white">
                </nav>
                <div className="flex justify-center items-center h-full mb-8">
                    <Contact />
                </div>
            </main>
            <Footer  />
        </div>
    )
}

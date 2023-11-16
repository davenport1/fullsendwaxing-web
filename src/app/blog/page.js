import Footer from "../../components/Footer.js";
import NavBar from "../../components/NavBar";
import React from "react";


export default function Page() {
    return (
        <div>
            <title>The Gnar Blog</title>
            <main className="min-h-screen bg-[url('../../public/dundy.HEIC')] bg-cover bg-right ">
                <NavBar />
                    <nav className="py-10 mb-12 flex justify-between text-white">
                    </nav>
                <section className=" bg-slate-700 text-white py-4 sm:py-8 md:py-16 shadow-xl rounded-xl sm:m-2 md:m-8">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4 md:mb-16 lg:mb-32">Full Send Waxing Community Shredder Posts</h2>
                        <p>Coming soon....</p>
                    </div>
                </ section>
            </main>
            <Footer />
        </div>
    )
}
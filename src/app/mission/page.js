import NavBar from "../../components/NavBar.js";
import React from "react";
import Mission from "../../components/Mission.js";

export default function Page() {
    return (
        <div className="min-h-screen bg-[url('../../public/farshotbest.jpg')] bg-cover bg-bottom">
            <nav className="py-10 mb-12 flex justify-between text-white"></nav>
            <NavBar />
            <section className="bg-slate-700 text-white px-4 py-8 md:py-16 shadow-xl rounded-xl sm:m-2 md:m-8 flex flex-col md:flex-row items-center">
                <div className="container mx-auto text-center flex-1 mb-8 md:mb-0 md:mr-8">
                    <h2 className="text-3xl font-bold mb-4 md:mb-8">Our Mission To You And The Planet</h2>
                    <div className="flex flex-col items-center md:items-start mb-8 md:ml-8 md:mr-4"> {/* Adjusted margin for mobile */}
                        <p className="text-lg">
                            At Full Send Waxing, we're all about amping up your snowboarding and skiing game while keeping our mountain digs in tip-top shape. We're stoked about using eco-friendly, biodegradable waxes that leave no trace on the killer landscapes we adore. Every part of our game, from our product choices to our convenient pickup and delivery service, revolves around taking care of our rad environment. By choosing us, you're not just upping your ride; you're also being a total mountain guardian, ensuring the snow stays fresh and the slopes stay primo.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

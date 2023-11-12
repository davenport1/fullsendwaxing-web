'use client'
import NavBar from "../../components/NavBar.js"
import React from "react"
import Mission from "../../components/Mission.js"

export default function Page() {
    return(
        <div className="min-h-screen bg-[url('../../public/farshotbest.jpg')] bg-cover bg-bottom">
            <nav className="py-10 mb-12 flex justify-between text-white">
            </nav>
            <NavBar />
            <Mission />
        </div>
    )
}
"use client"
import NavBar from "../../components/NavBar.js";
import Login from "../../components/Login.js";
import React from "react";

export default function Page() {
    return (
        <div className="min-h-screen bg-slate-700 bg-cover">
            <NavBar/>
            <Login />
        </div>
    )
}
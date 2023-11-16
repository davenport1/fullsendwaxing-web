'use client'
import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import logocolordark from '../../public/logocolordark.png'
import useContactForm from "../hooks/useContactForm"
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2';

const SERVICE_ID = "fullsendwaxing_test";
const TEMPLATE_ID = "template_ri8dczs";
const PUBLIC_KEY = "UApUvn0RCM9HVsoZn";

const Contact = () => {
    const router = useRouter();

    const {values, handleChange} = useContactForm();

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully',
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Yard sale! Something went wrong',
                    text: error.text,
                })
            });
        e.target.reset();
    }

    const resetForm = () => {
        values.fullname = '';
        values.email = '';
        values.subject = '';
        values.message = '';
        handleChange();
    }

    return (
        <section className="bg-slate-700 w-4/5 h-4/5 flex flex-col text-white md:m-8 sm:py-2 m:py-16 shadow-2xl text-center text-lg items-center rounded-3xl">
            <div className=" m-4 sm:m-12 md:m-24 flex justify-center items-center space-x-10">
                <Image src={logocolordark} className="rounded-full h-32 w-32 shadow-xl" alt="fsw color logo" priority="true"/>
                <h1 className="text-xl font-bold mb-8">Get In Touch</h1>
                <nav></nav>
            </div>
            <form className="w-10/12 lg:w-3/5 flex flex-col m-16 sm:m-16 lg:m-32" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <input 
                        type="text" 
                        id="fullname" 
                        name="fullname"
                        value={values.fullname} 
                        onChange= {handleChange}
                        placeholder="Your Name" 
                        className="bg-gray-100 w-full py-2 px-4 rounded-xl text-black" 
                        required 
                    />
                </div>
                <div className="mb-6">
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={values.email} 
                        onChange={handleChange}
                        placeholder="Your Email" 
                        className="bg-gray-100 w-full py-2 px-4 rounded-xl text-black" 
                        required 
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="bg-gray-100 w-full py-2 px-4 rounded-xl text-black"
                        required
                    />
                    
                </div>
                <div className="mb-6">
                    <textarea 
                        id="message"
                        name="message"
                        type="text"
                        value={values.message} 
                        onChange={handleChange}
                        placeholder="Your Message" 
                        className="bg-gray-100 w-full py-2 px-4 rounded-xl h-32 resize-none text-black" 
                        required 
                    />
                </div>
                <button 
                    type="submit" 
                    value='submit'
                    className="bg-slate-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full font-semibold text-lg shadow-2xl w-48"
                >
                    Send Message
                </button>
            </form>
        </section>
    )
}

export default Contact;

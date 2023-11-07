'use client'
import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import logocolordark from '../../public/logocolordark.png'

const Contact = () => {
    const router = useRouter();

    function handleClickServices() {
        router.push('/services');
    }

    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Here you can use the formData to send an email
        // You can use a library like nodemailer to handle the email sending

        // Example:
        // sendEmail(formData);

        alert('Email sent successfully!');
    }

    return (
        <section className="bg-slate-700 w-4/5 flex flex-col mx-auto text-white md:m-8 sm:py-2 m:py-16 shadow-2xl text-center text-lg items-center rounded-3xl">
            <div className="m-4 sm:m-12 m:m-24 flex justify-center items-center space-x-10">
                <Image src={logocolordark} className="rounded-full h-32 w-32 shadow-xl" alt="fsw color logo" />
                <h1 className="text-xl font-bold mb-8">Get In Touch</h1>
                <nav></nav>
            </div>
            <form className="max-w-lg m-16 sm:m-16 lg:m-64" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        placeholder="Your Name" 
                        className="bg-gray-100 w-full py-2 px-4 rounded-full text-black" 
                        required 
                    />
                </div>
                <div className="mb-6">
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        placeholder="Your Email" 
                        className="bg-gray-100 w-full py-2 px-4 rounded-full text-black" 
                        required 
                    />
                </div>
                <div className="mb-6">
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleInputChange} 
                        placeholder="Your Message" 
                        className="bg-gray-100 w-full py-2 px-4 rounded-xl h-32 resize-none text-black" 
                        required 
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-slate-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full font-semibold text-lg shadow-2xl"
                >
                    Send Message
                </button>
            </form>
        </section>
    )
}

export default Contact;

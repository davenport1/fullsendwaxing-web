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

    // function handleInputChange(e) {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     // Here you can use the formData to send an email
    //     // You can use a library like nodemailer to handle the email sending

    //     // Example:
    //     // sendEmail(formData);

    //     alert('Email sent successfully!');
    // }

    return (
        <section className="bg-slate-700 text-white m-8 py-16 shadow-2xl text-center text-lg items-center rounded-3xl">
        <div className="m-24 flex justify-center items-center space-x-10">
            <Image src={logocolordark} className="rounded-full h-32 w-32 shadow-xl" alt="fsw color logo" />
            <h1 className="text-3xl font-bold mb-8">Get In Touch</h1>
            <nav></nav>
        </div>
        <form className="max-w-md m-64">
            <div className="mb-6">
                <input type="text" name="name" value={formData.name} placeholder="Your Name" className="bg-gray-100 w-full py-2 px-4 rounded-full text-black" required />
            </div>
            <div className="mb-6">
                <input type="email" name="email" value={formData.email} placeholder="Your Email" className="bg-gray-100 w-full py-2 px-4 rounded-full text-black" required />
            </div>
            <div className="mb-6">
                <textarea name="message" value={formData.message} placeholder="Your Message" className="bg-gray-100 w-full py-2 px-4 rounded-xl h-32 resize-none text-black" required />
            </div>
            <button type="submit" className="bg-slate-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full font-semibold text-lg shadow-2xl">Send Message</button>
        </form>
        </section>
    )
}

export default Contact;
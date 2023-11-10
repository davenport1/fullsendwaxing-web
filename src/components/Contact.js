'use client'
import React, { useState } from "react"
import useContactForm from "@/hooks/useContactForm"
import Image from "next/image"
import { useRouter } from "next/navigation"
import logocolordark from '../../public/logocolordark.png'

const Contact = () => {
    const router = useRouter();

    const {values, handleChange} = useContactForm();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if(isValidForm) {
            try {
                const req = await sendEmail(values.email, values.subject, values.message);
                if (req.status === 250) {
                  setResponseMessage(
                      {isSuccessful: true, message: 'Thank you for your message.'});
                }
            } catch (e) {
                console.log(e);
                setResponseMessage({
                  isSuccessful: false,
                  message: 'Oops something went wrong. Please try again.',
                });
            }
        }
        
    }

    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (fullname.length <= 0) {
            tempErrors["fullname"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if(subject.length <= 0) {
            tempErrors["subject"] = true;
            isValid = false;
        }
        if(message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    }

    return (
        <section className="bg-slate-700 w-4/5 h-4/5 flex flex-col text-white md:m-8 sm:py-2 m:py-16 shadow-2xl text-center text-lg items-center rounded-3xl">
            <div className=" m-4 sm:m-12 md:m-24 flex justify-center items-center space-x-10">
                <Image src={logocolordark} className="rounded-full h-32 w-32 shadow-xl" alt="fsw color logo" />
                <h1 className="text-xl font-bold mb-8">Get In Touch</h1>
                <nav></nav>
            </div>
            <form className="w-10/12 lg:w-3/5 flex flex-col m-16 sm:m-16 lg:m-32" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <input 
                        type="text" 
                        id="fullname" 
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

import React from "react";
import Image from "next/image";

import purllogo from '../../public/purllogo.png';
import swixlogo from '../../public/swixlogo.png';

const Products = () => {
    return (
        <section className="bg-slate-700 text-white py-16 shadow-xl rounded-xl m-8 transition duration-300 transform hover:scale-105">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Products In Use</h2>
                <div className="flex flex-wrap m-8">
                    <div className="w-20 lg:w-1/5 flex flex-col items-center justify-center p-4">
                        <a href="https://purlwax.com/" target="_blank" className="my-8">
                            <Image src={purllogo} className='rounded-3xl' alt='purl logo' style={{maxWidth: '100%', maxHeight: '100%'}} />
                        </a>
                        <a href="https://www.swixsport.com/en/" target="_blank" className="my-8">
                            <Image src={swixlogo} className="rounded-full" alt="swix logo" style={{maxWidth: '100%', maxHeight: '100%'}} />
                        </a>
                    </div>
                    <div className="w-full lg:w-4/5 ">
                        <div>
                            <p className="p-10"> At our waxing company, we take great pride in the quality and sustainability of our products. 
                            We exclusively use Purl Wax for our waxing services, a renowned brand known for its exceptional performance and durability on the slopes. 
                            Purl Wax not only enhances the glide of your equipment but also offers a level of quality that our clients have come to trust.
                            </p>
                        </div>
                        <div>
                            <p className="p-10">
                            In addition, 
                            we prioritize eco-friendliness in all aspects of our operations. That's why we've chosen Purl Wax, a brand that shares our commitment to 
                            environmental stewardship. Their products are formulated with eco-conscious practices, ensuring minimal impact on the natural surroundings 
                            we all cherish.
                            </p>
                        </div>
                        <div>
                            <p className="p-10">
                            For repairs, we rely on Swix Ptex, another industry-leading brand recognized for its durability and reliability. With Swix 
                            Ptex, we can confidently restore your equipment to its optimal condition, ensuring you have a safe and enjoyable experience on the slopes. 
                            Rest assured, when you choose our services, you're not only getting top-quality performance, but you're also supporting a sustainable and 
                            environmentally conscious approach to winter sports maintenance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};


export default Products;
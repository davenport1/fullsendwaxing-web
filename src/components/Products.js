import React from "react";
import Image from "next/image";

import purllogo from '../../public/purllogo.png';
import swixlogo from '../../public/swixlogo.png';

const Products = () => {
    return (
        <section className="bg-slate-700 text-white py-8 md:py-16 shadow-xl rounded-xl sm:m-2 md:m-8 flex flex-col md:flex-row items-center">
            <div className="container mx-auto text-center md:text-left flex-1 mb-8 md:mb-0 md:mr-8">
                <h2 className="text-3xl font-bold mb-4 md:mb-8">Products In Use</h2>
                <div>
                    <p className="p-4 md:p-10 mb-8"> {/* Adjusted padding for mobile */}
                        At our waxing company, we take great pride in the quality and sustainability of our products. 
                        We exclusively use Purl Wax for our waxing services, a renowned brand known for its exceptional performance and durability on the slopes. 
                        Purl Wax not only enhances the glide of your equipment but also offers a level of quality that our clients have come to trust.
                    </p>
                </div>
                <div>
                    <p className="p-4 md:p-10 mb-8"> {/* Adjusted padding for mobile */}
                        In addition, 
                        we prioritize eco-friendliness in all aspects of our operations. That's why we've chosen Purl Wax, a brand that shares our commitment to 
                        environmental stewardship. Their products are formulated with eco-conscious practices, ensuring minimal impact on the natural surroundings 
                        we all cherish.
                    </p>
                </div>
                <div>
                    <p className="p-4 md:p-10 mb-8"> {/* Adjusted padding for mobile */}
                        For repairs, we rely on Swix Ptex, another industry-leading brand recognized for its durability and reliability. With Swix 
                        Ptex, we can confidently restore your equipment to its optimal condition, ensuring you have a safe and enjoyable experience on the slopes. 
                        Rest assured, when you choose our services, you're not only getting top-quality performance, but you're also supporting a sustainable and 
                        environmentally conscious approach to winter sports maintenance.
                    </p>
                </div>
            </div>
            <div className="flex flex-col mx-auto m-4 md:m-0"> {/* Centered and adjusted margin */}
                <div className="relative w-60 h-60 rounded-3xl overflow-hidden mb-4"> {/* Added margin bottom */}
                    <a href="https://purlwax.com/" target="_blank">
                        <Image src={purllogo} className='rounded-3xl hover:scale-105' alt='purl logo' style={{maxWidth: '100%', maxHeight: '100%'}} />
                    </a>
                </div>
                <div className="relative w-60 h-60 rounded-full overflow-hidden"> {/* No margin for the last image */}
                    <a href="https://www.swixsport.com/en/" target="_blank">
                        <Image src={swixlogo} className="rounded-full hover:scale-105" alt="swix logo" style={{maxWidth: '100%', maxHeight: '100%'}} />
                    </a>
                </div>
            </div>
        </section>
    )
};


export default Products;

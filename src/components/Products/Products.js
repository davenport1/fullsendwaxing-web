import React, { useState, useEffect } from "react";

const Products = () => {
    return (
        <section className="bg-slate-700 text-white py-16 shadow-xl rounded-xl m-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Products</h2>
                <div className="bg-slate-800 flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <p> blah blah blah some wax stuff</p>
                    </div>
                    <div className="w-full lg:w-1/2">
                    <p> blah blah blah somerepair stuff</p>
                    </div>
                </div>
            </div>
        </section>
    )
};


export default Products;
import React, { useState } from "react";
import  SliderData  from "../data/SliderData.js";
export default function ImageSlider ({slides}) {
    const [current, setCurrent] = useState(0);
    
    /*if(!Array.isArray(slides) || slides.length <= 0) {
        console.log(Array.isArray(slides));
        console.log(slides.length);
        return null;
        
    }*/

    const length = SliderData.length; // TODO need to fix

    const nextSlide = () => {
        setCurrent(current === length - 1? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0? length - 1 : current - 1);
    }
    
    return (
        <div className="flex items-center h-96 bg-white space-evenly justify-evenly flex-col">
            <div className="flex item-start">
                <button className="px-16 py-2 bg-white" onClick={prevSlide}>left arrow</button>
                <button className="px-16 py-2 bg-white" onClick={nextSlide}>right arrow</button>
            </div>
            <section className="slider">
                {SliderData.map((slide, index) => {
                    return (
                        <div
                            className={index === current? 'slide-active' : 'slide'}
                            key={index}
                        >
                        {index === current && (
                            <img src={slide.image} alt='default image' className="max-h-72 w-full"/>
                        )}     
                        </div>
                    )
                })}
            </section>
        </div>
    );
}

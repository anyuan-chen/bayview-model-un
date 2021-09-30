import React, { useState } from "react";
import  sliderData  from "../data/sliderData.js";
export default function ImageSlider ({slides}) {

    const length = sliderData.length;

    const [current, setCurrent] = useState(0);
    const [previous, setPrevious] = useState(length-1);
    const [next, setNext] = useState(1);
    
    /*if(!Array.isArray(slides) || slides.length <= 0) {
        console.log(Array.isArray(slides));
        console.log(slides.length);
        return null;
        
    }*/

    

    const nextSlide = () => {
        setCurrent(current === length - 1? 0 : current + 1);
        setPrevious(previous == length - 1? 0 : previous + 1);
        setNext(next === length - 1? 0 : next + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0? length - 1 : current - 1);
        setPrevious(previous === 0? length - 1 : previous - 1);
        setNext(next === 0? length - 1 : next - 1);
    }

    
    return (
        <div className="flex items-center h-72 space-evenly justify-evenly flex-col">
            <div className="flex justify-content center w-4/5">
                <section className="flex justify-around gap-3">
                    <div className="slide-previous">
                        <img src={sliderData[previous].image} className="h-72 w-screen object-scale-down"/>
                    </div>
                    <div className="slide-current">
                        <img src={sliderData[current].image} className="h-80 w-screen object-scale-down"/>        
                    </div>
                    <div className="slide-next">
                        <img src={sliderData[next].image} className ="h-72 w-screen object-scale-down"/>
                    
                    </div>
                </section>
                </div>
            <div className="flex item-end">
                <button className="px-16 py-2 bg-white" onClick={prevSlide}>left arrow</button>
                <button className="px-16 py-2 bg-white" onClick={nextSlide}>right arrow</button>
            </div>
        </div>
    );
}

import React, { useEffect, useState } from "react";
import  sliderData  from "../data/sliderData.js";
export default function ImageSlider ({slides}) {

    const length = sliderData.length;

    const [current, setCurrent] = useState(0);

    const [prevFadeIn, setPrevFadeIn] = useState(false);    
    const [nextFadeIn, setNextFadeIn] = useState(false);


    
    /*if(!Array.isArray(slides) || slides.length <= 0) {
        console.log(Array.isArray(slides));
        console.log(slides.length);
        return null;
        
    }*/
    

    const nextSlide = () => {
        setNextFadeIn(true);
        setPrevFadeIn(false);
        setCurrent(current === length - 1? 0 : current + 1);
    
    };

    const prevSlide = () => {
        setNextFadeIn(false);
        setPrevFadeIn(true);
        setCurrent(current === 0? length - 1 : current - 1);
    }

    
    const getNext = () => {
        return (current + 1) % length;
    }

    const getPrevious = () => {
        return (current - 1 + length) % length;
    }

    const setCurrentImageClassName = () => {
        if(prevFadeIn === false && nextFadeIn === false) {
            return "";
        }
        if(prevFadeIn) return "prevFadeIn";
        return "nextFadeIn";
    }

    return (
        <div className="flex items-center h-72 space-evenly justify-evenly flex-col">
            <div className="flex justify-content center w-4/5">
                <section className="flex justify-around gap-3"> 
                    <div key={Math.random()} className={prevFadeIn? "prevFadeIn" : "nextFadeIn"}>  
                        <img src={sliderData[getPrevious()].image} className="h-72 w-screen object-scale-down"/>
                    </div>
                    <div key={Math.random()} className={setCurrentImageClassName()}>
                        <img src={sliderData[current].image} className="h-72 w-screen object-scale-down"/>        
                    </div>
                    <div key={Math.random()} className={nextFadeIn? "nextFadeIn" : "prevFadeIn"}>
                        <img src={sliderData[getNext()].image} className ="h-72 w-screen object-scale-down"/>
                    </div>
                </section>
                </div>
            <div className="flex item-end gap-3">
                <button className="px-16 py-2 bg-gray-400" onClick={prevSlide}>left arrow</button>
                <button className="px-16 py-2 bg-gray-400" onClick={nextSlide}>right arrow</button>
            </div>
        </div>
    );

}

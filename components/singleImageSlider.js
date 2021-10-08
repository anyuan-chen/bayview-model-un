import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton } from "./emblaCarouselButtons";
import sliderData from "../data/sliderData";
export default function SingleImageSlider() {

    const mediaByIndex = (index) => {
        return sliderData[index % sliderData.length].image;
    }
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, loop: true});
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
        embla
    ]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);

    return (
        <>
        <div className="">
            <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
                {sliderData.map((slide, index) => (
                <div className="embla__slide" key={index}>
                    <div className="overflow-hidden px-2">
                    <img
                        className="h-52 w-screen object-scale-down"
                        src={slide.image}
                    />
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
            <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
            />
            ))}
        </div>
        </>
    );
}
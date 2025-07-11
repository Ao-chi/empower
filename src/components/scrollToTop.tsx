"use client";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 lg:bottom-24 lg:right-1/12  bg-red-primary w-[40px] md:w-[50px] h-[40px] md:h-[50px] p-2  rounded-full shadow-xs z-10 cursor-pointer hover:scale-110 hover:bg-red-dark  ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            }`}
        >
            <FontAwesomeIcon
                icon={faChevronUp}
                className={`text-base md:text-2xl text-primary-cream-color`}
            />
        </button>
    );
}

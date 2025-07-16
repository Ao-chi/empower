"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type ParallaxProps = {
    src: string | StaticImageData;
    title: string;
    className?: string;
    imgStyle?: string;
    translateYStart?: string | number; // e.g. "-20%" or -100
    translateYEnd?: string | number; // e.g. "0%" or 0
    scaleStart?: number;
    scaleEnd?: number;
};

export default function BannerParallax({
    src,
    title,
    className,
    imgStyle,
    translateYStart,
    translateYEnd,
    scaleStart,
    scaleEnd,
}: ParallaxProps) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [translateYStart, translateYEnd]);
    const scale = useTransform(scrollYProgress, [0, 1], [scaleStart, scaleEnd]);
    return (
        <div ref={ref}>
            <div className={`relative overflow-hidden ${className}`}>
                <motion.div
                    style={{
                        top: y,
                        scale,
                    }}
                    className="absolute inset-0"
                >
                    <Image
                        src={src}
                        alt={title}
                        // fill
                        objectFit="cover"
                        className={`absolute top-0 right-0 bottom-0 left-0 ${imgStyle}`}
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </div>
    );
}

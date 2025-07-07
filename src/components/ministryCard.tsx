"use client";
import * as React from "react";
import Image, { StaticImageData } from "next/image";

type CardProps = {
    title?: string;
    description?: string;
    image?: StaticImageData;
    action?: React.ReactNode;
};

export default function MinistryCard({ title, description, image, action }: CardProps) {
    return (
        <div className="shadow-lg/20 shadow-secondary-dark dark:shadow-2xl/100  overflow-hidden  min-w-[345px]">
            <div className="bg-gray-400 relative">
                <div className="bg-secondary-dark absolute top-0 right-0 bottom-0 left-0 opacity-50"> </div>
                {image && <Image src={image} objectFit="contain" alt="empower youth image" />}
                <div className="text-primary-cream-color  uppercase text-xl-32 mx-8 pb-1 font-sans font-black leading-10 absolute top-[25%] border-b-4 border-primary-cream-color">
                    {title}
                </div>
            </div>
            <div className="bg-primary-cream-color dark:bg-background  p-5">
                <p className="text-base text-dark-gray dark:text-primary-cream-color leading-tight">
                    {description}
                </p>
            </div>
        </div>
    );
}

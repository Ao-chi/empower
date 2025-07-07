"use client";
import React from "react";
import Image from "next/image";

import eventsHero from "../../../public/events-banner.png";
import featuredEventImage from "../../../public/events-featured.png";

export default function EventsPage() {
    return (
        <main className="bg-foreground dark:bg-background ">
            <section className="relative ">
                <Image src={eventsHero} objectFit="cover" alt="events hero image" className="w-full -z-0" />
                <div className=" absolute top-0 right-0 left-0 bottom-0 h-full bg-gradient-to-t from-foreground to-65% dark:from-background"></div>
                <div className=" absolute bottom-0 right-0">
                    <div className="grid order-2">
                        <p className="font-sans font-bold text-2xl xl:text-8xl text-primary-cream-color text-right max-w-[200px] xl:max-w-[745px] xl:ml-16 -mb-5 ">
                            Making every moment count for God’s glory
                        </p>
                        <h1 className="font-sans font-bold text-dark dark:text-red-primary text-64 lg:text-9xl xl:text-[250px] text-right -mb-5 xl:-mb-24">
                            events
                        </h1>
                    </div>
                </div>
                <div className="container mx-auto"></div>
            </section>
            <section className="p-5p"></section>
            <section className="py-5p">
                <div className="">
                    <h1 className="font-sans font-bold text-52 md:text-8xl lg:text-9xl 2xl:text-xl-200 text-dark: dark:text-red-primary text-center -mb-7 xl:-mb-10 z-20 relative whitespace-nowrap ">
                        featured event
                    </h1>
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2  ">
                            <div className="order-2 lg:order-1 p-5p lg:p-0  content-end xl:ml-50 lg:mr-30 mt-2">
                                <p className="font-sans font-black text-sm-20 md:text-6xl xl:text-8xl text-red-primary dark:text-red-primary inline-block pr-2">
                                    2025
                                </p>
                                <p className="font-sans font-black text-sm-20 md:text-3xl xl:text-5xl text-red-primary dark:text-red-primary inline-block md:block">
                                    IBMF Talent Fest
                                </p>
                                <p className="font-sans font-semibold text-base md:text-sm-20 xl:text-2xl text-dark-gray dark:text-primary-cream-color mb-5">
                                    August 08, 2025
                                </p>
                                <p className="font-sans text-base md:text-sm-20 xl:text-2xl text-dark-gray dark:text-primary-cream-color">
                                    Unleash the stars! Join us for an evening of incredible youth talent.
                                    Prepare to be amazed by singing, dancing, and more.
                                </p>
                            </div>
                            <Image
                                src={featuredEventImage}
                                objectFit="cover"
                                alt="featured event image"
                                className="w-full lg:max-w-[850px] lg:order-2"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* events list */}
            <section className="p-5p">
                <div className="container mx-auto">
                    <h1 className="font-sans font-bold text-52 xl:text-xl-200 text-dark: dark:text-red-primary text-left  z-20 relative">
                        events list
                    </h1>
                </div>
                <div className="container mx-auto"></div>
            </section>
        </main>
    );
}

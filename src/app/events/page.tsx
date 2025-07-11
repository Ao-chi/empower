"use client";
import React from "react";
import Image from "next/image";

import eventsHero from "../../../public/events-banner.png";
import featuredEventImage from "../../../public/events-featured.png";
import { eventsList } from "@/data/events";
import { parseDate } from "@/uitls/utils";

import ScrollToTop from "@/components/scrollToTop";

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
                <div className="overflow-hidden">
                    <h1 className="font-sans font-bold text-52 md:text-8xl lg:text-9xl xl:text-xl-200 text-dark: dark:text-red-primary text-center -mb-7 xl:-mb-10 z-20 relative whitespace-nowrap ">
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
                    <h1 className="font-sans font-bold text-52 xl:text-xl-200 text-dark: dark:text-red-primary text-left  z-20 relative lg:-mb-14">
                        events list
                    </h1>
                </div>
                <div className="container mx-auto">
                    <div className="grid gap-3 md:gap-10 lg:ml-20 xl:ml-96">
                        {eventsList.map((event) => {
                            const { day, month, year } = parseDate(event.eventDate);
                            return (
                                <div className="relative " key={event.id}>
                                    <div className=" before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-dark-gray dark:before:bg-foreground p-0.5 md:p-5"></div>
                                    <div className="grid md:grid-cols-[145px_1fr_1fr] gap-0  md:gap-10">
                                        <div className="lg:ml-10 py-3">
                                            <p className="font-sans font-black text-dark-gray dark:text-primary-cream-color text-40 -mb-3">
                                                {day}
                                            </p>
                                            <p className="font-sans font-bold text-sm-20 ">
                                                {month} {year}
                                            </p>
                                        </div>

                                        <div className=" ">
                                            <Image
                                                src={event.image}
                                                width={500}
                                                height={500}
                                                objectFit="cover"
                                                alt="events image"
                                                // className="w-full h-full md:max-w-[340px] lg:max-w-[376px] flex-1"
                                                className="w-full "
                                            />
                                        </div>
                                        <div className="font-sans flex flex-col ">
                                            {/* <span className="text-sm-20 text-dark-gray dark:text-primary-cream-color">
                                            {formatDate(event.eventDate)}
                                        </span> */}
                                            <div className="py-3 lg:py-0 ">
                                                <p className="text-base text-sm-20 text-dark-gray dark:text-primary-cream-color lg:text-xl-32 font-bold lg:mb-3 ">
                                                    {event.title}
                                                </p>
                                                <p className="text-base text-sm-20 text-dark-gray dark:text-primary-cream-color">
                                                    {event.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* cta */}
            <section className="p-[5%]">
                <div className="container mx-auto">
                    <div className="mx-auto  max-w-[315px] lg:max-w-[805px]">
                        <p className="text-40 text-dark-gray dark:text-primary-cream-color lg:text-8xl font-sans font-bold tracking-tighter leading-none">
                            stay connected,{" "}
                        </p>
                        <p className="text-40 text-dark-gray dark:text-primary-cream-color lg:text-8xl font-sans font-bold tracking-tighter text-right leading-none  lg:-mr-26 lg:-mt-4  ">
                            stay{" "}
                            <span className="text-red-primary tracking-tighter leading-none  ">
                                empowered
                            </span>
                        </p>
                    </div>
                </div>
                <div className="p-4 grid  md:grid-cols-2 grid-flow-row-dense">
                    <p className="text-base text-dark-gray dark:text-primary-cream-color lg:text-2xl font-sans max-w-[230px] lg:max-w-[550px] leading-tight justify-self-end md:justify-self-start pr-1 lg:pr-8 col-start-2">
                        One of the ways we extend our mission beyond gatherings is through our{" "}
                        <b>Empower Podcast</b>— a space where we share faith-filled conversations,
                        testimonies, and teachings to inspire youth wherever they are.
                    </p>
                    <div className=" pt-5  justify-self-end md:justify-self-start pr-5 flex-wrap flex col-start-2">
                        <a
                            href={"https://www.facebook.com/EMPOWER.Ministry"}
                            target="_blank"
                            className="px-8 py-3 bg-red-primary rounded-2xl text-base lg:text-xl text-primary-cream-color font-sans hover:bg-red-dark"
                        >
                            Listen on Facebook
                        </a>
                    </div>
                </div>
            </section>
            <ScrollToTop />
        </main>
    );
}

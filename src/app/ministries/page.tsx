"use client";

import Image from "next/image";
import React from "react";

import minsistryBanner from "../../../public/ministry_banner-desktop.png";
import empowerMinistryImage from "../../../public/empower-ministry.png";
import youthMoileImage from "../../../public/mobile_youth.png";
import youth1Image from "../../../public/youth1.png";
import youth2Image from "../../../public/youth2.png";
import empowerProImage from "../../../public/empower-pro-xl.png";
import empowerPromaxGoldImage from "../../../public/empower-promax-gold.png";
import Link from "next/link";

export default function Ministries() {
    return (
        <main className="mx-auto bg-foreground dark:bg-background">
            {/* hero section */}
            <section className="pt-[5%]">
                <div className="relative">
                    <div className="text-center">
                        <h1 className="text-dark-gray dark:text-primary-cream-color text-64 md:text-9xl xl:text-heading font-sans font-bold  -mb-7 xl:-mb-10 relative z-10">
                            ministries
                        </h1>
                    </div>

                    <div className="relative p-[15.5%] ">
                        <Image
                            src={minsistryBanner}
                            objectFit="cover"
                            alt="ministries page banner image"
                            className="absolute top-0 right-0 bottom-0 left-0 w-full"
                        />

                        {/* <p className="text-primary-cream-color dark:text-primary-cream-color font-sans font-bold text-18 md:text-4xl xl:text-64  text-center absolute left-0 -bottom-5 translate-x-1/2 -translate-y-1/2  z-20 ">
                            Find your place. Grow together in faith.
                        </p> */}
                    </div>
                </div>
            </section>
            <section className="p-[5%] mb-[5%]"></section>
            {/* /podcast section */}
            <section className="p-[5%] bg-background dark:bg-background ">
                <div className="container mx-auto py-[5%]">
                    <div className="mb-2 md:mb-5 pt-[5%]">
                        <Image
                            src={empowerMinistryImage}
                            objectFit="contain"
                            alt="empower icon"
                            className="max-w-[171px] md:max-w-[400px] lg:max-w-[602px] mx-auto"
                        />
                    </div>
                    <div className="text-center ">
                        <p className="font-sans  font-normal text-primary-cream-color dark:text-primary-cream-color text-base md:text-3xl lg:text-40">
                            Live every Tuesday @ 7 PM on Facebook
                        </p>
                        <p className="font-sans  font-normal text-primary-cream-color dark:text-primary-cream-color text-base md:text-3xl lg:text-40">
                            Hear real-talks, testimonies, teaching—and get plugged in!
                        </p>
                        <div className="mt-10 pb-10 lg:pb-20">
                            <Link
                                href={"/"}
                                className="px-5 py-4 md:px-8 md:py-5 bg-red-primary rounded-2xl text-base lg:text-xl text-primary-cream-color font-sans hover:bg-red-dark"
                            >
                                Watch Lastest Broadcast
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-[5%] mb-[5%]"></section>
            {/* ministries section */}
            <section className="py-[5%] md:p-[5%]">
                <div className="container mx-auto xl:max-w-7xl ">
                    <div className="grid md:grid-cols-2 md:grid-flow-row-dense gap-2 md:gap-7 xl:gap-10">
                        <div className=" flex  md:flex-col px-[5%] md:px-0 ">
                            <h2 className="text-dark-gray dark:text-red-primary font-sans font-black text-4xl md:text-6xl xl:text-9xl inline-block md:text-right leading-none">
                                empower
                            </h2>
                            <h2 className="text-dark-gray dark:text-red-primary font-sans font-black text-4xl md:text-6xl xl:text-9xl md:text-right px-2 md:px-0 inline">
                                youth
                            </h2>
                        </div>
                        <div className="px-[5%] md:px-0 md:pt-6">
                            <p className="text-base md:text-sm-20 lg:text-xl-32 text-dark-gray dark:text-primary-cream-color">
                                Empower Youth is the heart of our ministry, created especially for teenagers
                                and young believers.
                            </p>
                        </div>
                        <div className="px-[5%] md:px-0 xl:pr-20">
                            <p className="text-base md:text-sm-20 lg:text-xl-32 text-dark-gray dark:text-primary-cream-color">
                                Every week, we gather for meaningful hangouts that mix fun games, heartfelt
                                worship, and deep Bible study—building friendships and growing in faith
                                together. Once a month, we step out to serve through retreats and outreach
                                projects, learning what it means to lead and love like Christ. Through peer
                                mentorship and leadership training, we equip young people to be bold in their
                                calling.
                            </p>
                        </div>
                        <div className="md:hidden">
                            <Image
                                src={youthMoileImage}
                                objectFit="cover"
                                alt="empower icon"
                                className="w-full"
                            />
                        </div>
                        <div className="hidden md:block md:row-span-2 place-content-end">
                            <Image
                                src={youth1Image}
                                objectFit="cover"
                                alt="empower icon"
                                className="w-full mx-auto"
                            />
                        </div>
                        <div className="hidden md:block place-content-end">
                            <Image
                                src={youth2Image}
                                objectFit="cover"
                                alt="empower icon"
                                className="w-full "
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* empower pro */}
            <section className="py-[5%] md:p-[5%]">
                <div className="container mx-auto xl:max-w-7xl ">
                    <div className="grid md:grid-cols-2 md:grid-flow-row-dense gap-2 md:gap-7 xl:gap-10">
                        <div className=" flex  md:flex-col px-[5%] md:px-0 ">
                            <h2 className="text-dark-gray dark:text-red-primary font-sans font-black text-4xl md:text-6xl xl:text-9xl inline-block md:text-right leading-none">
                                empower
                            </h2>
                            <h2 className="text-dark-gray dark:text-red-primary font-sans font-black text-4xl md:text-6xl xl:text-9xl md:text-right px-2 md:px-0 inline md:-mt-3">
                                pro
                            </h2>
                        </div>
                        <div className="px-[5%] md:px-0 md:pt-6">
                            <p className="text-base md:text-sm-20 lg:text-xl-32 text-dark-gray dark:text-primary-cream-color">
                                Empower Pro is designed for young professionals navigating the early stages of
                                their careers
                            </p>
                        </div>
                        <div className="md:col-span-2">
                            <Image
                                src={empowerProImage}
                                objectFit="cover"
                                alt="empower icon"
                                sizes=""
                                className="w-full"
                            />
                        </div>
                        <div className="px-[5%] md:px-0 xl:pr-20 md:col-span-2 place-content-center">
                            <p className="text-base md:text-sm-20 lg:text-xl-32 md:text-center text-dark-gray dark:text-primary-cream-color ">
                                It’s a space where faith and work come together—where we talk about real-life
                                struggles, share wins, pray for each other, and sharpen one another through
                                the Word. Whether you&apos;re fresh out of college, building your career, or
                                seeking God’s direction in this season of life, Empower Pro offers
                                Christ-centered community and support to help you stand firm and shine in the
                                workplace.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* empower promax & gold */}
            <section className="py-[5%] md:p-[5%]">
                <div className="container mx-auto xl:max-w-7xl ">
                    <div className="grid md:grid-cols-2 md:grid-flow-row-dense gap-2 md:gap-7 xl:gap-10">
                        <div className=" flex flex-col px-[5%] md:px-0 md:col-span-2 mx-auto">
                            <h2 className="text-dark-gray dark:text-red-primary font-sans font-black text-4xl md:text-6xl xl:text-9xl inline-block  leading-none">
                                empower pro max
                            </h2>
                            <h2 className="text-dark-gray dark:text-red-primary font-sans font-black text-4xl md:text-6xl xl:text-9xl text-right px-2 md:px-0 inline md:-mt-3">
                                & empower gold
                            </h2>
                        </div>
                        <div className="px-[5%] md:px-0 md:pt-6 md:order-2">
                            <p className="text-base md:text-sm-20 lg:text-xl-32 text-dark-gray dark:text-primary-cream-color">
                                Empower Gold honors the wisdom and legacy of those aged 50 and above,
                                reminding them that there’s no age limit to growing in God and serving His
                                kingdom.
                            </p>
                        </div>
                        <div className="md:col-span-2">
                            <Image
                                src={empowerPromaxGoldImage}
                                objectFit="cover"
                                alt="empower promax and gold image"
                                sizes=""
                                className="w-full"
                            />
                        </div>
                        <div className="px-[5%] md:px-0 xl:pr-20  place-content-center order-3">
                            <p className="text-base md:text-sm-20 lg:text-xl-32  text-dark-gray dark:text-primary-cream-color ">
                                In this season of deeper responsibilities—family, work, and ministry—Empower
                                Pro Max becomes a vital space for encouragement, wisdom, and godly fellowship.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* cta */}
            <section className="p-[5%]">
                <div className="container mx-auto">
                    <div className="mx-auto  max-w-[315px] md:max-w-max lg:max-w-[805px]">
                        <p className="text-40 text-dark-gray dark:text-primary-cream-color md:text-64 lg:text-8xl font-sans font-bold tracking-tighter leading-none">
                            stay connected,{" "}
                        </p>
                        <p className="text-40 text-dark-gray dark:text-primary-cream-color md:text-64 lg:text-8xl font-sans font-bold tracking-tighter text-right leading-none  lg:-mr-26 lg:-mt-4  ">
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
        </main>
    );
}

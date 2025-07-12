"use client";

import Link from "next/link";
import Image from "next/image";

// components
import MinistryCard from "../components/ministryCard";
import { eventsList } from "@/data/events";

//images
import empowerYouth from "../../public/emp_youth-1.png";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // Core Swiper styles
import "swiper/css/pagination";
import ScrollToTop from "@/components/scrollToTop";

export default function Home() {
    return (
        <main className="mx-auto bg-foreground dark:bg-background ">
            <div className="bg-red-primary ">
                <div className="  p-[5%] relative">
                    <div className="  flex flex-col gap-5 ">
                        <div className="order-1 xl:gap-20 flex flex-col">
                            <div className="relative flex justify-end ">
                                <div className="xl:-mr-[5%]">
                                    <div className="flex">
                                        <div>
                                            <p className="text-base  xl:text-[40px] text-primary-cream-color font-sans font-bold">
                                                Connect,
                                            </p>
                                            <p className="text-2xl xl:text-64 text-primary-cream-color font-sans font-bold -mt-2">
                                                Grow,
                                            </p>
                                        </div>
                                        <div className="flex relative">
                                            <p className="text-base xl:text-[32px] text-primary-cream-color font-sans font-bold content-start  -rotate-90 absolute bottom-1.5 xl:bottom-5">
                                                and
                                            </p>
                                            <p className="text-4xl xl:text-8xl text-primary-cream-color font-sans font-bold pl-6 xl:pl-10 -mb-1 content-end">
                                                Lead
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <p className="text-base xl:text-64 text-primary-cream-color font-sans font-bold xl:-mt-7">
                                            for
                                        </p>
                                        <p className="text-[40px] xl:text-8xl text-primary-cream-color font-sans font-bold -mt-3 pl-1">
                                            God’s
                                        </p>

                                        <p className="text-[38px] xl:text-8xl text-primary-cream-color font-sans font-bold rotate-90 -ml-8 mt-8 xl:-ml-24 xl:mt-24">
                                            Glory.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-10  flex justify-end">
                                <a
                                    href={"https://www.facebook.com/EMPOWER.Ministry"}
                                    target="_blank"
                                    className="px-8 py-2 border-2 border-primary-cream-color text-[14px] lg:text-xl text-primary-cream-color overflow-hidden relative group cursor-pointer hover:border-dark-gray"
                                >
                                    <span className="absolute inset-0 bg-dark-gray translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 z-0"></span>
                                    <span className="relative z-10 group-hover:text-primary-cream-color transition-colors duration-500">
                                        Watch us on Facebook
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className=" order-2 pt-10">
                            <h1 className="font-bold text-64 xl:text-xl-200 text-primary-cream-color font-playfair absolute -bottom-[15px] lg:-bottom-0 xl:-bottom-[8%]">
                                empower
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* about */}
            <section className="p-[5%] ">
                <div className="container mx-auto">
                    <h1 className="font-black font-sans text-64 md:text-9xl xl:text-xl-250 text-center xl:leading-none text-dark-gray dark:text-primary-cream-color">
                        about us
                    </h1>
                </div>
                <div className=" justify-center xl:py-10 container mx-auto">
                    <div className="max-w-[300px] md:max-w-[452px] xl:max-w-[845px] lg:text-right mx-auto -mt-5 md:-mt-3 xl:-mt-14 relative">
                        <h2 className="font-playfair font-medium text-2xl md:text-xl-32 xl:text-6xl text-red-primary xl:leading-20 text-center xl:text-left xl:absolute -left-28">
                            Fostering faith, leadership,
                        </h2>
                        <h2 className="font-playfair font-medium text-2xl md:text-xl-32 xl:text-6xl text-red-primary xl:leading-20 text-center xl:text-left xl:pt-20">
                            and spiritual growth, all for
                        </h2>
                        <p className="font-playfair font-medium text-2xl md:text-xl-32 xl:text-6xl text-red-primary xl:leading-20 text-right">
                            God&apos;s glory
                        </p>
                    </div>

                    <div className="max-w-sm sm:max-w-full py-6  grid gap-y-10 text-dark-gray dark:text-primary-cream-color">
                        <div className="mx-auto container grid grid-cols-1 sm:grid-cols-3 md:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-4 md:gap-0 lg:gap-16 xl:gap-0 items-start ">
                            <p className="text-base md:text-sm-20 xl:text-2xl sm:max-w-[176px] md:max-w-[200px] lg:max-w-[250px] md:col-span-2   lg:col-start-3 lg:col-span-3">
                                Empower, the IBMF Manila North Sector Youth Development, leads the next
                                generation to Christ through youth camps, training, and seminars.
                            </p>
                            <p className="text-base md:text-sm-20 xl:text-2xl sm:max-w-[176px] md:max-w-[200px] lg:max-w-[250px] md:col-start-4 md:col-span-2 lg:col-span-3">
                                We connect youth with nearby IBMF churches, fostering faith, leadership, and
                                spiritual growth all for God&apos;s glory.
                            </p>
                            <p className="text-base md:text-sm-20 xl:text-2xl sm:max-w-[176px] md:max-w-[200px] lg:max-w-[250px] md:col-start-7 md:col-span-2  lg:col-span-3">
                                Through weekly podcasts, Empower brings faith-filled conversations to youth
                                wherever they are
                            </p>
                        </div>
                        <div className="container mx-auto relative grid md:grid-cols-4 lg:grid-cols-12 lg:gap-16 xl:gap-0">
                            <div className="lg:col-start-3 col-span-4 ">
                                <Link
                                    href={"/about"}
                                    className="inline-block overflow-hidden relative  group px-8 py-3 border-[1px] border-black dark:border-primary-cream-color  cursor-pointer z-0"
                                >
                                    <span className="absolute inset-0 dark:bg-primary-cream-color bg-dark-gray -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 z-10"></span>
                                    <span className="relative z-20 dark:group-hover:text-dark-gray group-hover:text-primary-cream-color transition-colors duration-500">
                                        Get to know us better
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ministries */}
            <section className=" ">
                <div className="p-[5%] relative ">
                    <div className="container mx-auto">
                        <h1 className="relative z-10 inline-block font-black font-sans text-dark-gray dark:text-primary-cream-color md:text-7xl xl:text-9xl text-5xl after:content-[''] after:absolute after:bottom-0 after:right-0 after:translate-x-1/2 after:translate-y-1/4 after:p-3 after:bg-red-primary after:-z-10 xl:after:p-10 ">
                            ministries
                        </h1>
                    </div>
                </div>
                <div className="pb-[5%] ">
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={24}
                        slidesPerView={1}
                        grabCursor={true}
                        navigation={true}
                        className=" py-12 "
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 24,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1440: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide className="">
                            <MinistryCard
                                title="Empower youth"
                                image={empowerYouth}
                                description="Empower, the IBMF Manila North Sector Youth Development, leads the next generation to Christ through youth camps, training, and seminars."
                            ></MinistryCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MinistryCard
                                title="Empower pro"
                                image={empowerYouth}
                                description="Empower, the IBMF Manila North Sector Youth Development, leads the next generation to Christ through youth camps, training, and seminars."
                            ></MinistryCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MinistryCard
                                title="Empower pro max"
                                image={empowerYouth}
                                description="Empower, the IBMF Manila North Sector Youth Development, leads the next generation to Christ through youth camps, training, and seminars."
                            ></MinistryCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MinistryCard
                                title="Empower gold"
                                image={empowerYouth}
                                description="Empower, the IBMF Manila North Sector Youth Development, leads the next generation to Christ through youth camps, training, and seminars."
                            ></MinistryCard>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            {/* events */}
            <div className="p-[5%]">
                <div className="container mx-auto ">
                    <h1 className="relative z-10 inline-block font-black font-sans text-dark-gray dark:text-primary-cream-color md:text-7xl xl:text-9xl text-5xl after:content-[''] after:absolute after:bottom-0 after:right-0 after:translate-x-1/2 after:translate-y-1/4 after:p-3 after:bg-red-primary after:-z-10 xl:after:p-10 lg:mb-[5%]">
                        events
                    </h1>
                </div>
                <div className="container ml-auto">
                    <div className="grid pt-10 lg:ml-50">
                        {eventsList.slice(0, 3).map((event) => (
                            <div className="relative" key={event.id}>
                                <div className=" before:content-[''] before:absolute before:top-0 before:left-0  xl:before:left-60 before:right-0 before:h-[1px] before:bg-dark-gray dark:before:bg-foreground p-3"></div>
                                <div className="grid gap-5 lg:gap-10  sm:grid-cols-2 sm:pb-6 ">
                                    <div className="relative justify-items-end">
                                        {/* <div className=" before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-dark-gray dark:before:bg-foreground p-3"></div> */}
                                        <Image
                                            src={event.image}
                                            width={100}
                                            height={100}
                                            objectFit="cover"
                                            alt="events image"
                                            className="w-full md:max-w-[340px] lg:max-w-[376px] justify-end"
                                        />
                                    </div>
                                    <div className="font-sans flex flex-col justify-between">
                                        <span className="text-sm-20 text-dark-gray dark:text-primary-cream-color">
                                            {event.eventDate}
                                        </span>
                                        <div className="py-3 lg:py-0 ">
                                            <p className="text-base text-sm-20 text-dark-gray dark:text-primary-cream-color lg:text-xl-32 font-bold ">
                                                {event.title}
                                            </p>
                                            <p className="text-base text-sm-20 text-dark-gray dark:text-primary-cream-color">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
                {/* contact */}
            <div className="p-[5%] flex justify-center items-center ">
                <div className="container mx-auto max-w-[350px] md:max-w-[420px] xl:max-w-[995px] pb-16 xl:p-[5%] ">
                    <p className="text-5xl md:text-64 xl:text-9xl text-dark-gray dark:text-primary-cream-color font-sans font-bold tracking-tighter leading-none  ">
                        let’s{" "}
                        <span className="text-5xl md:text-64 xl:text-9xl text-red-primary font-sans font-bold tracking-tighter  ">
                            empower
                        </span>
                    </p>
                    <p className="text-5xl md:text-64 xl:text-9xl text-dark-gray dark:text-primary-cream-color font-sans font-bold tracking-tighter text-right -ml-2 -mt-2.5 ">
                        your journey
                    </p>
                    <p className="font-sans font-medium text-dark-gray dark:text-primary-cream-color text-sm-20 text-center p-4 leading-tight xl:text-5xl">
                        We believe God has a purpose for your life — and you don’t have to walk it alone.
                    </p>
                    <div className="text-center">
                        <Link
                            href={"/"}
                            className=" p-2 text-sm-20 xl:text-xl-32 text-red-primary border-b-[1px] border-red-primary "
                        >
                            Send us a message
                        </Link>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </main>
    );
}

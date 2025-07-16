"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import aboutBanner from "../../../public/about-banner-img.png";
import aboutimg from "../../../public/banner img_xl.png";
import whoImage from "../../../public/who-img.png";
import visionImgae from "../../../public/vision-img.png";
import missionImage from "../../../public/mission-img.png";

import ScrollToTop from "@/components/scrollToTop";
import { teamList } from "@/data/our_team";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // Core Swiper styles
import "swiper/css/pagination";
import { customPagination } from "@/components/paginationBullets";
import StaggerItem from "@/components/StaggerItem";
import { StaggerContainer } from "@/components/staggerContainer";
import RevealOnScroll from "@/components/revealOnScroll";
import { motion, useScroll, useTransform } from "motion/react";

export default function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
    // const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
    return (
        <main className="mx-auto bg-foreground dark:bg-background">
            {/* hero section */}
            <section className="pt-[5%]">
                <div className="relative">
                    <div className="text-center">
                        <RevealOnScroll className="text-dark-gray dark:text-primary-cream-color text-64 md:text-9xl xl:text-heading font-sans font-bold  -mb-7 xl:-mb-10 relative z-10">
                            about us
                        </RevealOnScroll>
                    </div>
                    <div ref={ref}>
                        <div className="relative p-[17%] overflow-hidden">
                            {/* <Image
                            src={aboutimg}
                            objectFit="cover"
                            fill
                            alt="about banner image"
                            // className="absolute top-0 right-0 bottom-0 left-0"
                        /> */}
                            <motion.div
                                style={{
                                    top: y,
                                }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={aboutBanner}
                                    alt="about banner image"
                                    // fill
                                    objectFit="cover"
                                    className="absolute top-0 right-0 bottom-0 left-0 "
                                    loading="lazy"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* who we are */}
            <section className="lg:p-[5%] ">
                <div className="grid lg:grid-cols-2 xl:gap-y-20 container mx-auto ">
                    <StaggerContainer className="p-[5%] place-content-center place-items-center order-1">
                        <StaggerItem className="">
                            <h2 className="text-center text-red-primary font-sans font-black text-4xl lg:text-5xl mb-1 lg:mb-3">
                                who we are
                            </h2>
                        </StaggerItem>
                        <StaggerItem className="lg:max-w-[540px] ">
                            <p className="text-base lg:text-2xl text-dark-gray text-center font-sans  dark:text-primary-cream-color">
                                Empower, the IBMF Manila North Sector Youth Development, leads the next
                                generation to Christ through youth camps, training, and seminars. We connect
                                youth with nearby IBMF churches, fostering faith, leadership, and spiritual
                                growth all for God&apos;s glory.
                            </p>
                        </StaggerItem>
                    </StaggerContainer>
                    <div className="relative place-items-center order-2">
                        <RevealOnScroll className="w-full  xl:max-w-[552px]">
                            <Image
                                src={whoImage}
                                objectFit="cover"
                                alt="who we are  image"
                                className="w-full  xl:max-w-[552px]"
                            />
                        </RevealOnScroll>
                    </div>
                    <div className="p-[5%] place-content-center place-items-center order-3 lg:order-4">
                        <RevealOnScroll className="">
                            <h2 className="text-center text-red-primary font-sans font-black text-4xl lg:text-5xl mb-1 lg:mb-3">
                                our vision
                            </h2>
                        </RevealOnScroll>
                        <RevealOnScroll className="max-w-[240px] lg:max-w-[434px] ">
                            <p className="text-base lg:text-2xl text-dark-gray text-center font-sans  dark:text-primary-cream-color">
                                To see a generation fully alive in Christ and equipped to make disciples.
                            </p>
                        </RevealOnScroll>
                    </div>
                    <RevealOnScroll className="relative place-items-center order-4 lg:order-3">
                        <Image
                            src={visionImgae}
                            objectFit="cover"
                            alt="vision  image"
                            className="w-full  xl:max-w-[351px]"
                        />
                    </RevealOnScroll>
                    <div className="p-[5%] place-content-center place-items-center order-5">
                        <RevealOnScroll className="">
                            <h2 className="text-center text-red-primary font-sans font-black text-4xl lg:text-5xl mb-1 lg:mb-3">
                                our mission
                            </h2>
                        </RevealOnScroll>
                        <RevealOnScroll className="max-w-[300px] lg:max-w-[411px]">
                            <p className="text-base lg:text-2xl text-dark-gray text-center font-sans dark:text-primary-cream-color">
                                “We disciple young believers through biblical teaching, spirit-led worship,
                                and intentional community.”
                            </p>
                        </RevealOnScroll>
                    </div>
                    <RevealOnScroll className="relative place-items-center order-6">
                        <Image
                            src={missionImage}
                            objectFit="cover"
                            alt="mission image"
                            className="w-full  xl:max-w-[552px]"
                        />
                    </RevealOnScroll>
                </div>
            </section>

            {/* our belief */}
            <section className="p-[5%]">
                <div className="container mx-auto">
                    <div className="">
                        <RevealOnScroll className="text-center text-red-primary font-sans font-black text-4xl lg:text-5xl mb-1 lg:mb-3">
                            our belief
                        </RevealOnScroll>
                        <RevealOnScroll className="font-sans font-bold text-dark-gray dark:text-primary-cream-color text-4xl xl:text-9xl text-center mb-8 ">
                            Statement of Faith
                        </RevealOnScroll>
                    </div>
                    <div className="xl:max-w-[1110px] container mx-auto text-dark-gray dark:text-primary-cream-color">
                        <RevealOnScroll className="font-sans text-base xl:text-4xl  mb-4">
                            We believe in the verbal inspiration and authority of the scriptures
                        </RevealOnScroll>
                        <RevealOnScroll className="font-sans text-base xl:text-4xl  mb-4">
                            We believe that the Bible reveals God,The Fall of Men, The way of Salvation and
                            God’s Plan and purpose in the ages
                        </RevealOnScroll>
                        <RevealOnScroll className="font-sans text-base xl:text-4xl  mb-4">
                            We believe in God the Father, God the Son and God the Holy Spirit
                        </RevealOnScroll>
                        <RevealOnScroll className="font-sans text-base xl:text-4xl  mb-4">
                            We believe in the Deity, Virgin Birth and bodily resurrection of Jesus Christ
                        </RevealOnScroll>
                        <RevealOnScroll className="font-sans text-base xl:text-4xl  mb-4">
                            We believe in that Salvation is by grace plus nothing minus nothing.The conditions
                            to Salvation are repentance and faith
                        </RevealOnScroll>
                        <RevealOnScroll className="font-sans text-base xl:text-4xl  mb-4">
                            We believe that men are justified by faith alone and are accounted righteous
                            before God only through the merits of our Lord and Savior Jesus Christ.
                            Justification establishes an eternal relationship that can never be broken.
                        </RevealOnScroll>
                        <RevealOnScroll className="font-sans text-base xl:text-4xl  mb-4">
                            We believe that a trinitarian God in creation created man (gender) and from man, a
                            woman (gender).
                        </RevealOnScroll>
                        <RevealOnScroll className="font-sans text-base xl:text-4xl  mb-4">
                            We believe that in creation, God, created man and woman for marriage and for the
                            purposes of establishing family life thereby making way for propagation and
                            multiplication of civilization on th earth.
                        </RevealOnScroll>
                        <RevealOnScroll className="font-sans text-base xl:text-4xl  mb-4">
                            We believe that marriage between man and woman is permanent and inviolable as
                            established by God in creation.
                        </RevealOnScroll>
                        <RevealOnScroll className="font-sans text-base xl:text-4xl  mb-4">
                            We believe in the visible, personal and pre-millenial return of Jesus Christ
                        </RevealOnScroll>
                        <RevealOnScroll className="font-sans text-base xl:text-4xl  mb-4">
                            We believe in the everlasting conscious blessedness of the saved and the
                            everlasting conscious punishment of the lost.
                        </RevealOnScroll>
                    </div>
                </div>
            </section>
            {/* meet the team */}
            <section className="">
                <div className="p-5p pb-0">
                    <div className="container mx-auto">
                        <RevealOnScroll>
                            <h1 className="relative z-10  text-center text-red-primary font-sans font-black text-4xl lg:text-5xl mb-1 lg:mb-3 ">
                                meet the team
                            </h1>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            <p className="font-sans text-base lg:text-2xl xl:text-3xl text-center mb-8 text-dark-gray dark:text-primary-cream-color">
                                The hearts behind Empower — Empowered to empower others
                            </p>
                        </RevealOnScroll>
                    </div>
                </div>
                <StaggerContainer className="">
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        grabCursor={true}
                        navigation={true}
                        pagination={customPagination}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1440: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {teamList.map((team) => (
                            <SwiperSlide key={team.id}>
                                <StaggerItem className="flex flex-col gap-10">
                                    <div>
                                        <p className="font-sans font-bold text-2xl md:text-xl-32 text-dark-gray dark:text-primary-cream-color -mb-2">
                                            {team.name}
                                        </p>
                                        <span className="font-sans font-bold text-base md:text-18 text-dark-gray dark:text-primary-cream-color">
                                            {team.title}
                                        </span>
                                    </div>
                                    <div>
                                        <Image
                                            src={team.image}
                                            width={130}
                                            height={130}
                                            alt="our team image"
                                            objectFit="cover"
                                            className="w-full"
                                        />
                                    </div>
                                </StaggerItem>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </StaggerContainer>
            </section>
            <section className="p-5p"></section>
            {/* cta */}
            <section className="p-[5%]">
                <div className="container mx-auto">
                    <StaggerContainer className="mx-auto  max-w-[315px] lg:max-w-[805px]">
                        <StaggerItem>
                            <p className="text-40 text-dark-gray dark:text-primary-cream-color lg:text-8xl font-sans font-bold tracking-tighter leading-none">
                                stay connected,{" "}
                            </p>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="text-40 text-dark-gray dark:text-primary-cream-color lg:text-8xl font-sans font-bold tracking-tighter text-right leading-none  lg:-mr-26 lg:-mt-4  ">
                                stay{" "}
                                <span className="text-red-primary tracking-tighter leading-none  relative">
                                    <motion.span
                                        variants={{
                                            hidden: { left: "10%" },
                                            visible: { left: "100%" },
                                        }}
                                        initial="hidden"
                                        whileInView="visible"
                                        // transition={{ delay: 0.5 }}
                                        // animate={{ left: "0%" }}
                                        transition={{
                                            delay: 0.2,
                                            duration: 0.1,
                                            // repeat: Infinity, // loop forever
                                            // repeatDelay: 1.5, // 1 second gap before repeating
                                            // ease: "linear", // smooth motion
                                        }}
                                        className="absolute top-0 right-0 bottom-0 left-0 bg-dark-gray dark:bg-primary-cream-color z-10"
                                    />
                                    empowered
                                </span>
                            </p>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
                <StaggerContainer className="p-4 grid  md:grid-cols-2 grid-flow-row-dense">
                    <StaggerItem className="max-w-[230px] lg:max-w-[550px] leading-tight justify-self-end md:justify-self-start pr-1 lg:pr-8 col-start-2">
                        <p className="text-base text-dark-gray dark:text-primary-cream-color lg:text-2xl font-sans ">
                            One of the ways we extend our mission beyond gatherings is through our{" "}
                            <b>Empower Podcast</b>— a space where we share faith-filled conversations,
                            testimonies, and teachings to inspire youth wherever they are.
                        </p>
                    </StaggerItem>
                    <StaggerItem className=" pt-5  justify-self-end md:justify-self-start pr-5 flex-wrap flex col-start-2">
                        <a
                            href={"https://www.facebook.com/EMPOWER.Ministry"}
                            target="_blank"
                            className="px-8 py-3 bg-red-primary rounded-2xl text-base lg:text-xl text-primary-cream-color font-sans hover:bg-red-dark"
                        >
                            Listen on Facebook
                        </a>
                    </StaggerItem>
                </StaggerContainer>
            </section>
            <ScrollToTop />
        </main>
    );
}

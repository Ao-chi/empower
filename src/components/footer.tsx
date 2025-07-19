"use client";
import * as React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { StaggerContainer } from "./staggerContainer";
import StaggerItem from "./StaggerItem";

import { useRef } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";

export default function Footer() {
    const navLinks = [
        { label: "home", link: "/" },
        { label: "about", link: "/about" },
        { label: "ministries", link: "/ministries" },
        { label: "events", link: "/events" },
        { label: "watch", link: "/watch" },
        { label: "contact", link: "/contact-us" },
    ];

    return (
        <footer className="bg-background dark:bg-background p-[5%] mt-auto">
            <div className="container flex flex-col lg:flex-row gap-5 xl:gap-20 mx-auto">
                {/* explore */}
                <div>
                    <StaggerContainer className="flex flex-col">
                        <StaggerItem>
                            <h2 className="font-sans font-medium text-white text-2xl md:text-4xl px-3 py-5">
                                Explore
                            </h2>
                        </StaggerItem>

                        {navLinks.map((link) => (
                            <StaggerItem className="p-3" key={link.label}>
                                <Link
                                    href={link.link}
                                    className="font-nunito text-gray-light text-[20px]  content-center hover:text-red-primary transition-colors duration-300 capitalize"
                                >
                                    {link.label}
                                </Link>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
                {/* follow us */}
                <StaggerContainer className="flex flex-col">
                    <StaggerItem className="px-3 py-5 xl:pb-5">
                        <h2 className="font-sans font-medium text-white text-2xl md:text-4xl ">Follow Us</h2>
                    </StaggerItem>
                    <StaggerContainer className="flex ">
                        <StaggerItem className="p-3 content-center">
                            <a
                                href={"/https://www.facebook.com/EMPOWER.Ministry"}
                                className="font-nunito text-gray-light  hover:text-red-primary transition-all duration-75"
                            >
                                <FontAwesomeIcon icon={faFacebook} className="text-4xl" />
                            </a>
                        </StaggerItem>
                        <StaggerItem className="p-3 ">
                            <Link
                                href={"/empower"}
                                className="font-nunito text-gray-light  content-center hover:text-red-primary "
                            >
                                <FontAwesomeIcon icon={faYoutube} className="text-4xl" />
                            </Link>
                        </StaggerItem>
                    </StaggerContainer>
                </StaggerContainer>
            </div>
            <div className="container pt-28 mx-auto">
                <span className="text-gray-light text-[16px] p-3 ">© 2025 Empower. All rights reserved.</span>
            </div>
        </footer>
    );
}

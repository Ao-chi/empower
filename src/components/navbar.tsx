"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import empowerIcon from "../../public/empower.svg";
import ThemeToggler from "./theme-toggler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

    const navLinks = [
        { label: "home", link: "/" },
        { label: "about", link: "/about" },
        { label: "ministries", link: "/ministries" },
        { label: "events", link: "/events" },
        { label: "watch", link: "/watch" },
        { label: "contact", link: "/contact-us" },
    ];

    const handleOpenMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const pathname = usePathname();
    return (
        <nav className="bg-background dark:bg-background items-center min-h-[75px]  lg:min-h-24 content-center px-[5%] sticky top-0 z-100">
            {/* desktop navbar */}
            <div className="container flex justify-between content-center mx-auto">
                <Link href={"/"} className="flex justify-start">
                    <Image priority src={empowerIcon} alt="empower_icon" className="w-[140px] lg:w-[203px]" />
                </Link>
                {/* mobile burger */}
                <div className="flex justify-center items-center lg:hidden z-20">
                    <button
                        onClick={() => {
                            handleOpenMobileNav();
                            console.log(isMobileNavOpen);
                        }}
                    >
                        {!isMobileNavOpen ? (
                            <FontAwesomeIcon icon={faBars} className="text-2xl text-primary-cream-color" />
                        ) : (
                            <FontAwesomeIcon icon={faXmark} className="text-2xl text-primary-cream-color" />
                        )}
                    </button>
                </div>
                {/* mobile nav */}
                <div
                    className={`lg:hidden bg-background dark:bg-background absolute top-0 right-0 left-0 bottom-0 overflow-hidden ease-in-out transition-all  duration-200  ${
                        isMobileNavOpen ? "h-screen" : "h-0"
                    }`}
                >
                    <div className=" flex  h-screen">
                        <div className="flex justify-center items-start font-nunito flex-col w-full p-[5%] gap-5 ">
                            <Link
                                href={"/"}
                                className={`font-medium text-primary-cream-color text-transform: uppercase text-4xl px-3 content-center hover:text-red-primary hover:text-52 link ${
                                    pathname === "/" ? "text-red-primary" : "text-primary-cream-color"
                                }`}
                                onClick={() => handleOpenMobileNav()}
                            >
                                Home
                            </Link>
                            <Link
                                href={"/about"}
                                className={`font-medium text-primary-cream-color text-transform: uppercase text-4xl px-3 content-center hover:text-red-primary hover:text-52 link ${
                                    pathname === "/about" ? "text-red-primary " : "text-primary-cream-color"
                                }`}
                                onClick={() => handleOpenMobileNav()}
                            >
                                About
                            </Link>
                            <Link
                                href={"/ministries"}
                                className={`font-medium text-primary-cream-color text-transform: uppercase text-4xl px-3 content-center hover:text-red-primary hover:text-52 link ${
                                    pathname === "/ministries"
                                        ? "text-red-primary "
                                        : "text-primary-cream-color"
                                }`}
                                onClick={() => handleOpenMobileNav()}
                            >
                                Ministries
                            </Link>
                            <Link
                                href={"/events"}
                                className={`font-medium text-primary-cream-color text-transform: uppercase text-4xl px-3 content-center hover:text-red-primary hover:text-52 link ${
                                    pathname === "/events" ? "text-red-primary " : "text-primary-cream-color"
                                }`}
                                onClick={() => handleOpenMobileNav()}
                            >
                                Events
                            </Link>
                            <Link
                                href={"/watch"}
                                className={`font-medium text-primary-cream-color text-transform: uppercase text-4xl px-3 content-center hover:text-red-primary hover:text-52 link ${
                                    pathname === "/watch" ? "text-red-primary " : "text-primary-cream-color"
                                }`}
                                onClick={() => handleOpenMobileNav()}
                            >
                                Watch
                            </Link>
                            <Link
                                href={"/contact-us"}
                                className={`font-medium text-primary-cream-color text-transform: uppercase text-4xl px-3 content-center hover:text-red-primary hover:text-52 link ${
                                    pathname === "/contact-us"
                                        ? "text-red-primary "
                                        : "text-primary-cream-color"
                                }`}
                                onClick={() => handleOpenMobileNav()}
                            >
                                Contact Us
                            </Link>
                            <div className=" text-primary-cream-color px-3 w-[24px] relative mt-3">
                                <ThemeToggler />
                            </div>
                        </div>
                    </div>
                </div>
                {/* desktop */}
                <div className="hidden lg:flex">
                    <div className="flex font-nunito">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.link}
                                className={`font-medium text-primary-cream-color text-transform: uppercase text-base lg:text-lg px-2 xl:px-4 content-center hover:text-red-primary link ${
                                    pathname === link.link ? "text-red-primary" : "text-primary-cream-color"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className=" text-primary-cream-color px-3 w-[24px] relative">
                            <ThemeToggler />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

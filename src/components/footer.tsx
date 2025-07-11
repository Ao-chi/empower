"use client";
import * as React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-background dark:bg-background p-[5%] mt-auto ">
            <div className="container flex flex-col lg:flex-row gap-5 xl:gap-20 mx-auto">
                {/* explore */}
                <div>
                    <div className="flex flex-col">
                        <h2 className="font-sans font-medium text-white text-2xl md:text-4xl px-3 py-5">
                            Explore
                        </h2>
                        <Link
                            href={"/"}
                            className={`font-nunito text-gray-light text-[20px] p-3 content-center hover:text-red-primary  
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            href={"/about"}
                            className={`font-nunito text-gray-light text-[20px] p-3 content-center hover:text-red-primary  
                            }`}
                        >
                            About
                        </Link>
                        <Link
                            href={"/ministries"}
                            className={`font-nunito text-gray-light text-[20px] p-3 content-center hover:text-red-primary  
                            }`}
                        >
                            Ministries
                        </Link>
                        <Link
                            href={"/events"}
                            className={`font-nunito text-gray-light text-[20px] p-3 content-center hover:text-red-primary  
                            }`}
                        >
                            Events
                        </Link>
                        <Link
                            href={"/get-involved"}
                            className={`font-nunito text-gray-light text-[20px] p-3 content-center hover:text-red-primary  
                            }`}
                        >
                            Get Involved
                        </Link>
                        <Link
                            href={"/contact-us"}
                            className={`font-nunito text-gray-light text-[20px] p-3 content-center hover:text-red-primary   
                            }`}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
                {/* follow us */}
                <div className="flex flex-col">
                    <h2 className="font-sans font-medium text-white text-2xl md:text-4xl px-3 py-5 xl:pb-5">
                        Follow Us
                    </h2>
                    <div>
                        <a
                            href={"/https://www.facebook.com/EMPOWER.Ministry"}
                            className="font-nunito text-gray-light p-3 content-center hover:text-red-primary transition-all duration-75"
                        >
                            <FontAwesomeIcon icon={faFacebook} className="text-4xl" />
                        </a>
                        <Link
                            href={"/empower"}
                            className="font-nunito text-gray-light  p-3 content-center hover:text-red-primary "
                        >
                            <FontAwesomeIcon icon={faYoutube} className="text-4xl" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container pt-28 mx-auto">
                <span className="text-gray-light text-[16px] p-3 ">© 2025 Empower. All rights reserved.</span>
            </div>
        </footer>
    );
}

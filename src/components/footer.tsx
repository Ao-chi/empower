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
                        <h2 className="font-sans text-white text-4xl px-3 py-5">Explore</h2>
                        <Link
                            href={"/"}
                            className="font-nunito text-gray-light text-[20px] p-3 content-center"
                        >
                            Home
                        </Link>
                        <Link
                            href={"/empower"}
                            className="font-nunito text-gray-light text-[20px] p-3 content-center"
                        >
                            About
                        </Link>
                        <Link
                            href={"/empower"}
                            className="font-nunito text-gray-light text-[20px] p-3 content-center"
                        >
                            Ministries
                        </Link>
                        <Link
                            href={"/empower"}
                            className="font-nunito text-gray-light text-[20px] p-3 content-center"
                        >
                            Events
                        </Link>
                        <Link
                            href={"/empower"}
                            className="font-nunito text-gray-light text-[20px] p-3 content-center"
                        >
                            Get Involved
                        </Link>
                        <Link
                            href={"/empower"}
                            className="font-nunito text-gray-light text-[20px] p-3 content-center"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
                {/* follow us */}
                <div className="flex flex-col">
                    <h2 className="font-sans text-white text-4xl px-3 py-5 xl:pb-5">Follow Us</h2>
                    <div>
                        <Link href={"/"} className="font-nunito text-gray-light p-3 content-center">
                            <FontAwesomeIcon icon={faFacebook} className="text-4xl" />
                        </Link>
                        <Link href={"/empower"} className="font-nunito text-gray-light  p-3 content-center">
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

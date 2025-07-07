import Link from "next/link";
import React from "react";

export default function NotFound() {
    return (
        <section className="p-[5%] bg-foreground dark:bg-background">
            <div className="grid place-content-center place-items-center container mx-auto">
                <h2 className="font-sans font-black text-dark-gray dark:text-red-primary text-9xl md:text-[250px] -mb-5 md:-mb-10">
                    404
                </h2>
                <h3 className="font-sans font-black text-dark-gray dark:text-red-primary text-xl-32 md:text-64">
                    Page Not Found
                </h3>
                <p className="font-sans text-base md:text-2xl text-dark-gray dark:text-primary-cream-color text-center">
                    It seems you&apos;ve wandered off the path, but don&apos;t worry! We&apos;re here to guide
                    you back.
                </p>
                <div className="py-5 md:py-10">
                    <Link
                        href={"/"}
                        className="px-8 py-3 bg-red-primary rounded-2xl text-base lg:text-xl text-primary-cream-color font-sans hover:bg-red-dark"
                    >
                        Return to Home
                    </Link>
                </div>
                <p className="font-sans text-base md:text-2xl text-dark-gray dark:text-primary-cream-color text-center max-w-[973px]">
                    Remember, even in our digital journeys, God&apos;s grace and guidance are always with us.
                    Let&apos;s continue to seek His word and wisdom together.
                </p>
            </div>
        </section>
    );
}

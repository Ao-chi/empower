"use client";
import React from "react";
import { motion, Variants } from "motion/react";

const childVariants: Variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function StaggerItem({
    children,
    // delay = 0.2,
    className,
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            // initial={{ opacity: 0, y: 75 }}
            // whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }} // triggers when 20% visible
            // transition={{ duration: 0.5, delay }}
            variants={childVariants}
            className={`z-40 ${className}`}
        >
            {children}
        </motion.div>
    );
}

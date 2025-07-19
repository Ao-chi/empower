"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const childVariants: Variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
};

export default function RevealOnScroll({
    children,
    delay = 0,
    className,
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
                amount: 0.2,
                // once: true
            }} // triggers when 20% visible
            transition={{ duration: 0.3 }}
            className={className}
            variants={childVariants}
        >
            {children}
        </motion.div>
    );
}

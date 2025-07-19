"use client";
import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            duration: 0.3,
            staggerChildren: 0.2, // adjust as needed
        },
    },
};

type Props = {
    children: React.ReactNode;
    className?: string;
};

export const StaggerContainer = ({ children, className }: Props) => {
    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                amount: 0.2,
                // once: true
            }}
        >
            {children}
        </motion.div>
    );
};

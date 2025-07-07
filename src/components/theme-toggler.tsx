"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeToggler() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <div>
            <button
                className="absolute top-1/2 left-1/2 -translate-1/2 -translate-y-1/2  hover:cursor-pointer"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                <FontAwesomeIcon
                    icon={faMoon}
                    className="  text-primary-cream-color dark:text-primary-cream-color hover:text-red-primary  rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
                />
            </button>

            <button
                className="absolute top-1/2 left-1/2 -translate-1/2 -translate-y-1/2   hover:cursor-pointer"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                <FontAwesomeIcon
                    icon={faSun}
                    className="  dark:text-primary-cream-color text-primary-cream-color hover:text-red-primary rotate-90 scale-0 dark:-rotate-0 dark:scale-100"
                />
            </button>
        </div>
    );
}

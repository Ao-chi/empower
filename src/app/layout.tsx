import type { Metadata } from "next";
import { Inter, Playfair_Display, Archivo, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { ThemeProvider } from "next-themes";

const inter = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});

const archivo = Archivo({
    subsets: ["latin"],
    variable: "--font-archivo",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

const nunito = Nunito({
    subsets: ["latin"],
    variable: "--font-nunito",
});

export const metadata: Metadata = {
    title: "Empower",
    description: "Empower website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${archivo.variable} ${playfair.variable} ${nunito.variable} antialiased flex flex-col min-h-screen `}
            >
                <ThemeProvider attribute="class" enableSystem={false}>
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}

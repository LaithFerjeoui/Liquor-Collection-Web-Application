"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import GlowingButton from "./ui/GlowingButton";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
    const words = `Discover the finest selection of timeless wines from the most renowned cellars.`;

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/img/HeroBg.jpg"
                    alt="Vintage Wine Cellar"
                    fill
                    className="object-cover brightness-75"
                    priority  // High priority image loading
                />
            </div>

            {/* Overlay */}
            <motion.div
                className="absolute inset-0 bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <motion.h1
                    className="text-white font-playfair text-shadow text-6xl md:text-8xl font-normal uppercase tracking-wider drop-shadow-lg"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    Vintage Wines
                </motion.h1>
                <TextGenerateEffect words={words} />

                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.2, ease: "easeOut" }}
                >
                    <GlowingButton />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

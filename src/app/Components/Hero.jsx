"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import GlowingButton from "./ui/GlowingButton";

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/img/HeroBg.jpg"
                    alt="Vintage Wine Cellar"
                    fill
                    className="object-cover brightness-75"
                />
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                {/* Headline */}
                <motion.h1
                    className="text-[#d4af37] font-playfair  text-shadow text-6xl md:text-8xl font-bold uppercase tracking-wider drop-shadow-lg"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Vintage Wines
                </motion.h1>
                {/* Subheadline */}
                <motion.p
                    className="text-white font-playfair text-lg md:text-xl mt-6 max-w-3xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    Discover the finest selection of timeless wines from the most renowned cellars.
                </motion.p>

                {/* Call-to-Action */}
                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    <GlowingButton />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

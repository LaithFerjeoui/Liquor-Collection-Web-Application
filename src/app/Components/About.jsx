"use client";
import Image from "next/image";
import React from "react";
import Container from "./Container";
import { Spotlight } from "./ui/Spotlight";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { containerVariants, imageVariants, textVariants2, textVariants3 } from "../utils/Index";

const About = () => {
  const quote = `"Every sip tells a story.`;

  return (
    <Container>
      <section className="text-[#ffffff] relative py-16 " id="about" >
        <Spotlight className="-top-20 right-0 md:right-60 md:-top-20" fill="#7C4F25" />

        {/* Ornament Above Heading */}
        <div className="flex justify-center mb-6">

          <Image
            src="/img/ornament2.png"
            width={400}
            height={400}
            alt="ornament"
          />

        </div>

        {/* Section Title */}
        <motion.h2
          variants={textVariants2}
          initial="hidden"
          whileInView="visible"
          className="text-center text-3xl md:text-4xl mb-4 tracking-wide font-playfair"
        >
          A Connoisseur’s Journey
        </motion.h2>

        <div className="flex justify-center">
          <TextGenerateEffect words={quote} quote={true} />
        </div>

        {/* About Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col md:flex-row items-center gap-8"
        >
          {/* Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            className="flex-shrink-0"
          >
            <Image
              src="/img/glass.jpg"
              width={400}
              height={500}
              alt="liquor collector"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <motion.h3
              variants={textVariants2}
              initial="hidden"
              whileInView="visible"
              className="text-2xl font-semibold mb-4 font-playfair"
            >
              Meet{" "}
              <span className="bg-gradient-to-r from-[#ff7e00] to-[#FFD700] text-transparent bg-clip-text font-playfair">
                Rick&apos;s  Vintage Wines Collection
              </span>
            </motion.h3>
            <motion.p
              variants={textVariants3}
              initial="hidden"
              whileInView="visible"
              className="leading-relaxed mb-4 font-playfair"
            >
              A lifelong lover of fine spirits and an adventurous palate, Rick has
              traveled the world in pursuit of the rarest and most exquisite liquors. His passion goes
              beyond mere tasting—it&apos;s about uncovering the stories behind each bottle and celebrating
              the craftsmanship that makes them unique.
            </motion.p>
            <motion.p
              variants={textVariants3}
              initial="hidden"
              whileInView="visible"
              className="leading-relaxed font-playfair"
            >
              This collection is more than just a display; it&apos;s a journey through time and taste,
              preserving the art and legacy of liquor-making. From the smoky allure of rare single
              malts to the velvety elegance of vintage cognacs, every bottle has a tale waiting to be
              shared.
            </motion.p>
          </div>
        </motion.div>

        {/* Ornament Below Content */}
        <div className="flex justify-center mt-8">

          <Image
            src="/img/ornament2.png"
            width={400}
            height={400}
            alt="ornament"
          />

        </div>
      </section>
    </Container>
  );
};

export default About;

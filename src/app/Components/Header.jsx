"use client";
import { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../utils/Index";
import Button from "./Button";
import MenuSvg from "../utils/MenuSvg";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  console.log(activeSection)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(`#${sectionId}`);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-[999] ${openNavigation ? "bg-black/40" : "backdrop-blur-sm"}`}>
      <div className="flex items-center justify-around lg:py-3">
        {/* Logo Section */}
        <Link href="/" className="flex justify-start mx-6 sm:mx-0 sm:justify-center items-center gap-4 w-[16rem]">
          <h2 className={`font-normal font-playfair text-3xl md:text-3xl py-6 hover:mb-2 duration-300 transition-all ease-in-out transform text-white`}>
            Vintage Wines
          </h2>
        </Link>

        {/* Mobile Navigation */}
        {openNavigation && (
          <div className="fixed inset-0 bg-black opacity-70 z-40 lg:hidden" onClick={toggleNavigation}></div>
        )}
        <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-black/40 z-50 lg:hidden`}>
          <motion.div
            key={openNavigation ? "open" : "closed"}
            className="relative z-50 flex flex-col items-center justify-center m-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
              >
                <a
                  href={`${item.url}`}
                  onClick={handleClick}
                  className={`block relative text-white font-code text-2xl transition-colors hover:text-color-1 px-6 py-6 md:py-8 ${activeSection === item.url ? "text-[#d4af37] font-semibold" : "font-medium"
                    }`}
                >
                  {item.title}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </nav>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:justify-end rounded-full relative z-[999] shadow-2xl">
          <div className="relative z-[999] flex flex-row items-center rounded-full p-4">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`${item.url}`}
                className={`block relative font-code text-md text-white transition-colors hover:text-color-1 lg:leading-5 lg:hover:text-[#d4af37] px-4 xl:px-8`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        {/* Menu Button for Mobile */}
        <Button className="ml-auto lg:hidden z-50" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;

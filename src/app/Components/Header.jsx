"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../utils/Index";
import Button from "./Button";
import MenuSvg from "../utils/MenuSvg";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const pathname = usePathname();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => {
        if (window.scrollY > 860) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsScrolled(true);
    }
  }, [pathname]);

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
    <div className={`fixed top-0 left-0 w-full z-[999] ${openNavigation ? "bg-black/40" : " backdrop-blur-sm"}`}>
      <div className="flex items-center justify-around lg:py-3">
        {/* Logo Section */}
        <Link href="/" className="flex justify-start mx-6 sm:mx-0 sm:justify-center items-center gap-4 w-[16rem]">
          <h2 className={`font-extrabold font-playfair text-3xl md:text-3xl py-6 hover:mb-2 duration-300 transition-all ease-in-out transform ${isScrolled ? "text-[#d4af37]" : "text-white"}`}>
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
                <Link
                  href={item.url}
                  onClick={handleClick}
                  className="block relative text-white font-code text-2xl transition-colors hover:text-color-1 px-6 py-6 md:py-8"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </nav>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:justify-end  rounded-full relative z-[999] shadow-2xl">
          <div className="relative z-[999] flex flex-row items-center rounded-full p-4">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className={`block relative font-code text-md text-white transition-colors hover:text-color-1 ${item.url === pathname ? "z-2 lg:text-[#d4af37] font-semibold" : "font-medium"} lg:leading-5 lg:hover:text-[#d4af37] px-4 xl:px-8`}
              > 
                {item.title}
              </Link>
            ))}
          </div>
        </nav>

        {/* Menu Button for Mobile */}
        <Button className="ml-auto lg:hidden z-50" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} isScrolled={isScrolled} />
        </Button>
      </div>
    </div>
  );
};

export default Header;

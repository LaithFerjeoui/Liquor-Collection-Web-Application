import localFont from "next/font/local";
import "./globals.css";
import DependenciesInjection from "./Components/DependenciesInjection";
import { Playfair_Display } from 'next/font/google';
import { Italianno } from 'next/font/google';

const italianno = Italianno({
  subsets: ['latin'],
  weight: ['400'], 
  variable: '--font-italianno', 
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Liquor Collection",
  description: "A modern web application for showcasing a vintage wine and liquor collection. Built with Next.js, React, and Tailwind CSS, the project emphasizes a luxurious, vintage-inspired design to highlight the history, elegance, and details of each item.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DependenciesInjection>
          {children}
        </DependenciesInjection>
      </body>
    </html>
  );
}

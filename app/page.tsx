"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./globals.css";
import About from "./sections/home";
import Skills from "./sections/skills";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Custom Cursor */}
      <div
        className="custom-cursor fixed"
        style={{ top: `${cursorPosition.y}px`, left: `${cursorPosition.x}px` }}
      >
        <Image src="/assets/cursorCircle.svg" alt="Cursor Circle" width={66} height={66} />
        <div className="custom-cursor-inner">
          <Image src="/assets/CursorCentre.svg" alt="Cursor Centre" width={34} height={34} />
        </div>
      </div>

      {/* Home Section */}
      <section className="relative h-screen bg-black flex items-center justify-center">
        {/* Flower SVGs container */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <Image
            src="/assets/backflower.svg"
            alt="Back Flower"
            width={600}
            height={600}
            className="absolute opacity-90 animate-pulse"
          />
          <Image
            src="/assets/frontFlower.svg"
            alt="Front Flower"
            width={500}
            height={500}
            className="relative animate-pulse"
          />
        </div>

        {/* Menu Button */}
        <div className="absolute top-8 right-8">
          <Image
            src="/assets/menubut.svg"
            alt="Menu"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>

        {/* Name Text */}
        <div className="text-center">
          <div className="mb-4 text-white text-base font-black font-['ARP Display']">
            Hi, my name is
          </div>
          <h1 className="font-['Chrome_Slab'] text-8xl text-white whitespace-nowrap tracking-wide">
            Andrea Tresa Tom
          </h1>
        </div>
      </section>

      {/* About Section */}
      <About />
      <Skills />
    </div>
  );
}
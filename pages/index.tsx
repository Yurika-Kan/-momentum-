import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Import Image
import { FaChevronDown } from "react-icons/fa"; 
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Wave from "react-wavify";  

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Home() {
  const scrollToNextSection = () => {
    document.getElementById("next-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="absolute top-1/2 transform -translate-y-1/2 z-20 flex items-center w-full px-10">
        {/* Left Side - Title & Text */}
        <div className="w-1/2">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-blue-500">
            Momentum
          </h1>
          <p className="text-white">Build teams, get mentorship, and keep moving.</p>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 flex justify-end">
          <Image
            src="/iwantmymom.png"
            alt="Momentum Image"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Background */}
      <div className="bg-black w-screen h-screen text-black relative">
        {/* Down Arrow Button */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-3xl animate-bounce z-50"
        >
          <FaChevronDown />
        </button>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-800 to-blue-600 p-6 h-20 fixed top-0 w-full z-40">
        <ul className="flex space-x-8">
          <li><Link href="/" className="text-white">Home</Link></li>
          <li><Link href="/about" className="text-white">About</Link></li>
          <li><Link href="/create" className="text-white">Create</Link></li>
        </ul>
      </nav>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <Wave
          fill="rgba(0, 13, 255, 0.8)"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 0.01,
            amplitude: 50,
            speed: 0.15,
            points: 3
          }}
        />
      </div>
    </>
  );
}
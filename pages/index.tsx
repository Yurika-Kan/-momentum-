import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-800 to-blue-600 p-6 h-20 fixed top-0 w-full z-40">
        <ul className="flex space-x-8">
          <li><Link href="/" className="text-white">Home</Link></li>
          <li><Link href="/about" className="text-white">About</Link></li>
          <li><Link href="/create" className="text-white">Create</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="relative w-screen h-screen flex items-center justify-between px-10 text-black bg-black overflow-hidden">
        {/* Left Side - Title */}
        <div className="z-20">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-blue-500">
            Momentum
          </h1>
          <p className="text-lg text-gray-300 mt-2">Build teams, get mentorship, and keep moving.</p>
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

        {/* Down Arrow Button - Positioned Above the Wave */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white text-3xl animate-bounce z-50"
        >
          <FaChevronDown />
        </button>

        {/* Bottom Wave Effect - Inside Hero */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <Wave
            fill="rgba(0, 13, 255, 0.8)"
            paused={false}
            style={{ display: "flex" }}
            options={{
              height: 20,
              amplitude: 50,
              speed: 0.2,
              points: 3
            }}
          />
        </div>
      </div>

      {/* Next Section */}
      <div id="next-section" className="h-screen bg-black flex items-center pt-24">
        <HoverCards
          items={[
            { title: "Card 1", description: "Description 1", link: "/link1" },
            { title: "Card 2", description: "Description 2", link: "/link2" },
            { title: "Card 3", description: "Description 3", link: "/link3" },
            { title: "Card 4", description: "Description 4", link: "/link4" },
          ]}
        />
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-6 px-8 w-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 Momentum. By Anjola Babalola, London Jones, Yurika Kan, Jen Cui.</p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li><Link href="/privacy" className="hover:text-blue-500">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-500">Terms of Service</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500">Contact Us</Link></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

// Hover Cards Component
const HoverCards = ({ items, className }: { items: { title: string; description: string; link: string }[]; className?: string }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 py-10 min-h-screen", className)}>
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-[55vh] w-[24vw] bg-blue-700 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

// Card Component
export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn("rounded-2xl h-[50vh] w-[22.5vw] p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20", className)}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

// Card Title Component
export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn("text-white font-bold tracking-wide mt-4", className)}>{children}</h4>;
};

// Card Description Component
export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn("mt-8 text-white tracking-wide leading-relaxed text-sm", className)}>{children}</p>;
};

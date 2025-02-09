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
        <div className="z-20">
          <h1 className="text-6xl font-extrabold text-blue-500">Momentum</h1>
          <p className="text-lg text-gray-300 mt-2">Build teams, get mentorship, and keep moving.</p>
        </div>

        {/* Down Arrow Button */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white text-3xl animate-bounce z-50"
        >
          <FaChevronDown />
        </button>

        {/* Bottom Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <Wave
            fill="rgba(0, 13, 255, 0.8)"
            paused={false}
            style={{ display: "flex" }}
            options={{ height: 20, amplitude: 50, speed: 0.2, points: 3 }}
          />
        </div>
      </div>

      {/* Next Section */}
      <div id="next-section" className="h-screen bg-gradient-to-r from-black to-blue-800 flex items-center justify-center pt-24">
        <HoverCards
          items={[
            { title: "Matcha Time", description: "Drinking matcha with friends!", image: "/imtrynasleep.jpg", author: "Anjola B", role: "Project Lead" },
            { title: "Sunset Views", description: "Incorporating nature into our daily lives", image: "/imtrynasleep.jpg", author: "Yurika K", role: "Designer" },
            { title: "Code & Coffee", description: "Coding late at night", image: "/imtrynasleep.jpg", author: "London J", role: "Developer" },
          ]}
        />
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-6 px-8 w-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 Momentum. By Anjola Babalola, London Jones, Yurika Kan, Jen Cui.</p>
        </div>
      </footer>
    </>
  );
}

// Hover Cards Component
const HoverCards = ({ items }: { items: { title: string; description: string; image: string; author: string; role: string }[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-20 py-16 w-full">
      {items.map((item, idx) => (
        <Link
          href="#"
          key={idx}
          className="relative group block p-4 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 bg-blue-700 block rounded-3xl shadow-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card image={item.image} title={item.title} description={item.description} author={item.author} role={item.role} />
        </Link>
      ))}
    </div>
  );
};

// Card Component
const Card = ({ image, title, description, author, role }: { image: string; title: string; description: string; author: string; role: string }) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 shadow-xl hover:shadow-3xl transition-shadow duration-300">
      <Image src={image} alt={title} width={600} height={400} className="w-full h-[400px] object-cover" />
      <div className="p-6 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white">
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-base">{description}</p>
        <div className="text-sm mt-2 text-gray-400">{author} • {role}</div>
      </div>
    </div>
  );
};

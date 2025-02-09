import Image from "next/image";
import Wave from 'react-wavify';
import Link from 'next/link';
import { FaChevronDown } from "react-icons/fa"; // Import an arrow icon

export default function Home() {
  const scrollToNextSection = () => {
    document.getElementById("next-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Momentum Title */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 z-20">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-blue-500">
          Momentum
        </h1>
        <p>
        Build teams, get mentorship, and keep moving.
        </p>
      </div>

      {/* Background */}
      <div className="bg-black w-screen h-screen text-black relative">
        {/* Down Arrow Button - Increased z-index */}
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
          <li><Link href="/contact" className="text-white">Contact</Link></li>
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

      {/* Next Section */}
      <div id="next-section" className="h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-800">Next Section</h2>
      </div>
    </>
  );
}

import Image from "next/image";
import Wave from 'react-wavify';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // For arrow clickers
import { useState } from "react"; // Import useState

export default function Resources() {
  // State to keep track of the current box index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of boxes content
  const boxes = [
    { title: "Lopeum", subhead: "Subhead Lospeum 1" },
    { title: "Lopeum", subhead: "Subhead Lospeum 2" },
    { title: "Lopeum", subhead: "Subhead Lospeum 3" },
    { title: "Lopeum", subhead: "Subhead Lospeum 4" },
  ];

  // Handle the left arrow click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? boxes.length - 1 : prevIndex - 1));
  };

  // Handle the right arrow click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === boxes.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      {/* Background */}
      <div className="bg-black w-screen h-screen text-black absolute top-0 left-0 z-0"></div>

      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-800 to-blue-600 p-6 h-20 fixed top-0 w-full z-40">
        <ul className="flex space-x-8">
          <li><Link href="/" className="text-white">Home</Link></li>
          <li><Link href="/about" className="text-white">About</Link></li>
          <li><Link href="/contact" className="text-white">Contact</Link></li>
        </ul>
      </nav>

  
{/* Main Content */}
<div className="relative z-10 w-full text-center">
  {/* "Sail to Scrum" text */}
  <div className="text-center z-20 w-full mt-32">
    <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-blue-500">
      Sail to Scrum
    </h1>
    <p className="text-xl mt-2 text-gray-700">
      What is scrum? 
      It is an industry standard framework that helps
      software teams structure and manage their work!
    </p>
  </div>

  {/* Section below "Sail to Scrum" */}
  <div className="mt-24 px-8 flex justify-between mx-auto">
    <div className="text-center w-1/2">
      <p className="text-3xl font-extrabold text-gray-900">Let's define sprint</p>
      <p className="text-lg mt-2 text-gray-700">left blah</p>
    </div>
    <div className="text-center w-1/2">
      <p className="text-3xl font-extrabold text-gray-900">Why Scrum?</p>
      <p className="text-lg mt-2 text-gray-700">right black</p>
    </div>
  </div>


        {/* Space Below Lospeum */}
        <div className="mt-12"></div>

        {/* Boxes with Dynamic Display */}
        <div className="relative w-full h-[300px] flex justify-center items-center">
          <div className="absolute flex justify-center items-center w-full h-full">
            {boxes.map((box, index) => (
              <div
                key={index}
                className={`absolute text-center p-4 bg-blue-600 text-white font-bold transition-opacity duration-500 ${
                  currentIndex === index ? "opacity-100" : "opacity-0"
                }`}
                style={{ transition: "opacity 0.5s ease" }}
              >
                {box.title}
                <p className="mt-2 text-sm">{box.subhead}</p>
              </div>
            ))}
          </div>

          {/* Arrow Clickers */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-15">
            <FaChevronLeft
              className="text-white text-4xl cursor-pointer"
              onClick={handlePrev}
            />
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-15">
            <FaChevronRight
              className="text-white text-4xl cursor-pointer"
              onClick={handleNext}
            />
          </div>
        </div>
      </div>

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

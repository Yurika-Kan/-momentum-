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
    { title: "Sprint #0: onbaording", subhead: "• Set up communication channel between teammates and mentor (messages, Discord, etc) • Determine project scope: Define objectives, constraints, features, and functions of the application\n  • Create tickets (tasks) for everyone to do \n • Determine what the MVP (Minimum Viable Product) would look like \n • Binary starts with zero, so we do for some reason`" },
    { title: "Sprint #1: begin", subhead: "Start working on tasks that were assigned. Have a weekly check-in with your mentor . Have daily standups with team mates. This is where you communicate what your working on with your team/ how it is going Remember you can always lean on your members and your mentor" },
    { title: "Sprint #2: midpoint check-in", subhead: "Have a midpoint meeting as a group with your mentor to see how things are going Pair program with team members to check work!You can revise goals in this stage" },
    { title: "Sprint #3: ", subhead: "Yay! Your project is finished. Pat yourself on the back"},
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
      It is an industry standard framework that helps <br />
      software teams structure and manage their work!
    </p>
  </div>

  {/* Section below "Sail to Scrum" */}
<div className="mt-24 px-8 flex justify-between mx-auto">
  <div className="text-center w-1/2">
    <p className="text-3xl font-extrabold text-gray-900">Let's define sprint</p>
    <p className="text-lg mt-2 text-gray-700">
      Sprints are short planned periods where a <br />
      team works to complete a set amount of work!
    </p>
  </div>
  <div className="text-center w-1/2">
    <p className="text-3xl font-extrabold text-gray-900">Why Scrum?</p>
    <p className="text-lg mt-2 text-gray-700">
      Most tech companies use scrum. <br />
      Knowing scrum can help you stand out professionally!
    </p>
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
        className={`absolute inset-x-0 mx-auto text-center p-4 bg-blue-600 text-white font-bold transition-opacity duration-500 w-full max-w-[33.33%] ${
          currentIndex === index ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "opacity 0.5s ease" }}
      >
        {box.title}
        <p className="mt-2 text-sm">{box.subhead}</p>
      </div>
    ))}
  </div>


  <div
  className="absolute top-1/2 transform -translate-y-1/2 z-15"
  style={{ left: "25%" }}
>
  <FaChevronLeft
    className="text-white text-4xl cursor-pointer"
    onClick={handlePrev}
  />
</div>

<div
  className="absolute top-1/2 transform -translate-y-1/2 z-15"
  style={{ right: "25%" }}
>
  <FaChevronRight
    className="text-white text-4xl cursor-pointer"
    onClick={handleNext}
  />
</div>
</div>
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

import { useState } from 'react';
import Image from "next/image";
import Wave from 'react-wavify';
import Link from 'next/link';
import { Bell, Plus } from 'lucide-react'; // Import Plus from Lucide
import { get } from 'http';
import { createProject } from '@/services/user.service';
import { findMentorMatch } from '@/services/groq';

export default function Create() {
  const [accepted, setAccepted] = useState(false);
  const [denied, setDenied] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectTechStack, setProjectTechStack] = useState('');
  const [submittedProjects, setSubmittedProjects] = useState([]);
  const [id, setId] = useState(0);
  const [showMatchMentorButton, setShowMatchMentorButton] = useState(false); // State to track if the match mentor button should show
  const [mentorMatch, setMentorMatch] = useState(''); // Store the mentor match result

  const handleSubmit = async () => {
    const techStacksArray = projectTechStack.split(' ').filter(tag => tag.startsWith('#'));
    setSubmittedProjects([...submittedProjects, { name: projectName, description: projectDescription }]);
    setShowForm(false);
    setProjectName('');
    setProjectDescription('');
    setProjectTechStack('');
    setId(getRandomInt(10000000));

    try {
      setShowMatchMentorButton(true);
      const res = await fetch('/api/projects/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: id,
          title: projectName,
          description: projectDescription,
          duration: '2',
          user: 'Yurika Kan', // Replace with actual user info
          techStackArray: techStacksArray
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to create project');
      }

      const project = await res.json();
      console.log('Project created:', project);
      // Show the match mentor button after the project is created
    } catch (error) {
      console.error(error);
    }
  };

  const handleMentorMatch = async () => {
    try {
      const res = await fetch('/api/mentors/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId: id }),
      });

      if (!res.ok) {
        throw new Error('Failed to find mentor match');
      }

      const match = await res.json();
      setMentorMatch(match.match); // Store the match result in the state 
      console.log('Mentor match:', match);
    } catch (error) {
      setMentorMatch("error"); // Handle errors if needed
    }
  };

  const getRandomInt = (max: number) => { return Math.floor(Math.random() * max) };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-500 to-blue-900 p-6 h-20 fixed top-0 w-full z-40">
        <ul className="flex space-x-8 text-lg font-semibold">
          <li><Link href="/" className="text-white">Home</Link></li>
          <li><Link href="/create" className="text-white">MyHub</Link></li>
          <li><Link href="/resources" className="text-white">Resources</Link></li>
        </ul>
      </nav>

      <div className="absolute inset-0 bg-black flex flex-col items-start p-8 mt-20">
        {/* Create Project Button */}
        <div
          className="bg-gray-700 w-[200px] h-[200px] flex items-center justify-center rounded-lg cursor-pointer shadow-lg mb-4"
          onClick={() => setShowForm(true)}
        >
          <div className="absolute top-4 text-lg text-white font-semibold">Create Project</div>
          <Plus className="text-white w-[100px] h-[100px]" />
        </div>

        {/* Submitted Projects Section */}
        <div className="w-full space-y-4">
          {submittedProjects.map((project, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg shadow-lg w-[200px]">
              <div>
                <h3 className="text-lg text-white font-semibold">{project.name + ' '}</h3>
                <p className="text-white text-sm">{project.description}</p>
              </div>
              {/* Match Mentor Button next to each project */}
              {showMatchMentorButton && (
                <>
                  <button
                    onClick={handleMentorMatch}
                    className="bg-blue-600 text-white text-xs p-1 px-2 py-1 rounded-lg shadow-lg"
                  > Match Mentor
                  </button>
                  {/* Display the mentor match result */}
                  {mentorMatch ? (
                    <p className="text-blue-200 text-xs mt-1 p-1">Best Mentor Match: {mentorMatch}</p>
                  ) : null}
                </>
              )}
            </div>
          ))}
        </div>
      </div >

      {/* Project Form */}
      {
        showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 text-white">
              <h2 className="text-xl mb-4">New Project</h2>
              <input
                type="text"
                placeholder="Project Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
              />
              <textarea
                placeholder="Project Description"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
              />
              <input
                type="text"
                placeholder="Tech Stack (use #hashtags)"
                value={projectTechStack}
                onChange={(e) => setProjectTechStack(e.target.value)}
                className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
              />
              <button onClick={handleSubmit} className="w-full bg-blue-600 py-2 rounded-lg shadow-lg">Submit</button>
              <button onClick={() => setShowForm(false)} className="w-full bg-gray-700 mt-2 py-2 rounded-lg shadow-lg">Cancel</button>
            </div>
          </div>
        )
      }

      {/* Notifications Section */}
      <div className="bg-gray-800 w-1/2 absolute mt-5 right-8 top-16 rounded-lg p-4 shadow-lg max-h-[500px] overflow-y-auto">
        <div className="flex items-center gap-2 text-white mb-4">
          <Bell className="w-5 h-5" />
          <span className="text-lg font-semibold">Notifications</span>
        </div>

        {!denied ? (
          <div className="bg-blue-900 text-white px-6 py-4 rounded-lg shadow-lg">
            <span>Rachel wants to join project: Rate my lab partner</span>
            <div className="flex gap-4 mt-2">
              {!accepted ? (
                <>
                  <button onClick={() => setAccepted(true)} className="bg-black text-white px-6 py-2 rounded-lg shadow-lg">Accept</button>
                  <button onClick={() => setDenied(true)} className="bg-black text-white px-6 py-2 rounded-lg shadow-lg">Deny</button>
                </>
              ) : !showContact ? (
                <button onClick={() => setShowContact(true)} className="bg-black text-white px-6 py-2 rounded-lg shadow-lg">View Contact</button>
              ) : (
                <span>Contact: 585-23-45</span>
              )}
              <a href="https://github.com/rachPAO" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-2 rounded-lg shadow-lg text-center">View GitHub</a>
            </div>
          </div>
        ) : (
          <p className="text-white text-center">No notifications</p>
        )}
      </div>

      {/* Buttons Section */}
      <div className="bg-black w-screen min-h-screen text-white mt-150 flex flex-col items-center">
        <div className="mt-8 flex flex-wrap justify-center space-x-4 mt-50">
          <button className="bg-blue-900 text-white mt-100 px-6 py-2 rounded-lg shadow-lg">Resources</button>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg shadow-lg">Get Mentor</button>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg shadow-lg">View Contact</button>
        </div>
      </div>

      {/* Background and Waves */}
      <div className="bg-black w-screen h-screen text-black"></div>
      <div className="fixed bottom-0 left-0 w-full">
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
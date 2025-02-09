import { useState } from 'react';
import Image from "next/image";
import Wave from 'react-wavify';
import Link from 'next/link';
import { Bell } from 'lucide-react'; // Using Lucide for the notification icon

export default function Create() {
  // State to manage the notification's accepted, denied, and show contact info
  const [accepted, setAccepted] = useState(false);
  const [denied, setDenied] = useState(false);
  const [showContact, setShowContact] = useState(false);
<<<<<<< Updated upstream
=======
  const [showForm, setShowForm] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectTechStack, setProjectTechStack] = useState('');
  const [submittedProjects, setSubmittedProjects] = useState([]);
  const [id, setId] = useState(0);

  const handleSubmit = async() => {
    const techStackArray = projectTechStack.split(' ').filter(tag => tag.startsWith('#'));
    setSubmittedProjects([...submittedProjects, { name: projectName, description: projectDescription }]);
    setShowForm(false);
    setProjectName('');
    setProjectDescription('');
    setProjectTechStack('');
    setId(getRandomInt(10000000));
    await createProject(id, projectName, projectDescription, '1', '1', techStackArray);
  };

  const handleMentorMatch = () => {
    await findMentorMatch(id);
  }

  const getRandomInt = (max: number) => {return Math.floor(Math.random() * max)};
>>>>>>> Stashed changes

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-500 to-black p-4 fixed top-0 w-full z-10 flex justify-between items-center">
        <ul className="flex space-x-8">
          <li>
            <Link href="/create" className="text-white">Create</Link>
          </li>
          <li>
            <Link href="/about" className="text-white">About</Link>
          </li>
          <li>
            <Link href="/" className="text-white">Home</Link>
          </li>
        </ul>
      </nav>

<<<<<<< Updated upstream
      {/* Black background wrapper */}
      <div className="bg-black min-h-screen w-full flex flex-col items-center pt-16">
  
        {/* Grey flex box for notifications */}
        <div className="bg-gray-800 w-3/4 rounded-lg p-4 shadow-lg">
          {/* Notifications header */}
          <div className="flex items-center gap-2 text-white mb-4">
            <Bell className="w-5 h-5" />
            <span className="text-lg font-semibold">Notifications</span>
          </div>
=======
      <div className="absolute inset-0 bg-black flex flex-col items-start p-8">
        {/* Create Project Button */}
        <div 
          className="bg-gray-700 w-[200px] h-[200px] flex items-center justify-center rounded-lg cursor-pointer shadow-lg mb-4"
          onClick={() => setShowForm(true)}
        > 
          <div className="absolute top-4 text-lg text-white font-semibold">Create Project</div>
          <Plus className="text-white w-[100px] h-[100px]" />
        </div>
>>>>>>> Stashed changes

          {/* Rachel's notification */}
          {!denied ? (
            <div className="bg-blue-900 text-white px-6 py-4 rounded-lg shadow-lg">
              <span>Rachel wants to join project: Rate my lab partner</span>
              <div className="flex gap-4 mt-2">
                {/* If not accepted, show Accept and Deny buttons */}
                {!accepted ? (
                  <>
                    <button
                      onClick={() => setAccepted(true)}
                      className="bg-black text-white px-6 py-2 rounded-lg shadow-lg"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => setDenied(true)}
                      className="bg-black text-white px-6 py-2 rounded-lg shadow-lg"
                    >
                      Deny
                    </button>
                  </>
                ) : !showContact ? (
                  // If accepted, show View Contact button
                  <button
                    onClick={() => setShowContact(true)}
                    className="bg-black text-white px-6 py-2 rounded-lg shadow-lg"
                  >
                    View Contact
                  </button>
                ) : (
                  // If View Contact is clicked, show contact info
                  <span>Contact: 585-23-45</span>
                )}
                {/* GitHub Button */}
                <a
                  href="https://github.com/rachPAO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-2 rounded-lg shadow-lg text-center"
                >
                  View GitHub
                </a>
              </div>
            </div>
<<<<<<< Updated upstream
          ) : (
            <p className="text-white text-center">No notifications</p>
          )}

          {/* Mentor notifaction not hard code*/}
           {/* this will only appear when a future button called get mentor is pressed, but it will basically get feilds Mentor name, mentor github, mentor contact. Similar to Rachel notiaction hard code format*/}
=======
          ))}
>>>>>>> Stashed changes
        </div>
      </div>

      {/* Buttons Section */}
      <div className="bg-black w-screen min-h-screen text-white flex flex-col items-center">
        <div className="mt-8 flex flex-wrap justify-center space-x-4">
          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg shadow-lg">Resources</button>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg shadow-lg">Get Mentor</button>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg shadow-lg">View Contact</button>
        </div>
      </div>

<<<<<<< Updated upstream
      {/* Background */}
      <div className="bg-black w-screen h-screen text-black"></div>

      {/* Waves */}
      <Wave fill="url(#gradient)">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="#000DFF7" />
            <stop offset="90%" stopColor="#000DFF7" />
          </linearGradient>
        </defs>
      </Wave>

      <div className="absolute bottom-0 left-0 w-full">
=======
      {/* Background and Waves */}
      <div className="bg-black w-screen h-screen text-black"></div>
      <div className="fixed bottom-0 left-0 w-full">
>>>>>>> Stashed changes
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
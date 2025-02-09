// pages/create2.tsx
import { useState } from 'react';
import { getProject } from '@/services/user.service';
import { findMentorMatch } from '@/services/groq';
import Link from 'next/link';


export default function Create2() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [mentor, setMentor] = useState(null);

  const handleProjectClick = (projectId) => {
    setSelectedProjectId(projectId);
  };

  const handleGetMentor = async () => {
    if (selectedProjectId) {
      try {
        const mentor = await findMentorMatch(selectedProjectId);
        setMentor(mentor);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('Please select a project first');
    }
  };

  const getProjects = async () => {
    try {
      const projects = await getProject();
      setProjects(projects);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id} onClick={() => handleProjectClick(project.id)}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
      <button onClick={handleGetMentor}>Get Mentor</button>
      {mentor && <p>Mentor: {mentor}</p>}
    </div>
  );
}
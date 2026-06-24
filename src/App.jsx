// src/App.jsx
import { useState } from 'react';
import JoinForm from "./components/JoinForm";
import ProjectCard from "./components/ProjectCard";
import ProfileCard from "./components/ProfileCard";

function App() {
  const myProjects = [
    {
      id: 1,
      title: "Weather Dashboard",
      description: "Real-time weather tracking application utilizing asynchronous JavaScript and API error handling states.",
      tags: ["JavaScript", "API", "Tailwind"],
      liveLink: "https://weather-search-app-five.vercel.app/",
      imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500"
    },
    {
      id: 2,
      title: "Movie Search Engine",
      description: "Dynamic UI card interface to search database movies with conditional error rendering.",
      tags: ["React", "DOM", "Tailwind"],
      liveLink: "https://movie-app-vitesh.netlify.app/",
      imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Vitesh Pulluri",
      role: "Lead Frontend Developer",
      company: "Hyderabad Tech",
      avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500"
    },
    {
      id: 2,
      name: "Rahul Sharma",
      role: "Backend Engineer",
      company: "Hyderabad Tech",
      avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500"
    },
    {
      id: 3,
      name: "Sneha Reddy",
      role: "UI/UX Designer",
      company: "Hyderabad Tech",
      // Updated to a professional, decent corporate headshot
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500" 
    }
  ];
  
  const [showTeam, setShowTeam] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTeam = teamMembers.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Projects Section */}
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">My Deployed Projects</h1>
        <div className="flex flex-wrap gap-6 justify-start mb-16">
          {myProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              title={project.title}
              description={project.description}
              tags={project.tags}
              liveLink={project.liveLink}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>

        {/* Team Members Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-extrabold text-slate-900">Meet the Team</h2>
        
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search team..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button 
            onClick={() => setShowTeam(!showTeam)}
            className="text-sm font-semibold bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded-lg transition-colors"
          >
            {showTeam ? "Hide Team 🙈" : "Show Team 🐵"}
          </button>
        </div>
      </div>

      {showTeam && (
        <div className="flex flex-wrap gap-6 justify-start">
          {filteredTeam.length === 0 ? (
            <p className="text-slate-500 italic w-full py-4 text-center border-2 border-dashed border-slate-200 rounded-xl">
              No team members found matching "{searchQuery}"
            </p>
          ) : (
            filteredTeam.map((member) => (
              <ProfileCard 
                key={member.id}
                name={member.name}
                role={member.role}
                company={member.company}
                avatarUrl={member.avatarUrl}
              />
            ))
          )}
        </div>
      )}

      </div>
      {/* Your perfectly refactored JoinForm is here! */}
      <JoinForm />
    </div>
  );
}

export default App;
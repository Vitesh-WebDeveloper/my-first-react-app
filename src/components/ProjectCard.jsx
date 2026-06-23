// src/components/ProjectCard.jsx
import { useState } from 'react'; // 1. Invite 'useState' to the file

function ProjectCard({ 
  title = "Untitled Project", 
  description = "No description provided.", 
  tags = [], 
  liveLink = "#", 
  imageUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500" 
}) {
  
  // 2. Create the State. 'likes' is the value, 'setLikes' is the updater function.
  const [likes, setLikes] = useState(0);

  return (
    <div className="flex flex-col w-72 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover bg-slate-100" />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-slate-800 mb-1">{title}</h3>
        <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-grow">{description}</p>
        
        <div className="flex justify-between items-center mt-auto pt-2 border-t border-slate-100">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm">
            View App &rarr;
          </a>
          
          {/* 3. The Interactive Event */}
          <button 
            onClick={() => setLikes(likes + 1)} 
            className="flex items-center gap-1 bg-rose-50 hover:bg-rose-100 text-rose-600 px-3 py-1.5 rounded-full text-sm font-bold transition-colors"
          >
            ❤️ {likes}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
// src/components/ProjectCard.jsx
function ProjectCard({ 
  title = "Untitled Project", 
  description = "No description provided.", 
  tags = [], 
  liveLink = "#", 
  imageUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500" 
}) {
  return (
    <div className="flex flex-col w-72 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-40 object-cover bg-slate-100"
      />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-slate-800 mb-1">{title}</h3>
        <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-grow">{description}</p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <a 
          href={liveLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-2 rounded-xl transition-colors"
        >
          View Live Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
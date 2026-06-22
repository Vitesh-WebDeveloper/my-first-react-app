// src/components/ProfileCard.jsx
function ProfileCard({ 
  name = "Unknown Member", 
  role = "Employee", 
  company = "Startup Inc", 
  avatarUrl = "https://via.placeholder.com/150" 
}) {
  return (
    <div className="flex flex-col items-center bg-white p-6 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 w-64">
      <img 
        src={avatarUrl} 
        alt={name} 
        className="w-24 h-24 rounded-full object-cover mb-4 shadow-sm border-2 border-indigo-100" 
      />
      <h3 className="text-xl font-bold text-slate-800 text-center">{name}</h3>
      <p className="text-indigo-600 font-medium mb-1 text-sm text-center">{role}</p>
      <p className="text-xs text-slate-500 text-center">{company}</p>
    </div>
  );
}

export default ProfileCard;
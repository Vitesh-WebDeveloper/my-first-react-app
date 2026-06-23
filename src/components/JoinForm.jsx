// src/components/JoinForm.jsx
import { useState } from 'react';

function JoinForm() {
  const [inputValue, setInputValue] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // 1. New loading state

  const handleJoinClick = () => {
    // Check if empty
    if (inputValue.trim() === "") {
      setWelcomeMessage("⚠️ Please enter a name first!");
      return; // Stop the function here
    }

    // 2. Fake a loading sequence for 1 second
    setIsLoading(true);
    setWelcomeMessage(""); // Clear old messages

    setTimeout(() => {
      setWelcomeMessage(`🎉 Welcome to the network, ${inputValue}!`);
      setIsLoading(false); // Turn off loading
      setInputValue(""); // Clear input box
    }, 1000); // 1000 milliseconds = 1 second
  };

  return (
    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm w-full max-w-md mt-8">
      <h3 className="text-xl font-bold text-slate-800 mb-4">Join My Network</h3>
      
      <div className="flex gap-2 mb-4">
        <input 
          type="text" 
          placeholder="Enter your name..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleJoinClick(); // 3. Enter key support
          }}
          className="flex-grow px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button 
          onClick={handleJoinClick}
          disabled={isLoading} // Prevent double clicking
          className={`${
            isLoading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
          } text-white font-medium px-5 py-2 rounded-xl transition-colors`}
        >
          {isLoading ? "Joining..." : "Join"} 
        </button>
      </div>

      {/* 4. Conditional Styling (Red for error, Green for success) */}
      {welcomeMessage && (
        <div className={`p-3 rounded-lg text-sm font-medium border ${
          welcomeMessage.includes("⚠️") 
            ? "bg-red-50 text-red-600 border-red-200" 
            : "bg-emerald-50 text-emerald-600 border-emerald-200"
        }`}>
          {welcomeMessage}
        </div>
      )}
    </div>
  );
}

export default JoinForm;
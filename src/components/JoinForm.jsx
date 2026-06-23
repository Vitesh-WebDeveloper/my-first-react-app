// src/components/JoinForm.jsx
import { useState } from 'react';

function JoinForm() {
  // We need state for what they are typing, and state for when they click submit
  const [inputValue, setInputValue] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  // This function runs when the user clicks the Submit button
  const handleJoinClick = () => {
    if (inputValue.trim() === "") {
      setWelcomeMessage("⚠️ Please enter a name first!");
    } else {
      setWelcomeMessage(`🎉 Welcome to the network, ${inputValue}!`);
      setInputValue(""); // Clear the input box after submitting
    }
  };

  return (
    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm w-full max-w-md mt-8">
      <h3 className="text-xl font-bold text-slate-800 mb-4">Join My Network</h3>
      
      <div className="flex gap-2 mb-4">
        <input 
          type="text" 
          placeholder="Enter your name..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // This captures the typing
          className="flex-grow px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button 
          onClick={handleJoinClick}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-xl transition-colors"
        >
          Join
        </button>
      </div>

      {/* Conditional Rendering: Only show the message box if there is a message */}
      {welcomeMessage && (
        <div className="p-3 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">
          {welcomeMessage}
        </div>
      )}
    </div>
  );
}

export default JoinForm;
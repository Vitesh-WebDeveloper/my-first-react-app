// src/components/JoinForm.jsx
import { useState } from 'react';

function JoinForm() {
  const [inputValue, setInputValue] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 1. Notice we changed 'handleJoinClick' to 'handleSubmit'
  // React automatically passes the event 'e' into this function when the form is submitted.
  const handleSubmit = (e) => {
    // 2. CRITICAL: This stops the page from refreshing! 
    e.preventDefault(); 

    // 3. Validation: Must be at least 3 characters
    if (inputValue.trim().length < 3) {
      setWelcomeMessage("⚠️ Name must be at least 3 characters long.");
      return; 
    }

    setIsLoading(true);
    setWelcomeMessage(""); 

    setTimeout(() => {
      setWelcomeMessage(`🎉 Welcome to the network, ${inputValue}!`);
      setIsLoading(false); 
      setInputValue(""); 
    }, 1000); 
  };

  return (
    <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm w-full max-w-md mt-8">
      <h3 className="text-xl font-bold text-slate-800 mb-4">Join My Network</h3>
      
      {/* 4. Changed the wrapper div to a <form>. 
             It listens for the 'onSubmit' event instead of button clicks! */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input 
          type="text" 
          placeholder="Enter your name..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
          // Notice we deleted 'onKeyDown'. Forms handle the Enter key automatically!
          className="flex-grow px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {/* 5. Changed type to "submit" so it triggers the form onSubmit */}
        <button 
          type="submit"
          disabled={isLoading} 
          className={`${
            isLoading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
          } text-white font-medium px-5 py-2 rounded-xl transition-colors`}
        >
          {isLoading ? "Joining..." : "Join"} 
        </button>
      </form>

      {/* Conditional Styling remains exactly the same */}
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
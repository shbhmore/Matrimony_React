import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        // Calling your getTopMatchesForUser endpoint
        const response = await axios.get('http://localhost:8080/api/matches/1'); 
        setMatches(response.data);
      } catch (err) {
        console.error("Data fetch failed", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMatches();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading Matches...</div>;

  return (
    <div className="bg-slate-50 min-h-screen p-6">
      <header className="max-w-6xl mx-auto mb-10 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-pink-600">SoulBind ❤️</h1>
        <div className="bg-white p-2 rounded-full shadow-sm">Hello, Sam!</div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {matches.map((profile) => (
          <div key={profile.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-slate-100">
            <div className="h-48 bg-gradient-to-r from-pink-400 to-rose-400 flex items-center justify-center text-white text-5xl font-bold">
              {profile.personalInfo.person.firstName[0]}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {profile.personalInfo.person.firstName}, {new Date().getFullYear() - new Date(profile.personalInfo.person.dob).getFullYear()}
                  </h3>
                  <p className="text-slate-500 text-sm">{profile.professionDetails.occupation}</p>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                  {profile.matchScore}% Match
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">💰 {profile.professionDetails.minRangeAnnualIncome} LPA</div>
                <div className="flex items-center gap-2">📏 {profile.personalInfo.height} cm</div>
                <div className="flex items-center gap-2">🕉️ {profile.astroInfo.gotra}</div>
                <div className="flex items-center gap-2">🎓 B.Tech</div>
              </div>

              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl transition-colors">
                View Full Biodata
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
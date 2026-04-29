import { useState, useEffect } from 'react';
import MatchCard from '../components/MatchCard';
import apiRequest from '../api-util/api';

const MatchesPage = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchMatches = async () => {
        try {
          setLoading(true);
          const data = await apiRequest(`/matches`); 

          if (data) {
            setMatches(data);
          }
        } catch (err) {
          // This will catch any 4xx/5xx errors thrown by apiRequest
          console.error("Fetch failed:", err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchMatches();
    }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading Matches...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Container with snap-x makes the swipe feel "mechanical" and smooth */}
      <div className="flex gap-8 overflow-x-auto py-8 px-8 snap-x snap-mandatory scrollbar-hide">
        {matches.map((profile) => (
          <div key={profile.id} className="shrink-0 snap-center">
            <MatchCard profile={profile} />
          </div>
        ))}
      </div>
      
      <div className="flex justify-center gap-2 mt-4 text-slate-300 animate-pulse">
        <span>←</span>
        <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Swipe for more</span>
        <span>→</span>
      </div>
    </div>
    );
};

export default MatchesPage;
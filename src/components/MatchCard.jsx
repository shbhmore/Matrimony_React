// src/components/MatchCard.jsx
import React from 'react';
import { User, IndianRupee, Star } from 'lucide-react';

const MatchCard = ({ profile }) => {
  return (
    <div className="border rounded-xl p-4 shadow-lg bg-white relative">
      <div className="absolute top-2 right-2 bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-bold">
        {profile.matchScore}% Match
      </div>
      
      <h2 className="text-xl font-bold flex items-center gap-2">
        <User size={20} /> {profile.personalInfo.person.firstName} {profile.personalInfo.person.lastName}
      </h2>
      
      <div className="mt-3 space-y-2 text-gray-600">
        <p>Age: {new Date().getFullYear() - new Date(profile.personalInfo.person.dob).getFullYear()}</p>
        <p className="flex items-center gap-1"><IndianRupee size={16}/> {profile.professionDetails.minRangeAnnualIncome} LPA</p>
        <p className="flex items-center gap-1"><Star size={16}/> Gotra: {profile.astroInfo.gotra}</p>
      </div>
      
      <button className="w-full mt-4 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
        Connect Now
      </button>
    </div>
  );
};

export default MatchCard;
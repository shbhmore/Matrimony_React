import { Link } from 'react-router-dom';
import { RASHIS } from '../model/enums/AstroInfo/Rashi'; // Assuming you have the mappings we derived

const MatchCard = ({ profile }) => {
  // Helper to get Rashi label (e.g., "Mesh (Aries)")
  const rashiLabel = RASHIS[profile.astroInfo.rashi]?.label || profile.astroInfo.rashi;
  const age = profile?.personalInfo?.person?.age;
  
  return (
    <div className="w-[450px] bg-white rounded-[40px] shadow-[0_20px_50px_rgba(236,72,153,0.15)] border border-pink-50 overflow-hidden flex flex-col transition-all hover:-translate-y-2">
      
      {/* Top Section: Image & Stats */}
      <div className="h-[260px] bg-gradient-to-br from-pink-400 via-rose-400 to-orange-300 relative">
        <div className="absolute inset-0 flex items-center justify-center text-white/20 text-9xl font-black select-none">
          {profile.personalInfo.person.firstName[0]}
        </div>
        
        {/* Verification Badge */}
        {profile.educationDetails.isVerified && (
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <span className="text-blue-500 text-xs">✔</span>
            <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tighter">Verified Edu</span>
          </div>
        )}

        {/* Floating Heart Match Score */}
        <div className="absolute bottom-4 right-6 flex items-center justify-center group cursor-help">
          <svg viewBox="0 0 24 24" className="w-16 h-16 drop-shadow-xl fill-rose-500/90 backdrop-blur-sm stroke-white/50 stroke-1 transition-transform group-hover:scale-110">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center mb-1">
            <span className="text-white text-sm font-black">{profile.matchScore}%</span>
            <span className="text-white/80 text-[6px] font-bold uppercase">Match</span>
          </div>
        </div>
      </div>

      {/* Profile Details Area */}
      <div className="p-7">
        {/* Name and Age */}
        <h3 className="text-2xl font-bold text-slate-800 leading-tight">
          {profile.personalInfo.person.firstName} {profile.personalInfo.person.lastName}
          <span className="ml-2 font-light text-slate-400">({profile.matchScore > 80 ? 'Perfect' : 'Great'})</span>
        </h3>
        
        <p className="text-pink-500 font-bold text-xs mb-5 uppercase tracking-[0.2em]">
          {profile.professionDetails.occupation} • {profile.professionDetails.workLocation}
        </p>

        {/* Details Grid */}
        <div className="grid grid-cols-3 gap-y-4 gap-x-6 mb-8">
          
          <DetailItem label="Age" value={`${age} Years`} />
          <DetailItem label="Height" value={`${profile?.personalInfo?.height} cm`} />
          <DetailItem label="Education" value={profile?.educationDetails?.educationLevel?.replace('_', ' ')||"Not specified"} />
          <DetailItem label="Income" value={`>${profile?.professionDetails?.minRangeAnnualIncome} LPA`} />
          <DetailItem label="Diet" value={profile?.personalInfo?.dietType} />
          <DetailItem label="Status" value={profile?.personalInfo?.maritalStatus?.replace('_', ' ')||"Single"} />
        </div>

        {/* Astro Highlight Section */}
        <div className="bg-slate-50 rounded-2xl p-4 mb-8 flex items-center justify-around border border-slate-100">
           <div className="text-center">
             <p className="text-[10px] uppercase text-slate-400 font-bold">Rashi</p>
             <p className="text-sm font-bold text-slate-700">{rashiLabel}</p>
           </div>
           <div className="h-8 w-[1px] bg-slate-200"></div>
           <div className="text-center">
             <p className="text-[10px] uppercase text-slate-400 font-bold">Gotra</p>
             <p className="text-sm font-bold text-slate-700">{profile.astroInfo.gotra}</p>
           </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link to={`/profile/${profile.biodataId}`} className="flex-1 text-center bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-4 rounded-2xl transition-colors">
            Profile
          </Link>
          <button className="flex-[2] bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-pink-200 transition-all active:scale-95">
            Send Interest
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Detail Component
const DetailItem = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">{label}</span>
    <span className="text-sm font-semibold text-slate-700 truncate capitalize">{value?.toLowerCase()}</span>
  </div>
);

export default MatchCard;
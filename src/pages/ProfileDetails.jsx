import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiRequest from "../api-util/api";
import EditProfile from "./EditProfile";

const ProfileDetails = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // The wrapper now handles the JSON parsing and headers!
        const data = await apiRequest(`/v1/biodata/user`);
        if (data) setProfile(data); 
      } catch (err) {
        console.error("Component Error:", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) return <div className="p-10">Loading detailed profile...</div>;

  if (!profile) return <div className="p-10">Profile not found.</div>;

  return (
    <main className="max-w-4xl mx-auto p-6 animate-in fade-in duration-500">
      {/* Accessible Back Button */}
      
      <div className="flex justify-between p-2">
        <button 
          onClick={() => navigate(-1)}
          aria-label="Go back to matches"
          className="bg-pink-100 p-3 items-center rounded-full gap-2 bg text-slate-500 hover:text-pink-500 transition-colors font-medium"
        >
          ← Back to Matches
        </button>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-pink-500 text-white p-3 rounded-full shadow-xl hover:text-pink-500 transition-colors font-medium"
        >
          Edit My Biodata
        </button>
      </div>

      <EditProfile
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialData={profile} // Pass existing data if you have it
      />

      <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-pink-50">
        {/* Header Section */}
        <div className="h-48 bg-linear-to-r from-pink-500 to-rose-400 p-8 flex items-end">
          <h1 className="text-4xl font-black text-white">
            {profile.personalInfo?.person?.firstName} {profile.personalInfo?.person?.lastName}
          </h1>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Personal & Astro */}
          <section aria-labelledby="personal-heading">
            <h2 id="personal-heading" className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">
              Personal & Astro Details
            </h2>
            <div className="space-y-4">
              <InfoRow label="Gotra" value={profile.astroInfo?.gotra} />
              <InfoRow label="Rashi" value={profile.astroInfo?.rashi} />
              <InfoRow label="Nakshatra" value={profile.astroInfo?.nakshatra} />
              <InfoRow label="Diet" value={profile.personalInfo?.dietType} />
              <InfoRow label="Marital Status" value={profile.personalInfo?.maritalStatus?.replace(/_/g, ' ')} />
            </div>
          </section>

          {/* Right Column: Education & Profession */}
          <section aria-labelledby="career-heading">
            <h2 id="career-heading" className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">
              Career & Education
            </h2>
            <div className="space-y-4">
              <InfoRow label="Occupation" value={profile.professionDetails?.occupation} />
              <InfoRow label="Income" value={`${profile.professionDetails?.minRangeAnnualIncome} LPA`} />
              <InfoRow label="Degree" value={profile.educationDetails?.highestQualification} />
              <InfoRow label="Institution" value={profile.educationDetails?.institutionName} />
            </div>
          </section>
        </div>

        {/* Expectations Footer */}
        <div className="p-8 bg-slate-50 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 mb-2">Expectations</h2>
          <p className="text-slate-600 leading-relaxed italic">
            "{profile.expectations || "No expectations listed yet."}"
          </p>
        </div>
      </div>
    </main>
  );
};

// Accessible Info Row Component
const InfoRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-1 group">
    <span className="text-slate-400 font-medium">{label}</span>
    <span className="text-slate-700 font-bold capitalize">{value?.toLowerCase() || 'N/A'}</span>
  </div>
);

export default ProfileDetails;
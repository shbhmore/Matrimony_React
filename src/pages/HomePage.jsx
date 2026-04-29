import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../api-util/AuthContext';

const HomePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-pink-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 text-pink-200 text-9xl opacity-20 animate-bounce">❤️</div>
      <div className="absolute bottom-20 right-10 text-pink-200 text-9xl opacity-20 animate-pulse">💍</div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black text-slate-800 leading-tight">
          Find Your <span className="text-rose-500">Perfect Match</span> <br /> 
          at VMKS
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto">
          The most trusted matrimonial platform where souls get together forever. 
          Start your journey toward a beautiful beginning today.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          {user ? (
            <button 
              onClick={() => navigate('/matches')}
              className="px-10 py-4 bg-rose-500 text-white font-bold rounded-2xl shadow-xl shadow-rose-200 hover:bg-rose-600 hover:scale-105 transition-all text-lg"
            >
              View My Matches
            </button>
          ) : (
            <>
              <button 
                onClick={() => navigate('/signup')}
                className="px-10 py-4 bg-rose-500 text-white font-bold rounded-2xl shadow-xl shadow-rose-200 hover:bg-rose-600 hover:scale-105 transition-all text-lg"
              >
                Join Now - It's Free
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="px-10 py-4 bg-white text-rose-500 font-bold rounded-2xl border-2 border-rose-100 hover:bg-rose-50 transition-all text-lg"
              >
                Login to Account
              </button>
            </>
          )}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-pink-100 pt-10">
          <div>
            <p className="text-3xl font-black text-rose-500">10k+</p>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Active Profiles</p>
          </div>
          <div>
            <p className="text-3xl font-black text-rose-500">500+</p>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Happy Stories</p>
          </div>
          <div>
            <p className="text-3xl font-black text-rose-500">100%</p>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Verified Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
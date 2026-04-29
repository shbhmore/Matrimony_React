import React, { useState } from 'react';
import apiRequest from './api'; // 1. Use your refined fetch wrapper
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ firstName: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // 2. Add loading state for UX
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 3. Call apiRequest as a function with POST method
      const data = await apiRequest("/auth/signup", {
        method: 'POST',
        body: JSON.stringify(formData)
      });

      if(data.message.includes('Error')){
        console.log((data.message));
        navigate('/signup');
      }
      else if (data) {
        console.log("Data is", data.message);
        navigate('/profileedit');
      }
    } catch (err) {
      // 4. apiRequest throws error.message automatically
      setError(err.message || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-pink-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-pink-600">Join VMKS</h2>
          <p className="text-gray-500 font-medium">Find your perfect soulmate today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="First Name"
            className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            required 
          />
          <input 
            type="email" 
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required 
          />
          <input 
            type="password" 
            placeholder="Password (min 6 chars)"
            className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required 
          />
          <button 
            disabled={loading}
            className={`w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-rose-200 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
          </button>
        </form>

        {error && <p className="mt-4 text-center text-red-500 text-sm font-bold">{error}</p>}

        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account? <Link to="/login" className="text-pink-600 font-bold hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
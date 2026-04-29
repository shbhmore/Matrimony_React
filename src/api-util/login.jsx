import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Prevent empty submissions (Basic Guard)
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // 2. Call the context login
      const result = await login(email, password);

      if (result.success) {
        // 3. Success! The AuthContext has already saved the token/user.
        // We use 'replace: true' so they can't go "back" to login.
        navigate('/matches', { replace: true }); 
      } else {
        // 4. Handle specific failures (Wrong password, server down, etc.)
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      // 5. Catch unexpected crashes
      setError("Connection failed. Check if the server is running.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form 
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-md p-10 rounded-[40px] shadow-2xl w-full max-w-md border border-pink-100"
      >
        <h2 className="text-3xl font-black text-pink-600 mb-2 text-center">Welcome Back</h2>
        <p className="text-slate-500 text-center mb-8 font-medium">Find your soulmate today</p>

        {error && (
          <div className="bg-rose-50 text-rose-600 p-4 rounded-2xl mb-6 text-sm font-bold border border-rose-100 animate-bounce">
            ⚠️ {error}
          </div>
        )}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          disabled={isLoading}
          className="w-full mt-8 bg-pink-500 hover:bg-pink-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-pink-200 transition-all active:scale-95 disabled:opacity-50"
        >
          {isLoading ? "Checking Souls..." : "LOGIN"}
        </button>
      </form>
    </div>
  );
};

export default Login;
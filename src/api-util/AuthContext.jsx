import { createContext, useContext, useState, useEffect } from 'react';
import apiRequest from './api'; // Ensure this points to your refined fetch wrapper

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('vmks_user');  
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('vmks_user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // 1. Call apiRequest as a function
      // 2. Pass method and body in the options object
      const data = await apiRequest('/auth/login', { 
        method: 'POST', 
        body: JSON.stringify({ email, password }) 
      });

      if (data) {
        // Assume your backend returns { token: "...", ...userData }
        setUser(data);
        localStorage.setItem('vmks_user', JSON.stringify(data));
        localStorage.setItem('vmks_token', data.token); 
        return { success: true };
      }
      
      return { success: false, message: "Unexpected response from server" };
    } catch (error) {
      // Our apiRequest throws an Error object, so error.message is what you need
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('vmks_user');
    localStorage.removeItem('vmks_token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
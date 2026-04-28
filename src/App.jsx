import React from 'react';

// Import the Provider you created in api-util
import { AuthProvider, useAuth } from './api-util/AuthContext';
import Login from './api-util/login';
import Signup from './api-util/signup';
import MatchesPage from './pages/matchesPage';
import ProfileDetails from './pages/ProfileDetails';
import NotFound from './pages/notFound';
import HomePage from './pages/homePage';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import Header from './components/header';
import BiodataModal from './pages/biodataModal';

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    
    if (loading) return <div className="flex justify-center mt-20">Loading...</div>; 
    
    if (!user) return <Navigate to="/login" replace />;
    
    return children;
  };

  return (
    <AuthProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* WRAP YOUR PRIVATE ROUTES HERE */}
          <Route path="/matches" element={
            <ProtectedRoute>
              <MatchesPage />
            </ProtectedRoute>
          } />
          
          <Route path="/biodata" element={
            <ProtectedRoute>
              <ProfileDetails />
            </ProtectedRoute>
          } />

          <Route path="/profileedit" element={
            <ProtectedRoute>
              <BiodataModal />
            </ProtectedRoute>
          } />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;
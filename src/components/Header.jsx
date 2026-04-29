import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../api-util/AuthContext'; // Path to your context file

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  console.log("Current User in Header:", user);
  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login after clearing state
  };

  // Shared classes for the navigation pills
  const navItemClass = ({ isActive }) => 
    `px-5 py-2 rounded-full transition-all duration-300 font-bold border border-pink-100 shadow-sm ` +
    (isActive 
      ? "bg-rose-500 text-white shadow-rose-200" 
      : "bg-pink-100 text-rose-600 hover:bg-pink-300 hover:text-rose-800");

  return (
    <header className="sticky top-0 z-50 w-full bg-pink-200/80 backdrop-blur-lg border-b border-pink-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 gap-4">
        
        {/* Logo and Tagline Section */}
        <Link to="/" className="flex flex-col items-center md:items-start group">
          <div className="flex items-center gap-1">
            <span className="text-2xl animate-pulse">❤️</span>
            <h1 className="text-3xl font-black tracking-tighter text-pink-600 group-hover:scale-105 transition-transform">
              VMKS
            </h1>
            <span className="text-2xl animate-pulse">❤️</span>
          </div>
          <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-rose-500 mt-1 leading-none text-center">
            Where souls get together forever
          </p>
        </Link>

        {/* Navigation Actions */}
        <nav className="flex items-center gap-3">
          {/* User Specific Section */}
          <div className="flex items-center gap-2 ml-2 pl-4 border-l border-pink-300">
            {user ? (
							<>
								<NavLink to="/matches" className={navItemClass}>
									Matches
								</NavLink>
								
								<NavLink to="/preference" className={navItemClass}>
									Preference
								</NavLink>

								<NavLink to="/biodata" className={navItemClass}>
									Biodata
								</NavLink>
								<div className="p-2 flex items-center gap-4">
									<div className="flex flex-col items-end">
										<span className="text-xs font-bold text-rose-400 uppercase tracking-tighter">Welcome back</span>
										<span className="text-sm font-black text-slate-800">
											{user.firstName || 'User'}
										</span>
									</div>
									
									<button 
										onClick={handleLogout}
										className="bg-white/50 hover:bg-rose-50 text-rose-600 p-2 rounded-xl border border-rose-200 transition-colors"
										title="Logout"
									>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
										</svg>
									</button>
								</div>
							</>
            ) : (
              <div className="flex gap-2">
								<Link 
									to="/login" 
									className="bg-white text-pink-600 font-black px-6 py-2 rounded-2xl shadow-lg shadow-pink-200 hover:scale-105 transition-transform"
								>
									LOGIN
								</Link>
								<Link 
									to="/signup" 
									className="bg-white text-pink-600 font-black px-6 py-2 rounded-2xl shadow-lg shadow-pink-200 hover:scale-105 transition-transform"
								>
									SIGNUP
								</Link>
							</div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
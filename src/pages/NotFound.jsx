import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="text-9xl font-extrabold text-pink-200">404</div>
      <h2 className="text-3xl font-bold text-slate-800 mt-4">Oops! Heart not found.</h2>
      <p className="text-slate-500 mt-2 max-w-md">
        The page you are looking for has moved or never existed. 
        Don't worry, there are still plenty of other matches waiting for you!
      </p>
      <Link 
        to="/" 
        className="mt-8 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-pink-200"
      >
        Back to Matches
      </Link>
    </div>
  );
};

export default NotFound;
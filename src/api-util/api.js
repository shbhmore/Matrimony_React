const BASE_URL = 'http://localhost:8080/matrimonial/api';

const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('vmks_token');

  // 1. Merge Headers
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    // 2. Handle Unauthorized (401)
    if (!response.ok && response.status === 401) {
      console.warn("Session expired or invalid token. Logging out...");
      
      // Clear storage
      localStorage.removeItem('vmks_user');
      localStorage.removeItem('vmks_token');
      
      // Avoid a hard reload loop if already on login page
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
      return null;
    }

    // 3. Handle other HTTP errors (4xx, 5xx)
    if (!response.ok && response.body == undefined && response.status === 403) {
      const errorData = await response.json().catch(() => ({}));
      localStorage.removeItem('vmks_user');
      localStorage.removeItem('vmks_token');
      
      // Avoid a hard reload loop if already on login page
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    // 4. Return parsed JSON (standardizes the output for your components)
    return await response.json();

  } catch (error) {
    console.error("API Request Error:", error.message);
    throw error; // Re-throw so your useEffect catch block can see it
  }
};

export default apiRequest;
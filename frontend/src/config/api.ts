// API Configuration
// This will use the environment variable or fallback to localhost
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// API endpoints
export const API_ENDPOINTS = {
  health: `${API_BASE_URL}/api/health`,
  tasks: `${API_BASE_URL}/api/tasks`,
  leads: `${API_BASE_URL}/api/leads`,
  leadStats: `${API_BASE_URL}/api/leads/stats`,
};

// Helper function to make API calls
export const apiCall = async (endpoint: string, options?: RequestInit) => {
  const response = await fetch(endpoint, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }

  return response.json();
};

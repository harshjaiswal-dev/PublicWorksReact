import type { AuthResponse } from '../types/auth';

const API_URL = 'https://your-api-url.com/api/auth';  // Example API URL

export const login = async (username: string, password: string, role: string): Promise<AuthResponse> => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, role }),
  });
  return response.json();
};

export const googleLogin = async (idToken: string): Promise<AuthResponse> => {
  const response = await fetch(`${API_URL}/google-login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken }),
  });
  return response.json();
};

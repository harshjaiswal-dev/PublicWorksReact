import type { AuthResponse } from '../types/auth';

const API_URL = 'http://localhost:5000/auth'; // API base URL

// Normal login function
export const login = async (
  username: string,
  password: string,
  role: string
): Promise<AuthResponse> => {
  const response = await fetch(`${API_URL}/google-callback`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, role }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Login failed: ${errorText}`);
  }

  return response.json();
};

// Google login function
export const googleLogin = async (idToken: string): Promise<AuthResponse> => {
  try {
    // const response = await fetch(`${API_URL}/callback`, {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ idToken }),
    // });
    const response = await fetch(`${API_URL}/google-callback?code=${encodeURIComponent(idToken)}`, {
//const response = await fetch(`${API_URL}/google-callback?code=${idToken}`, {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
  },
});
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Google login failed: ${errorText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Google login error:', error);
    throw error; // re-throw so calling code can handle it
  }
};

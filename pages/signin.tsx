// pages/signin.tsx
/*
import React, { useState } from 'react';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Make API request to handle authentication
    const response = await fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // Handle successful sign-in (e.g., redirect to dashboard)
    } else {
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-something p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-semibold text-center mb-6">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-lg py-2 px-4 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 rounded-lg py-2 px-4 w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-lg w-full">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
*/
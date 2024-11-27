// SignIn.js
import React from 'react';

const Signin = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <form onSubmit={handleSignIn} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            required
            className="border border-gray-300 p-2 w-full rounded"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            required
            className="border border-gray-300 p-2 w-full rounded"
            placeholder="********"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 w-full rounded hover:bg-blue-600">
          Sign In
        </button>
        <p className="mt-4 text-center">
          Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Signin;

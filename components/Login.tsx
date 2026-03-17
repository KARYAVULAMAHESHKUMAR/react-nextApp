'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const [role, setRole] = useState("user"); 
      const router = useRouter();

  const handleSubmit = () => {
    // e.preventDefault();
    alert(`Logged in as ${role}`);
  };
  const handleNavigation = (url: string) => {
    router.push(url);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Select Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              {/* <option value="manager">Manager</option> */}
            </select>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                onClick={() => handleNavigation('/admindashboard')}
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default LoginPage;
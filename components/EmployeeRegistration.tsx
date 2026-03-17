'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Employee = {
  name: string;
  email: string;
  phone: string;
  department: string;
  role: string;
  password: string;
};

const EmployeeRegister: React.FC = () => {
  const [formData, setFormData] = useState<Employee>({
    name: "",
    email: "",
    phone: "",
    department: "",
    role: "",
    password: "",
  });
  const router=useRouter();
    const handleNavigation = (url: string) => {
    router.push(url);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Employee Data:", formData);
    alert("Employee Registered Successfully");
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">

        <h2 className="text-2xl font-bold text-center mb-6">
          Employee Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />

          {/* Department */}
          <select
            name="department"
            className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option>IT</option>
            <option>HR</option>
            <option>Finance</option>
            <option>Sales</option>
          </select>

          {/* Role */}
          <select
            name="role"
            className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option>Employee</option>
            <option>Manager</option>
            <option>Admin</option>
          </select>

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            onClick={()=>handleNavigation('/attandance')}
          >
            Register Employee
          </button>

        </form>
      </div>
    </div>
  );
};
export default EmployeeRegister;
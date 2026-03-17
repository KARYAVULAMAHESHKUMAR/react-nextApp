

'use client';
import React from "react";
import { useRouter } from "next/navigation";


const AdminDashboard = () => {
      const router = useRouter();

     const handleNavigation = (url: string) => {
    router.push(url);
  };
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>

        <ul className="space-y-4">
          <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">Dashboard</li>
          <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">Users</li>
          <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">Orders</li>
          <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">Reports</li>
          <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">Settings</li>
          <li
            className="hover:bg-slate-700 p-2 rounded cursor-pointer"
            onClick={() => handleNavigation("/employeerigistration")}
          >
            Employee Registration
          </li>
        </ul>
      </div>

      {/* Main Section */}
      <div className="flex-1 p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Dashboard</h2>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border px-3 py-1 rounded"
            />
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-6">

          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-gray-500">Total Users</h3>
            <p className="text-2xl font-bold">1,250</p>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-gray-500">Orders</h3>
            <p className="text-2xl font-bold">530</p>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-gray-500">Revenue</h3>
            <p className="text-2xl font-bold">$12,500</p>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-gray-500">Pending</h3>
            <p className="text-2xl font-bold">32</p>
          </div>

        </div>

        {/* Users Table */}
        <div className="bg-white rounded shadow p-4">

          <h3 className="text-lg font-semibold mb-4">Recent Users</h3>

          <table className="w-full text-left border-collapse">

            <thead>
              <tr className="border-b">
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Role</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-2">Mahesh</td>
                <td className="p-2">mahesh@gmail.com</td>
                <td className="p-2">Admin</td>
                <td className="p-2 text-green-500">Active</td>
              </tr>

              <tr className="border-b">
                <td className="p-2">Ramesh</td>
                <td className="p-2">ramesh@gmail.com</td>
                <td className="p-2">User</td>
                <td className="p-2 text-yellow-500">Pending</td>
              </tr>

              <tr>
                <td className="p-2">Suresh</td>
                <td className="p-2">suresh@gmail.com</td>
                <td className="p-2">Manager</td>
                <td className="p-2 text-green-500">Active</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;
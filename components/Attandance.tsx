'use client'
import React, { useState } from "react";

type Attendance = {
  name: string;
  date: string;
  status: string;
};

const AttendanceComponent: React.FC = () => {
  const [attendanceList, setAttendanceList] = useState<Attendance[]>([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Present");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newAttendance: Attendance = {
      name,
      date: new Date().toLocaleDateString(),
      status,
    };

    setAttendanceList([...attendanceList, newAttendance]);
    setName("");
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">Employee Attendance</h1>

      {/* Attendance Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow mb-6 flex gap-4"
      >
        <input
          type="text"
          placeholder="Employee Name"
          className="border px-3 py-2 rounded w-1/3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <select
          className="border px-3 py-2 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Present</option>
          <option>Absent</option>
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Mark Attendance
        </button>
      </form>

      {/* Attendance Table */}
      <div className="bg-white rounded shadow">
        <table className="w-full text-left">

          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Employee Name</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {attendanceList.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.date}</td>
                <td
                  className={`p-3 font-semibold ${
                    item.status === "Present"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default AttendanceComponent;
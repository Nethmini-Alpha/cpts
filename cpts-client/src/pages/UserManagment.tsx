import { useState } from "react";
import { useNavigate } from "react-router";
import logo from "../assets/logo.png";

function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Dr. Samantha Perera",
      email: "samantha.perera@example.com",
      role: "Doctor",
      status: "Active",
    },
    {
      id: 2,
      name: "Nurse Kamal Silva",
      email: "kamal.silva@example.com",
      role: "Nurse",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Admin Nadeesha",
      email: "nadeesha.admin@example.com",
      role: "Administrator",
      status: "Active",
    },
  ]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#4F378B] flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <h1 className="text-white font-leckerli text-xl leading-tight">
            ONCO
            <br />
            TRACK
          </h1>
        </div>
        <div className="text-white font-semibold text-lg">Profile</div>
      </header>

      {/* Search Bar */}
      <div className="px-6 pt-6">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 w-58 max-w-md rounded"
        />
      </div>

      {/* Users Table */}
      <div className="px-6 pt-4">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Employee ID</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Role</th>
              <th className="border px-4 py-2 text-left">Status</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="border px-4 py-2">{user.status}</td>
                <td className="border px-4 py-2 space-x-2">
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-600 text-white rounded text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan={5} className="border px-4 py-4 text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserManagement;

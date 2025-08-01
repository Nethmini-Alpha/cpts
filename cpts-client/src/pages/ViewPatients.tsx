import { useState } from "react";
import logo from "../assets/logo.png";


function RegisteredPatients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [patients, setPatients] = useState([

    {
      regNo: "000042",
      fullName: "Jane Doe",
      dob: "1985-06-12",
      sex: "Female",
      contact: "0771234567",
      email: "jane@example.com",
    },
    {
      regNo: "000043",
      fullName: "John Smith",
      dob: "1978-09-30",
      sex: "Male",
      contact: "0779876543",
      email: "john@example.com",
    },
    {
      regNo: "000044",
      fullName: "John Smith",
      dob: "1978-09-30",
      sex: "Male",
      contact: "0779876543",
      email: "john@example.com",
    },
    {
      regNo: "000045",
      fullName: "John Smith",
      dob: "1978-09-30",
      sex: "Male",
      contact: "0779876543",
      email: "john@example.com",
    },
    {
      regNo: "000046",
      fullName: "John Smith",
      dob: "1978-09-30",
      sex: "Male",
      contact: "0779876543",
      email: "john@example.com",
    },
    {
      regNo: "000047",
      fullName: "John Smith",
      dob: "1978-09-30",
      sex: "Male",
      contact: "0779876543",
      email: "john@example.com",
    },
    // more mock data...
  ]);

  const filteredPatients = patients.filter(
    (patient) =>
      patient.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.regNo.includes(searchTerm)
  );

    const sidebarItems = [
      {
        title: "Patients",
        children: ["New Patients", "Registered Patients"],
      },
      { title: "Appointments" },
      { title: "Transportation" },
      { title: "Accommodation" },
      { title: "User Management" },
    ];

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



      {/* Page Title */}
      <div className="px-6 pt-6">
        <h2 className="text-2xl font-semibold mb-4">View Patients</h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by Name or Reg No"
          className="border p-2 w-[220px] mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Patient Table */}
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Reg No</th>
              <th className="border p-2 text-left">Full Name</th>
              <th className="border p-2 text-left">DOB</th>
              <th className="border p-2 text-left">Sex</th>
              <th className="border p-2 text-left">Contact</th>
              <th className="border p-2 text-left">Email</th>
              <th className="border p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border p-2">{patient.regNo}</td>
                  <td className="border p-2">{patient.fullName}</td>
                  <td className="border p-2">{patient.dob}</td>
                  <td className="border p-2">{patient.sex}</td>
                  <td className="border p-2">{patient.contact}</td>
                  <td className="border p-2">{patient.email}</td>
                  <td className="border p-2">
                    <button className="text-blue-600 hover:underline">
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center p-4">
                  No patients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RegisteredPatients;

import { useState } from "react";
import { Link } from "react-router";
import ribbonImage from "../assets/ribbon.png";
import logo from "../assets/logo.png";

function Register() {
  const [form, setForm] = useState({
    fullName: "",
    role: "",
    contact: "",
    employeeId: "",
    department: "",
    email: "",
    password: "",
  });

  return (
    <>
      {/* NAVBAR same as Home */}
      <nav className="w-full p-4 bg-white shadow-2xl flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-20" />
          <h1 className="font-leckerli text-xl text-black leading-none ml-2">
            ONCO
            <br />
            TRACK
          </h1>
        </div>
        <div className="flex gap-15">
          <Link to="/login" className="text-black hover:underline text-xl">
            Login
          </Link>
          <Link
            to="/register"
            className="text-black hover:underline text-xl px-12"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* BACKGROUND & REGISTER FORM */}
      <main
        className="flex-1 bg-cover bg-[60%_center] px-4 py-6 flex justify-center"
        style={{ backgroundImage: `url(${ribbonImage})` }}
      >
        <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm max-h-[90vh] overflow-y-auto">
          <h2 className="text-center text-2xl mb-4 font-bold font-[cursive] text-black">
            Let’s Fight for the Hope
          </h2>

          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm text-black mb-1">Full Name</label>
              <input
                type="text"
                className="w-full p-2 rounded border focus:outline-none text-black"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm text-black mb-1">Role</label>
              <input
                type="text"
                className="w-full p-2 rounded border focus:outline-none text-black"
              />
            </div>

            {/* Contact Information */}
            <div>
              <label className="block text-sm text-black mb-1">
                Contact Information
              </label>
              <input
                type="text"
                className="w-full p-2 rounded border focus:outline-none text-black"
              />
            </div>

            {/* Employee ID */}
            <div>
              <label className="block text-sm text-black mb-1">
                Employee ID
              </label>
              <input
                type="text"
                className="w-full p-2 rounded border focus:outline-none text-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-black mb-1">E-mail</label>
              <input
                type="email"
                className="w-full p-2 rounded border focus:outline-none text-black"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-black mb-1">Password</label>
              <input
                type="password"
                className="w-full p-2 rounded border focus:outline-none text-black"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#4F378B]  hover:bg-purple-900 text-white py-2 rounded text-lg font-semibold"
            >
              Create Account
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Register;

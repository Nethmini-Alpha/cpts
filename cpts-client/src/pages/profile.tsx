import { useState } from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";

function Profile() {
  const [userProfile, setUserProfile] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "+1234567890",
    address: "123 Main St, City, Country",
  });

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

      

      {/* Profile Info */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-lg font-semibold">Full Name</label>
            <input
              type="text"
              value={userProfile.fullName}
              readOnly
              className="border w-full p-2"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold">Email</label>
            <input
              type="email"
              value={userProfile.email}
              readOnly
              className="border w-full p-2"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold">Phone Number</label>
            <input
              type="text"
              value={userProfile.phoneNumber}
              readOnly
              className="border w-full p-2"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold">Address</label>
            <input
              type="text"
              value={userProfile.address}
              readOnly
              className="border w-full p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

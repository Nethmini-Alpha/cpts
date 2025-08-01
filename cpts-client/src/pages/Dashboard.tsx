import { useState } from "react";
import { Link, useNavigate } from "react-router";
import logo from "../assets/logo.png";

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleExpand = (item: string) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  const handleSubItemClick = (subItem: string) => {
    if (subItem === "New Patients") {
      navigate("/register-patient");
    }
    if (subItem === "Registered Patients") {
      navigate("/registered-patient");
    }
    // Add more routes for other sub-items if needed
  };

  const recentActivities = [
    {
      action: "Medical Record Update",
      user: "N.M Perera",
      time: "Today 10.55 A.M",
    },
    {
      action: "Medical Record Update",
      user: "N.M Perera",
      time: "Today 10.55 A.M",
    },
    {
      action: "Medical Record Update",
      user: "N.M Perera",
      time: "Today 10.55 A.M",
    },
    {
      action: "Medical Record Update",
      user: "N.M Perera",
      time: "Today 10.55 A.M",
    },
    {
      action: "Medical Record Update",
      user: "N.M Perera",
      time: "Today 10.55 A.M",
    },
  ];

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
    <div className="min-h-screen bg-white relative">
      {/* Top Bar */}
      <header className="bg-[#4F378B] flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <h1 className="text-white font-leckerli text-xl leading-tight">
            ONCO
            <br />
            TRACK
          </h1>
        </div>
        <div
          className="text-white font-semibold text-lg cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          Profile
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-90 max-w-md bg-[#4F378B] text-white shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 text-lg font-semibold bg-black bg-opacity-30">
          <span>Navigation</span>
          <button
            onClick={toggleSidebar}
            className="focus:outline-none text-white text-2xl"
          >
            ×
          </button>
        </div>
        <ul className="px-4 py-2 flex flex-col">
          {sidebarItems.map((item, index) => (
            <li key={index} className="py-2">
              <div
                className="flex items-center justify-between cursor-pointer hover:bg-white hover:text-[#4F378B] px-2 py-2 rounded"
                onClick={() => {
                  if (item.children) {
                    toggleExpand(item.title);
                  } else {
                    if (item.title === "User Management") {
                      navigate("/user-management");
                    }
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">
                    {expandedItem === item.title ? "▾" : "▸"}
                  </span>
                  <span>{item.title}</span>
                </div>
              </div>
              {expandedItem === item.title && item.children && (
                <ul className="ml-6 mt-2 space-y-2 text-sm">
                  {item.children.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      onClick={() => handleSubItemClick(subItem)}
                      className="hover:underline cursor-pointer"
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Menu & Cards */}
      <div className="p-6 flex flex-col gap-6">
        <button
          className="bg-white text-[#4F378B] font-bold py-2 px-6 shadow border border-[#4F378B] rounded w-32"
          onClick={toggleSidebar}
        >
          Menu
        </button>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-[#4F378B] text-white rounded-lg p-6 text-center">
            <div className="text-3xl font-bold">350</div>
            <div className="text-lg">Total Patients</div>
          </div>
          <div className="bg-[#4F378B] text-white rounded-lg p-6 text-center">
            <div className="text-3xl font-bold">120</div>
            <div className="text-lg">Ongoing Treatments</div>
          </div>
          <div className="bg-[#4F378B] text-white rounded-lg p-6 text-center">
            <div className="text-3xl font-bold">25</div>
            <div className="text-lg">Appointments</div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-[#4F378B] text-white rounded p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <ul className="space-y-4">
            {recentActivities.map((activity, index) => (
              <li key={index} className="border-b border-white pb-2">
                <div className="font-medium">{activity.action}</div>
                <div className="text-sm">{activity.user}</div>
                <div className="text-sm text-right">{activity.time}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

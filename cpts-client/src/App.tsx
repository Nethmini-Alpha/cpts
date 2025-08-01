import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RegisterPatient from "./pages/RegisterPatient"; 
import RegisteredPatient from "./pages/ViewPatients"; 
import UserManagement from "./pages/UserManagment";
import Profile from "./pages/profile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register-patient" element={<RegisterPatient />} />;
      <Route path="/registered-patient" element={<RegisteredPatient />} />;
      <Route path="/user-management" element={<UserManagement />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;





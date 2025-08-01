import { useState } from "react";
import { Link, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import ribbonImage from "../assets/ribbon.png";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login validation/authentication here if needed
    navigate("/dashboard");
  };

  return (
    <>
      {/* NAVBAR same as Home */}
      <nav className="w-full p-4 bg-white shadow-2xl flex justify-between items-center">
        {/* LOGO AND TEXT */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-20" />
          <h1 className="font-leckerli text-xl text-black leading-none ml-2">
            ONCO
            <br />
            TRACK
          </h1>
        </div>
        {/* LOGIN/REGISTER */}
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

      {/* BACKGROUND & LOGIN FORM */}
      <main
        className="flex-1 bg-cover bg-[60%_center] flex items-center justify-center px-6 h-[calc(95vh-120px)]"
        style={{
          backgroundImage: `url(${ribbonImage})`,
          backgroundPosition: "60% center",
        }}
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <h2 className="text-center text-2xl mb-6 font-bold font-[cursive] text-black">
            Welcome Back
          </h2>

          <form className="space-y-5" onSubmit={handleLogin}>
            {/* EMAIL */}
            <div>
              <label className="block text-sm text-black mb-1">Email</label>
              <input
                type="email"
                placeholder="username@gmail.com"
                className="w-full p-2 rounded border focus:outline-none text-black"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm text-black mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-2 rounded border focus:outline-none text-black"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-3 text-gray-500"
                >
                  {showPassword ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="text-right mt-1 text-sm">
                <Link
                  to="/forgot-password"
                  className="text-purple-900 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* SIGN IN */}
            <button
              type="submit"
              className="w-full bg-[#4F378B] hover:bg-purple-900 text-white py-2 rounded text-lg font-semibold"
            >
              Sign in
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;

import ribbonImage from "../assets/ribbon.png";
import logo from "../assets/logo.png";
import { Link } from "react-router";

function Home() {
  return (
    // <div className="min-h-screen flex flex-col">
    //   {/* Header */}
    //   <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
    //     <div className="flex items-center space-x-3">
    //       <img src={logo} alt="Logo" className="w-10 h-10" />
    //       <h1 className="font-bold text-xl italic text-black">
    //         ONCO
    //         <br />
    //         TRACK
    //       </h1>
    //     </div>
    //     <nav className="space-x-6">
    //       <Link to="/login" className="text-black hover:underline">
    //         Login
    //       </Link>
    //       <Link to="/register" className="text-black hover:underline">
    //         Register
    //       </Link>
    //     </nav>
    //   </header>

    //   {/* Hero Section */}
    //   <main
    //     className="flex-1 bg-cover bg-center relative flex items-center justify-end px-10"
    //     style={{ backgroundImage: `url(${ribbonImage})` }}
    //   >
    //     <div className="bg-black bg-opacity-30 p-6 rounded max-w-md text-white font-[cursive] text-xl">
    //       <p>
    //         Welcome to the <strong>Cancer Patients Tracking System</strong>,
    //         <br />a compassionate and innovative solution designed to support
    //         the journey of our warriors.
    //       </p>
    //     </div>
    //   </main>
    // </div>

    <>
      {/* NAV BAR */}
      <nav className="w-full p-4 bg-white shadow-2xl flex justify-between items-center">
        {/* IMAGE AND LOGO  */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-20" />
          <h1 className="font-leckerli text-xl  text-black leading-none">
            ONCO
            <br />
            TRACK{" "}
          </h1>
        </div>
        {/* LOGIN AND REGISTER BTN */}
        <div className="flex gap-15">
          <Link to="/login" className="text-black hover:underline text-xl ">
            Login
          </Link>

          <Link to="/register" className="text-black hover:underline text-xl px-12 ">
            Register
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main
        className="flex-1 bg-cover  bg-[center_40%]  flex items-center justify-center pl-2 pb-2 px-10 h-[calc(95vh-120px)]"
        style={{
          backgroundImage: `url(${ribbonImage})`,
          backgroundPosition: "center 40%",
        }}
      >
        <div className="max-w-md text-white text-[1.8rem] leading-relaxed drop-shadow-[2px_2px_6px_rgba(0,0,0,0.6)] font-pacifico">
          <p className="text-center">
            Welcome to the Cancer Patients Tracking System
          </p>
        </div>
      </main>
    </>
  );
}

export default Home;













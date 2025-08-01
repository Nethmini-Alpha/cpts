import { useState } from "react";
import { useNavigate } from "react-router";
import logo from "../assets/logo.png";

function RegisterPatient() {
  const [activeTab, setActiveTab] = useState("Personal Information");
  const [cancerType, setCancerType] = useState("");
  const [allergyType, setAllergyType] = useState("");
  const [attachments, setAttachments] = useState<FileList | null>(null);
  const [accommodationRequired, setAccommodationRequired] = useState("");
  const [transportationRequired, setTransportationRequired] = useState("");
  const [digitalSignature, setDigitalSignature] = useState("");
  const [signatureDate, setSignatureDate] = useState("");
    const [agreementsChecked, setAgreementsChecked] = useState({
      privacy: false,
      consent: false,
      confirm: false,
    });
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

  const tabs = [
    "Personal Information",
    "Medical Health and History",
    "Accommodation and Transportation",
    "Terms and Agreements",
  ];

  const handleSave = () => {
    const allChecked =
      agreementsChecked.privacy &&
      agreementsChecked.consent &&
      agreementsChecked.confirm;

    if (!allChecked) {
      alert("Please review and check all agreement checkboxes before saving.");
      return;
    }
    if (!digitalSignature || !signatureDate) {
      alert(
        "Please complete all required fields including signature and date."
      );
      return;
    }
    if (
      window.confirm(
        "Are you sure you want to save this patient's registration form?"
      )
    ) {
      alert("Patient registration data saved successfully.");
  
    }
  };

  const renderForm = () => {
    switch (activeTab) {
      case "Personal Information":
        return (
          <>
            <div className="flex justify-end mt-[-2px] mr-2">
              <div className="border px-3 py-2 bg-gray-200">Reg No: 000042</div>
            </div>
            <div className="mt-1 ml-6 w-[90%] grid grid-cols-2 gap-x-6 gap-y-3">
              <div>
                <label className="block">Full Name:</label>
                <input type="text" className="border p-1 w-90" />
              </div>
              <div>
                <label className="block">Full Name of Next of Kin:</label>
                <input type="text" className="border p-1 w-90" />
              </div>
              <div>
                <label className="block">Date of Birth:</label>
                <input type="date" className="border p-1 w-90" />
              </div>
              <div>
                <label className="block">Address of Next of Kin:</label>
                <input type="text" className="border p-1 w-90" />
              </div>
              <div>
                <label className="block">Sex:</label>
                <select className="border p-1 w-90">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label className="block">Phone Number of Next of Kin:</label>
                <input type="text" className="border p-1 w-90" />
              </div>
              <div>
                <label className="block">Marital status:</label>
                <select className="border p-1 w-90">
                  <option value="">Select</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
              <div>
                <label className="block">Relationship to Next of Kin:</label>
                <input type="text" className="border p-1 w-90" />
              </div>
              <div>
                <label className="block">Email Address:</label>
                <input type="email" className="border p-1 w-90" />
              </div>
              <div>
                <label className="block">Email Address:</label>
                <input type="email" className="border p-1 w-90" />
              </div>
              <div>
                <label className="block">Phone Number:</label>
                <input type="text" className="border p-1 w-90" />
              </div>
              <div>
                <label className="block">Phone Number:</label>
                <input type="text" className="border p-1 w-90" />
              </div>
              <div>
                <label className="block">Address:</label>
                <input type="text" className="border p-1 w-90" />
                <input type="text" className="border p-1 w-90 mt-1" />
                <input type="text" className="border p-1 w-90 mt-1" />
              </div>
              <div>
                <label className="block">Address:</label>
                <input type="text" className="border p-1 w-90" />
                <input type="text" className="border p-1 w-90 mt-1" />
                <input type="text" className="border p-1 w-90 mt-1" />
              </div>
            </div>
          </>
        );
      case "Medical Health and History":
        return (
          <div className="mt-6 ml-6">
            <div className="grid grid-cols-4 gap-6 items-start w-[90%] mb-6">
              <div>
                <label className="block">Cancer Type: (if known)</label>
                <select
                  className="border w-[200px] p-1"
                  value={cancerType}
                  onChange={(e) => setCancerType(e.target.value)}
                >
                  <option>Select</option>
                  <option>Breast</option>
                  <option>Colon</option>
                  <option>Lung</option>
                  <option>Leukemia</option>
                  <option>Other</option>
                </select>
                {cancerType === "Other" && (
                  <input
                    type="text"
                    className="border w-[200px] p-1 mt-2"
                    placeholder="Please specify"
                  />
                )}
              </div>
              <div>
                <label className="block">Blood Type:</label>
                <select className="border w-[200px] p-1">
                  <option>Select</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>
              <div>
                <label className="block">Allergies:</label>
                <select
                  className="border w-[200px] p-1"
                  value={allergyType}
                  onChange={(e) => setAllergyType(e.target.value)}
                >
                  <option>Select</option>
                  <option>None</option>
                  <option>Food</option>
                  <option>Medicine</option>
                  <option>Other</option>
                </select>
                {allergyType === "Other" && (
                  <input
                    type="text"
                    className="border w-[200px] p-1 mt-2"
                    placeholder="Please specify"
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 w-[90%]">
              <div>
                <label className="block">Medications Currently Taken:</label>
                <textarea className="border w-[550px] h-24 p-2"></textarea>
              </div>
              <div>
                <label className="block">
                  Previous Surgeries or Hospitalizations:
                </label>
                <textarea className="border w-[550px] h-24 p-2"></textarea>
              </div>
            </div>

            <div className="w-[90%] mt-6">
              <label className="block font-semibold">
                Attach Medical Records / Reports:
              </label>
              <input
                type="file"
                multiple
                onChange={(e) => setAttachments(e.target.files)}
                className="border p-1 w-[250px]"
              />
            </div>
          </div>
        );
      case "Accommodation and Transportation":
        return (
          <div className="mt-6 ml-6 w-[90%]">
            <div className="mb-4">
              <label className="block mb-1">
                Do you require accommodation assistance?
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="accommodation"
                    value="Yes"
                    checked={accommodationRequired === "Yes"}
                    onChange={(e) => setAccommodationRequired(e.target.value)}
                    className="w-4 h-4"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="accommodation"
                    value="No"
                    checked={accommodationRequired === "No"}
                    onChange={(e) => setAccommodationRequired(e.target.value)}
                    className="w-4 h-4"
                  />
                  No
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1">
                Expected duration of stay (in days):
              </label>
              <input type="text" className="border p-1 w-[200px]" />
            </div>

            <div className="mb-4">
              <label className="block mb-1">
                Do you require transportation assistance?
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="transportation"
                    value="Yes"
                    checked={transportationRequired === "Yes"}
                    onChange={(e) => setTransportationRequired(e.target.value)}
                    className="w-4 h-4"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="transportation"
                    value="No"
                    checked={transportationRequired === "No"}
                    onChange={(e) => setTransportationRequired(e.target.value)}
                    className="w-4 h-4"
                  />
                  No
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1">
                Distance from your location to the clinic (in km):
              </label>
              <input type="text" className="border p-1 w-[200px]" />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Special Requirements:</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  Wheel Chair
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  Stretcher
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-2">
                Attach Supporting Documents:
              </label>
              <input
                type="file"
                multiple
                onChange={(e) => setAttachments(e.target.files)}
                className="border p-1 w-[250px]"
              />
            </div>
          </div>
        );

      case "Terms and Agreements":
        return (
          <div className="mt-6 ml-6 w-[90%]">
            <p className="mb-4">Please review and Check the following</p>
            <div className="mb-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={agreementsChecked.privacy}
                  onChange={(e) =>
                    setAgreementsChecked({
                      ...agreementsChecked,
                      privacy: e.target.checked,
                    })
                  }
                />
                I agree to the Privacy Policy
              </label>
            </div>
            <div className="mb-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={agreementsChecked.consent}
                  onChange={(e) =>
                    setAgreementsChecked({
                      ...agreementsChecked,
                      consent: e.target.checked,
                    })
                  }
                />
                I give consent to medical treatment
              </label>
            </div>
            <div className="mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={agreementsChecked.confirm}
                  onChange={(e) =>
                    setAgreementsChecked({
                      ...agreementsChecked,
                      confirm: e.target.checked,
                    })
                  }
                />
                I confirm that the information provided is accurate and complete
              </label>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Digital Signature:</label>
              <input
                type="text"
                value={digitalSignature}
                onChange={(e) => setDigitalSignature(e.target.value)}
                className="border p-1 w-[200px]"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-1">Date:</label>
              <input
                type="date"
                value={signatureDate}
                onChange={(e) => setSignatureDate(e.target.value)}
                className="border p-1 w-[200px]"
              />
            </div>
            <button
              onClick={handleSave}
              className="bg-[#4F378B] text-white px-4 py-2 rounded hover:bg-[#3e2e6c]"
            >
              Save
            </button>
          </div>
        );
      default:
        return <div className="mt-6">Coming Soon...</div>;
    }
  };

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

      {/* Tabs */}
      <div className="flex gap-54 px-6 pt-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-semibold focus:outline-none transition-colors duration-200 ${
              activeTab === tab
                ? "bg-[#8E84C3] text-white"
                : "bg-black text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Form Section */}
      <div className="px-6 pt-6 pb-10">{renderForm()}</div>
    </div>
  );
}

export default RegisterPatient;


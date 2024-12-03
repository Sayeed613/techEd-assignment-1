import { AiOutlineUser, AiOutlineBook,  } from 'react-icons/ai';
import { MdOutlineWorkOutline } from "react-icons/md";

const Sidebar = ({ selectedSection, setSelectedSection }) => {
  return (
    <div className="w-1/4 bg-white shadow-md h-[400px] rounded-md mt-6 p-6">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gray-100 mb-4"></div>
        <h2 className="text-xl font-semibold">Rakesh Raushan</h2>
      </div>
      <ul className="mt-8 space-y-4">
        <li
          className={`flex items-center cursor-pointer ${
            selectedSection === 'Profile' ? 'text-blue-500' : 'text-gray-700'
          }`}
          onClick={() => setSelectedSection('Profile')}
        >
          <AiOutlineUser className="mr-2" /> Profile
        </li>
        <li
          className={`flex items-center cursor-pointer ${
            selectedSection === 'Education' ? 'text-blue-500' : 'text-gray-700'
          }`}
          onClick={() => setSelectedSection('Education')}
        >
          <AiOutlineBook className="mr-2" /> Education
        </li>
        <li
          className={`flex items-center cursor-pointer ${
            selectedSection === 'WorkExperience' ? 'text-blue-500' : 'text-gray-700'
          }`}
          onClick={() => setSelectedSection('WorkExperience')}
        >
          <MdOutlineWorkOutline className="mr-2" /> Work Experience
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

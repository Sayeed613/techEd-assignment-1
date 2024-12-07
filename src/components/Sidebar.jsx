import { AiOutlineUser, AiOutlineBook,  } from 'react-icons/ai';
import { MdOutlineWorkOutline } from "react-icons/md";

const Sidebar = ({ selectedSection, setSelectedSection }) => {
  return (
    <div className="w-1/4 bg-white shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] rounded-lg h-[400px]  mt-16 p-6">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gray-100 mb-4"></div>
        <h2 className="text-xl font-semibold">Rakesh Raushan</h2>
      </div>
      <ul className="mt-8 space-y-4">
        <li
          className={`flex items-center cursor-pointer ${
            selectedSection === 'Profile' ? 'text-gray-500' : 'text-gray-700'
          }`}
          onClick={() => setSelectedSection('Profile')}
        >
          <AiOutlineUser className="mr-2" /> Profile
        </li>
        <li
          className={`flex items-center cursor-pointer ${
            selectedSection === 'Education' ? 'text-gray-500' : 'text-gray-700'
          }`}
          onClick={() => setSelectedSection('Education')}
        >
          <AiOutlineBook className="mr-2" /> Education
        </li>
        <li
          className={`flex items-center cursor-pointer ${
            selectedSection === 'WorkExperience' ? 'text-gray-500' : 'text-gray-700'
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

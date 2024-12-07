import { useState } from "react";
import { AiOutlineEdit, AiOutlineClose } from "react-icons/ai";

// Simple Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-[400px] p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <AiOutlineClose size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

const BioSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState(
    "I'm a recent graduate with a passion for data. I'm eager to learn data analysis techniques and build a strong foundation in this exciting field. I'm excited to explore the courses offered on Simplitrain and gain the necessary skills to kickstart my data analyst career."
  );

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] rounded-lg">
      {/* Bio Section */}
      <div className="bg-white p-6 mb-6 relative">
        <button
          className="absolute top-4 right-4 h-[30px] border-2 border-gray-500 p-2 rounded-full text-gray-800 hover:text-gray-700 flex items-center"
          onClick={() => setIsEditing(true)}
        >
          <AiOutlineEdit className="mr-1" /> Edit
        </button>
        <h2 className="text-lg font-semibold mb-4">Bio</h2>
        <div className="border-b-2 mb-4">
          <p className="text-base">{bio}</p>
        </div>
      </div>

      {/* Modal for Editing Bio */}
      <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
        <h2 className="text-lg font-semibold mb-4">Edit Bio</h2>
        <form className="space-y-4">
          <div>
            <textarea
              value={bio}
              onChange={handleBioChange}
              className="w-full border rounded-md px-3 py-2 h-32 text-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Edit your bio here"
            />
          </div>

          <button
            type="button"
            className="bg-gray-900 text-white px-4 py-2 rounded w-full"
            onClick={handleSave}
          >
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default BioSection;

import React, { useState } from "react";
import Modal from "./Modal";
import { AiOutlineEdit } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa"; // Importing icons

const SocialMedia = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [socialLinks, setSocialLinks] = useState({
    LinkedIn: "https://linkedin.com/in/example",
    GitHub: "https://github.com/example",
    Dribbble: "https://dribbble.com/example",
  });

  const handleInputChange = (platform, value) => {
    setSocialLinks({ ...socialLinks, [platform]: value });
  };

  const platformIcons = {
    LinkedIn: (
      <FaLinkedin className="text-blue-700 hover:text-blue-500 transition-colors" />
    ),
    GitHub: (
      <FaGithub className="text-gray-800 hover:text-gray-600 transition-colors" />
    ),
    Dribbble: (
      <FaDribbble className="text-pink-500 hover:text-pink-400 transition-colors" />
    ),
  };

  return (
    <div className="bg-white p-6 shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px]  rounded-lg mb-6 ">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Social Media</h2>
        <button
          className=" h-[30px] border-2 border-gray-500 p-2 rounded-full right-4 text-gray-800 hover:text-gray-700 flex items-center"
          onClick={() => setIsEditing(true)}
        >
          <AiOutlineEdit className="mr-1" /> Edit
        </button>
      </div>

      {/* Social Media Links */}
      <div className="mt-4 flex items-center gap-6">
        {Object.entries(socialLinks).map(([platform, link], index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            {React.cloneElement(platformIcons[platform], {
              className: "text-4xl",
            })}
          </a>
        ))}
      </div>

      {/* Modal for Editing */}
      <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
        <h3 className="text-lg font-bold mb-4">Edit Social Media Links</h3>
        {Object.entries(socialLinks).map(([platform, link], index) => (
          <div key={index} className="mb-4">
            <label className="block text-sm font-medium">{platform}</label>
            <input
              type="text"
              value={link}
              onChange={(e) => handleInputChange(platform, e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        ))}

          <button
            type="button"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors w-full"
            onClick={() => setIsEditing(false)}
          >
            Save
          </button>
      </Modal>
    </div>
  );
};

export default SocialMedia;

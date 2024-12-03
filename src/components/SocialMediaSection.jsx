import React, { useState } from "react";
import Modal from "./Modal";
import { AiOutlineEdit } from "react-icons/ai";

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

  return (
    <div className="bg-white shadow-md p-6 rounded-lg mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Social Media</h2>
        <button
          className="text-gray-800 hover:underline flex items-center"
          onClick={() => setIsEditing(true)}
        >
          <AiOutlineEdit className="mr-1" /> Edit
        </button>
      </div>
      <div className="mt-4 space-y-2">
        {Object.entries(socialLinks).map(([platform, link], index) => (
          <p key={index}>
            <strong>{platform}:</strong>{" "}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline"
            >
              {link}
            </a>
          </p>
        ))}
      </div>

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
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-gray-800 text-white px-4 py-2 rounded"
            onClick={() => setIsEditing(false)}
          >
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default SocialMedia;

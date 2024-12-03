// src/components/PreferredLanguages.jsx
import React, { useState } from "react";
import Modal from "./Modal";
import { AiOutlineEdit } from "react-icons/ai";

const PreferredLanguages = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState(["English", "Hindi"]);
  const languages = ["English", "Hindi", "Spanish", "German", "French"];

  const handleCheckboxChange = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language));
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Preferred Languages</h2>
        <button
          className="text-gray-800 hover:underline flex items-center"
          onClick={() => setIsEditing(true)}
        >
          <AiOutlineEdit className="mr-1" /> Edit
        </button>
      </div>
      <div className="mt-4 flex gap-2 flex-wrap">
        {selectedLanguages.map((lang, index) => (
          <span
            key={index}
            className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm"
          >
            {lang}
          </span>
        ))}
      </div>

      <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
        <h3 className="text-lg font-bold mb-4">Edit Preferred Languages</h3>
        <form className="space-y-2">
          {languages.map((language, index) => (
            <label key={index} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedLanguages.includes(language)}
                onChange={() => handleCheckboxChange(language)}
                className="mr-2"
              />
              {language}
            </label>
          ))}
        </form>
        <div className="flex justify-end space-x-4 mt-4">
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

export default PreferredLanguages;

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

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-6 shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] rounded-lg mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Preferred Languages</h2>
        <button
          className="h-[30px] border-2 border-gray-500 p-2 rounded-full text-gray-800 hover:text-gray-700 flex items-center"
          onClick={() => setIsEditing(true)}
        >
          <AiOutlineEdit className="mr-1" /> Edit
        </button>
      </div>
      <div className="mt-4 flex gap-2 flex-wrap">
        {selectedLanguages.map((lang, index) => (
          <span key={index} className="border text-black px-3 py-1 rounded-full text-sm">
            {lang}
          </span>
        ))}
      </div>

      {/* Modal for Editing Preferred Languages */}
      <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
        <div className="bg-white rounded-lg w-[400px] p-6 relative">
          <h3 className="text-lg font-bold mb-4">Edit Preferred Languages</h3>
          <form className="space-y-4">
            {languages.map((language, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedLanguages.includes(language)}
                  onChange={() => handleCheckboxChange(language)}
                  id={language}
                  className="h-4 w-4 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor={language} className="text-sm text-gray-700">
                  {language}
                </label>
              </div>
            ))}
          </form>
            <button
              type="button"
              className="bg-gray-800 text-white px-4 py-2 rounded-md w-full mt-2"
              onClick={handleSave}
            >
              Save
            </button>
        </div>
      </Modal>
    </div>
  );
};

export default PreferredLanguages;

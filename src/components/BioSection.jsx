import React, { useState } from "react";
import Modal from "./Modal";
import { AiOutlineEdit } from "react-icons/ai";

const BioSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState("I am a software engineer passionate about React.");

  return (
    <div className="bg-white shadow-md p-6 rounded-lg mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Bio</h2>
        <button
          className="text-gray-800 hover:underline flex items-center"
          onClick={() => setIsEditing(true)}
        >
          <AiOutlineEdit className="mr-1" /> Edit
        </button>
      </div>
      <p className="mt-4">{bio}</p>

      <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
        <h3 className="text-lg font-bold mb-4">Edit Bio</h3>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full border rounded px-3 py-2 h-32"
        />
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

export default BioSection;

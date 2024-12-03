import React, { useState } from "react";
import Modal from "./Modal";
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";

const Education = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [educationList, setEducationList] = useState([
    { id: 1, institution: "MIT University", degree: "B.Tech", year: "2020" },
  ]);

  const [currentEdit, setCurrentEdit] = useState({});
  const [isAdding, setIsAdding] = useState(false);

  const handleSave = () => {
    if (isAdding) {
      setEducationList([...educationList, { id: Date.now(), ...currentEdit }]);
    } else {
      setEducationList(
        educationList.map((edu) =>
          edu.id === currentEdit.id ? currentEdit : edu
        )
      );
    }
    setIsEditing(false);
    setIsAdding(false);
  };

  const handleEdit = (edu) => {
    setCurrentEdit(edu);
    setIsEditing(true);
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Education</h2>
        <button
          className="text-gray-800 hover:underline flex items-center"
          onClick={() => {
            setCurrentEdit({});
            setIsAdding(true);
            setIsEditing(true);
          }}
        >
          <AiOutlinePlus className="mr-1" /> Add
        </button>
      </div>
      <div className="mt-4 space-y-4">
        {educationList.map((edu) => (
          <div key={edu.id} className="flex justify-between items-center">
            <div>
              <p><strong>{edu.institution}</strong></p>
              <p>{edu.degree}, {edu.year}</p>
            </div>
            <button
              className="text-gray-800 hover:underline"
              onClick={() => handleEdit(edu)}
            >
              <AiOutlineEdit /> Edit
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
        <h3 className="text-lg font-bold mb-4">{isAdding ? "Add Education" : "Edit Education"}</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Institution</label>
            <input
              type="text"
              value={currentEdit.institution || ""}
              onChange={(e) =>
                setCurrentEdit({ ...currentEdit, institution: e.target.value })
              }
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Degree</label>
            <input
              type="text"
              value={currentEdit.degree || ""}
              onChange={(e) =>
                setCurrentEdit({ ...currentEdit, degree: e.target.value })
              }
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Year</label>
            <input
              type="text"
              value={currentEdit.year || ""}
              onChange={(e) =>
                setCurrentEdit({ ...currentEdit, year: e.target.value })
              }
              className="w-full border rounded px-3 py-2"
            />
          </div>
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
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Education;

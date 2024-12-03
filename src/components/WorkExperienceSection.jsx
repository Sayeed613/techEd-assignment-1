import React, { useState } from "react";
import Modal from "./Modal";
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";

const WorkExperience = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [workExperienceList, setWorkExperienceList] = useState([
    {
      id: 1,
      jobTitle: "Software Engineer",
      companyName: "Amazon",
      startDate: "2018-07-01", // Use ISO format (YYYY-MM-DD)
      endDate: "2024-12-01", // Use ISO format (YYYY-MM-DD)
      employmentType: "Full Time",
      industry: "Information Technology",
      location: "Bengaluru",
    },
  ]);

  const [currentEdit, setCurrentEdit] = useState({});
  const [isAdding, setIsAdding] = useState(false);

  const handleSave = () => {
    if (isAdding) {
      setWorkExperienceList([
        ...workExperienceList,
        { id: Date.now(), ...currentEdit },
      ]);
    } else {
      setWorkExperienceList(
        workExperienceList.map((work) =>
          work.id === currentEdit.id ? currentEdit : work
        )
      );
    }
    setIsEditing(false);
    setIsAdding(false);
  };

  const handleEdit = (work) => {
    setCurrentEdit(work);
    setIsEditing(true);
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Work Experience</h2>
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
        {workExperienceList.map((work) => (
          <div key={work.id} className="flex justify-between items-center">
            <div>
              <p><strong>{work.jobTitle}</strong> at {work.companyName}</p>
              <p>
                {work.startDate} - {work.endDate} | {work.employmentType} | {work.industry} | {work.location}
              </p>
            </div>
            <button
              className="text-gray-800 hover:underline"
              onClick={() => handleEdit(work)}
            >
              <AiOutlineEdit /> Edit
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
        <h3 className="text-lg font-bold mb-4">{isAdding ? "Add Work Experience" : "Edit Work Experience"}</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Job Title</label>
            <input
              type="text"
              value={currentEdit.jobTitle || ""}
              onChange={(e) =>
                setCurrentEdit({ ...currentEdit, jobTitle: e.target.value })
              }
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Company Name</label>
            <input
              type="text"
              value={currentEdit.companyName || ""}
              onChange={(e) =>
                setCurrentEdit({ ...currentEdit, companyName: e.target.value })
              }
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <label className="block text-sm font-medium">Start Date</label>
              <input
                type="date"
                value={currentEdit.startDate || ""}
                onChange={(e) =>
                  setCurrentEdit({ ...currentEdit, startDate: e.target.value })
                }
                className="w-full border rounded px-3 py-2 cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">End Date</label>
              <input
                type="date"
                value={currentEdit.endDate || ""}
                onChange={(e) =>
                  setCurrentEdit({ ...currentEdit, endDate: e.target.value })
                }
                className="w-full border rounded px-3 py-2 cursor-pointer"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Employment Type</label>
            <input
              type="text"
              value={currentEdit.employmentType || ""}
              onChange={(e) =>
                setCurrentEdit({ ...currentEdit, employmentType: e.target.value })
              }
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Industry</label>
            <input
              type="text"
              value={currentEdit.industry || ""}
              onChange={(e) =>
                setCurrentEdit({ ...currentEdit, industry: e.target.value })
              }
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Location</label>
            <input
              type="text"
              value={currentEdit.location || ""}
              onChange={(e) =>
                setCurrentEdit({ ...currentEdit, location: e.target.value })
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

export default WorkExperience;

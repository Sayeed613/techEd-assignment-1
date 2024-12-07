import React, { useState } from "react";
import Modal from "./Modal";
import { AiOutlineEdit, AiOutlinePlus, AiOutlineCalendar } from "react-icons/ai";

const Education = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [educationList, setEducationList] = useState([
    { id: 1, institution: "MIT University", degree: "B.Tech", location: "Bangalore", year: "2020", startDate: "2016-08-01", endDate: "2020-05-15" },
    { id: 2, institution: "SBMJC", degree: "BBA", location: "Bangalore", year: "2024", startDate: "2020-06-01", endDate: "2024-04-30" },
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
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Education</h2>
        <button
          className="text-white bg-black p-2 rounded-full h-[30px] hover:underline flex items-center"
          onClick={() => {
            setCurrentEdit({});
            setIsAdding(true);
            setIsEditing(true);
          }}
        >
          <AiOutlinePlus className="mr-1" /> Add
        </button>
      </div>

      <div className="bg-white shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] rounded-lg p-6 mb-6 mt-4">
        <div className="mt-4 space-y-4">
          {educationList.map((edu) => (
            <div key={edu.id} className="flex justify-between items-center border px-2 py-4">
              <div className="flex">
                {/* Dummy Image */}
                <div className="w-[80px] h-[80px] bg-gray-300 rounded-md overflow-hidden">
                  <img
                    src="https://via.placeholder.com/80"
                    alt="Institution"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Education Details */}
                <div className="ml-4">
                  <p>
                    <strong>{edu.institution}</strong>
                  </p>
                  <p>
                    {edu.degree}, {edu.location}
                  </p>
                  <p>{edu.year}</p>
                  <p>
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              </div>

              {/* Edit Button */}
              <button
                className="h-[30px] border-2 border-gray-500 p-2 rounded-full text-gray-800 hover:text-gray-700 flex items-center"
                onClick={() => handleEdit(edu)}
              >
                <AiOutlineEdit /> Edit
              </button>
            </div>
          ))}
        </div>

        {/* Modal for Editing */}
        <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
          <h3 className="text-lg font-bold mb-4">
            {isAdding ? "Add Education" : "Edit Education"}
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Institution</label>
              <input
                type="text"
                value={currentEdit.institution || ""}
                onChange={(e) =>
                  setCurrentEdit({
                    ...currentEdit,
                    institution: e.target.value,
                  })
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
            <div className="flex items-center gap-6">
              {/* Start Date */}
            <div>
              <label className="block text-sm font-medium">Start Date</label>
              <div className="flex items-center border rounded px-3 py-2">
                <AiOutlineCalendar className="mr-2 text-gray-500" />
                <input
                  type="date"
                  value={currentEdit.startDate || ""}
                  onChange={(e) =>
                    setCurrentEdit({ ...currentEdit, startDate: e.target.value })
                  }
                  className="w-full border-none focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* End Date */}
            <div>
              <label className="block text-sm font-medium">End Date</label>
              <div className="flex items-center border rounded px-3 py-2">
                <AiOutlineCalendar className="mr-2 text-gray-500" />
                <input
                  type="date"
                  value={currentEdit.endDate || ""}
                  onChange={(e) =>
                    setCurrentEdit({ ...currentEdit, endDate: e.target.value })
                  }
                  className="w-full border-none focus:ring-indigo-500"
                />
              </div>
            </div>
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



            <button
              type="button"
              className="bg-gray-800 text-white px-4 py-2 rounded w-full"
              onClick={handleSave}
            >
              Save
            </button>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default Education;

import React, { useState } from "react";
import Modal from "./Modal";
import { AiOutlineEdit } from "react-icons/ai";

const PersonalInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState({
    firstName: "Rohan",
    lastName: "Raushan",
    age: 35,
    gender: "Male",
    address1: "99, 5th Cross Rd",
    address2: "6th Block, Koramangala",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560095",
    country: "India",
  });

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Personal Information</h2>
        <button
          className="text-gray-800 hover:underline flex items-center"
          onClick={() => setIsEditing(true)}
        >
          <AiOutlineEdit className="mr-1" /> Edit
        </button>
      </div>
      <div className="mt-4 space-y-2">
        <p><strong>First Name:</strong> {info.firstName}</p>
        <p><strong>Last Name:</strong> {info.lastName}</p>
        <p><strong>Age:</strong> {info.age}</p>
        <p><strong>Gender:</strong> {info.gender}</p>
        <p><strong>Address:</strong> {info.address1}, {info.address2}, {info.city}, {info.state}, {info.pincode}, {info.country}</p>
      </div>

      <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
        <h3 className="text-lg font-bold mb-4">Edit Personal Information</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              value={info.firstName}
              onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              value={info.lastName}
              onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Age</label>
            <input
              type="number"
              value={info.age}
              onChange={(e) => setInfo({ ...info, age: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Gender</label>
            <select
              value={info.gender}
              onChange={(e) => setInfo({ ...info, gender: e.target.value })}
              className="w-full border rounded px-3 py-2"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Address Line 1</label>
            <input
              type="text"
              value={info.address1}
              onChange={(e) => setInfo({ ...info, address1: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Address Line 2</label>
            <input
              type="text"
              value={info.address2}
              onChange={(e) => setInfo({ ...info, address2: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>
         <div className="flex justify-between items-center">
         <div>
            <label className="block text-sm font-medium">City</label>
            <input
              type="text"
              value={info.city}
              onChange={(e) => setInfo({ ...info, city: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">State</label>
            <input
              type="text"
              value={info.state}
              onChange={(e) => setInfo({ ...info, state: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>
         </div>
         <div className="flex justify-between items-center">

          <div>
            <label className="block text-sm font-medium">Pincode</label>
            <input
              type="text"
              value={info.pincode}
              onChange={(e) => setInfo({ ...info, pincode: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Country</label>
            <input
              type="text"
              value={info.country}
              onChange={(e) => setInfo({ ...info, country: e.target.value })}
              className="w-full border rounded px-3 py-2"
              />
          </div>
              </div>
          <div className="flex justify-end pt-4
           space-x-6">
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

export default PersonalInfo;

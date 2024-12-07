import { useState } from "react";
import { AiOutlineEdit, AiOutlineClose } from "react-icons/ai";

const PersonalInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState({
    firstName: "Rohan",
    lastName: "Raushan",
    age: 20,
    gender: "Male",
    address:
      "2nd Floor, 99, 5th Cross Rd, 6th Block, Koramangala, Bengaluru, Karnataka 560095",
    email: "Rakeshraushan@Gmail.Com",
    phone: "+91 9922002056",
  });

  const [formData, setFormData] = useState(info);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo(formData); // Save changes to 'info'
    setIsEditing(false); // Close the modal
  };

  const handleCloseModal = () => {
    setIsEditing(false); // Close the modal without saving
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] rounded-lg">
      {/* Personal Information Section */}
      <div className="bg-white p-6 mb-6 relative">
        <button
          className="absolute top-4 h-[30px] border-2 border-gray-500 p-2 rounded-full right-4 text-gray-800 hover:text-gray-700 flex items-center"
          onClick={() => setIsEditing(true)}
        >
          <AiOutlineEdit className="mr-1" />
          Edit
        </button>
        <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
        <div className="border-b-2 mb-4">
          <div className="grid grid-cols-4 gap-2 py-2">
            <p className="text-gray-500 uppercase text-xs font-medium col-span-1">
              First Name
            </p>
            <p className="text-sm col-span-3">{info.firstName}</p>
          </div>
        </div>
        <div className="border-b-2 mb-4">
          <div className="grid grid-cols-4 gap-2 py-2">
            <p className="text-gray-500 uppercase text-xs font-medium col-span-1">
              Last Name
            </p>
            <p className="text-base col-span-3">{info.lastName}</p>
          </div>
        </div>
        <div className="border-b-2 mb-4">
          <div className="grid grid-cols-4 gap-2 py-2">
            <p className="text-gray-500 uppercase text-xs font-medium col-span-1">
              Age
            </p>
            <p className="text-base col-span-3">{info.age}</p>
          </div>
        </div>
        <div className="border-b-2 mb-4">
          <div className="grid grid-cols-4 gap-2 py-2">
            <p className="text-gray-500 uppercase text-xs font-medium col-span-1">
              Gender
            </p>
            <p className="text-base col-span-3">{info.gender}</p>
          </div>
        </div>
        <div className="border-b-2 mb-4">
          <div className="grid grid-cols-4 gap-2 py-2">
            <p className="text-gray-500 uppercase text-xs font-medium col-span-1">
              Address
            </p>
            <p className="text-base col-span-3">{info.address}</p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-white shadow-md rounded-lg p-6 relative">
        <button
          className="absolute top-4 h-[30px] border-2 border-gray-500 p-2 rounded-full right-4 text-gray-800 hover:text-gray-700 flex items-center"
          onClick={() => setIsEditing(true)}
        >
          <AiOutlineEdit className="mr-1" />
          Edit
        </button>
        <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
        <div className="border-b-2 mb-4">
          <div className="grid grid-cols-4 gap-2 py-2">
            <p className="text-gray-500 uppercase text-xs font-medium col-span-1">Email</p>
            <p className="text-base col-span-3">{info.email}</p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-2 py-2">
            <p className="text-gray-500 uppercase text-xs font-medium col-span-1">
              Phone Number
            </p>
            <p className="text-base col-span-3">{info.phone}</p>
          </div>
        </div>
      </div>

      {/* Modal for Editing */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg w-full max-w-lg shadow-lg p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={handleCloseModal}
            >
              <AiOutlineClose size={20} />
            </button>
            <h2 className="text-lg font-semibold mb-4">Edit Personal Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4 max-h-[80vh] overflow-auto">
              {/* Personal Information Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter age"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm h-12"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter address"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm h-12"
                />
              </div>

              {/* Contact Information Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm h-12"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 rounded-md shadow hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-sm"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;

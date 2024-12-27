import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { AiOutlineEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

const EditProfile = ({userProfile,updateProfile}) => {
  const { user, updateUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [bio, setBio] = useState(user?.bio || "");
const navigate=useNavigate()
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const updatedUser = { ...user, displayName: name, bio };
    updateUser(updatedUser);
    setIsEditing(false);
    navigate('/profile')
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="relative">
        <img
          src="profilebg.svg"
          alt="Cover"
          className="w-full h-48 object-cover rounded-xl"
        />
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <Link to="/profile">
            <button className="p-2 hover:bg-gray-200 text-white flex items-center">
              <GoArrowLeft size={24} />
            </button>
          </Link>
          <span className="text-white font-semibold text-lg">Edit Profile</span>
        </div>
      </div>

      {/* Profile Section */}
      <div className="mt-[-40px] flex flex-col">
        <div className="relative">
          <img
            src={user?.photoURL || "default-profile-img-url"}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 ml-8 border-white object-cover"
          />
          <button
            onClick={handleEditClick}
            className="absolute bottom-1 right-72 bg-white p-2 rounded-full shadow"
          >
            <AiOutlineEdit size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="mt-6 space-y-6 px-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!isEditing}
            className={`w-full border-b border-gray-300 focus:outline-none py-2 text-sm ${
              isEditing ? "focus:border-black" : "bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            rows="4"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            disabled={!isEditing}
            className={`w-full border-b border-gray-300 focus:outline-none py-2 text-sm ${
              isEditing ? "focus:border-black" : "bg-gray-100"
            }`}
          ></textarea>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8 px-4">
        <button
          onClick={handleSaveClick}
          className={`w-full py-3 rounded-lg text-sm font-medium transition ${
            isEditing
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
          disabled={!isEditing}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfile;

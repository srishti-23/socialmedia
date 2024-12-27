import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { AiFillDelete } from "react-icons/ai";
import { IoIosPhotos } from "react-icons/io";
import { IoCamera } from "react-icons/io5";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { usePosts } from "../contexts/PostContext";

const NewPostPage = () => {
  const [selectedMedia, setSelectedMedia] = useState([]); // Updated to an array
  const [caption, setCaption] = useState("");
  const { dispatch } = usePosts(); // Use context
  const navigate = useNavigate();

  const handleMediaSelection = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const mediaURLs = Array.from(files).map((file) => URL.createObjectURL(file));
      setSelectedMedia((prev) => [...prev, ...mediaURLs]); // Add new media to the array
    }
  };

  const handlePost = () => {
    if (!caption && selectedMedia.length === 0) {
      alert("Please add a caption or media before posting.");
      return;
    }
  
    const newPost = {
      id: Date.now().toString(),
      caption,
      mediaURLs: selectedMedia, // Store the mediaURLs correctly
      timestamp: new Date().toISOString(),
    };
  
    dispatch({ type: "ADD_POST", payload: newPost }); // Dispatch post to context
    setSelectedMedia([]); // Clear media after posting
    setCaption(""); // Clear caption after posting
    alert("Post created successfully!");
    navigate("/profile");
  };
  

  const handleCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      alert("Camera access granted! (You can integrate a preview here.)");
      stream.getTracks().forEach((track) => track.stop()); // Stop the camera
    } catch (error) {
      alert("Camera access denied or not available.");
    }
  };

  return (
    <div className="max-h-screen max-w-screen-md flex justify-center items-center mx-auto px-4 overflow-x-hidden bg-white">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-lg">
        <div className="flex items-center mb-4">
          <Link to="/feed">
            <button className="text-black">
              <GoArrowLeft size={24} />
            </button>
          </Link>
          <h2 className="flex-1 pl-5 font-semibold text-lg">New Post</h2>
        </div>

        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full h-60 mb-4 bg-gray-200 rounded-lg"
          placeholder="What's in your mind..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        ></textarea>

        {selectedMedia.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-4">
            {selectedMedia.map((media, index) => (
              <div key={index} className="relative">
                <img
                  src={media}
                  alt={`Selected Media ${index + 1}`}
                  className="w-full rounded-lg h-40 object-cover"
                />
                <button
                  className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow"
                  onClick={() =>
                    setSelectedMedia((prev) =>
                      prev.filter((_, i) => i !== index)
                    )
                  }
                >
                  <AiFillDelete size={20} className="text-black" />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="grid gap-4 mb-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              multiple // Allow multiple files
              onChange={handleMediaSelection}
              className="hidden"
            />
            <div className="bg-green-100 p-2 rounded-full">
              <IoIosPhotos />
            </div>
            <span className="text-sm text-gray-600 font-medium">Photos</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="file"
              accept="video/*"
              multiple // Allow multiple files
              onChange={handleMediaSelection}
              className="hidden"
            />
            <div className="bg-red-100 p-2 rounded-full">
              <MdOutlineVideoLibrary />
            </div>
            <span className="text-sm text-gray-600 font-medium">Videos</span>
          </label>

          <button
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleCameraAccess}
          >
            <div className="bg-blue-100 p-2 rounded-full">
              <IoCamera />
            </div>
            <span className="text-sm text-gray-600 font-medium">Camera</span>
          </button>
        </div>

        <button
          onClick={handlePost}
          className="w-full mt-4 bg-black text-white py-2 rounded-lg font-medium"
        >
          CREATE
        </button>
      </div>
    </div>
  );
};

export default NewPostPage;

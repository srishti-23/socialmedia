import React from "react";
import { Link } from "react-router-dom";
import { usePosts } from "../contexts/PostContext";
import { useUser } from "../contexts/UserContext";
import { FaHeart } from "react-icons/fa";

const Profilepage = ({ userProfile }) => {
  const { posts } = usePosts();
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="relative">
        <img
          src="profilebg.svg"
          alt="Cover"
          className="w-full h-48 object-cover rounded-xl"
        />
        <div className="absolute top-4 left-4">
          <Link to="/feed">
            <button className="p-2 bg-white rounded-full shadow hover:bg-gray-200">
              <span>&larr;</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Profile Section */}
      <div className="mt-[-40px] flex flex-col">
        <div className="flex relative z-10">
          <img
            src={
              user?.photoURL ||
              "https://s3-alpha-sig.figma.com/img/b54f/d858/f5e14f76f0793df709ce9bfe5e5f284e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oxl-DZ-3awVUiLS2MCuLtiwCNaGLKMKBOLkhBwqSUqLMVCqQJuyrbB7BKSQQh5z6Ei4dem-WC3C~RTA4EQ1lRsHVshAwo4ML35q7xAd6qgukczNvQNXA9oZCDHGAc4GjvFMOSGbIVoDwdNsbUyj-SEJXsiCuIjN612WFsBtIhMm0D05E-9qVwNWKTuqCzaURannp1nqG3WS2ReA~4B7MLyjKuBOT6oD2dmee9Q3NZop~i3vbOtzNFrVhIOuXnpjSutSbKnAm41jts4S1ZJXZEmE3jpwfK21toKXEguNdgweqOidDaIBw1875lxPCt-UTh0Sd0CiKqgO543-bn2AC6A__"
            }
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 ml-8 border-white object-cover"
          />
          <Link to="/editprofile">
            <button className="mt-12 ml-4 h-8 px-8 sm:px-16 rounded-full border text-gray-700 hover:bg-gray-200 text-sm sm:text-base">
              Edit Profile
            </button>
          </Link>
        </div>
        <h2 className="mt-4 text-2xl font-bold"> {user?.displayName}</h2>
        <p className="text-sm text-gray-500">{userProfile.bio}</p>
      </div>

      {/* Posts Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">My Posts</h3>

        <div className="grid grid-cols-2 gap-4">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post.id}
                className="relative bg-white rounded-lg shadow overflow-hidden"
              >
                <div className="relative">
                  {post.mediaURLs.map((media, index) => (
                    <div key={index} className="mb-2">
                      {media.endsWith(".mp4") ? (
                        <video
                          src={media}
                          controls
                          className="w-full h-32 object-cover"
                          alt={`Post Media ${index + 1}`}
                        />
                      ) : (
                        <img
                          src={media}
                          alt={`Post Media ${index + 1}`}
                          className="w-full h-32 object-cover"
                        />
                      )}
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-3 text-white">
                    <h4 className="text-sm font-semibold truncate">
                      {post.caption}
                    </h4>
                    <div className="mt-2 flex items-center text-xs text-red-500">
                    <FaHeart />
                      <span className="ml-1">2</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </div>

      <Link to="/newpost">
        <button className="fixed bottom-6 right-6 bg-black text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800">
          <span className="text-2xl">+</span>
        </button>
      </Link>
    </div>
  );
};

export default Profilepage;

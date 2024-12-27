import React, { useState, useEffect } from "react";
import { FaHeart, FaShare } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Sharepost from "../components/Sharepost";

const FeedsPage = () => {
  const [isShareModalOpen, setShareModalOpen] = useState(false);
  const [posts, setPosts] = useState([]); // State to hold all posts (static + dynamic)
  const user = JSON.parse(localStorage.getItem("user"));

  const staticPosts = [
    {
      id: 1,
      author: "Aarav",
      time: "2 hours ago",
      content:
        "Just arrived in New York City! Excited to explore the sights, sounds, and energy of this amazing place. 🗽 #NYC #Travel",
      images: [
        "https://s3-alpha-sig.figma.com/img/92fa/0669/9fc5c5ac336e1596b0abe398f32fdc70?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NJfFMn1tKnhNS~dad~hwo0Zk8VlqGa1tMYOJIPdHMK5wpcvg4P-mWuK8n-rmN4T4ljYr0pbx0NNLcfrK3nqYIEZdAcEsoW2wEDUZn3KLjeLY75kY6YSVVTV9D-NWnZGkKignC4~az~LsEPYgf4dBtrY6f3NP4lTKwfIrDrYpSXApz5XAWjEgC9USPCw8FZUaDLW8KEU5Ifms9CzDlCAd2TnluVt9CCCRHZnoIpwYOpDwO1B13YoNz6qeTinFMM4lEN6shTYNSAmsiysaOJjTlDjD0VZOMn65NrTkCVkOYDHEuoYjFlKJoxbyxQQbnC0FclBiFB-ZaO301N6Ec~zPwA__",
        "https://s3-alpha-sig.figma.com/img/468d/f99b/7970153da6c5da9091d49a21a3df94d1?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CeYDYm4FJxwZ7ikADR4WXc-GP6tvd0RJby69dBsa5zm2zhPJ7vIHSI29m5xUpvMeqCRADYOPUwKBlKOSPF5I6tSwePdfKa89LVud68l8oRXNzttxy6amsghV0WQfMoPoh9kkHNzTROPt~gDYzjQDACdwW9PBp90Jpt6FJ0-tV-a~nw~iSDOVWXse6n0CRiP515oWbowZqIBNWqgaehHkWHH5CzS3eqnJBZzrBZAm2g6LsPKc4QR3BhRNUEFuZUHArtFKeD~rUrdj8v72w41xES1JPermkuJDihjq5ilKX9a-D0H2VqJ6uEfZQaa7bgr0wQctCkVKtPeAI7YWcKU7yQ__",
      ],
      likes: 67,
    },
    {
      id: 2,
      author: "Sneha",
      time: "1 day ago",
      content:
        "Taking a moment to slow down, breathe, and focus on myself. ✨ Self-care isn’t selfish — it’s necessary. 💕 #SelfCare #MeTime #Wellness",
      images: [
        "https://s3-alpha-sig.figma.com/img/3b55/b80d/f7651d23a24974c2981b14219f77d2d1?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l42k7LZZgkV9ibnPTxj9yWOE5G7juBjk1aNYwp8AvqwxNz1V~2GjXWq~XJnUopj9MZLewfNzQyfX7q16k7Gs2M3y13r01yOTiznKfSuWx0B6arflFqpjWnD6aGHjV45JX1kKxiKSpR4AQOUjFKtm8pzbpg2Nprmm17HylpYcb9ER-Pf6YcSrBtuMcWkJgpvZQjyZaQU-U7jRoWtsMWk6MUucWiX0bylhS9JXaLoMYuI~pnjrQfj~8WmbcY2PzTqikARkpu3bEpVb~2lTp5ui8ClvM2XH0PXdLYZWRvlRHe6J3iDsyres2XtDbjAcb0QkrMIXclE5ay8568b7VlvqpQ__",
      ],
      likes: 120,
    },
  ];

  useEffect(() => {
    // Initialize posts with static data
    setPosts(staticPosts);

    // Fetch additional posts from API or localStorage
    const fetchPosts = async () => {
      const dynamicPosts = JSON.parse(localStorage.getItem("dynamicPosts")) || [];
      setPosts((prevPosts) => [...dynamicPosts, ...prevPosts]);
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Header */}
      <div className=" mb-4 pl-4">
        <img
          src={user?.photoURL || "defaultImageURL"}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <p className="text-gray-500 text-sm">Welcome Back,</p>
        <h1 className="font-semibold text-lg">
          {user?.displayName || "User"}
        </h1>
      </div>

      {/* Feeds */}
      <div>
        {posts.map((post) => (
          <div key={post.id} className="bg-purple-100 rounded-xl p-4 mb-4">
            <div className="flex items-center mb-2">
              <img
                src={post.authorImage || "defaultAuthorImageURL"}
                alt={post.author}
                className="w-10 h-10 object-cover rounded-full justify-center"
              />
              <div className="ml-2">
                <h2 className="font-semibold text-sm">{post.author}</h2>
                <p className="text-xs text-gray-500">{post.time}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-2">{post.content}</p>
            <div className="grid grid-cols-2 gap-2 mb-2">
              {post.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`PostImage${index}`}
                  className="w-full h-60 rounded-lg object-cover justify-center"
                />
              ))}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <FaHeart className="text-pink-500 mr-1" />
                <span className="text-gray-600 text-sm">{post.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <Link to="/newpost">
        <button className="fixed bottom-4 right-4 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
          <FiPlus className="text-xl" />
        </button>
      </Link>

      {/* Share Modal */}
      {isShareModalOpen && (
        <Sharepost onClose={() => setShareModalOpen(false)} />
      )}
    </div>
  );
};

export default FeedsPage;

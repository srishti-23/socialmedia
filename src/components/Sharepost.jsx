import React from "react";

const Sharepost = ({ onClose }) => {
  const socialMedia = [
    { name: "Twitter", icon: "Twitter.svg", bgColor: "bg-blue-100", url: "https://twitter.com/intent/tweet?url=https://www.arnav/feed" },
    { name: "Facebook", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", bgColor: "bg-blue-200", url: "https://www.facebook.com/sharer/sharer.php?u=https://www.arnav/feed" },
    { name: "Reddit", icon: "reddit.svg", bgColor: "bg-orange-100", url: "https://www.reddit.com/submit?url=https://www.arnav/feed" },
    { name: "Discord", icon: "discord.svg", bgColor: "bg-indigo-100", url: "https://discord.com/channels/@me" }, // Modify URL based on your needs
    { name: "WhatsApp", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", bgColor: "bg-green-100", url: "https://api.whatsapp.com/send?text=https://www.arnav/feed" },
    { name: "Messenger", icon: "messanger.svg", bgColor: "bg-blue-300", url: "https://m.me/?link=https://www.arnav/feed" }, // Modify URL based on your needs
    { name: "Telegram", icon: "telegram.svg", bgColor: "bg-blue-50", url: "https://t.me/share/url?url=https://www.arnav/feed" },
    { name: "Instagram", icon: "insta.svg", bgColor: "bg-pink-100", url: "https://www.instagram.com" }, // Modify URL based on your needs
  ];

  const handleSocialMediaClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96 h-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Share post</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            &times;
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {socialMedia.map((media) => (
            <div
              key={media.name}
              className="flex flex-col items-center text-center"
              onClick={() => handleSocialMediaClick(media.url)} // Add click handler here
            >
              <div className={`w-14 h-14 ${media.bgColor} rounded-full flex items-center justify-center mb-2`}>
                <img
                  src={media.icon}
                  alt={media.name}
                  className="w-8 h-8 cursor-pointer"
                />
              </div>
              <span className="text-sm text-gray-600">{media.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <h3 className="text-sm font-semibold mb-2">Page Link</h3>
          <div className="flex items-center border rounded px-2 py-1">
            <input
              type="text"
              readOnly
              value="https://www.arnav/feed"
              className="flex-1 text-gray-600 focus:outline-none"
            />
            <button
              className="ml-2 text-blue-500 hover:underline focus:outline-none"
              onClick={() => navigator.clipboard.writeText("https://www.arnav/feed")}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sharepost;

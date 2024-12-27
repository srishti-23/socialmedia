import React from "react";
import grp from "../assets/Group.png";
import { auth, googleProvider } from "../firebase/Firebaseconfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Vibesnap = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user; // Contains user info

      // Log the user info for debugging
      console.log("User Info:", user);

      // Extract user details
      const { displayName, email, photoURL } = user;

      console.log("Display Name:", displayName);
      console.log("Email:", email);
      console.log("Photo URL:", photoURL);

      if (user) {
        // Store user data in localStorage or state
        localStorage.setItem(
          "user",
          JSON.stringify({
            displayName: displayName || "Sakshii", // Use default if name is not provided
            email,
            photoURL,
          })
        );

        // Redirect to feed page
        navigate("/feed");
      }
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Full-Screen Responsive Image */}
      <img
        src={grp}
        alt="Background"
        className="absolute w-full h-full object-cover"
      />

      {/* Responsive Content Box */}
      <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md p-4 md:p-6 lg:p-8 rounded-t-[40px] md:rounded-t-[60px] shadow-lg">
        {/* Logo and Tagline */}
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <span role="img" aria-label="camera">
            📸
          </span>{" "}
          Vibesnap
        </h1>
        <p className="text-xs md:text-sm lg:text-base text-gray-600 text-center mt-2">
          Moments That Matter, Shared Forever.
        </p>

        {/* Continue with Google Button */}
        <button
          onClick={handleGoogleLogin}
          className="mt-6 w-full flex items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-gray-800 text-white text-xs md:text-sm rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google"
            className="w-4 h-4 md:w-5 md:h-5 mr-2"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Vibesnap;

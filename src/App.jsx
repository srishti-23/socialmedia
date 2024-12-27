import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sharepost from "./components/Sharepost";
import Profilepage from "./pages/Profilepage";
import Newpost from "./components/Newpost";
import Editprofile from "./pages/Editprofile";
import Vibesnap from "./pages/Vibesnap";
import FeedsPage from "./pages/Feedspage";
import { useState } from "react";

const App = () => {
  const [userProfile, setUserProfile] = useState({
    name: "Sakshi Agarwal",
    bio: "Just someone who loves designing, sketching, and finding beauty in the little things 💕",
  });

  const updateProfile = (newName, newBio) => {
    setUserProfile({ name: newName, bio: newBio });
  };

  return (
    <div className="min-w-screen overflow-x-hidden gap-0 overflow-y-hidden">
    <Router>
      <Routes>
        <Route path="/" element={<Vibesnap/>}/>
        <Route path='/login' element={<Vibesnap/>}/>
        <Route path="/sharepost" element={<Sharepost />} />
        <Route path="/profile" element={<Profilepage userProfile={userProfile} />} />
        <Route path="/feed" element={<FeedsPage />} />
        <Route path="/newpost" element={<Newpost />} />
        <Route path="/editprofile" element={<Editprofile userProfile={userProfile} updateProfile={updateProfile} />} />

      </Routes>
    </Router>
    </div>
  );
};

export default App;

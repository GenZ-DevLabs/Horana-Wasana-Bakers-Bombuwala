import { useContext, useState } from "react";
import { UserContext } from "../components/UserContext";
import { Navigate } from "react-router-dom";
import axios from "axios";

import AddSlide from "../components/AddSlide";
import ProfileSideBar from "../components/ProfileSideBar";
import AddDesignBoard from "../components/AddDesignBoard";
import AddDesign from "../components/AddDesign";

export default function ProfilePage() {
  const { user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const [subpage, setSubpage] = useState("dashboard");

  async function handleLogout() {
    try {
      await axios.post("/logout");
      setRedirect("/");
      setUser(null);
      alert("Logout Successful!");
    } catch (e) {
      alert("Logout Failed! Please try again.");
    }
  }

  if (!user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="grid grid-cols-[1fr_2fr]">
      <div>
        <ProfileSideBar setSubpage={setSubpage} />
      </div>
      <div className="pt-20 pr-20 flex justify-around">
        {subpage === "account" && (
          <div className="flex flex-col justify-center items-center mt-20">
            Logged in as {user.name} ({user.email})
            <button
              onClick={handleLogout}
              className="text-md font-semibold align-bottom bg-gray-800 text-white rounded-2xl py-1 w-28 mt-2 mb-20"
            >
              Log out
            </button>
          </div>
        )}
        {subpage === "SpecialAds" && <AddSlide />}
        {subpage === "DesignBoards" && <AddDesignBoard />}
        {subpage === "AddDesign" && <AddDesign />}
      </div>
    </div>
  );
}

import { useContext, useState } from "react";
import { UserContext } from "../components/UserContext";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";

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
      <div className="pt-20 text-center bg-gray-200 w-full h-screen text-gray-800">
        <Link className="flex justify-around mt-8 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-36 h-36 "
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <h1
          className="text-2xl font-semibold mb-3 cursor-pointer"
          onClick={() => setSubpage("DesignBoards")}
        >
          Designs
        </h1>
        <h1
          className="text-2xl font-semibold mb-3 cursor-pointer"
          onClick={() => setSubpage("BirthdayItems")}
        >
          Birthday Items
        </h1>
        <h1
          className="text-2xl font-semibold mb-3 cursor-pointer"
          onClick={() => setSubpage("Delivery")}
        >
          Delivery
        </h1>
        <h1
          className="text-2xl font-semibold mb-3 cursor-pointer"
          onClick={() => setSubpage("account")}
        >
          Account
        </h1>
        <h1
          className="text-2xl font-semibold mb-3 cursor-pointer"
          onClick={() => setSubpage("changePassword")}
        >
          Change Password
        </h1>
      </div>
      <div className="p-20 flex justify-around">
        {subpage === "account" && (
          <div className="max-w-lg mx-auto flex flex-col justify-center items-center">
            Logged in as {user.name} ({user.email})
            <button
              onClick={handleLogout}
              className="text-md font-semibold align-bottom bg-gray-800 text-white rounded-2xl py-1 w-20 mt-2"
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

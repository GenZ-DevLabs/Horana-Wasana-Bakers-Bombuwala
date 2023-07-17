import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import Logo from "../assets/logo.png";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <div className="fixed w-full bg-gray-900 text-white px-8 py-2 z-20">
      <header className="flex justify-between">
        <Link to={"/"} className="flex items-center gap-1">
          <img src={Logo} alt="logo" width="60px" className="" />
          <span className="font-bold text-2xl ml-2 hidden md:block">
            Horana Wasana Bakers Bombuwala
          </span>
          <span className="font-bold text-2xl ml-2 md:hidden">
            HWB Bombuwala
          </span>
        </Link>
        <div className="flex items-center text-lg">
          <Link className="mr-4" to={"/"}>
            Home
          </Link>
          <Link className="mr-4">About</Link>
          <Link className="mr-8">Contact Us</Link>
          <Link
            to={user ? "/account" : "/login"}
            className="flex items-center gap-2 rounded-full"
          >
            <div className="bg-gray-500 text-white rounded-full overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 relative top-1"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {!!user && <div>{user.name}</div>}
          </Link>
        </div>
      </header>
    </div>
  );
}

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import Logo from "../assets/logo.png";

export default function Header() {
  const { user } = useContext(UserContext);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed w-full bg-primary text-white px-8 py-2 z-20">
      <header className="flex justify-between">
        <Link to={"/"} className="flex items-center gap-1">
          <img src={Logo} alt="logo" width="60px" className="" />
          <span className="font-semibold lg:text-2xl xl:text-3xl ml-2 hidden lg:block">
            Horana Wasana Bakers Bombuwala
          </span>
          <span className="font-bold text-2xl ml-2 lg:hidden">
            HWB Bombuwala
          </span>
        </Link>
        <div className="hidden md:flex items-center md:text-md lg:text-lg ">
          <Link className="mr-4 " to={"/"}>
            Home
          </Link>
          <Link to={"/About"} className="mr-4">
            About
          </Link>
          <Link className="mr-8" to={"/contactus"}>
            Contact Us
          </Link>
          <Link
            to={user ? "/account" : "/login"}
            className="flex items-center gap-2 rounded-full"
          >
            {/* this should comment out  */}
            {!!user && <div>{user.name}</div>}
            <span className="border border-white px-3 py-2 rounded-2xl">
              Admin
            </span>
            <div className="bg-gray-500 text-white rounded-full overflow-hidden"></div>
          </Link>
        </div>
        <div className="flex md:hidden flex-1 justify-end items-center">
          {showMenu ? (
            <svg
              xmlns={"http://www.w3.org/2000/svg"}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
              onClick={() => setShowMenu(!showMenu)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
              onClick={() => setShowMenu(!showMenu)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}

          <div
            className={`${
              !showMenu ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-2xl bg-primary`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              <li onClick={() => setShowMenu(!showMenu)}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setShowMenu(!showMenu)}>
                <Link to="/about">About</Link>
              </li>
              <li onClick={() => setShowMenu(!showMenu)}>
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li onClick={() => setShowMenu(!showMenu)}>
                <Link to={user ? "/account" : "/login"}>Admin</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

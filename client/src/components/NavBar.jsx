import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import Logo from "../assets/logo.png";

export default function Header() {
  const { user } = useContext(UserContext);
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
        <div className="flex items-center md:text-md lg:text-lg">
          <Link className="mr-4 " to={"/"}>
            Home
          </Link>
          <Link className="mr-4">About</Link>
          <Link className="mr-8" to={"/contactus"}>Contact Us</Link>
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
      </header>
    </div>
  );
}

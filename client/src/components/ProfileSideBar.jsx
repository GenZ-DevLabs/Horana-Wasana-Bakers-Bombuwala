import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProfileSideBar({ setSubpage }) {
  return (
    <div className="flex-cols pt-20 text-center w-full h-full min-h-screen bg-gray-200 text-primary">
      <Link className="flex justify-around mt-8 mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-24 h-24 lg:w-36 lg:h-36 "
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <h1
        className="texl-md md:text-xl lg:text-2xl font-semibold mb-3 cursor-pointer"
        onClick={() => setSubpage("DesignBoards")}
      >
        Design Board
      </h1>
      <h1
        className="texl-md md:text-xl lg:text-2xl font-semibold mb-3 cursor-pointer"
        onClick={() => setSubpage("AddDesign")}
      >
        Add Design
      </h1>
      <h1
        className="texl-md md:text-xl lg:text-2xl font-semibold mb-3 cursor-pointer"
        onClick={() => setSubpage("BirthdayItems")}
      >
        Birthday Items
      </h1>
      <h1
        className="texl-md md:text-xl lg:text-2xl font-semibold mb-3 cursor-pointer"
        onClick={() => setSubpage("SpecialAds")}
      >
        Special Ads
      </h1>
      <h1
        className="texl-md md:text-xl lg:text-2xl font-semibold mb-3 cursor-pointer"
        onClick={() => setSubpage("account")}
      >
        Account
      </h1>
      <h1
        className="texl-md md:text-xl lg:text-2xl font-semibold mb-3 cursor-pointer"
        onClick={() => setSubpage("changePassword")}
      >
        Change Password
      </h1>
    </div>
  );
}

ProfileSideBar.propTypes = {
  setSubpage: PropTypes.func.isRequired,
};

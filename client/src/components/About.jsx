// src/AboutPage.js
// import Cake from "../assets/Cake.jpeg";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="w-full h-screen bg-custom-image bg-cover">
      <div className="flex items-center w-full h-screen text-white bg-gradient-to-r from-primary to-transparent ">
        <div className="ml-5 md:ml-20">
          <h1 className="text-5xl font-semibold ">
            <span>Welcome to</span> <br />
            <span className="font-bold text-6xl">Wasana Bakers Bombuwala.</span>
          </h1>
          <h2 className="text-2xl">
            We&apos;re glad and grateful <br className="sm:hidden" />
            you&apos;re here.
          </h2>
          <Link
            to={"/contactus"}
            className="flex items-center gap-2 rounded-full mt-5"
          >
            <span className="border border-white px-3 py-2 rounded-2xl">
              Contact Us
            </span>
            <div className="bg-gray-500 text-white rounded-full overflow-hidden"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

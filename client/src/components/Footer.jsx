import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 w-full bg-gray-100 ">
      <div>
        <ul className="flex list-none gap-6 justify-center items-center mt-10">
          <li>
            <Link
              to="https://www.facebook.com/WasanaBakersBombuwala"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-8 h-8  text-primary hover:text-[#207BF3]"
              />
            </Link>
          </li>
          <li>
            <Link target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-8 h-8 text-primary hover:text-[#087FB7]"
              />
            </Link>
          </li>
          <li>
            <Link target="_blank">
              <FontAwesomeIcon
                icon={faTwitter}
                className="w-8 h-8 text-primary hover:text-[#08B0F1]"
              />
            </Link>
          </li>
          <li>
            <Link target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-8 h-8 text-primary hover:text-[#087FB7]"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full mb-5">
        <ul className="flex list-none gap-5 md:gap-10 justify-center items-center pt-5">
          <li>
            <Link to="/" className="hover:text-[#08B0F1]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-[#08B0F1]">
              Designs
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-[#08B0F1]">
              Special Offers
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#08B0F1]">
              About
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="hover:text-[#08B0F1]">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-primary w-full  text-gray-300 py-2 text-sm">
        <div className="flex flex-col md:flex-row text-center md:text-start md:justify-between mx-8">
          <p>&copy;2023 Horana Wasana Bakers Bombuwala. All Rights Reserved.</p>
          <span>
            Powered By{" "}
            <Link to="https://www.genzdevlabs.com" target="_blank">
              GenZ DevLabs
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

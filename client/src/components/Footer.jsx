import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary text-white pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex w-full justify-center">
          <img src={Logo} className="w-24 h-24 md:w-32 md:h-32" />
        </div>
        <div className="text-center md:text-start mx-10">
          <h3 className="text-lg font-bold mb-2">Wasana Bakers (Pvt) Ltd.</h3>
          <p>
            Horana Wasana Bakers Bombuwala Branch: Amazing Designs and Delicious
            Icing Cakes for all Occasions, friendly service and reasonable
            prices.
          </p>
        </div>

        <div className="flex flex-col mb-4 text-center md:text-start md:items-center">
          <h3 className="text-lg font-bold mb-2">Links</h3>
          <ul>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link to={"/contactus"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/"}>Our Products</Link>
            </li>
            <li>
              <Link to={"/"}>Custom Design</Link>
            </li>
          </ul>
        </div>

        <div className="mb-4 text-center mx-10 md:text-start">
          <h3 className="text-lg font-bold mb-2">Contact Details</h3>
          <ul>
            <p>Phone: +94 71 551 4646</p>
            <p>Email: info@example.com</p>
            <p>
              Address: Horana Wasana Bakers,
              <br /> Mankada, Bombuwala, kalutara South
            </p>
          </ul>
        </div>
      </div>
      <div className="w-full h-12 bg-black"></div>
    </div>
  );
};

export default Footer;

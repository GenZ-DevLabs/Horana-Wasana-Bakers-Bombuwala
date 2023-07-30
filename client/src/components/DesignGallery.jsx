import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import WhatsAppLogo from "../assets/whatsappButton.png";
import BackButton from "./backButton";

export default function DesignGallery() {
  const url = useLocation();

  const currentPath = url.pathname;

  console.log(currentPath);

  const [designs, setDesigns] = useState([]);
  useEffect(() => {
    axios.get("/user-designs").then((response) => {
      const { data } = response;
      setDesigns(data);
    });
  }, []);

  const [buttonActive, setButtonActive] = useState(false);
  const [board, setBoard] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(1800);

  const handleDropdownChange = (e) => {
    const selectedOption = e.target.value;
    setLocation(selectedOption);
    setButtonActive(selectedOption !== "default");

    // Get the selected design from the designs list
    const selectedDesign = designs.find((design) =>
      currentPath.includes(design.title.replace(/\s+/g, "").toLowerCase())
    );

    // Set the board, title, and price based on the selected design
    if (selectedDesign) {
      setBoard(selectedDesign.board);
      setTitle(selectedDesign.title);
      setPrice(selectedDesign.price);
    }
  };

  const [defaultMessage, setDefaultMessage] = useState("");

  useEffect(() => {
    // Update the default message whenever the board, title, price, or location changes
    const message = `Board: ${board}\nDesign: ${title}\nPrice: ${price}\nLocation: ${location}`;
    setDefaultMessage(message);
  }, [board, title, price, location]);

  const whatsappUrl = `https://wa.me/94715514646?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="flex w-full justify-around ">
      <BackButton />
      {designs.length > 0 &&
        designs.map((design) => (
          <>
            {design.photos.length > 0 &&
              currentPath.includes(
                design.title.replace(/\s+/g, "").toLowerCase()
              ) && (
                <div className="grid w-full grid-cols-1 lg:grid-cols-[4fr_2fr]">
                  <div className="flex justify-center pt-28">
                    <div className="flex-cols lg:flex overflow-hidden lg:gap-4 p-3 pb-8 md:p-5 lg:p-10">
                      <div className="flex w-90 h-90 md:w-128 md:h-128 justify-around rounded-2xl items-center shadow-lg shadow-gray-400 overflow-hidden bg-cover">
                        {design.photos[0] ? (
                          <img
                            src={
                              "http://localhost:4001/uploads/" +
                              design.photos[0]
                            }
                            alt=""
                          />
                        ) : (
                          <div>
                            <h1>No Photo.</h1>
                          </div>
                        )}
                      </div>
                      <div className="flex lg:flex-col mt-4 lg:mt-0">
                        <div className="flex w-62 h-62 md:w-72 md:h-72 justify-around rounded-2xl items-center overflow-hidden shadow-lg shadow-gray-400 bg-cover bg-gray-200 top-0 mr-4 lg:mr-0 lg:mb-4">
                          {design.photos[1] ? (
                            <img
                              src={
                                "http://localhost:4001/uploads/" +
                                design.photos[1]
                              }
                              alt=""
                            />
                          ) : design.photos[0] ? (
                            <img
                              src={
                                "http://localhost:4001/uploads/" +
                                design.photos[0]
                              }
                              alt=""
                            />
                          ) : (
                            <div>
                              <h1>No Photo.</h1>
                            </div>
                          )}
                        </div>
                        <div className="flex w-62 h-62 md:w-72 md:h-72 justify-around rounded-2xl items-center overflow-hidden shadow-lg shadow-gray-400 bg-gray-200 bg-cover bottom-0">
                          {design.photos[2] ? (
                            <img
                              src={
                                "http://localhost:4001/uploads/" +
                                design.photos[2]
                              }
                              alt=""
                            />
                          ) : design.photos[0] ? (
                            <img
                              src={
                                "http://localhost:4001/uploads/" +
                                design.photos[0]
                              }
                              alt=""
                            />
                          ) : (
                            <div>
                              <h1>No Photo.</h1>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex p-3 justify-center lg:justify-start pb-10 md:-ml-40 lg:ml-0 lg:pt-28">
                    <div className="lg:p-10">
                      <div className="flex-col items-center justify-center h-80 w-full bg-gray-100 shadow-md shadow-gray-400 rounded-2xl">
                        <div className="p-3 ">
                          <h1 className="text-3xl font-bold mb-2">
                            {design.title}
                          </h1>
                          <h2 className="text-xl font-bold">{design.board}</h2>
                        </div>
                        <div className="p-3 text-lg mt-4">
                          <p className="">{design.description}</p>
                        </div>
                        <div className="p-3 text-lg mt-4">
                          <h1 className="text-2xl font-bold">Rs:{price}.00</h1>
                        </div>
                      </div>
                      <div className="flex-col mt-4 p-3 pb-5 w-full bg-gray-100 shadow-md shadow-gray-400 rounded-2xl">
                        <p className="text-sm text-red-600 mb-2">
                          *For now we only get orders from these cities.
                        </p>
                        <div className="text-lg ">
                          <select
                            className="w-full p-3 text-lg font-semibold rounded-lg"
                            onChange={handleDropdownChange}
                          >
                            <option value="default">Choose an option</option>
                            <option value="kalutara">Kalutara</option>
                            <option value="panadura">Panadura</option>
                            <option value="aluthgama">Aluthgama</option>
                          </select>
                        </div>
                      </div>

                      {buttonActive ? (
                        <Link
                          to={whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center w-full bg-whatsappButton text-white text-lg p-3 rounded-xl mt-10 shadow-md shadow-gray-400 font-semibold"
                        >
                          <img
                            src={WhatsAppLogo}
                            width="30px"
                            className="mr-2"
                          />
                          Confirm Order
                        </Link>
                      ) : (
                        <Link
                          className="flex items-center justify-center w-full bg-gray-200 text-black text-lg p-3 rounded-xl mt-10 shadow-md shadow-gray-400 font-semibold"
                          disabled
                        >
                          Select Location
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )}
          </>
        ))}
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import BackButton from "./backButton";

export default function DesignBoard() {
  const location = useLocation();

  // const defaultURL = "https://wasana-bakers-bombuwala.onrender.com/";
  const defaultURL = "http://localhost:4000/";

  const currentPath = location.pathname;

  const [designs, setDesigns] = useState([]);
  useEffect(() => {
    axios.get("/user-designs").then(({ data }) => {
      const sortedDesigns = data.sort(
        (a, b) => a.designNumber - b.designNumber
      );
      setDesigns(sortedDesigns);
      console.log(sortedDesigns);
    });
  }, []);

  return (
    <div className="pt-24 flex justify-center">
      <BackButton />
      <div className="pt-12 grid gap-4 justify-center items-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {designs.length > 0 &&
          designs.map((design) => (
            <>
              {design.photos.length > 0 &&
                currentPath.includes(
                  design.board.replace(/\s+/g, "").toLowerCase()
                ) && (
                  <Link
                    key={design._id}
                    className="flex flex-col mx-2 sm:mx-5 my-5 rounded-2xl mt-3 w-[170px] sm:w-64 shadow-lg shadow-gray-500"
                    to={
                      "/" +
                      design.board.replace(/\s+/g, "").toLowerCase() +
                      "/" +
                      design.title.replace(/\s+/g, "").toLowerCase()
                    }
                  >
                    <img
                      className="flex w-[170px] h-[170px] sm:w-64 sm:h-64 items-center justify-around  object-cover overflow-hidden rounded-t-2xl"
                      src={defaultURL + "uploads/" + design.photos[0]}
                      alt="design"
                    />
                    <div className="flex items-center justify-around w-[170px] h-12 sm:w-64 sm:h-16 bg-secondary text-black rounded-b-2xl font-semibold">
                      <h1 className="text-md sm:text-lg font-semibold">
                        {design.title}
                      </h1>
                    </div>
                  </Link>
                )}
            </>
          ))}
      </div>
    </div>
  );
}

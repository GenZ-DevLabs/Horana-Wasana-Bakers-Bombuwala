import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

export default function DesignBoard() {
  const location = useLocation();

  const currentPath = location.pathname;

  const [designs, setDesigns] = useState([]);
  useEffect(() => {
    axios.get("/user-designs").then(({ data }) => {
      setDesigns(data);
    });
  }, []);

  return (
    <div className="flex justify-center">
      <div className="pt-36 grid gap-4 justify-center items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {designs.length > 0 &&
          designs.map((design) => (
            <>
              {design.photos.length > 0 &&
                currentPath.includes(
                  design.board.replace(/\s+/g, "").toLowerCase()
                ) && (
                  <Link className="flex flex-col mx-5 my-5 rounded-2xl mt-3 w-64 shadow-lg shadow-gray-500">
                    <img
                      className="flex w-64 h-64 items-center justify-around  object-cover overflow-hidden rounded-t-2xl"
                      src={"http://localhost:4001/uploads/" + design.photos[0]}
                      alt="design"
                    />
                    <div className="flex items-center justify-around w-64 h-16 bg-secondary text-black rounded-b-2xl font-semibold">
                      <h1 className="text-lg font-semibold">{design.title}</h1>
                    </div>
                  </Link>
                )}
            </>
          ))}
      </div>
    </div>
  );
}

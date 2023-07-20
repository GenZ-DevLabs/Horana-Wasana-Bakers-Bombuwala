import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DesignBoardCard() {
  const [designs, setDesigns] = useState([]);
  useEffect(() => {
    axios.get("/user-designs").then(({ data }) => {
      setDesigns(data);
    });
  }, []);

  return (
    <div className="grid w-full justify-center items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {designs.length > 0 &&
        designs.map((design) => (
          <Link
            to={"/design/" + design._id}
            key={design}
            className="flex cursor-pointer mx-5 my-5 rounded-2xl mt-3 w-64 shadow-lg shadow-gray-700"
          >
            {design.photos.length > 0 && (
              <div>
                <img
                  className="flex w-64 h-64 items-center justify-around  object-cover overflow-hidden rounded-t-2xl"
                  src={"http://localhost:4001/uploads/" + design.photos[0]}
                  alt="design"
                />
                <div className="flex items-center justify-around w-64 h-16 bg-primary text-white rounded-b-2xl font-semibold">
                  <h1>{design.title}</h1>
                </div>
              </div>
            )}
          </Link>
        ))}
    </div>
  );
}

DesignBoardCard.propTypes = {
  design: PropTypes.node.isRequired,
};

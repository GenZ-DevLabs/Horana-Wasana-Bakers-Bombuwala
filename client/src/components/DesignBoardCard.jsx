import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DesignBoardCard() {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    axios.get("/user-boards").then(({ data }) => {
      setBoards(data);
    });
  }, []);

  // const defaultURL = "https://wasana-bakers-bombuwala.onrender.com/";
  const defaultURL = "http://localhost:4000/";

  return (
    <div className="grid w-full justify-around items-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {boards.length > 0 &&
        boards.map((board) => (
          <Link
            to={"/" + board.title.replace(/\s+/g, "").toLowerCase()}
            key={board}
            className="flex cursor-pointer mx-3 sm:mx-5 my-5 rounded-2xl mt-3 w-[170px] sm:w-64 shadow-lg shadow-gray-500"
          >
            {board.photos.length > 0 && (
              <div className="overflow-hidden h-[236px] sm:h-auto">
                <img
                  className="flex w-[170px] h-[170px] sm:w-64 sm:h-64 items-center justify-around object-cover overflow-hidden rounded-t-2xl"
                  src={defaultURL + "uploads/" + board.photos[0]}
                  alt="design"
                />
                <div className="flex items-center justify-around w-[170px] h-12 sm:w-64 sm:h-16 bg-secondary text-black rounded-b-2xl font-semibold">
                  <h1 className="text-sm sm:text-md text-center">
                    {board.title}
                  </h1>
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

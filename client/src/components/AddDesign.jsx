import PhotosUploader from "../components/PhotosUploader";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AddDesignBoard() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [designNumber, setDesignNumber] = useState(1);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/designs/" + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setAddedPhotos(data.photos);
    });
  }, [id]);

  const [designBoards, setDesignBoards] = useState([]);
  const [board, setBoard] = useState("");
  useEffect(() => {
    axios.get("/user-boards").then(({ data }) => {
      setDesignBoards(data);
    });
  }, []);

  const [designs, setDesigns] = useState([]);
  useEffect(() => {
    axios.get("/user-designs").then(({ data }) => {
      setDesigns(data);
    });
  }, []);

  async function saveDesign(e) {
    e.preventDefault();

    const placeDetails = {
      board,
      designNumber,
      title,
      description,
      addedPhotos,
    };

    if (id) {
      await axios.put("/designs", {
        id,
        ...placeDetails,
      });
      setRedirect(true);
    } else {
      await axios.post("/designs", {
        ...placeDetails,
      });
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"../account/"} />;
  }

  return (
    <div className="mt-10">
      <h1 className="text-2xl text-center font-semibold mb-8">Add Design</h1>
      <form
        onSubmit={saveDesign}
        className="border shadow-lg shadow-gray-400 py-10 px-10 rounded-md"
      >
        <div className="p-4">
          <h1 className="mb-2 text-lg font-semibold">Select Design Board:</h1>
          <select
            id="dropdown"
            name="dropdown"
            value={board}
            className="block w-full p-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            onChange={(e) => setBoard(e.target.value)}
          >
            <option value="" disabled>
              Choose an option
            </option>
            {designBoards.length > 0 &&
              designBoards.map((designBoard) => (
                <option key={designBoard.title} value={designBoard.title}>
                  {designBoard.title}
                </option>
              ))}
          </select>
        </div>
        <div className="p-4">
          <h1 className="mb-2 text-lg font-semibold">Design Number</h1>
          <input
            type="number"
            placeholder="Design number"
            className="block w-full p-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            value={designNumber}
            onChange={(e) => setDesignNumber(e.target.value)}
          />
        </div>
        <div className="p-4">
          <h1 className="mb-2 text-lg font-semibold">Title</h1>
          <input
            type="text"
            placeholder="Title"
            className="block w-full p-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="p-4">
          <h1 className="mb-2 text-lg font-semibold">Description</h1>
          <textarea
            placeholder="Description about design"
            rows="5"
            className="pl-2 pt-2 w-full border rounded-md"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="p-4">
          <h1 className="mb-2 text-lg font-semibold">Photos</h1>
          <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

          <div>
            <button className="w-full py-2 bg-primary text-white mt-5 rounded-md font-semibold">
              Save
            </button>
          </div>
        </div>
      </form>
      <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4">
        {designs.length > 0 &&
          designs.map((design) => (
            <div
              key={design}
              className="flex cursor-pointer bg-gray-100 my-8 shadow-lg shadow-gray-400 rounded-md"
            >
              <div>
                {design.photos.length > 0 && (
                  <img
                    className="object-cover overflow-hidden rounded-md"
                    src={"http://localhost:4001/uploads/" + design.photos[0]}
                    alt="slide"
                  />
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

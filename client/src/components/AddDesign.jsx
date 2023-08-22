import PhotosUploader from "../components/PhotosUploader";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import EditDeletePanel from "./EditDeletePanel";

export default function AddDesignBoard() {
  const [board, setBoard] = useState("");
  const { id } = useParams();
  const [designNumber, setDesignNumber] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const [designBoards, setDesignBoards] = useState([]);
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/user-designs/" + id).then((response) => {
      const { data } = response;
      setBoard(data.board);
      setDescription(data.description);
      setDesignNumber(data.designNumber);
      setTitle(data.title);
      setPrice(data.price);
      setAddedPhotos(data.photos);
    });
  }, [id]);

  // loading photos
  useEffect(() => {
    axios.get("/user-designs").then(({ data }) => {
      setDesigns(data);
    });
  }, []);

  useEffect(() => {
    axios.get("/user-boards").then(({ data }) => {
      setDesignBoards(data);
    });
  }, []);

  async function saveDesign(e) {
    e.preventDefault();

    const designData = {
      board,
      designNumber,
      title,
      description,
      price,
      addedPhotos,
    };

    if (id) {
      await axios.put("/designs", {
        id,
        ...designData,
      });
      setRedirect(true);
    } else {
      await axios.post("/designs", designData);
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"../account/"} />;
  }

  return (
    <div className="flex-cols mt-10">
      <h1 className="text-2xl text-center font-semibold mb-8">Add Design</h1>
      <form
        onSubmit={saveDesign}
        className="border shadow-lg shadow-gray-400 py-10 px-5 lg: px-10 rounded-md w-4/5 lg:w-[700px] mx-10"
      >
        <div className="p-4">
          <h1 className="mb-2 text-lg font-semibold">Select Design Board:</h1>
          <select
            id="dropdown"
            name="dropdown"
            value={board}
            className="block w-full p-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            onChange={(e) => setBoard(e.target.value)}       >
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="p-4">
          <h1 className="mb-2 text-lg font-semibold">Price</h1>
          <input
            type="number"
            placeholder="Price"
            className="block w-full p-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {designs.length > 0 &&
          designs.map((design) => (
            <div
              key={design._id}
              className="flex relative bg-gray-100 my-8 shadow-lg shadow-gray-400 rounded-md mx-2"
            >
              <div>
                {design.photos.length > 0 && (
                  <EditDeletePanel name={"design"}>{design}</EditDeletePanel>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

import PhotosUploader from "../components/PhotosUploader";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import EditDeletePanel from "./EditDeletePanel";

export default function AddDesignBoard() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/user-boards/" + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setAddedPhotos(data.photos);
    });
  }, [id]);

  useEffect(() => {
    axios.get("/user-boards").then(({ data }) => {
      setBoards(data);
    });
  }, []);

  async function saveDesignBoard(e) {
    e.preventDefault();

    const boardData = {
      title,
      addedPhotos,
    };

    if (id) {
      await axios.put("/boards", {
        id,
        ...boardData,
      });
      setRedirect(true);
    } else {
      await axios.post("/boards", boardData);
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"../account/"} />;
  }

  return (
    <div className="flex-cols mt-10">
      <h1 className="text-2xl text-center font-semibold mb-8">
        Add Design Board
      </h1>
      <form
        onSubmit={saveDesignBoard}
        className="border shadow-lg shadow-gray-400 py-10 px-10 rounded-md w-4/5 lg:w-[700px] mx-10"
      >
        <h1 className="mb-2 text-lg font-semibold">Title</h1>
        <input
          type="text"
          placeholder="Title"
          className="border w-full px-2 py-2 rounded-md mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <h1 className="mb-2 text-lg font-semibold">Photos</h1>
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

        <div>
          <button className="w-full py-2 bg-primary text-white mt-5 rounded-md font-semibold">
            Save
          </button>
        </div>
      </form>
      <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-5">
        {boards.length > 0 &&
          boards.map((board) => (
            <div
              key={board._id}
              className="flex bg-gray-100 my-8 shadow-lg shadow-gray-400 rounded-2xl relative mx-2 md:mx-5"
            >
              <div>
                {board.photos.length > 0 && (
                  <EditDeletePanel name={"board"}>{board}</EditDeletePanel>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

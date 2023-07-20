import PhotosUploader from "../components/PhotosUploader";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AddDesignBoard() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [redirect, setRedirect] = useState(false);

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

  const [designs, setDesigns] = useState([]);
  useEffect(() => {
    axios.get("/user-designs").then(({ data }) => {
      setDesigns(data);
    });
  }, []);

  async function savePlace(e) {
    e.preventDefault();

    const placeDetails = {
      title,
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
      <h1 className="text-2xl text-center font-semibold mb-8">
        Add Design Board
      </h1>
      <form
        onSubmit={savePlace}
        className="border shadow-lg shadow-gray-400 py-10 px-10 rounded-2xl"
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
      <div className="grid w-full justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {designs.length > 0 &&
          designs.map((design) => (
            <div
              key={design}
              className="flex cursor-pointer bg-gray-100 my-8 shadow-lg shadow-gray-400 rounded-2xl"
            >
              <div>
                {design.photos.length > 0 && (
                  <img
                    className="object-cover overflow-hidden rounded-2xl"
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

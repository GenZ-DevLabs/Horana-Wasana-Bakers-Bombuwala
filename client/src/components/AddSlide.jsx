import PhotosUploader from "./PhotosUploader";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";

export default function ADdSlide() {
  const { id } = useParams();
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/slides/" + id).then((response) => {
      const { data } = response;
      setAddedPhotos(data.photos);
    });
  }, [id]);

  const [slides, setSlides] = useState([]);
  useEffect(() => {
    axios.get("/user-slides").then(({ data }) => {
      setSlides(data);
    });
  }, []);

  async function saveSlide(e) {
    e.preventDefault();

    const slideDetails = {
      addedPhotos,
    };

    if (id) {
      await axios.put("/slides", {
        id,
        ...slideDetails,
      });
      setRedirect(true);
    } else {
      await axios.post("/slides", {
        ...slideDetails,
      });
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to="/account/" />;
  }

  return (
    <div className="mt-10">
      <h1 className="text-center text-2xl font-semibold mb-5">Add Slide</h1>
      <form
        onSubmit={saveSlide}
        className="border shadow-lg shadow-gray-400 py-10 px-10 rounded-2xl"
      >
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
        <div>
          <button className="w-full py-2 bg-primary text-white mt-5 rounded-2xl font-semibold">
            Save
          </button>
        </div>
      </form>

      {slides.length > 0 &&
        slides.map((slide) => (
          <div
            to={"/account/slide/" + slide._id}
            key={slide}
            className="flex cursor-pointer bg-gray-100 my-8 shadow-md shadow-gray-400 rounded-2xl"
          >
            <div>
              {slide.photos.length > 0 && (
                <img
                  className="object-cover overflow-hidden rounded-2xl"
                  src={"http://localhost:4001/uploads/" + slide.photos[0]}
                  alt="slide"
                />
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

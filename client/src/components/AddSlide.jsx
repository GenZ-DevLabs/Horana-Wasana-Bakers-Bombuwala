import PhotosUploader from "./PhotosUploader";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import EditDeletePanel from "./EditDeletePanel";

export default function AddSlide() {
  const { id } = useParams();
  const [slides, setSlides] = useState([]);
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/user-slides/" + id).then((response) => {
      const { data } = response;
      setAddedPhotos(data.photos);
    });
  }, [id]);

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
      await axios.post("/slides", slideDetails);
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
        className="border shadow-lg shadow-gray-400 py-10 px-5 lg:px-10 rounded-2xl w-4/5 lg:w-[700px] mx-10"
      >
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
        <div>
          <button className="w-full py-2 bg-primary text-white mt-5 rounded-md font-semibold">
            Save
          </button>
        </div>
      </form>
      <div className="flex-cols lg:flex">
      
          {slides.length > 0 &&
            slides.map((slide) => (
              <div
                to={"/account/slide/" + slide._id}
                key={slide._id}
                className="flex relative bg-gray-100 my-8 shadow-md shadow-gray-400 rounded-md w-auto gap-2 overflow-hidden"
              >
                  {slide.photos.length > 0 && (
                    <EditDeletePanel name={"slide"}>{slide}</EditDeletePanel>
                  )}
              </div>
            ))}
      </div>
    </div>
  );
}

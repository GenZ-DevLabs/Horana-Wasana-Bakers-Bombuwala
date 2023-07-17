import HomeSlider from "../components/HomeSlider";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [designs, setDesigns] = useState([]);
  useEffect(() => {
    axios.get("/user-designs").then(({ data }) => {
      setDesigns(data);
    });
  }, []);

  return (
    <div className="pt-16">
      <HomeSlider />
      <h1 className="flex justify-around mt-10 text-2xl font-semibold text-primary">
        Icing Cake Designs
      </h1>
      <div className="px-20">
        <div className="w-48 mb-5">
          {designs.length > 0 &&
            designs.map((design) => (
              <div
                to={"/account/design/" + design._id}
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
    </div>
  );
}

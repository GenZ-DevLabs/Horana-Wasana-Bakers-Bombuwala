import HomeSlider from "../components/HomeSlider";
import DesignBoardCard from "../components/DesignBoardCard";

export default function HomePage() {
  return (
    <div className="pt-16">
      <HomeSlider />
      <div className="pt-16 flex flex-col items-center">
        <h1 className="mt-10 mb-5 text-2xl font-semibold text-primary">
          Icing Cake Designs
        </h1>
        <div className="flex">
          <DesignBoardCard />
        </div>
      </div>
    </div>
  );
}

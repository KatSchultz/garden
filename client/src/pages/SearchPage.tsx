import { Dispatch, SetStateAction } from "react";
import Plants from "../components/Plants/Plants";
import Search from "../components/Search/Search";
import { PlantModel } from "../models/plant";

interface SearchPageProps {
  setSearchPlants: Dispatch<SetStateAction<PlantModel[]>>;
  searchPlants: PlantModel[];
}

const SearchPage = ({ setSearchPlants, searchPlants }: SearchPageProps) => {
  return (
    <div className="search-page flex flex-col  md:w-8/12">
      <Search setSearchPlants={setSearchPlants} />
      <Plants searchPlants={searchPlants} isUserPlants={false} userId={null} />
    </div>
  );
};

export default SearchPage;

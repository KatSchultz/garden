import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import Plants from "../components/Plants/Plants";
import Search from "../components/Search/Search";
import { PlantModel } from "../models/plant";
import AuthContext from "../context/AuthContext";
import { getUserPlants } from "../services/userPlant";

interface SearchPageProps {
  setSearchPlants: Dispatch<SetStateAction<PlantModel[]>>;
  searchPlants: PlantModel[];
}

const SearchPage = ({ setSearchPlants, searchPlants }: SearchPageProps) => {
  const { userPlants, setUserPlants, userProfile } = useContext(AuthContext);

  console.log(userPlants);

  useEffect(() => {
    if (userProfile) {
      getUserPlants(userProfile._id).then((data) => setUserPlants(data));
    }
  }, [userProfile]);

  return (
    <div className="search-page flex flex-col  md:w-8/12">
      <Search setSearchPlants={setSearchPlants} />
      <Plants plantList={searchPlants} isUserPlants={false} />
    </div>
  );
};

export default SearchPage;

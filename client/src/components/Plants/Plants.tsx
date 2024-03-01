import { useContext, useEffect } from "react";
import { getUserPlants } from "../../services/userPlant";
import AuthContext from "../../context/AuthContext";
import { PlantModel } from "../../models/plant";
import Plant from "../Plant/Plant";

interface PlantsProps {
  isUserPlants: boolean;
  userId: string | null;
  searchPlants: PlantModel[];
}

const Plants = ({ isUserPlants, userId = null, searchPlants }: PlantsProps) => {
  const { userPlants, setUserPlants } = useContext(AuthContext);

  console.log(userPlants);

  useEffect(() => {
    if (isUserPlants && userId) {
      getUserPlants(userId).then((data) => setUserPlants(data));
    }
  }, [isUserPlants, userId]);
  return (
    <div className="plants max-w-full">
      {searchPlants.map((plant) => (
        <Plant plant={plant} />
      ))}
    </div>
  );
};

export default Plants;

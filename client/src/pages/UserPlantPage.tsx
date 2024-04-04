import { useContext, useEffect, useState } from "react";
import Plants from "../components/Plants/Plants";
import AuthContext from "../context/AuthContext";
import { PlantModel } from "../models/plant";
import { getPlant } from "../services/plants";

const UserPlantPage = () => {
  const { userPlants } = useContext(AuthContext);
  const [plantList, setPlantList] = useState<PlantModel[]>([]);

  useEffect(() => {
    const plants: PlantModel[] = [];
    userPlants.forEach((plant, index) => {
      getPlant(plant.plant_id)
        .then((data) => {
          plants[index] = data;
          console.log(plants);
        })
        .then((data) => {
          data;
          setPlantList(plants);
        });
    });
  }, []);

  return (
    <>
      <Plants isUserPlants={true} plantList={plantList} />
    </>
  );
};

export default UserPlantPage;

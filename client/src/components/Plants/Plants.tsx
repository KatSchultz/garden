import { PlantModel } from "../../models/plant";
import Plant from "../Plant/Plant";

interface PlantsProps {
  isUserPlants: boolean;
  plantList: PlantModel[];
}

const Plants = ({ isUserPlants, plantList }: PlantsProps) => {
  return (
    <div className="plants max-w-full">
      {isUserPlants && <h3>Saved Plants</h3>}
      {plantList.map((plant) => (
        <div key={plant.name_scientific}>
          <Plant plant={plant} />
        </div>
      ))}
    </div>
  );
};

export default Plants;

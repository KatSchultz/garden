import { PlantModel } from "../../models/plant";

interface PlantProps {
  plant: PlantModel;
}

const Plant = ({ plant }: PlantProps) => {
  return (
    <div className="plant max-w-full">
      <img src={plant.img?.url} alt="" className="max-w-full" />
      <h3>{plant.name_common}</h3>
    </div>
  );
};

export default Plant;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlant } from "../services/plants";
import { PlantModel } from "../models/plant";

const PlantPage = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState<PlantModel | null>(null);
  useEffect(() => {
    if (id) {
      getPlant(id).then((data) => {
        setPlant(data);
      });
    }
  }, []);
  return (
    <div>
      PlantPage
      <div>{plant?.name_common}</div>
    </div>
  );
};

export default PlantPage;

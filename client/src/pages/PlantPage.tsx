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
      <img
        src={plant?.img?.url}
        alt=""
        className="plant-display__image max-w-full"
      />
      <div className="plant-display__name font-bold text-lg">
        {plant?.name_common}
        <span className="font-normal">({plant?.name_scientific})</span>
      </div>
      <div></div>
      <div>Flower Color: {plant?.flower_color}</div>
      <div>{plant?.name_common}</div>
      <div className="plant-display__conditions w-full flex justify-around">
        <div className="plant-display__conditions__sun w-1/2 bg-emerald-50 rounded-sm">
          <h4 className="text-center font-bold text-lg ">Sun</h4>
          <div className="flex justify-around">
            {plant?.sun.full && <p className="p-2">Full</p>}
            {plant?.sun.part && <p className="p-2">Part</p>}
            {plant?.sun.shade && <p className="p-2">Shade</p>}
          </div>
        </div>
        <div className="plant-display__conditions__moisture w-1/2 bg-emerald-50 ml-2 rounded-sm">
          <h4 className="text-center font-bold  text-lg">Moisture</h4>
          <div className="flex justify-around">
            {plant?.moisture.dry && <p className="p-2">Dry</p>}
            {plant?.moisture.ave && <p className="p-2">Average</p>}
            {plant?.moisture.wet && <p className="p-2">Wet</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantPage;

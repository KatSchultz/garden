import { Link } from "react-router-dom";
import { PlantModel } from "../../models/plant";

interface PlantProps {
  plant: PlantModel;
}

const Plant = ({ plant }: PlantProps) => {
  return (
    <Link to={`/plants/${plant._id}`}>
      <div className="plant-display max-w-full bg-emerald-100 mb-4 p-4 rounded-md text-zinc-800">
        <img
          src={plant.img?.url}
          alt=""
          className="plant-display__image max-w-full"
        />
        <h3 className="plant-display__name text-center font-bold p-2">
          {plant.name_common}
        </h3>
        <div className="plant-display__conditions w-full flex justify-around">
          <div className="plant-display__conditions__sun w-1/2 bg-emerald-50 rounded-sm">
            <h4 className="text-center font-semibold ">Sun</h4>
            <div className="flex justify-around">
              {plant.sun.full && <p className="p-2">Full</p>}
              {plant.sun.part && <p className="p-2">Part</p>}
              {plant.sun.shade && <p className="p-2">Shade</p>}
            </div>
          </div>
          <div className="plant-display__conditions__moisture w-1/2 bg-emerald-50 ml-2 rounded-sm">
            <h4 className="text-center font-semibold ">Moisture</h4>
            <div className="flex justify-around">
              {plant.moisture.dry && <p className="p-2">Dry</p>}
              {plant.moisture.ave && <p className="p-2">Average</p>}
              {plant.moisture.wet && <p className="p-2">Wet</p>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Plant;

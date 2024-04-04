import { Link } from "react-router-dom";
import { PlantModel } from "../../models/plant";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import "./Plant.css";
import UserPlantForm from "../UserPlantForm/UserPlantForm";

interface PlantProps {
  plant: PlantModel;
}

const Plant = ({ plant }: PlantProps) => {
  const { userProfile } = useContext(AuthContext);
  const [displayForm, setDisplayForm] = useState(false);

  const hasPlant = false;

  const handleSave = () => {
    // if user account exists {
    setDisplayForm(true);
    // }
    // if no user navigate to login
    console.log("save clicked");
  };

  return (
    <>
      {displayForm && (
        <UserPlantForm user_id={userProfile?._id || ""} plant_id={plant._id} />
      )}
      <div className="plant-display max-w-full bg-emerald-100 mb-4 p-4 rounded-md text-zinc-800">
        <Link to={`/plants/${plant._id}`}>
          <img
            src={plant.img?.url}
            alt=""
            className="plant-display__image max-w-full"
          />
        </Link>
        <div className="plant-display__title flex justify-between mt-2 mb-2">
          <h3 className="plant-display__name text-center font-bold p-2 text-2xl">
            {plant.name_common}
          </h3>
          {!hasPlant && (
            <button
              className="plant-display__save bg-green-700 text-white"
              onClick={handleSave}
            >
              Save Plant
            </button>
          )}
        </div>
        <div className="plant-display__conditions w-full flex justify-around">
          <div className="plant-display__conditions__sun w-1/2 bg-emerald-50 rounded-sm">
            <h4 className="text-center font-bold text-lg ">Sun</h4>
            <div className="flex justify-around">
              {plant.sun.full && <p className="p-2">Full</p>}
              {plant.sun.part && <p className="p-2">Part</p>}
              {plant.sun.shade && <p className="p-2">Shade</p>}
            </div>
          </div>
          <div className="plant-display__conditions__moisture w-1/2 bg-emerald-50 ml-2 rounded-sm">
            <h4 className="text-center font-bold  text-lg">Moisture</h4>
            <div className="flex justify-around">
              {plant.moisture.dry && <p className="p-2">Dry</p>}
              {plant.moisture.ave && <p className="p-2">Average</p>}
              {plant.moisture.wet && <p className="p-2">Wet</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plant;

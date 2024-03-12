import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { getTrefflePlants } from "../../services/treffle";
import { updateTrefleToken } from "../../services/user";
import { Plant } from "../../models/plant";

const TrefleSearch = () => {
  const { userProfile, setUserProfile } = useContext(AuthContext);
  const [treflePlants, setTreflePlants] = useState<Partial<Plant[]>>([]);

  useEffect(() => {
    if (userProfile) {
      updateTrefleToken(userProfile).then((data) => {
        setUserProfile(data);
      });
    }

    if (userProfile) {
      console.log("get trefle plants called");
      getTrefflePlants(userProfile.trefleToken).then((data) => {
        setTreflePlants(data);
      });
    }
  }, []);

  console.log("Plants: ", treflePlants);
  return (
    <div>
      <h2>Trefle Search</h2>
      {treflePlants.length > 0 &&
        treflePlants.map((plant) => {
          //   console.log(plant);
          return <div>{plant && plant.common_name}</div>;
        })}
    </div>
  );
};
export default TrefleSearch;

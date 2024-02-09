import { useContext, useEffect } from "react";
import { getUserPlants } from "../../services/userPlant";
import AuthContext from "../../context/AuthContext";

interface PlantsProps {
  isUserPlants: boolean;
  userId: string | null;
}

const Plants = ({ isUserPlants, userId = null }: PlantsProps) => {
  const { userPlants, setUserPlants } = useContext(AuthContext);

  console.log(userPlants);

  useEffect(() => {
    if (isUserPlants && userId) {
      getUserPlants(userId).then((data) => setUserPlants(data));
    }
  }, [isUserPlants, userId]);
  return <div></div>;
};

export default Plants;

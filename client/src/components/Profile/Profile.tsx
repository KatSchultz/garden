import { useContext, useEffect, useState } from "react";
import { UserPlant } from "../../models/userPlant";
import AuthContext from "../../context/AuthContext";

const Profile = () => {
  const { user, userProfile } = useContext(AuthContext);
  const [userPlants, setUserPlants] = useState<UserPlant[]>([]);

  console.log("user in profile page: ", user);
  console.log("userProfile in profile page: ", userProfile);

  useEffect(() => {}, []);
  return <div>Profile</div>;
};

export default Profile;

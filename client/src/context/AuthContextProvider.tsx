import { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthContext from "./AuthContext";
import { UserProfile } from "../models/user";
import { getUserByUid } from "../services/user";
import { UserPlant } from "../models/userPlant";
import { getUserPlants } from "../services/userPlant";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [userPlants, setUserPlants] = useState<UserPlant[]>([]);

  useEffect(() => {
    // useEffect to only register once at start

    const authUser = auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
      if (newUser) {
        getUserByUid(newUser.uid).then((data) => {
          setUserProfile(data);
          getUserPlants(data._id || "").then((data) => {
            setUserPlants(data);
          });
        });
      }
    });
    return authUser;
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, userProfile, setUserProfile, userPlants, setUserPlants }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;

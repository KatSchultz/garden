import { User } from "firebase/auth";
import { createContext } from "react";
import { UserProfile } from "../models/user";
import { UserPlant } from "../models/userPlant";

export interface AuthContextModel {
  user: User | null; // null when not logged in
  userProfile: UserProfile | null;
  setUserProfile: (userProfile: UserProfile) => void;
  userPlants: UserPlant[];
  setUserPlants: (userPlants: UserPlant[]) => void;
}

const defaultValue: AuthContextModel = {
  user: null,
  userProfile: {
    _id: "",
    email: "",
    displayName: "",
    photoURL: "",
    uid: "",
    profileDescription: "",
    profilePhotoUrl: "",
    location: "",
    trefleToken: "",
    trefleExpiration: "",
  },
  setUserProfile: () => {},
  userPlants: [],
  setUserPlants: () => {},
};

const AuthContext = createContext(defaultValue);
export default AuthContext;

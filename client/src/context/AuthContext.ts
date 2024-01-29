import { User } from "firebase/auth";
import { createContext } from "react";
// import { UserProfile } from "../models/user";

export interface AuthContextModel {
  user: User | null; // null when not logged in
  // userProfile: UserProfile;
}

const defaultValue: AuthContextModel = {
  user: null,
  // userProfile: {

  // }
};

const AuthContext = createContext(defaultValue);
export default AuthContext;

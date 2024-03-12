import axios from "axios";
import { UserProfile } from "../models/user";

const baseUrl = import.meta.env.VITE_API_URL || "";

export const addUser = async (
  user: UserProfile
): Promise<Partial<UserProfile>> => {
  const newUser = await axios.post(baseUrl + "/users", user);
  return newUser.data;
};

export const getUser = async (_id: string): Promise<UserProfile> => {
  const user = await axios.get(baseUrl + `/users/${encodeURIComponent(_id)}`);
  return user.data;
};

export const updateUser = async (
  updatedInfo: UserProfile
): Promise<UserProfile> => {
  const updatedUser = await axios.put(
    baseUrl + `/users/${updatedInfo._id}`,
    updatedInfo
  );
  return updatedUser.data;
};

export const updateTrefleToken = async (
  profile: UserProfile
): Promise<UserProfile> => {
  const updatedUser = await axios.put(
    baseUrl + "/users/trefle-search/" + profile._id,
    profile
  );
  console.log("update token: ", updatedUser.data);
  return updatedUser.data;
};

export const getUserByUid = async (uid: string): Promise<UserProfile> => {
  const user = await axios.get(baseUrl + `/users/login/${uid}`);
  return user.data;
};

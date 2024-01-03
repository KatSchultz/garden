import axios from "axios";
import { User } from "../models/user";

const baseUrl = import.meta.env.VITE_API_URL || "";

export const addUser = async (user: User): Promise<Partial<User>> => {
  console.log(user);
  console.log("baseUrl: ", baseUrl);
  const newUser = await axios.post(baseUrl + "/users", user);
  return newUser.data;
};

export const getUser = async (uid: string): Promise<User> => {
  const user = await axios.get(baseUrl + `/users/${encodeURIComponent(uid)}`);
  return user.data;
};

export const updateUser = async (updatedInfo: User): Promise<User> => {
  const updatedUser = await axios.put(
    baseUrl + `/user/${updatedInfo.uid}`,
    updatedInfo
  );
  return updatedUser.data;
};

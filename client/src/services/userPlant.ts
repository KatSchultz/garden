import axios from "axios";
import { UserPlant } from "../models/userPlant";

const baseUrl = import.meta.env.VITE_API_URL || "";

export const addUserPlant = async (
  userPlant: UserPlant
): Promise<Partial<UserPlant>> => {
  const newUserPlant = await axios.post(
    baseUrl + `/users/${userPlant.user_id}/plants`,
    userPlant
  );
  console.log("new User Plant in addUserPlant", newUserPlant);
  return newUserPlant.data;
};

export const getUserPlants = async (userId: string): Promise<UserPlant[]> => {
  const userPlants = await axios.get(baseUrl + `/users/${userId}/plants`);
  console.log("getUserPlants called. UserId: ", userId);
  console.log("userPlant data: ", userPlants.data);
  return userPlants.data;
};

export const getUserPlant = async (
  userId: string,
  userPlantId: string
): Promise<UserPlant> => {
  const userPlant = await axios.get(
    baseUrl + `/users/${userId}/plants/${userPlantId}`
  );
  return userPlant.data;
};

export const updateUserPlant = async (
  userPlant: UserPlant
): Promise<UserPlant> => {
  const updatedPlant = await axios.put(
    baseUrl + `/users/${userPlant.user_id}/plants/${userPlant.plant_id}`
  );
  return updatedPlant.data;
};

export const deletUserPlant = async (
  userId: string,
  userPlantId: string
): Promise<void> => {
  await axios.delete(baseUrl + `/users/${userId}/plants/${userPlantId}`);
  return;
};

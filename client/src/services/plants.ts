import axios from "axios";
import { Plant } from "../models/plant";

const baseUrl = import.meta.env.VITE_API_URL || "";

export const getPlants = async (): Promise<Plant[]> => {
  const plants = await axios.get(baseUrl + "/plants");
  return plants.data;
};

export const getPlant = async (_id: string): Promise<Plant> => {
  const plant = await axios.get(baseUrl + `/plants/${_id}`);
  return plant.data;
};

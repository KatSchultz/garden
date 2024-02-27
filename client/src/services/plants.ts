import axios from "axios";
import { Plant } from "../models/plant";
import { PlantFilter } from "../models/fitler";

const baseUrl = import.meta.env.VITE_API_URL || "";

export const getPlants = async (): Promise<Plant[]> => {
  const plants = await axios.get(baseUrl + "/plants");
  return plants.data;
};

export const getPlant = async (_id: string): Promise<Plant> => {
  const plant = await axios.get(baseUrl + `/plants/${_id}`);
  return plant.data;
};

export const getPlantsByCriteria = async (
  criteria: Partial<PlantFilter>
): Promise<Plant[]> => {
  // const currentCriteria = Object.keys(criteria);

  const plants = await axios.get(baseUrl + "/plants/search", {
    params: criteria,
  });
  return plants.data;
};

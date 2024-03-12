import axios from "axios";
import { Plant } from "../models/plant";

const baseUrl = "https://trefle.io/api/v1/plants" || "";

export const getTrefflePlants = async (
  clientToken: string = ""
): Promise<Partial<Plant[]>> => {
  const plants = await axios.get(baseUrl, {
    headers: {
      authorization: `Bearer ${clientToken}`,
    },
  });
  // const plants = await axios.get(baseUrl, {
  //   params: {
  //     origin: "http://localhost:3000/",
  //     ip: "THE-WEBSITE-USER-IP",
  //     token: "YOUR_TREFLE_TOKEN",
  //   },
  // });
  console.log("Plants in trefle calls: ", plants.data.data);
  return plants.data;
};

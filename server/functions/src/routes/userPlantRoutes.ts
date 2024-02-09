import express from "express";
import {
  deleteUserPlant,
  getUserPlant,
  getUserPlants,
  getUserPlantsByCriteria,
  postUserPlant,
  updateUserPlant,
} from "../controllers/userPlants";

const userPlantRouter = express.Router();

userPlantRouter.post("/", postUserPlant);
userPlantRouter.get("/", getUserPlantsByCriteria);
userPlantRouter.get("/", getUserPlants);
userPlantRouter.get("/:id", getUserPlant);
userPlantRouter.put("/:id", updateUserPlant);
userPlantRouter.delete("/:id", deleteUserPlant);

export default userPlantRouter;

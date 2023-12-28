import express from "express";
import {
  postPlant,
  //   deletePlant,
  getPlant,
  getPlants,
  //   getPlantsByCriteria,
  //   getPlantsByUid,
  //   updatePlant,
} from "../controllers/plants";

//ORDER MATTERS WHEN ADDING ROUTES

const plantRouter = express.Router();

plantRouter.route("/").get(getPlants).post(postPlant);

// plantRouter.route("/search").get(getPlantsByCriteria);

plantRouter.route("/:id").get(getPlant);

//   .get(getPlantsByUid)
//   .patch(updatePlant)
//   .delete(deletePlant);

export default plantRouter;

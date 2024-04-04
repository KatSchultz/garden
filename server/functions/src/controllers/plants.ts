import establishConnection from "../establishConnection";
import { plantModel } from "../models/plant.model";
import { PlantNotFoundError } from "../utils/errors";
import { PlantFilter, ReqRes, ReqResNext } from "../utils/interfaces";

// CREATE

export const postPlant: ReqRes = async (req, res) => {
  try {
    establishConnection();
    const plant = await plantModel.create(req.body);
    res.status(201).send(plant);
  } catch (err) {
    res.status(401).send("Bad Request");
  }
};

// READ ALL WITH PARAMS

export const getPlantsByCriteria: ReqResNext = async (req, res, next) => {
  try {
    establishConnection();
    console.log("req.query: ", req.query);
    if (Object.keys(req.query).length <= 0) next();
    else {
      // let plants = await plantModel.find();
      let customQuery: Partial<PlantFilter> = {};
      if (req.query && req.query.full) {
        customQuery = { ...customQuery, "sun.full": true };
      }
      if (req.query && req.query.part) {
        customQuery = { ...customQuery, "sun.part": true };
      }
      if (req.query && req.query.shade) {
        customQuery = { ...customQuery, "sun.shade": true };
      }
      if (req.query && req.query.dry) {
        customQuery = { ...customQuery, "moisture.dry": true };
      }
      if (req.query && req.query.ave) {
        customQuery = { ...customQuery, "moisture.ave": true };
      }
      if (req.query && req.query.wet) {
        customQuery = { ...customQuery, "moisture.wet": true };
      }
      const plants = await plantModel.find(customQuery);
      res.status(200).send(plants);
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// READ

export const getPlants: ReqRes = async (req, res) => {
  try {
    establishConnection();
    const plants = await plantModel.find();
    res.status(200).send(plants);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

export const getPlant: ReqRes = async (req, res) => {
  try {
    establishConnection();
    const { id } = req.params;
    const plant = await plantModel.findById(id);
    if (!plant) throw new PlantNotFoundError();
    res.status(200).send(plant);
  } catch (err) {
    let status = { code: 500, message: "Server Error" };
    if (err instanceof PlantNotFoundError) {
      status = { code: 404, message: err.message };
    }
    res.status(status.code).send(status.message);
  }
};

export const updatePlant: ReqRes = async (req, res) => {
  try {
    establishConnection();
    const id = req.params.id;
    const data = req.body;
    const updatedPlant = await plantModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updatePlant) throw new PlantNotFoundError();
    res.status(200).send(updatedPlant);
  } catch (err) {
    let status = { code: 500, message: "Server Error" };
    if (err instanceof PlantNotFoundError) {
      status = { code: 404, message: err.message };
    }
    res.status(status.code).send(status.message);
  }
};

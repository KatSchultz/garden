import establishConnection from "../establishConnection";
import { userPlantModel } from "../models/userPlant.model";
import { UserPlantNotFoundError } from "../utils/errors";
import { ReqRes, ReqResNext } from "../utils/interfaces";

// CREATE

export const postUserPlant: ReqRes = async (req, res) => {
  try {
    establishConnection();
    const userPlant = await userPlantModel.create(req.body);
    await userPlant.save();
    console.log("userplant in post call", userPlant);
    res.status(201).send(userPlant);
  } catch (err) {
    res.status(401).send("Bad Request");
  }
};

// READ ALL WITH PARAMS

export const getUserPlantsByCriteria: ReqResNext = async (req, res, next) => {
  try {
    establishConnection();
    if (Object.keys(req.query).length <= 0) next();
    // else{ check criteria}
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// READ

export const getUserPlants: ReqRes = async (req, res) => {
  try {
    establishConnection();
    const userPlants = await userPlantModel.find({ uid: req.params.userId });
    res.status(200).send(userPlants);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

export const getUserPlant: ReqRes = async (req, res) => {
  try {
    establishConnection();
    const userPlant = await userPlantModel.findById(req.params.id);
    if (!userPlant) throw new UserPlantNotFoundError();
    res.status(200).send(userPlant);
  } catch (err) {
    let status = { code: 500, message: "Server Error" };
    if (err instanceof UserPlantNotFoundError) {
      status = { code: 404, message: err.message };
    }
    res.status(status.code).send(status.message);
  }
};

export const updateUserPlant: ReqRes = async (req, res) => {
  try {
    establishConnection();
    const { plant_id, have, want, location, comment } = req.body;
    const userPlant = await userPlantModel.findById(req.params.id);
    if (!userPlant) throw new UserPlantNotFoundError();
    userPlant.plant_id = plant_id;
    userPlant.have = have;
    userPlant.want = want;
    userPlant.location = location;
    userPlant.comment = comment;
    await userPlant.save();

    res.status(200).send(userPlant);
  } catch (err) {
    let status = { code: 500, message: "Server Error" };
    if (err instanceof UserPlantNotFoundError) {
      status = { code: 404, message: "User Not Found" };
    }
    res.status(status.code).send(status.message);
  }
};

export const deleteUserPlant: ReqRes = async (req, res) => {
  try {
    establishConnection();
    await userPlantModel.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

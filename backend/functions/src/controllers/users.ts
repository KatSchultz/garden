import establishConnection from "../establishConnection";
import { userModel } from "../models/user.model";
import { UserNotFoundError } from "../utils/errors";
import { ReqRes, ReqResNext } from "../utils/interfaces";

export const postUser: ReqRes = async (req, res) => {
  try {
    await establishConnection();
    const existingUser = await userModel.find({ uid: req.body.uid });
    if (existingUser.length > 0) return;
    else {
      const user = await userModel.create(req.body);
      await user.save();
      res.status(201).send(user);
    }
  } catch (err) {
    res.status(400).send("Bad Request");
  }
};

export const getUsersByCriteria: ReqResNext = async (req, res, next) => {
  await establishConnection();

  try {
    if (Object.keys(req.query).length <= 0) next();
    else {
      // below can be updated to fit criteria
      if (req.query && req.query["limit"]) {
        const limit = +req.query["limit"];
        let users = await userModel.find().limit(limit);
        res.status(200).send(users);
      }
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

export const getUsers: ReqRes = async (req, res) => {
  try {
    await establishConnection();

    const users = await userModel.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

export const getUser: ReqRes = async (req, res) => {
  try {
    await establishConnection();
    const user = await userModel.findById(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

export const updateUser: ReqRes = async (req, res) => {
  try {
    await establishConnection();

    const {
      email,
      displayName,
      photoURL,
      profileDescription,
      profilePhotoUrl,
      location,
    } = req.body;
    const user = await userModel.findById(req.params.id);
    if (!user) throw new UserNotFoundError();
    user.email = email;
    user.displayName = displayName;
    user.photoURL = photoURL;
    user.profileDescription = profileDescription;
    user.profilePhotoUrl = profilePhotoUrl;
    user.location = location;
    await user.save();

    res.status(200).send(user);
  } catch (err) {
    let status = { code: 500, message: "Server Error" };
    if (err instanceof UserNotFoundError) {
      status = { code: 404, message: "User Not Found" };
    }
    res.status(status.code).send(status.message);
  }
};

export const deleteUser: ReqRes = async (req, res) => {
  try {
    await establishConnection();
    await userModel.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

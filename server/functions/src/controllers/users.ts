import establishConnection from "../establishConnection";
import { userModel } from "../models/user.model";
import { UserNotFoundError } from "../utils/errors";
import { ReqRes, ReqResNext } from "../utils/interfaces";

export const postUser: ReqRes = async (req, res) => {
  try {
    await establishConnection();
    const existingUser = await userModel.find({ uid: req.body.uid });

    // let token;
    // let expiration;

    // await retrieveToken().then((data) => {
    //   token = data.token;
    //   expiration = data.expiration;
    // });

    if (existingUser.length > 0) {
      const thisUser = {
        ...existingUser[0],
        // trefleToken: token,
        // trefleTokenExp: expiration,
      };
      res.status(200).send(thisUser);
    } else {
      const user = await userModel.create({
        ...req.body,
        // trefleToken: token,
        // trefleTokenExp: expiration,
      });
      await user.save();
      res.status(201).send(user);
    }
  } catch (err) {
    res.status(400).send("Bad Request");
  }
};

export const retrieveToken = async () => {
  const params = {
    origin: "http://localhost:5173",
    token: "FI41Nzk8mhe1yfab85oGBf37Ipt-Dq7S0Ah0rb1_BFk",
  };

  const response = await fetch("https://trefle.io/api/auth/claim", {
    method: "post",
    body: JSON.stringify(params),
    headers: { "Content-Type": "application/json" },
  });
  const json = await response.json();
  return json;
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

export const getUserByUid: ReqRes = async (req, res) => {
  try {
    await establishConnection();
    const user = await userModel.findOne({ uid: req.params.uid });
    console.log("user in re-login: ", user);
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
      trefleToken,
      trefleTokenExp,
    } = req.body;
    const user = await userModel.findById(req.params.id);
    if (!user) throw new UserNotFoundError();
    user.email = email;
    user.displayName = displayName;
    user.photoURL = photoURL;
    user.profileDescription = profileDescription;
    user.profilePhotoUrl = profilePhotoUrl;
    user.location = location;
    user.trefleToken = trefleToken;
    user.trefleTokenExp = trefleTokenExp;
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

export const updateUserToken: ReqRes = async (req, res) => {
  try {
    await establishConnection();
    console.log("update token called");
    const {
      email,
      displayName,
      photoURL,
      profileDescription,
      profilePhotoUrl,
      location,
      trefleTokenExp,
    } = req.body;
    console.log("trefle expiration: ", trefleTokenExp);

    // if user doesn't have a token yet:
    if (trefleTokenExp === undefined) {
      let token = "";
      let expiration = "";

      await retrieveToken().then((data) => {
        token = data.token;
        expiration = data.expiration;
      });

      const user = await userModel.findById(req.params.id);

      if (!user) throw new UserNotFoundError();
      user.email = email;
      user.displayName = displayName;
      user.photoURL = photoURL;
      user.profileDescription = profileDescription;
      user.profilePhotoUrl = profilePhotoUrl;
      user.location = location;
      user.trefleToken = token;
      user.trefleTokenExp = expiration;
      await user.save();

      res.status(200).send(user);
    } else {
      // is user has token expiration
      const rightNow = new Date();
      const expiration = new Date(trefleTokenExp);
      console.log("right now: ", rightNow);
      console.log("expiration: ", expiration);

      if (rightNow < expiration) {
        console.log("token is current, expiration: ", expiration);
        res.status(200).send(req.body);
      } else {
        let token = "";
        let expiration = "";

        await retrieveToken().then((data) => {
          token = data.token;
          expiration = data.expiration;
        });

        const user = await userModel.findById(req.params.id);

        if (!user) throw new UserNotFoundError();
        user.email = email;
        user.displayName = displayName;
        user.photoURL = photoURL;
        user.profileDescription = profileDescription;
        user.profilePhotoUrl = profilePhotoUrl;
        user.location = location;
        user.trefleToken = token;
        user.trefleTokenExp = expiration;
        await user.save();

        res.status(200).send(user);
      }
    }
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

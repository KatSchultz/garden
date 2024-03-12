import express from "express";
import {
  deleteUser,
  getUser,
  getUserByUid,
  getUsers,
  getUsersByCriteria,
  postUser,
  updateUser,
  updateUserToken,
} from "../controllers/users";

const userRouter = express.Router();

userRouter.post("/", postUser);
userRouter.get("/", getUsersByCriteria);
userRouter.get("/", getUsers);
userRouter.get("/login/:uid", getUserByUid);
userRouter.get("/:id", getUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/trefle-search/:id", updateUserToken);

export default userRouter;

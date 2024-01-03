import { model, Schema } from "mongoose";
import { User } from "../utils/interfaces";

const userSchema = new Schema(
  {
    uid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    photoURL: { type: String },
    profileDescription: { type: String },
    profilePhotoUrl: {
      type: String,
    },
    location: { type: String },
  },
  { timestamps: true }
);

// userSchema.set("toJSON", {
//   transform: function (doc, ret) {
//     ret.id = ret._id.toHexString();
//     delete ret._id;
//     delete ret.__v;
//   },
// });

export const userModel = model<User>("User", userSchema);

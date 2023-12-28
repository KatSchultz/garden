import { model, Schema } from "mongoose";
import { Plant } from "../utils/interfaces";

const plantSchema = new Schema<Plant>({
  name_common: {
    type: String,
    required: true,
    unique: true,
  },
  name_scientific: String,
  region: [],
  flower_color: String,
  moisture: {
    dry: Boolean,
    ave: Boolean,
    wet: Boolean,
  },
  sun: { full: Boolean, part: Boolean, shade: Boolean },
  height: {
    min: Number,
    max: Number,
  },
  img: {
    url: String,
    credit: String,
  },
});

export const plantModel = model<Plant>("Plant", plantSchema);

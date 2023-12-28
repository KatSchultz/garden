import { NextFunction, Request, Response } from "express";

export interface Plant {
  _id: string;
  region: string[];
  name_scientific: string;
  name_common: string;
  flower_color: string;
  sun: { full: boolean; part: boolean; shade: boolean };
  height: {
    min: number;
    max: number;
  };
  moisture: {
    dry: boolean;
    ave: boolean;
    wet: boolean;
  };
  soil: { clay: boolean; sand: boolean };
  img: { url: string; credit: string };
}

export interface User {
  _id: string;
  email: string;
  displayName: string;
  photoURL: string;
  uid: string;
  profileDescription: string;
  profilePhotoUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserPlant {
  _id: string;
  plant_id: string; // plant id
  uid: string; // user who saved this plant
  have: boolean;
  want: boolean;
  location: string;
  comment: string;
}

export interface ReqRes {
  (req: Request, res: Response): Promise<void>;
}

export interface ReqResNext {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import plantRouter from "./routes/plantsRoutes";
import userRouter from "./routes/userRoutes";
import userPlantRouter from "./routes/userPlantRoutes";

// CONFIG

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES

app.use("/plants", plantRouter);
app.use("/users", userRouter);
app.use("/user/:userId/plants", userPlantRouter);

// EXPORT API

export const api = functions.https.onRequest(app);

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

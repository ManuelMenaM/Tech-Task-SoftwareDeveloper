import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import vehicleRouter from "./routers/vehicle.router";

import { dbconnect } from "./configs/database.config";
dbconnect();

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.use("/api/vehicles", vehicleRouter);

const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});

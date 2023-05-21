import express from "express";
import cors from "cors";
import { sample_vehicles } from "./data";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.get("/api/vehicles", (req, res) => {
  res.send(sample_vehicles);
  console.log("Vehiculos enviados: " + sample_vehicles);
});

const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});

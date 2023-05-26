import { Router } from "express";
import { sample_vehicles } from "../data";

const router = Router();

router.get("/", (req, res) => {
  res.send(sample_vehicles);
  console.log("Vehiculos enviados: " + sample_vehicles);
});

export default router;

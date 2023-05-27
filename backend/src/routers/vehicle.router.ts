import { Router } from "express";
import asyncHandler from "express-async-handler";

import { VehicleModel } from "../models/vehicle.model";
import { Car, CarModel } from "../models/car.model";
import { Boat, BoatModel } from "../models/boat.model";
import { Truck, TruckModel } from "../models/truck.model";
import { sample_vehicles } from "../sample_data";

const router = Router();

router.get(
  "/seed",
  asyncHandler(async (req, res) => {
    const vehicleCount = await VehicleModel.countDocuments();
    if (vehicleCount > 0) {
      res.send("DataBase is already seeded");
    } else {
      sample_vehicles.forEach(async (vehicle) => {
        if (vehicle instanceof Car) await CarModel.create(vehicle);
        else if (vehicle instanceof Boat) await BoatModel.create(vehicle);
        else if (vehicle instanceof Truck) await TruckModel.create(vehicle);
      });
      res.send("DataBase seeded");
    }
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const vehicles = await VehicleModel.find();
    res.send(vehicles);
    // console.log("Vehiculos enviados: " + vehicles);
  })
);

// router.get("/", (req, res) => {
//   res.send(sample_vehicles);
//   console.log("Vehiculos enviados: " + sample_vehicles);
// });

export default router;

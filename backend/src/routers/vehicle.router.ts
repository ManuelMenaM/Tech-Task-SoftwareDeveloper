import { Router } from "express";
import asyncHandler from "express-async-handler";

import { VehicleModel, VehicleTypes } from "../models/vehicles/vehicle.model";
import { Car, CarModel } from "../models/vehicles/car.model";
import { Boat, BoatModel } from "../models/vehicles/boat.model";
import { Truck, TruckModel } from "../models/vehicles/truck.model";
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
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    try {
      let newVehicle: any;
      if (req.body.type == VehicleTypes.CAR) {
        newVehicle = new CarModel(req.body);
      }
      if (req.params.type == VehicleTypes.BOAT) {
        newVehicle = new BoatModel(req.body);
      }
      if (req.params.type == VehicleTypes.TRUCK) {
        newVehicle = new TruckModel(req.body);
      }

      const vehicle = await newVehicle.save();
      res.json(vehicle);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el vehículo" });
    }
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      const vehicle = await VehicleModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!vehicle) {
        res.status(404).json({ error: "Vehículo no encontrado" });
      } else {
        res.json(vehicle);
      }
    } catch {
      res.status(500).json({ error: "Error al actualizar el vehículo" });
    }
  })
);

//delete
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      const vehicle = await VehicleModel.findByIdAndRemove(req.params.id);
      if (!vehicle) {
        res.status(404).json({ error: "Vehículo no encontrado" });
      } else {
        res.json({ message: "Vehículo eliminado correctamente" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el vehículo" });
    }
  })
);

export default router;

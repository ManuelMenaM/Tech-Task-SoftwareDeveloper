import { Schema, model } from "mongoose";
import { Vehicle, VehicleTypes } from "./vehicle.model";

export interface Truck extends Vehicle {
  load: number;
}

export const TruckSchema = new Schema<Truck>(
  {
    type: { type: String, enum: VehicleTypes, required: true },
    licensePlate: { type: String, required: true },
    cv: { type: Number, required: true },
    color: { type: String, required: true },
    load: { type: Number, required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },

    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const TruckModel = model<Truck>("Truck", TruckSchema);

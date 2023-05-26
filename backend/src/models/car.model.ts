import { Schema, model } from "mongoose";
import { Vehicle, VehicleTypes } from "./vehicle.model";

export interface Car extends Vehicle {
  extras: string[];
}

export const CarSchema = new Schema<Car>(
  {
    type: { type: String, enum: VehicleTypes, required: true },
    licensePlate: { type: String, required: true },
    cv: { type: Number, required: true },
    color: { type: String, required: true },
    extras: { type: [String], required: false },
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

export const CarModel = model<Car>("Car", CarSchema);

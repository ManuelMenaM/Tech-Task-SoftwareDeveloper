import { Schema, model } from "mongoose";
import { Vehicle, VehicleTypes } from "./vehicle.model";

export interface Boat extends Vehicle {
  model: BoatSize;
}

export enum BoatSize {
  Small = "Small",
  Medium = "Medium",
  Big = "Big",
}

export const BoatSchema = new Schema<Boat>(
  {
    type: { type: String, enum: VehicleTypes, required: true },
    licensePlate: { type: String, required: true },
    cv: { type: Number, required: true },
    color: { type: String, required: true },
    model: {
      type: String,
      enum: BoatSize,
      default: BoatSize.Small,
      required: true,
    },
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

export const BoatModel = model<Boat>("Boat", BoatSchema);

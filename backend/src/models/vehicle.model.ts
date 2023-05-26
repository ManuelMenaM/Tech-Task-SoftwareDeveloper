import { Schema, model } from "mongoose";

export interface Vehicle {
  type: VehicleTypes;
  licensePlate: string;
  cv: number;
  color: string;
}

export enum VehicleTypes {
  CAR = "Car",
  BOAT = "Boat",
  TRUCK = "Truck",
}

// export const VehicleSchema = new Schema<Vehicle>(
//   {
//     licensePlate: { type: String, required: true },
//     cv: { type: Number, required: true },
//     color: { type: String, required: true },
//   },
//   {
//     toJSON: {
//       virtuals: true,
//     },

//     toObject: {
//       virtuals: true,
//     },
//     timestamps: true,
//   }
// );

// export const VehicleModel = model<Vehicle>("Vehicle", VehicleSchema);

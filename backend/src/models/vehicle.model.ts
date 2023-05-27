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

export abstract class Vehicle implements Vehicle {
  public type: VehicleTypes;
  public licensePlate: string;
  public cv: number;
  public color: string;

  constructor(
    type: VehicleTypes,
    licensePlate: string,
    cv: number,
    color: string
  ) {
    this.type = type;
    this.licensePlate = licensePlate;
    this.cv = cv;
    this.color = color;
  }

  public getType(): string {
    return this.type;
  }

  public getLicensePlate(): string {
    return this.licensePlate;
  }

  public getCv(): number {
    return this.cv;
  }

  public getColor(): string {
    return this.color;
  }
}

export const VehicleSchema = new Schema<Vehicle>(
  {
    type: {
      type: String,
      enum: ["Car", "Boat", "Truck"],
      required: true,
    },
    licensePlate: { type: String, required: true },
    cv: { type: Number, required: true },
    color: { type: String, required: true },
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

export const VehicleModel = model<Vehicle>("Vehicle", VehicleSchema);

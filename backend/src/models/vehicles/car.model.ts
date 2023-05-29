import { Schema } from "mongoose";
import { Vehicle, VehicleModel, VehicleTypes } from "./vehicle.model";

export interface Car extends Vehicle {
  extras: string[];
}

export class Car extends Vehicle implements Car {
  public extras: string[];

  constructor(
    licensePlate: string,
    cv: number,
    color: string,
    extras: string[]
  ) {
    super(VehicleTypes.CAR, licensePlate, cv, color);
    this.extras = extras;
  }

  public getExtras(): string[] {
    return this.extras;
  }
}

export const CarSchema = new Schema<Car>({
  extras: {
    type: [String],
    required: true,
  },
});

export const CarModel = VehicleModel.discriminator("Car", CarSchema);

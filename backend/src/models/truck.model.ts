import { Schema } from "mongoose";
import { Vehicle, VehicleModel, VehicleTypes } from "./vehicle.model";

export interface Truck extends Vehicle {
  load: number;
}

export class Truck extends Vehicle implements Truck {
  public load: number;

  constructor(licensePlate: string, cv: number, color: string, load: number) {
    super(VehicleTypes.TRUCK, licensePlate, cv, color);
    this.load = load;
  }

  public getLoad(): number {
    return this.load;
  }
}

export const TruckSchema = new Schema<Truck>({
  load: {
    type: Number,
    required: true,
  },
});

export const TruckModel = VehicleModel.discriminator("Truck", TruckSchema);

import { Vehicle, VehicleTypes } from "./Vehicle";

export class Truck extends Vehicle {
  public load: number;

  constructor(licensePlate: string, cv: number, color: string, load: number) {
    super(VehicleTypes.TRUCK, licensePlate, cv, color);
    this.load = load;
  }

  public getLoad(): number {
    return this.load;
  }
}

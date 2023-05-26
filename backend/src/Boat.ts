import { Vehicle, VehicleTypes } from "./Vehicle";

export class Boat extends Vehicle {
  public model: BoatSize;

  constructor(
    licensePlate: string,
    cv: number,
    color: string,
    model: BoatSize
  ) {
    super(VehicleTypes.BOAT, licensePlate, cv, color);
    this.model = model;
  }

  public getModel(): BoatSize {
    return this.model;
  }
}

export enum BoatSize {
  Small = "Small",
  Medium = "Medium",
  Big = "Big",
}

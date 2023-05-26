import { Vehicle, VehicleTypes } from "./Vehicle";

export class Car extends Vehicle {
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

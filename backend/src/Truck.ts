import { Vehicle } from "./Vehicle";

export class Truck extends Vehicle {
  public cargoCapacity: number;

  constructor(
    type: string,
    licensePlate: string,
    brand: string,
    model: string,
    year: number,
    color: string,
    cargoCapacity: number
  ) {
    super(type, licensePlate, brand, model, year, color);
    this.cargoCapacity = cargoCapacity;
  }

  public getCargoCapacity(): number {
    return this.cargoCapacity;
  }
}

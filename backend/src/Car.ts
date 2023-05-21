import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
  private numDoors: number;

  constructor(
    type: string,
    licensePlate: string,
    brand: string,
    model: string,
    year: number,
    color: string,
    numDoors: number
  ) {
    super(type, licensePlate, brand, model, year, color);
    this.numDoors = numDoors;
  }

  public getNumDoors(): number {
    return this.numDoors;
  }
}

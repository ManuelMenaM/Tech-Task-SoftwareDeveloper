import { Vehicle } from "./Vehicle";

export class Motorcycle extends Vehicle {
  private engineSize: number;

  constructor(
    type: string,
    licensePlate: string,
    brand: string,
    model: string,
    year: number,
    color: string,
    engineSize: number
  ) {
    super(type, licensePlate, brand, model, year, color);
    this.engineSize = engineSize;
  }

  public getEngineSize(): number {
    return this.engineSize;
  }
}

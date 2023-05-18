import { VehicleInterface } from "./VehicleInterface";
import { Vehicle } from "./Vehicle";

export class Motorcycle extends Vehicle implements VehicleInterface {
  private engineSize: number;

  constructor(
    licensePlate: string,
    brand: string,
    model: string,
    year: number,
    color: string,
    engineSize: number
  ) {
    super(licensePlate, brand, model, year, color);
    this.engineSize = engineSize;
  }

  public getEngineSize(): number {
    return this.engineSize;
  }

  public getType(): string {
    return "Motorcycle";
  }
}

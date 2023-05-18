import { VehicleInterface } from 'src/app/shared/interfaces/VehicleInterface';
import { Vehicle } from '../Vehicle';

export class Truck extends Vehicle implements VehicleInterface {
  private cargoCapacity: number;

  constructor(
    licensePlate: string,
    brand: string,
    model: string,
    year: number,
    color: string,
    cargoCapacity: number
  ) {
    super(licensePlate, brand, model, year, color);
    this.cargoCapacity = cargoCapacity;
  }

  public getCargoCapacity(): number {
    return this.cargoCapacity;
  }

  public getType(): string {
    return 'Truck';
  }
}

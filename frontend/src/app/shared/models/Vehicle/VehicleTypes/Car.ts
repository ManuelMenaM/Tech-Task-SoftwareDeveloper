import { VehicleInterface } from 'src/app/shared/interfaces/VehicleInterface';
import { Vehicle } from '../Vehicle';

export class Car extends Vehicle implements VehicleInterface {
  private numDoors: number;

  constructor(
    licensePlate: string,
    brand: string,
    model: string,
    year: number,
    color: string,
    numDoors: number
  ) {
    super(licensePlate, brand, model, year, color);
    this.numDoors = numDoors;
  }

  getType(): string {
    return 'Car';
  }

  public getNumDoors(): number {
    return this.numDoors;
  }
}

import { Vehicle, VehicleTypes } from './vehicle.model';

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

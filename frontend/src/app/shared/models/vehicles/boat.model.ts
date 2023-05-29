import { Vehicle, VehicleTypes } from './vehicle.model';

export interface Boat extends Vehicle {
  model: BoatSize;
}

export enum BoatSize {
  Small = 'Small',
  Medium = 'Medium',
  Big = 'Big',
}

export class Boat extends Vehicle implements Boat {
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

export abstract class Vehicle {
  public type: VehicleTypes;
  public licensePlate: string;
  public cv: number;
  public color: string;

  constructor(
    type: VehicleTypes,
    licensePlate: string,
    cv: number,
    color: string
  ) {
    this.type = type;
    this.licensePlate = licensePlate;
    this.cv = cv;
    this.color = color;
  }

  public getType(): VehicleTypes {
    return this.type;
  }

  public getLicensePlate(): string {
    return this.licensePlate;
  }

  public getCv(): number {
    return this.cv;
  }

  public getColor(): string {
    return this.color;
  }
}

export enum VehicleTypes {
  CAR = 'Car',
  BOAT = 'Boat',
  TRUCK = 'Truck',
}

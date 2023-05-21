export abstract class Vehicle {
  public type: string;
  public licensePlate: string;
  public brand: string;
  public model: string;
  public year: number;
  public color: string;

  constructor(
    type: string,
    licensePlate: string,
    brand: string,
    model: string,
    year: number,
    color: string
  ) {
    this.type = type;
    this.licensePlate = licensePlate;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  public getType(): string {
    return this.type;
  }

  public getLicensePlate(): string {
    return this.licensePlate;
  }

  public getBrand(): string {
    return this.brand;
  }

  public getModel(): string {
    return this.model;
  }

  public getYear(): number {
    return this.year;
  }

  public getColor(): string {
    return this.color;
  }
}

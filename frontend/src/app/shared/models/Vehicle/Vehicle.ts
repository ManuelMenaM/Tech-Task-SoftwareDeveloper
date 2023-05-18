export abstract class Vehicle {
  protected licensePlate: string;
  protected brand: string;
  protected model: string;
  protected year: number;
  protected color: string;

  constructor(
    licensePlate: string,
    brand: string,
    model: string,
    year: number,
    color: string
  ) {
    this.licensePlate = licensePlate;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
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

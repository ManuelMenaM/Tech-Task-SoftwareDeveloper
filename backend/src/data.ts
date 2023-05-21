import { Car } from "./Car";
import { Motorcycle } from "./Motorcycle";
import { Truck } from "./Truck";

export const sample_vehicles: any[] = [];
// Crear instancias de Car
const car1 = new Car("Car", "AB-1234", "Toyota", "Camry", 2022, "Red", 4);
const car2 = new Car("Car", "BC-5678", "Honda", "Accord", 2021, "Blue", 4);
const car3 = new Car("Car", "CD-9012", "Ford", "Mustang", 2023, "Yellow", 2);

// Crear instancias de Motorcycle
const motorcycle1 = new Motorcycle(
  "Motorcycle",
  "DE-3456",
  "Harley-Davidson",
  "Sportster",
  2021,
  "Black",
  750
);
const motorcycle2 = new Motorcycle(
  "Motorcycle",
  "EF-7890",
  "Kawasaki",
  "Ninja",
  2020,
  "Green",
  600
);
const motorcycle3 = new Motorcycle(
  "Motorcycle",
  "FG-2345",
  "Yamaha",
  "MT-07",
  2022,
  "Grey",
  700
);

// Crear instancias de Truck
const truck1 = new Truck(
  "Truck",
  "GH-6789",
  "Ford",
  "F-150",
  2022,
  "White",
  2000
);
const truck2 = new Truck(
  "Truck",
  "HI-0123",
  "Chevrolet",
  "Silverado",
  2023,
  "Silver",
  2500
);
const truck3 = new Truck(
  "Truck",
  "IJ-4567",
  "Dodge",
  "Ram 1500",
  2021,
  "Black",
  1800
);

// Agregar instancias a la lista de vehicles
sample_vehicles.push(
  car1,
  car2,
  car3,
  motorcycle1,
  motorcycle2,
  motorcycle3,
  truck1,
  truck2,
  truck3
);

import { Car } from "./Car";
import { Boat, BoatSize } from "./Boat";
import { Truck } from "./Truck";

export const sample_vehicles: any[] = [];
// Crear instancias de Car
const car1 = new Car("AB-1234", 100, "Red", ["Radio"]);
const car2 = new Car("BC-5678", 200, "Blue", ["Radio", "ABS"]);
const car3 = new Car("CD-9012", 300, "Yellow", ["Radio", "ABS", "AC"]);

// Crear instancias de Boat
const boat1 = new Boat("DE-3456", 100, "Black", BoatSize.Small);
const boat2 = new Boat("EF-7890", 200, "Green", BoatSize.Medium);
const boat3 = new Boat("FG-2345", 300, "Grey", BoatSize.Big);

// Crear instancias de Truck
const truck1 = new Truck("GH-6789", 100, "White", 2000);
const truck2 = new Truck("HI-0123", 200, "Silver", 2500);
const truck3 = new Truck("IJ-4567", 300, "Black", 3000);

// Agregar instancias a la lista de vehicles
sample_vehicles.push(
  car1,
  car2,
  car3,
  boat1,
  boat2,
  boat3,
  truck1,
  truck2,
  truck3
);

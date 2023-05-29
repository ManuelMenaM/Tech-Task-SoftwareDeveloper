import { Boat } from '../models/vehicles/boat.model';
import { Car } from '../models/vehicles/car.model';
import { Truck } from '../models/vehicles/truck.model';
import { Vehicle } from '../models/vehicles/vehicle.model';

export class VehicleUtils {
  constructor() {}

  static toVehicleArray(objectArray: Vehicle[]): Vehicle[] {
    let vehicles: Vehicle[] = [];
    objectArray.forEach((vehicle) => {
      if (vehicle.type === 'Car') {
        let car: Car = VehicleUtils.instantiateCar(vehicle);
        vehicles.push(car);
        // console.log('Car instantiated');
      } else if (vehicle.type === 'Boat') {
        let boat: Boat = VehicleUtils.instantiateBoat(vehicle);
        vehicles.push(boat);
        // console.log('Boat instantiated');
      } else if (vehicle.type === 'Truck') {
        let truck: Truck = VehicleUtils.instantiateTruck(vehicle);
        vehicles.push(truck);
        // console.log('Truck instantiated');
      }
    });
    return vehicles;
  }

  static instantiateCar(vehicle: any): Car {
    return new Car(
      vehicle.licensePlate,
      vehicle.cv,
      vehicle.color,
      vehicle.extras
    );
  }
  static instantiateBoat(vehicle: any): Boat {
    return new Boat(
      vehicle.licensePlate,
      vehicle.cv,
      vehicle.color,
      vehicle.model
    );
  }
  static instantiateTruck(vehicle: any): Truck {
    return new Truck(
      vehicle.licensePlate,
      vehicle.cv,
      vehicle.color,
      vehicle.load
    );
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from 'src/app/shared/models/Vehicle/Vehicle';
import { Car } from 'src/app/shared/models/Vehicle/VehicleTypes/Car';
import { Motorcycle } from 'src/app/shared/models/Vehicle/VehicleTypes/Motorcycle';
import { Truck } from 'src/app/shared/models/Vehicle/VehicleTypes/Truck';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  vehiclesObservable: Observable<any[]> | undefined;
  vehicles: any[] = [];
  p: number = 1;

  constructor(private vehicleService: VehicleService) {
    this.vehiclesObservable = vehicleService.getVehicles();
    console.log('wow');
    this.vehiclesObservable.subscribe((serverVehicles) => {
      serverVehicles.forEach((vehicle) => {
        if (vehicle.type === 'Car') {
          this.vehicles.push(this.instantiateCar(vehicle));
        } else if (vehicle.type === 'Motorcycle') {
          this.vehicles.push(this.instantiateMotorcycle(vehicle));
        } else if (vehicle.type === 'Truck') {
          this.vehicles.push(this.instantiateTruck(vehicle));
        }
      });
    });
    console.log(this.vehicles);
  }

  ngOnInit(): void {}

  private instantiateCar(vehicle: any): Car {
    return new Car(
      vehicle.type,
      vehicle.licensePlate,
      vehicle.brand,
      vehicle.model,
      vehicle.year,
      vehicle.color,
      vehicle.numDoors
    );
  }
  private instantiateMotorcycle(vehicle: any): Motorcycle {
    return new Motorcycle(
      vehicle.type,
      vehicle.licensePlate,
      vehicle.brand,
      vehicle.model,
      vehicle.year,
      vehicle.color,
      vehicle.engineSize
    );
  }
  private instantiateTruck(vehicle: any): Truck {
    return new Truck(
      vehicle.type,
      vehicle.licensePlate,
      vehicle.brand,
      vehicle.model,
      vehicle.year,
      vehicle.color,
      vehicle.cargoCapacity
    );
  }
}

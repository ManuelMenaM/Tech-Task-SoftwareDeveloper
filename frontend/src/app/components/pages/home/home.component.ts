import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Car } from 'src/app/shared/models/Vehicle/VehicleTypes/Car';
import { Boat } from 'src/app/shared/models/Vehicle/VehicleTypes/Boat';
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
    this.vehiclesObservable.subscribe((serverVehicles) => {
      console.log(serverVehicles);

      serverVehicles.forEach((vehicle) => {
        if (vehicle.type === 'Car') {
          this.vehicles.push(this.instantiateCar(vehicle));
          console.log('Car instantiated');
        } else if (vehicle.type === 'Boat') {
          this.vehicles.push(this.instantiateBoat(vehicle));
          console.log('Boat instantiated');
        } else if (vehicle.type === 'Truck') {
          this.vehicles.push(this.instantiateTruck(vehicle));
          console.log('Truck instantiated');
        }
      });
    });
    console.log(this.vehicles);
  }

  ngOnInit(): void {}

  private instantiateCar(vehicle: any): Car {
    return new Car(
      vehicle.licensePlate,
      vehicle.cv,
      vehicle.color,
      vehicle.extras
    );
  }
  private instantiateBoat(vehicle: any): Boat {
    return new Boat(
      vehicle.licensePlate,
      vehicle.cv,
      vehicle.color,
      vehicle.model
    );
  }
  private instantiateTruck(vehicle: any): Truck {
    return new Truck(
      vehicle.licensePlate,
      vehicle.cv,
      vehicle.color,
      vehicle.load
    );
  }
}

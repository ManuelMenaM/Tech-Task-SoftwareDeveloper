import { Component } from '@angular/core';
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
  vehicles: any[] = [];
  p: number = 1;

  constructor(private vehicleService: VehicleService) {
    this.vehicles = vehicleService.getVehicles();
    console.log(this.vehicles);
  }

  ngOnInit(): void {
    this.vehicles.forEach((Vehicle) => {
      console.log(Vehicle instanceof Car);
    });
  }
}

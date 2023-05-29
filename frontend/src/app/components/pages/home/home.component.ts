import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from 'src/app/shared/models/vehicles/vehicle.model';
import { VehicleUtils } from 'src/app/shared/utils/vehicleUtils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  vehiclesObservable: Observable<any[]> | undefined;
  vehicles: Vehicle[] = [];
  pagination: number = 1;

  constructor(private vehicleService: VehicleService) {
    this.vehiclesObservable = vehicleService.getVehicles();
    this.vehiclesObservable.subscribe((serverVehicles) => {
      this.vehicles = VehicleUtils.toVehicleArray(serverVehicles);
      console.log('Vehiculos en Home: ' + this.vehicles);
    });
  }
}

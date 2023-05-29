import { Component, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleService } from 'src/app/services/vehicle.service';
import { VehicleUtils } from 'src/app/shared/utils/vehicleUtils';
import { Vehicle } from 'src/app/shared/models/vehicles/vehicle.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  vehiclesObservable: Observable<Vehicle[]> | undefined;
  @Output()
  vehicles!: Vehicle[];

  // borrar
  pagination: number = 1;

  constructor(private vehicleService: VehicleService) {
    this.vehiclesObservable = vehicleService.getVehicles();
    this.vehiclesObservable.subscribe((serverVehicles) => {
      this.vehicles = VehicleUtils.toVehicleArray(serverVehicles);
      console.log('Vehiculos en Dashboard: ' + this.vehicles);
    });
  }
}

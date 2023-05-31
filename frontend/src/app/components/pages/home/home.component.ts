import { Component, Input } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
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
  vehiclesObservable: Observable<Vehicle[]> | undefined;
  vehicles: Vehicle[] = [];
  pagination: number = 1;
  addingVehicle: boolean = false;
  vehicleToAdd: any;
  editingVehicle: boolean = false;
  vehicleToEdit: any;

  constructor(
    private vehicleService: VehicleService,
    public auth: AuthService
  ) {
    this.vehiclesObservable = vehicleService.getVehicles();
    this.vehiclesObservable.subscribe((serverVehicles) => {
      this.vehicles = VehicleUtils.toVehicleArray(serverVehicles);
      console.log('Vehiculos en Home: ' + this.vehicles);
    });
  }

  deleteVehicle(vehicle: Vehicle) {
    // this.vehicleService
    //   .deleteVehicle(vehicle)
    //   .subscribe(() =>
    //     this.vehicles.filter((v) => v.licensePlate !== vehicle.licensePlate)
    //   );
  }

  addVehicle(vehicle: Vehicle) {
    // this.vehicleService
    //   .addVehicle(vehicle)
    //   .subscribe(() =>
    //     this.vehicles.filter((v) => v.licensePlate !== vehicle.licensePlate)
    //   );
  }

  editVehicle() {}

  showAddVehicle() {
    this.addingVehicle = true;
  }

  showEditVehicle(vehicle: Vehicle) {
    this.addingVehicle = false;
    this.editingVehicle = !this.editingVehicle;
    this.vehicleToEdit = vehicle;
    // console.log('b:' + vehicle.licensePlate);
  }

  cancelEdit() {
    this.editingVehicle = false;
    this.vehicleToEdit = null;
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {
  Vehicle,
  VehicleTypes,
} from 'src/app/shared/models/vehicles/vehicle.model';

@Component({
  selector: 'app-vehicle-list-item',
  templateUrl: './vehicle-list-item.component.html',
  styleUrls: ['./vehicle-list-item.component.css'],
})
export class VehicleListItemComponent {
  @Input() vehicle!: any;
  @Input() isAdmin: boolean | undefined;

  @Output() onDeleteVehicle: EventEmitter<Vehicle> = new EventEmitter();
  @Output() onShowEditVehicle: EventEmitter<Vehicle> = new EventEmitter();

  vehicleTypes = VehicleTypes;

  carImg: string = '../../../../../assets/images/car-icon.png';
  boatImg: string = '../../../../../assets/images/boat-icon.png';
  truckImg: string = '../../../../../assets/images/truck-icon.png';

  constructor(public auth: AuthService) {}

  public onDelete(vehicle: Vehicle): void {
    this.onDeleteVehicle.emit(vehicle);
    // console.log('vehiculo eliminado');
  }

  public onEdit(vehicle: Vehicle): void {
    this.onShowEditVehicle.emit(vehicle);
    // console.log('a: ' + vehicle);
  }
}

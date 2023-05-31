import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BoatSize } from 'src/app/shared/models/vehicles/boat.model';
import {
  Vehicle,
  VehicleTypes,
} from 'src/app/shared/models/vehicles/vehicle.model';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css'],
})
export class EditVehicleComponent {
  @Input() vehicle!: any;
  @Output() onSubmitEditedVehicle: EventEmitter<Vehicle> = new EventEmitter();
  @Output() onCancelEdit: EventEmitter<any> = new EventEmitter();

  keys = Object.keys;
  vehicleTypes = VehicleTypes;
  boatSize = this.keys(BoatSize);

  // type!: VehicleTypes;
  // licensePlate!: String;
  // cv!: Number;
  // color!: String;

  onSubmit() {
    console.log(this.vehicle);

    // this.onSubmitEditedVehicle.emit(this.vehicle);
  }

  onCancel() {
    this.onCancelEdit.emit();
  }
}

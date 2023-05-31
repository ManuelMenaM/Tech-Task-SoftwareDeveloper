import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Vehicle,
  VehicleTypes,
} from 'src/app/shared/models/vehicles/vehicle.model';
import { BoatSize } from 'src/app/shared/models/vehicles/boat.model';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'],
})
export class AddVehicleComponent {
  @Output() onAddVehicle: EventEmitter<Vehicle> = new EventEmitter();

  vehicleTypes = VehicleTypes;
  boatSize = BoatSize;
  keys = Object.keys;
  selectedVehicleType: VehicleTypes = VehicleTypes.CAR;
  type!: VehicleTypes;

  onSubmit() {
    this.onAddVehicle.emit();
  }

  onTypeSelectChange() {
    this.type = this.selectedVehicleType;
    console.log(this.selectedVehicleType + ':' + this.type);
  }
}

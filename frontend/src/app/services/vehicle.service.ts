import { Injectable } from '@angular/core';
import { Vehicle } from '../shared/models/Vehicle/Vehicle';
import { sample_vehicles } from 'src/data';
import { Motorcycle } from '../shared/models/Vehicle/VehicleTypes/Motorcycle';
import { Truck } from '../shared/models/Vehicle/VehicleTypes/Truck';
import { Car } from '../shared/models/Vehicle/VehicleTypes/Car';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor() {}

  getVehicles(): any[] {
    return sample_vehicles;
  }
}

import { Injectable } from '@angular/core';
import { Vehicle } from '../shared/models/Vehicle/Vehicle';
import { sample_vehicles } from 'src/data';
import { Motorcycle } from '../shared/models/Vehicle/VehicleTypes/Motorcycle';
import { Truck } from '../shared/models/Vehicle/VehicleTypes/Truck';
import { Car } from '../shared/models/Vehicle/VehicleTypes/Car';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VEHICLES_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  getVehicles(): Observable<(Car | Motorcycle | Truck)[]> {
    return this.http.get<(Car | Motorcycle | Truck)[]>(VEHICLES_URL);
  }
}

import { Injectable } from '@angular/core';
import { Vehicle } from '../shared/models/Vehicle/Vehicle';
import { Boat } from '../shared/models/Vehicle/VehicleTypes/Boat';
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

  getVehicles(): Observable<(Car | Boat | Truck)[]> {
    return this.http.get<(Car | Boat | Truck)[]>(VEHICLES_URL);
  }
}

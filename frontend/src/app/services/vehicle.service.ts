import { Injectable } from '@angular/core';
import { Vehicle } from '../shared/models/vehicles/vehicle.model';
import { Boat } from '../shared/models/vehicles/boat.model';
import { Truck } from '../shared/models/vehicles/truck.model';
import { Car } from '../shared/models/vehicles/car.model';
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

import { Component, Input } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-vehicle-list-item',
  templateUrl: './vehicle-list-item.component.html',
  styleUrls: ['./vehicle-list-item.component.css'],
})
export class VehicleListItemComponent {
  constructor(public auth: AuthService) {}
  @Input()
  vehicle!: any;
  @Input()
  isAdmin: boolean | undefined;

  carImg: string = '../../../../../assets/images/car-icon.png';
  boatImg: string = '../../../../../assets/images/boat-icon.png';
  truckImg: string = '../../../../../assets/images/truck-icon.png';

  public onDelete(): void {
    console.log('vehiculo eliminado');
  }

  public onEdit(): void {
    console.log('vehiculo editado');
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-list-item',
  templateUrl: './vehicle-list-item.component.html',
  styleUrls: ['./vehicle-list-item.component.css'],
})
export class VehicleListItemComponent {
  @Input()
  vehicle!: any;

  isAdmin: boolean = true;

  carImg: string = '../../../../../assets/images/car-icon.png';
  motorcycleImg: string = '../../../../../assets/images/motorcycle-icon.png';
  truckImg: string = '../../../../../assets/images/truck-icon.png';

  public onDelete(): void {
    console.log('vehiculo eliminado');
  }

  public onEdit(): void {
    console.log('vehiculo editado');
  }
}

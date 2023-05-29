import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { VehicleTypes } from 'src/app/shared/models/vehicles/vehicle.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.vehicles.forEach((vehicle) => {
      if (vehicle.type === VehicleTypes.CAR) this.carAmount++;
      if (vehicle.type === VehicleTypes.BOAT) this.boatAmount++;
      if (vehicle.type === VehicleTypes.TRUCK) this.truckAmount++;
      this.totalAmount++;
    });

    this.createChart();
  }

  @Input() vehicles!: any[];
  carAmount: number = 0;
  boatAmount: number = 0;
  truckAmount: number = 0;
  totalAmount: number = 0;
  public chart: any;

  createChart() {
    this.chart = new Chart('vehicleChart', {
      type: 'bar',
      data: {
        labels: ['Cars', 'Boats', 'Trucks'],
        datasets: [
          {
            label: 'Quantity',
            data: [this.carAmount, this.boatAmount, this.truckAmount],
            backgroundColor: 'limegreen',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}

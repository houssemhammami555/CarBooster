
import { Component, AfterViewChecked, Input, ViewChild } from '@angular/core';

import { ChartComponent } from 'angular2-chartjs';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements AfterViewChecked {

  constructor() { }
  @ViewChild('ghraphElement', {static: true})
  private ghraphElement: ChartComponent;

  @Input()
  type: string = 'bar';

  @Input()
  title: string = 'Titre';

  @Input()
  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgba (0,222,44,1)"
      }
    ]
  };

  @Input()
  options = {
    responsive: true,
    maintainAspectRatio: false
  };



  ngAfterViewChecked() {
      this.ghraphElement.chart.update();

  }


}



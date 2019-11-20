import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {

  constructor() { }

  type = 'line';
@Input()
data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      data: [65, 59, 80, ],
      backgroundColor: [
        'red']
    }
  ]
};
options = {
  responsive: true,
  maintainAspectRatio: false
};
 
  ngOnInit() {
  
  }

}

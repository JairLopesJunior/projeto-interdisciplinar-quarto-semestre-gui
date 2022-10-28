import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  chartData = [{
      labels: [moment().format('HH:mm:ss')],
      data: [5, 20] as any,
      label: 'Temperatura', 
      backgroundColor: 'rgba(77,166,253,0.85)'
  }] as any;

  chartOptions = {
    responsive: true
  };

  optionsAnimations = { 
    animation: false,
      scales: {
          yAxes : [{
              ticks : {
                  max : 35,  
                  stepSize: 1,
                  min : 20
              }
          }]
      },
    annotations: [{
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: '26',
        borderColor: 'tomato',
        borderWidth: 1
    }],
    drawTime: "afterDraw"
  } as any;
}

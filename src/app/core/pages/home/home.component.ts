import { Chart } from 'chart.js';
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
      data: [
        setInterval(function () {
          Math.floor(Math.random() * 10);
        }, 100)
      ] as any,
      label: 'Temperatura', 
      backgroundColor: 'rgba(77,166,253,0.85)'
  }];

  chartOptions = {
    responsive: true
  };
}

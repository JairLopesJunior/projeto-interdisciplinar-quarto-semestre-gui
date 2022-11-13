import { ChartConfiguration, ChartType } from 'chart.js';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import {default as Annotation} from 'chartjs-plugin-annotation';
import { BaseChartDirective } from 'ng2-charts';
import * as moment from 'moment'
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public lineChartType: ChartType = 'line';
  public chartName = 'Name is here';

  constructor() {
    Chart.register(Annotation);
  }

  ngOnInit(): void {
    Chart.defaults.scales.linear.min = 0;
    this.getTemp();
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [0],
        label: 'Temperatura',
        backgroundColor: 'rgba(77,166,253,0.85)',
        fill: true
      }
    ],
    labels: [0]
  }

  public lineChartOptions: ChartConfiguration['options'] = {
    animation: false,
    scales: {
      x: {},
      'y-axis-0':
        {
          position: 'left',
          ticks : {
            max : 35,
            stepSize: 1,
            min : 20
          }
        }
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

  public getTemp(): void {
    interval(1000).pipe(map(a => {
      let lengthChart = this.lineChartData.labels?.length as number;
      if(lengthChart >= 10) {
        this.lineChartData.datasets[0].data.shift();
        this.lineChartData.labels?.shift();
      }

      let currentTemp = Math.floor(Math.random() * 35);
      (this.lineChartData.datasets[0].data as number[]).push(currentTemp);
      this.lineChartData.labels?.push(moment().format('HH:mm:ss'));
      if(currentTemp < 15) {
        this.lineChartData.datasets[0].backgroundColor = 'rgba(0, 0, 239, 0.7)';
      } else if(currentTemp < 21) {
        this.lineChartData.datasets[0].backgroundColor = 'rgba(0, 255, 0, 0.65)';
      } else if(currentTemp < 28) {
        this.lineChartData.datasets[0].backgroundColor = 'rgba(247, 255, 0, 0.65)';
      } else {
        this.lineChartData.datasets[0].backgroundColor = 'rgba(255, 0, 0, 0.72)';
      }

      this.chart?.update();
    }))
    .subscribe();
  }
}

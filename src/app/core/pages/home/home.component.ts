import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { ChartConfiguration, ChartType } from 'chart.js';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Chart } from 'chart.js';
import {default as Annotation} from 'chartjs-plugin-annotation';
import { BaseChartDirective } from 'ng2-charts';
import * as moment from 'moment'
import { interval, map } from 'rxjs';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  @ViewChild('notification') notificationTemplate: any;

  public items: ItemModel[] = [
    {
        text: 'Update device'
    },
    {
      text: 'Exit'
    }
  ];

  deviceForm: FormGroup;

  tempMax = 0;
  tempMin = Number.MAX_VALUE;
  tempMiddle = 0;
  lastValue = 0;
  city = 'Araras';
  state = 'BR';
  dayOfWeek: string;
  mounthOfYear: string;
  dayOfMounth: number;
  currentTime: string;
  humidity = 55;

  public lineChartType: ChartType = 'line';
  public chartName01 = 'T';
  public chartName02 = 'E';
  public chartName03 = 'R';
  public chartName04 = 'M';
  public chartName05 = 'O';
  public chartName06 = 'S';
  public chartName07 = 'A';
  public chartName08 = 'F';
  public chartName09 = 'E';
  public currentTemp: number;

  constructor(private _notifierService: NotifierService,
              private _fb: FormBuilder,
              private _deviceService: DeviceService) {
    this._notifierService = _notifierService;
    Chart.register(Annotation);
  }

  ngOnInit(): void {
    this.dayOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"][new Date().getDay()];
    this.mounthOfYear = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][new Date().getMonth()].substring(0, 3);
    this.dayOfMounth = new Date().getDate();
    this.currentTime = `${new Date().getHours()}h${new Date().getMinutes()}`; 
    Chart.defaults.scales.linear.min = 0;
    this.getTemp();
    this.formDevice();
    this.aa();
  }

  onSubmit(): void {
    if(this.deviceForm.valid) {

      this._deviceService.update(this.deviceForm.getRawValue()).subscribe({
        next: () => {
          this._notifierService.notify('success', 'Data changed with success');
        },
        error: (err: any) => {
          if(!!err?.statusText) {
            this._notifierService.notify('error', err.statusText);
          }
        }
      });
    }
  }

  verificaValidTouched(campo: string) {
    return !this.deviceForm.get(campo)?.valid
    && this.deviceForm.get(campo)?.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  public formDevice(): void {
    this.deviceForm = this._fb.group({
      city: ['',  Validators.required]
    })
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [0],
        label: 'Temperature',
        tension: 0.4,
        backgroundColor: 'rgba(207,235,255,0.8)',
        fill: true,
        borderWidth: 1,
        borderColor: 'rgba(29,162,255,1)'
      }
    ],
    labels: [0]
  }

  public lineChartOptions: ChartConfiguration['options'] = {
    animation: false,
    hitRadius: 2,
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

      let currentTemp = Math.floor(35 * Math.random() + 20);
      this.currentTemp = currentTemp;
      (this.lineChartData.datasets[0].data as number[]).push(currentTemp);

      this.lineChartData.labels?.push(moment().format('HH:mm:ss'));
      if(currentTemp > this.tempMax) {
        this.tempMax = currentTemp;
      }
      if(currentTemp < this.tempMin) {
        this.tempMin = currentTemp;
      }

      if(currentTemp !== this.lastValue) {
        this.tempMiddle = Math.trunc(((currentTemp + this.tempMiddle) / 2));
      }

      /*if(currentTemp <= 15) {
        this._notifierService.notify('error', `Alert: The chart is temperature ${currentTemp}`);
        this.lineChartData.datasets[0].backgroundColor = 'rgba(0, 0, 239, 0.7)'; // Azul
      } else if(currentTemp < 21) {
        this._notifierService.notify('error', `Alert: The chart is temperature ${currentTemp}`);
        this.lineChartData.datasets[0].backgroundColor = 'rgba(0, 255, 0, 0.65)'; // Verde
      } else if(currentTemp <= 28) {
        this.lineChartData.datasets[0].backgroundColor = 'rgba(247, 255, 0, 0.65)'; // Amarelo
      } else if(currentTemp > 28) {
        this._notifierService.notify('error', `Alert: The chart is temperature ${currentTemp}`);
        this.lineChartData.datasets[0].backgroundColor = 'rgba(255, 0, 0, 0.72)'; // Vermelho
      }
*/
      this.chart?.update();
    }))
    .subscribe();
  }

  public alert(i: string | undefined): void {
    console.log(i);
  }

  public aa(): void {
    /*interval(6000).pipe(map(a => {
      this._notifierService.show({
        message: `<a href="#">Clique aqui</a> para terminar o cadastro dos dados complementares.`,
        type: 'success',
        template: this.notificationTemplate
      });
    })).subscribe();*/
  }
}

import {Component, ElementRef, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { dataTool } from 'echarts';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent{

  
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Media',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: ["M-AAABBBCCC", "M-AAABBBCCC", "M-AAABBBCCC","M-AAABBBCCC","M-AAABBBCCC","M-AAABBBCCC",]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        }
    },

    plugins: {
      legend: { display: true }
    }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;















  playersSlidesOptions = {
    freeMode : true,
    slidesPerView: 3.5,
    spaceBetween: 7
  }

  testData = [
    "M-AAABBBCCC",
    "M-AAABBBCCC",
    "M-AAABBBCCC",
    "M-AAABBBCCC",
    "M-AAABBBCCC",
    "M-AAABBBCCC",
]

  teamsSlidesOptions = {
    freeMode : true,
    slidesPerView: 2.3,
    spaceBetween: 10
  }
  
  @ViewChild('barCanvas') public barCanvas: ElementRef

  constructor() { }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.lineChartData.datasets[0].label = ev.detail.value
    this.chart?.update();
  }

}

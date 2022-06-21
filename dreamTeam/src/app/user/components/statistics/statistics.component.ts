import {Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Player } from 'src/app/model/player';
import { LeagueService } from 'src/app/service/league/league.service';
import { PlayerService } from 'src/app/service/player/player.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit{

  playersSlidesOptions = {
    freeMode : true,
    slidesPerView: 3.5,
    spaceBetween: 7
  }

  teamsSlidesOptions = {
    freeMode : true,
    slidesPerView: 2.3,
    spaceBetween: 10
  }

  playerDetails: Player
  
  testData = [
    "",
    "M-AAABBBCCC",
    "M-AAABBBCCC",
    "M-AAABBBCCC",
    "M-AAABBBCCC",
    "M-AAABBBCCC",
    "M-AAABBBCCC",
  ]

  players: Player[]
  
  @ViewChild('barCanvas') public barCanvas: ElementRef

  constructor(private leagueService : LeagueService, private playerService : PlayerService ) { }

  ngOnInit(): void {
    this.leagueService.refreshLeagueIn(this.leagueService.leagueIn.id).subscribe((result: any) => {
      this.leagueService.leagueIn = result
      this.playerService.getPlayers(this.leagueService.leagueIn.playersId).subscribe((result: any) => this.players = result)
    })
  }

  seePLayer(player: Player){
    this.playerDetails = player
    this.lineChartData.datasets[0].data = player.medium
    this.lineChartData.labels = player.matches
    this.chart?.update();
  }

  countGoals(player: Player){
    var total = 0
    player.goals!!.forEach(goal => total =+ goal)
    return total
  }

  makeMedium(list: number[]){
    var total = 0
    list.forEach(value => total =+ value)
    return this.decimalAdjust('round', (total/list.length), -1)
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.lineChartData.datasets[0].label = ev.detail.value
    switch(ev.detail.value){
      case "Media":
        this.lineChartData.datasets[0].data = this.playerDetails.medium
        break;

      case "Delantero":
        this.lineChartData.datasets[0].data = this.playerDetails.shooter
        break;
      
      case "Centro":
        this.lineChartData.datasets[0].data = this.playerDetails.center
        break;
      
      case "Defensa":
        this.lineChartData.datasets[0].data = this.playerDetails.defense
        break;
    }
    this.chart?.update();
  }

    
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 0 ],
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
    labels: [ "" ]
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

  decimalAdjust(type, value, exp) {
    // Si el exp no está definido o es cero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Si el valor no es un número o el exp no es un entero...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
}
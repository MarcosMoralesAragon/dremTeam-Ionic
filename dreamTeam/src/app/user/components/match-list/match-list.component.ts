import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/service/league/league.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
})
export class MatchListComponent implements OnInit {

  testData = [
    "Alvaro",
    "Jesus",
    "Pablo",
    "Alvaro",
    "Jesus",
    "Pablo",
]

teamsSlidesOptions = {
  freeMode : true,
  slidesPerView: 3.5,
  spaceBetween: 10
}

  constructor(public leagueService : LeagueService) { }

  ngOnInit() {
    this.leagueService.refreshLeagueIn(this.leagueService.leagueIn.id).subscribe((result: any) => this.leagueService.leagueIn = result)

  }

  test(){
    console.log("hola")
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Match } from 'src/app/model/match';
import { LeagueService } from 'src/app/service/league/league.service';
import { MatchsService } from 'src/app/service/matchs/matchs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  leagueStateOptions = {
    freeMode : true,
    slidesPerView: 1.5,
    spaceBetween: 10
  }

  matches: Match[]
  lastMatchComplete: Match

  constructor(private router : Router, public leagueService : LeagueService, private matchService: MatchsService) { }

  ngOnInit() {
    console.log("Hola");
    this.leagueService.refreshLeagueIn(this.leagueService.leagueIn.id).subscribe((result: any) => {
      this.leagueService.leagueIn = result
      console.log(this.leagueService.leagueIn)
      this.matchService.getMatches(this.leagueService.leagueIn.matchesId).subscribe(result => {
        this.matches = result
        console.log(this.matches)
        for (let index = this.matches.length - 1; index >= 0; index--) {
          if(this.matches[index].result != undefined){
            this.lastMatchComplete = this.matches[index]
          }
        }
      })
    })
  }

  navigateBack(){
    this.router.navigateByUrl("/user")
  }

}

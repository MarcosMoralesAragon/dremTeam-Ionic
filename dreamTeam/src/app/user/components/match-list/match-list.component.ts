import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/model/match';
import { Player } from 'src/app/model/player';
import { LeagueService } from 'src/app/service/league/league.service';
import { MatchsService } from 'src/app/service/matchs/matchs.service';
import { PlayerService } from 'src/app/service/player/player.service';

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
  players: Player[]
  matches: Match[]
  constructor(private leagueService: LeagueService, private playerService: PlayerService, public matchService: MatchsService) { }



  ngOnInit() {
    this.leagueService.refreshLeagueIn(this.leagueService.leagueIn.id).subscribe((result: any) => {
      this.leagueService.leagueIn = result
      this.playerService.getPlayers(this.leagueService.leagueIn.playersId).subscribe((result: any) => {
        this.players = result
        this.matchService.getMatches(this.leagueService.leagueIn.matchesId).subscribe((result => {
          this.matches = result
          if(this.matches[this.matches.length - 1].result == undefined){
            this.matchService.setCurrentMatch(this.matches[this.matches.length - 1])
            this.matches.pop()
          }
        }))
      })
    })
  }

  test(){
    console.log("hola")
  }
}

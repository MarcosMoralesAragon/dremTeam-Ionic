import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/model/match';
import { Participation } from 'src/app/model/participation';
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
  slidesPerView: 2.5,
  spaceBetween: 10
}
  players: Player[]
  matches: Match[]
  seeMatch: Match

  team1: string[] = []
  team2: string[] = []

  participations: Participation[] = []


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

  seeDetails(match){
    match.team1.forEach(id => {
      console.log(id)
      var namePlayer = ""
      this.players.forEach(player => {
        if(player.id == id ){
          namePlayer = player.name
          this.participations.push({id: id, name: namePlayer, shooter: 0, defense: 0, center: 0, goal: 0})
        }
      })
      this.team1.push(namePlayer)
      console.log(this.team1)
    })
    match.team2.forEach(id => {
      var namePlayer = ""
      this.players.forEach(player => {
        if(player.id == id ){
          namePlayer = player.name
          this.participations.push({id: id, name: namePlayer, shooter: 0, defense: 0, center: 0, goal: 0})
        }
      })
      this.team2.push(namePlayer)
    })
    this.seeMatch = match
  }
}

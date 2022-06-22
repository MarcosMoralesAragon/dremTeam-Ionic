import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Match } from 'src/app/model/match';
import { Participation } from 'src/app/model/participation';
import { Player } from 'src/app/model/player';
import { LeagueService } from 'src/app/service/league/league.service';
import { MatchsService } from 'src/app/service/matchs/matchs.service';
import { PlayerService } from 'src/app/service/player/player.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit, OnChanges {
  
  players: Player[]
  match: Match
  watchMatch = false

  team1: string[] = []
  team2: string[] = []

  participations: Participation[] = []

  numbers=[0,1,2,3,4,5,6,7,8,9,10]


  teamsSlidesOptions = {
    freeMode : true,
    slidesPerView: 2.2,
    spaceBetween: 10
  }

  constructor(private leagueService: LeagueService, private playerService: PlayerService, public matchService: MatchsService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.leagueService.refreshLeagueIn(this.leagueService.leagueIn.id).subscribe((result: any) => {
      this.leagueService.leagueIn = result
      this.playerService.getPlayers(this.leagueService.leagueIn.playersId).subscribe((result: any) => {
        this.players = result
        this.matchService.getMatches(this.leagueService.leagueIn.matchesId).subscribe((result => {
          var matches : Match[] = result
          if(matches[matches.length - 1].result == undefined){
            this.matchService.setCurrentMatch(matches[matches.length - 1])
            this.match = this.matchService.getCurretMatch()
          }
        }))
      })
    })
  }
  ngOnInit() {
    this.leagueService.refreshLeagueIn(this.leagueService.leagueIn.id).subscribe((result: any) => {
      this.leagueService.leagueIn = result
      this.playerService.getPlayers(this.leagueService.leagueIn.playersId).subscribe((result: any) => {
        this.players = result
        this.matchService.getMatches(this.leagueService.leagueIn.matchesId).subscribe((result => {
          var matches : Match[] = result
          if(matches[matches.length - 1].result == undefined){
            this.matchService.setCurrentMatch(matches[matches.length - 1])
            this.match = this.matchService.getCurretMatch()
          }
          this.watchMatch = false
        }))
      })
    })
  }

  seeMatch(){
    this.match.team1.forEach(id => {
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
    this.match.team2.forEach(id => {
      var namePlayer = ""
      this.players.forEach(player => {
        if(player.id == id ){
          namePlayer = player.name
          this.participations.push({id: id, name: namePlayer, shooter: 0, defense: 0, center: 0, goal: 0})
        }
      })
      this.team2.push(namePlayer)
    })
    this.watchMatch = true
    console.log(this.participations)
  }

  terminarPartido(){
    this.matchService.endMatch({idMatch: this.match.id, participations: this.participations}).subscribe(result =>
      console.log(result)
      )}

}

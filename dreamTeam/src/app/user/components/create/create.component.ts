import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/model/player';
import { LeagueService } from 'src/app/service/league/league.service';
import { MatchsService } from 'src/app/service/matchs/matchs.service';
import { PlayerService } from 'src/app/service/player/player.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

  constructor(private leagueService : LeagueService, private playerService: PlayerService, private router : Router, private matchService : MatchsService) { }

  whatToMake = "player"

  numbers=[0,1,2,3,4,5,6,7,8,9,10]
  players: Player[]

  newPlayer ={
    name: "",
    shooting: 5,
    center: 5,
    defense: 5
  }
  playersInMatch: string[]

  ngOnInit() {
    this.leagueService.refreshLeagueIn(this.leagueService.leagueIn.id).subscribe((result: any) => {
      this.leagueService.leagueIn = result
      this.playerService.getPlayers(this.leagueService.leagueIn.playersId).subscribe((result: any) => this.players = result)
    })
  }

  segmentChanged(ev: any) {
    this.whatToMake = ev.detail.value
    console.log(this.whatToMake)
  }

  create(){
    if(this.whatToMake == "player"){
      this.playerService.createPlayer(
        {name: this.newPlayer.name, shooting: this.newPlayer.shooting, center: this.newPlayer.center, defense: this.newPlayer.defense, leagueId: this.leagueService.leagueIn.id }
        ).subscribe(result => {
          console.log(result)
        })
        this.router.navigateByUrl("/user/owner/components/statics")
    }
    if(this.whatToMake == "match"){
      this.matchService.createMatch(this.playersInMatch).subscribe(result => console.log(result))
    }
  }
}

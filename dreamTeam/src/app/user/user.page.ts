import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { League } from '../model/league';
import { LogInRegisterService } from '../service/auth/log-in-register.service';
import { LeagueService } from '../service/league/league.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  whatToAdd = undefined
  creating = {name: "", code:""}
  ownLeagues : League[] = []
  espectatingLeagues : League[] = []

  constructor(private leagueService : LeagueService,
              private router : Router) {}

  ngOnInit() {
    this.leagueService.getLeagues("ownLeague").subscribe(result => this.ownLeagues = result)
    this.leagueService.getLeagues("espectatingLeagues").subscribe(result => this.espectatingLeagues = result)
  }

  whatToDisplay(acction : string){
    this.whatToAdd = acction
  }

  create(){
    if(this.whatToAdd == "own"){
      if(!this.checkData(this.creating.name)){
        // Snackbar error
      }
      // Add it to user via firebase
      // Snackbar success
      this.whatToAdd = undefined
    } else if(this.whatToAdd == "espectate"){
      if(!this.checkData(this.creating.code)){
        // Snackbar error
      }
      // Add it to user via firebase
      // Snackbar success
      this.whatToAdd = undefined
    }
  }

  cancel(){
    this.whatToAdd = undefined
  }

  checkData(data : string) : boolean{
    if((data == "") || (data == undefined)){
      return false
    }
    return true
  }

  getPosition(idLeague : string , list: string) : number{
    if(list == "ownLeagues"){
      return this.ownLeagues.findIndex(league => league.id == idLeague) + 1
    }
    if(list == "espectatingLeagues"){
      return this.espectatingLeagues.findIndex(league => league.id == idLeague) + 1 
    }
  }

  goToLeague(userStatus: String, league:League){
    // TODO
    this.router.navigateByUrl(this.router.url + '/owner')
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { League } from '../model/league';
import { User } from '../model/user';
import { LogInRegisterService } from '../service/auth/log-in-register.service';
import { LeagueService } from '../service/league/league.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user: User
  whatToAdd = undefined
  creating = {name: "", code:""}
  ownLeagues : League[]
  spectatingLeagues : League[]
  name: string

  constructor(private leagueService : LeagueService,
              private router : Router,
              public logInRegisterService : LogInRegisterService) {
                this.logInRegisterService.getUserData().subscribe(result => {
                  this.user = result 
                  console.log(this.user)
                  this.leagueService.getLeagues(this.user).subscribe((result:any) =>{
                    console.log(result)
                    this.ownLeagues = result.ownLeagues
                    this.spectatingLeagues = result.spectatingLeagues
                    console.log(this.spectatingLeagues)
                  })
                })
              }

  ngOnInit() {
    this.refreshUser()
    // this.leagueService.getLeagues("ownLeague").subscribe(result => this.ownLeagues = result)
    // this.leagueService.getLeagues("espectatingLeagues").subscribe(result => this.espectatingLeagues = result)
  }

  whatToDisplay(acction : string){
    this.whatToAdd = acction
  }

  create(){
    if(this.whatToAdd == "own"){
      if(!this.checkData(this.creating.name)){
        // Snackbar error
      }
      this.leagueService.createLeague({name: this.creating.name, id : this.user.id}).subscribe(result => {
        this.whatToAdd = undefined
        this.refreshUser()
      })
      // Snackbar success
    } else if(this.whatToAdd == "espectate"){
      if(!this.checkData(this.creating.code)){
        // Snackbar error
      }
      this.leagueService.spectateLeague({id: this.creating.code, userId : this.user.id}).subscribe(result => {
        if(result == ""){
          // Snackbar league not found
          return;
        }
        this.whatToAdd = undefined
        this.refreshUser()
      })
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
      return this.spectatingLeagues.findIndex(league => league.id == idLeague) + 1 
    }
  }

  goToLeague(userStatus: String, league:League){
    var navigate = "/owner"
    if(userStatus == "espectator"){
      navigate = "/espectator"
    }
    this.leagueService.leagueIn = league
    this.router.navigateByUrl(this.router.url + navigate)
  }

  navigateBack(){
    this.router.navigateByUrl('/')
  }

  refreshUser(){
    this.logInRegisterService.getUserData().subscribe(result => {
      this.user = result 
      this.leagueService.getLeagues(this.user).subscribe((result:any) =>{
        this.ownLeagues = result.ownLeagues
        this.spectatingLeagues = result.spectatingLeagues
      })
    })
  }
}

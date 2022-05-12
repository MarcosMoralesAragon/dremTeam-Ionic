import { Component, OnInit } from '@angular/core';
import { League } from '../model/league';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  whatToAdd = undefined
  creating = {name: "", code:""}
  ownLeagues : League[] = [
    {"name" : "Prueba 1", "id": "AAABBB123"},
    {"name" : "Prueba 2", "id": "AAABBB124"},
    {"name" : "Prueba 3", "id": "AAABBB125"},
    {"name" : "Prueba 4", "id": "AAABBB126"},
    {"name" : "Prueba 5", "id": "AAABBB127"},
    {"name" : "Prueba 6", "id": "AAABBB128"},
    {"name" : "Prueba 7", "id": "AAABBB129"},
  ]

  espectatingLeagues : League[] = [
    {"name" : "Prueba 1", "id": "AAABBB123"},
    {"name" : "Prueba 2", "id": "AAABBB124"},
    {"name" : "Prueba 3", "id": "AAABBB125"},
    {"name" : "Prueba 4", "id": "AAABBB126"},
    {"name" : "Prueba 5", "id": "AAABBB127"},
    {"name" : "Prueba 6", "id": "AAABBB128"},
    {"name" : "Prueba 7", "id": "AAABBB129"},
  ]

  liga : League
  constructor() {}

  ngOnInit() {
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
}

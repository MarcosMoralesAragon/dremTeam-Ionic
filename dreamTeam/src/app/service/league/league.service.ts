import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { League } from 'src/app/model/league';
import { LogInRegisterService } from '../auth/log-in-register.service';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private authService : LogInRegisterService) { }

  getLeagues(wichList:any) : Observable<any>{
    var user = this.authService.getUserData()
    var arrayResult = []

    var list = user.ownLeaguesId
    if(wichList == "espectatingLeagues"){
      var list = user.espectatorLeaguesId
    }

    list.forEach(ownId => {
      leagues.forEach(league => {
        if(ownId == league.id){
          arrayResult.push(league)
        }
      })
    })
    return of(arrayResult)
  }

  addLeague(list:string){}


}


const leagues : League[] = [
  {name: "Liga 1", id: "AAABBB123", ownerEmail:"paco@gmail.com"},
  {name: "Liga 2", id: "AAABBB124", ownerEmail:"paco@gmail.com"},
  {name: "Liga 3", id: "AAABBB125", ownerEmail:"paco@gmail.com"},
  {name: "Liga 4", id: "AAABBB126", ownerEmail:"paco@gmail.com"},
  {name: "Liga 5", id: "AAABBB127", ownerEmail:"paco@gmail.com"},
  {name: "Liga 6", id: "AAABBB128", ownerEmail:"paco@gmail.com"},
  {name: "Liga 7", id: "AAABBB129", ownerEmail:"paco@gmail.com"},
  {name: "Liga 8", id: "AAABBB133", ownerEmail:"test@gmail.com"},
  {name: "Liga 9", id: "AAABBB134", ownerEmail:"test@gmail.com"},
  {name: "Liga 10", id: "AAABBB135", ownerEmail:"test@gmail.com"},
  {name: "Liga 11", id: "AAABBB136", ownerEmail:"test@gmail.com"},
  {name: "Liga 12", id: "AAABBB137", ownerEmail:"test@gmail.com"},
  {name: "Liga 13", id: "AAABBB138", ownerEmail:"test@gmail.com"},
  {name: "Liga 14", id: "AAABBB139", ownerEmail:"test@gmail.com"},
]
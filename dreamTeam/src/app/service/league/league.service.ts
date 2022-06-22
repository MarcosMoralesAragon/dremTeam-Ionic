import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { League } from 'src/app/model/league';
import { LogInRegisterService } from '../auth/log-in-register.service';

const url = "http://127.0.0.1:8000"

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  leagueIn : League

  constructor(private http: HttpClient) { }

  createLeague(data){
    return this.http.post(url + "/createLeague", data)
  }

  spectateLeague(data){
    return this.http.post(url + "/spectateLeague", data)
  }

  getLeagues(data){
    return this.http.post(url + "/getLeagues", {ownLeaguesId: data.ownLeaguesId, espectatorLeaguesId: data.spectatorLeaguesId})
  }

  refreshLeagueIn(data){
    return this.http.post(url + "/getLeague", {id : data})
  }

}
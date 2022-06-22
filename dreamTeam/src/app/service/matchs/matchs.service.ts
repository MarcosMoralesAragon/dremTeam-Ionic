import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from 'src/app/model/match';

const url = "http://127.0.0.1:8000"

@Injectable({
  providedIn: 'root'
})
export class MatchsService {

  currentMatch: Match
  constructor(private http: HttpClient) { }

  createMatch(data): Observable<any>{
    return this.http.post(url + '/createMatch', {playersInMatch: data})
  }

  getMatches(data): Observable<any>{
    return this.http.post(url + '/getMatches', {matchessId : data})
  }
  setCurrentMatch(newMatch: Match){
    this.currentMatch = newMatch
  }

  getCurretMatch(){
    return this.currentMatch
  }

  endMatch(data){
    return this.http.post(url + '/endMatch', data)
  }
}

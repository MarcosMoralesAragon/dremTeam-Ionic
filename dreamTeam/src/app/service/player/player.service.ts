import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = "http://127.0.0.1:8000"

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  createPlayer(data): Observable<any>{
    return this.http.post(url + "/createPlayer", data)
  }

  getPlayers(data){
    return this.http.post(url + '/getPlayers', {playersId : data})
  }
}
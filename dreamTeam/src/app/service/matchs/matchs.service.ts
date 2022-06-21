import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = "http://127.0.0.1:8000"

@Injectable({
  providedIn: 'root'
})
export class MatchsService {

  constructor(private http: HttpClient) { }

  createMatch(data): Observable<any>{
    return this.http.post(url + '/createMatch', {playersInMatch: data})
  }
}

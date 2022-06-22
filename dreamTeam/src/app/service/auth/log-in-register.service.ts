import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { HttpClient } from "@angular/common/http"
import { Observable, from, of } from 'rxjs';

const url = "http://127.0.0.1:8000"

@Injectable({
  providedIn: 'root'
})
export class LogInRegisterService {

  emailLogin : string

  constructor(private autentication: Auth, private http: HttpClient) {}

  registerUser(data): Observable<boolean>{
    return from(createUserWithEmailAndPassword(this.autentication, data.email , data.password).then(result => {
      console.log(result)
      return true;
    }).catch(err => {
      console.log(err.message)
      return false;
    }))
  }

  addUserDatabase(data) : Observable<any> {
    var userData = {
      name : data.name,
      email : data.email
    }
    console.log(userData);
    
    return this.http.post(url + '/registerUser', userData)  
}

  logInUser(data): Observable<boolean>{
    return from(signInWithEmailAndPassword(this.autentication, data.email , data.password).then(result => {
      console.log(result.user.email)
      this.emailLogin = result.user.email
      return true;
    }).catch(err => {
      console.log(err.message)
      return false;
    }))
  }

  getUserData(): Observable<any>{
    return this.http.post(`${url}/get`, {email : this.emailLogin})
  }
}

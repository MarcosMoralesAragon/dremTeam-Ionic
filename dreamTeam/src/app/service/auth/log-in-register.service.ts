import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInRegisterService {

  constructor(private autentication: Auth) { }

  registerUser(data): Observable<boolean>{
    return from(createUserWithEmailAndPassword(this.autentication, data.email , data.password).then(result => {
      console.log(result)
      return true;
    }).catch(err => {
      console.log(err.message)
      return false;
    }))
  }

  logInUser(data): Observable<boolean>{
    return from(signInWithEmailAndPassword(this.autentication, data.email , data.password).then(result => {
      console.log(result)
      return true;
    }).catch(err => {
      console.log(err.message)
      return false;
    }))
  }
}

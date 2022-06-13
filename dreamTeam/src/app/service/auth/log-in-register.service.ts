import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Observable, from } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class LogInRegisterService {

  userIn : User = {
    email: "paco@gmail.com",
    ownLeaguesId : [
      "AAABBB123","AAABBB124","AAABBB125","AAABBB126","AAABBB127","AAABBB128", "AAABBB129",
    ],
    espectatorLeaguesId : [
      "AAABBB133","AAABBB134","AAABBB135","AAABBB136","AAABBB137","AAABBB138", "AAABBB139",
    ]
  }
  emailLogin : string

  constructor(private autentication: Auth, private firestore: Firestore) { }

  registerUser(data): Observable<boolean>{
    return from(createUserWithEmailAndPassword(this.autentication, data.email , data.password).then(result => {
      console.log(result)
      return true;
    }).catch(err => {
      console.log(err.message)
      return false;
    }))
  }

  async addUserDatabase(data) {
    var userData = {
      name : data.name,
      email : data.email
    } 
    try {
        const docRef = await addDoc(collection(this.firestore, "userList"), userData);
    } catch (e) {
        console.error("Error adding document: ", e);
    }    
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

  setUserData(){
    this.userIn = {
      email: this.emailLogin,
      ownLeaguesId : [
        "AAABBB123","AAABBB124","AAABBB125","AAABBB126","AAABBB127","AAABBB128", "AAABBB129",
      ],
      espectatorLeaguesId : [
        "AAABBB133","AAABBB134","AAABBB135","AAABBB136","AAABBB137","AAABBB138", "AAABBB139",
      ]
    }
  }

  getUserData(){
    return this.userIn
  }
}

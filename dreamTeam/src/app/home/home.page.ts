import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { LogInRegisterService } from '../service/auth/log-in-register.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  acction : string = "Log in"
  userLogin = { email : "", password : ""}
  userRegister = {email : "", password : "", name : ""}
  error = {status : "" , message : ""}

  constructor(private router : Router, private loginRegisterService : LogInRegisterService, private autentication: Auth) {}

  acctionDoing(acction : string){
    this.acction = acction
  }

  async doAcction(request : string){
    if(request == "Register"){
      if(!this.checkData(this.userRegister, this.acction)){
        // Fill error message
        return ;
      }
      this.loginRegisterService.registerUser(this.userRegister).subscribe(value => {
        console.log(value)
        if(!value){
          console.log("Algo salio mal")
          return ;
        }
          this.acction = "Log in"
      })
      this.loginRegisterService.addUserDatabase(this.userRegister)
    } else if(request == "Log in") {
      if(!this.checkData(this.userLogin, this.acction)){
        return ;
      }
      this.loginRegisterService.logInUser(this.userLogin).subscribe(value => {
        console.log(value)
        this.loginRegisterService.setUserData()
        this.router.navigateByUrl('user')
        if(!value){
          console.log("Algo salio mal")
          return ;
        }
      })
    }
  }

  checkData(typeOfJson, acction) : boolean{
    var data = [typeOfJson.email , typeOfJson.password]
    var dataBad
    if(acction == "Register"){
      data.push(typeOfJson.name)
    }
    data.forEach(value => {
      if(value == ""){
        console.log("Faltan datos")
        dataBad = true
      }
    })
    if(dataBad){
      return false;
    }
    return true;
  }
}

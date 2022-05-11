import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonSegment } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  acction : string = "Log in"
  userLogin = { email : "", password : ""}
  userRegister = {email : "", password : "", name : ""}
  error : {status : string , message : string} = undefined

  constructor(private router : Router) {}

  acctionDoing(acction : string){
    this.acction = acction
  }

  request(request : string){
    if(request == "Register"){
      if(!this.register()){
        // Snackbar error using error variable
        return
      }
      // Snackbar all good
      this.acction = "Log in"
    } else if(request == "Log in") {
      if(!this.login()){
        // Snackbar error using error variable
        return
      }
      this.router.navigateByUrl('')
    }
  }

  register() : boolean{
    if(!this.checkData(this.userRegister, this.acction)){
      // Fill error message
      return false;
    }
    // Firebase request
    return true;
  }

  login() : boolean{
    if(!this.checkData(this.userLogin, this.acction)){
      return false;
    }
    // Firebase request
    return true;
  }

  checkData(typeOfJson, acction) : boolean{
    var data = [typeOfJson.email , typeOfJson.password]
    var dataBad
    if(acction == "Register"){
      data.push(typeOfJson.name)
    }
    data.forEach(value => {
      if(value == ""){
        console.log("Lo pillo")
        dataBad = true
      }
    })
    if(dataBad){
      return false;
    }
    return true;
  }
}

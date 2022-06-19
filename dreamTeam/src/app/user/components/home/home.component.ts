import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  leagueStateOptions = {
    freeMode : true,
    slidesPerView: 1.5,
    spaceBetween: 10
  }

  constructor(private router : Router) { }

  ngOnInit() {}

  navigateBack(){
    this.router.navigateByUrl("/user")
  }

}

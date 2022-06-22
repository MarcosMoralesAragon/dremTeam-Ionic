import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from 'src/app/service/league/league.service';

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

  constructor(private router : Router, private leagueService : LeagueService) { }

  ngOnInit() {
    console.log("Hola");
    
    this.leagueService.refreshLeagueIn(this.leagueService.leagueIn.id).subscribe((result: any) => {
      this.leagueService.leagueIn = result
      console.log(this.leagueService.leagueIn)
    })
  }

  navigateBack(){
    this.router.navigateByUrl("/user")
  }

}

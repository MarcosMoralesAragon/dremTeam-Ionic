import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/service/league/league.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.leagueService.refreshLeagueIn(this.leagueService.leagueIn.id).subscribe((result: any) => this.leagueService.leagueIn = result)
  }

}

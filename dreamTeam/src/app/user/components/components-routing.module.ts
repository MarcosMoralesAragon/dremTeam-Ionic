import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchComponent } from './match/match.component';
import { StatisticsComponent } from './statistics/statistics.component';


const routes: Routes = [
  {path:'create', component:CreateComponent},
  {path:'home', component:HomeComponent},
  {path:'match', component:MatchComponent},
  {path:'match-list', component:MatchListComponent},
  {path:'statics', component:StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsPageRoutingModule {}

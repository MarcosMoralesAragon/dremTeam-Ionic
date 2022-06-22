import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from '../components/create/create.component';
import { HomeComponent } from '../components/home/home.component';
import { MatchListComponent } from '../components/match-list/match-list.component';
import { MatchComponent } from '../components/match/match.component';
import { StatisticsComponent } from '../components/statistics/statistics.component';

import { OwnerPage } from './owner.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerPage,
    children:[
      {path:'', component:HomeComponent},
      {
        path: 'components',
        loadChildren: () => import('../components/components.module').then( m => m.ComponentsPageModule)
      }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

import { EspectatorPage } from './espectator.page';

const routes: Routes = [
  {
    path: '',
    component: EspectatorPage,
    children:[
      {path:'', component:HomeComponent},
      {
        path: 'components',
        loadChildren: () => import('../components/components.module').then( m => m.ComponentsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspectatorPageRoutingModule {}

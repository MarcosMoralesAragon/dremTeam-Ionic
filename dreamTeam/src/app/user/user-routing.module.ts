import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    component: UserPage
  },
  {
    path: 'owner',
    loadChildren: () => import('./owner/owner.module').then( m => m.OwnerPageModule)
  },
  {
    path: 'espectator',
    loadChildren: () => import('./espectator/espectator.module').then( m => m.EspectatorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}

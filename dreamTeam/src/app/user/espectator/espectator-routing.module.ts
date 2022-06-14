import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspectatorPage } from './espectator.page';

const routes: Routes = [
  {
    path: '',
    component: EspectatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspectatorPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspectatorPageRoutingModule } from './espectator-routing.module';

import { EspectatorPage } from './espectator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspectatorPageRoutingModule
  ],
  declarations: [EspectatorPage]
})
export class EspectatorPageModule {}

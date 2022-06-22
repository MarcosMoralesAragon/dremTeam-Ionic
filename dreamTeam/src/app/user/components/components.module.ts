import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsPageRoutingModule } from './components-routing.module';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { MatchListComponent } from './match-list/match-list.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { NgChartsModule } from 'ng2-charts';

import 'chartjs-plugin-zoom'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsPageRoutingModule,
    NgChartsModule
  ],
  declarations: [CreateComponent, HomeComponent, MatchComponent, MatchListComponent,StatisticsComponent]
})
export class ComponentsPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './modules/home/home.component';
import {HistoryComponent} from './modules/history/history.component';
import {NotFoundComponent} from './modules/not-found/not-found.component';
import {DonnationsComponent} from './modules/donnations/donnations.component';
import {VotesComponent} from './modules/votes/votes.component';
import {DynmapComponent} from './modules/dynmap/dynmap.component';
import {RulesComponent} from './modules/rules/rules.component';
import {MoneyComponent} from './modules/money/money.component';
import {BansComponent} from './modules/bans/bans.component';
import { Over2stationComponent } from './modules/over2station/over2station.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'dons', component: DonnationsComponent },
  { path: 'vote', component: VotesComponent },
  { path: 'dynmap', component: DynmapComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'wiki', component: RulesComponent },
  { path: 'money', component: MoneyComponent },
  { path: 'maps', component: HistoryComponent },
  { path: 'bans', component: BansComponent },
  { path: 'over2station', component: Over2stationComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

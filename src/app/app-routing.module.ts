import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamsComponent} from './pages/teams/teams.component';
import {TeamComponent} from './pages/team/team.component';

const routes: Routes = [
  {path: 'teams', component: TeamsComponent},
  {path: 'team/:id', component: TeamComponent},
  {path: '**' , pathMatch: 'full', redirectTo: 'teams'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from '../user/team/team.component';
import { TapComponent } from '../user/tap/tap.component';
import { FinishComponent } from '../user/finish/finish.component';
import { WarComponent } from '../admin/war/war.component';
import { StartComponent } from '../user/start/start.component';
import { HomeComponent } from '../admin/home/home.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'user/team', component: TeamComponent },
  { path: 'user/tap', component: TapComponent },
  { path: 'user/finish', component: FinishComponent },
  { path: 'admin', component: HomeComponent },
  { path: 'admin/war', component: WarComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

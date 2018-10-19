import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartComponent } from './admin/start/start.component';
import { WarComponent } from './admin/war/war.component';
import { TeamComponent } from './user/team/team.component';
import { TapComponent } from './user/tap/tap.component';
import { FinishComponent } from './user/finish/finish.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    WarComponent,
    TeamComponent,
    TapComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

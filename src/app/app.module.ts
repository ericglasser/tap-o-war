import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WarComponent } from './admin/war/war.component';
import { TeamComponent } from './user/team/team.component';
import { TapComponent } from './user/tap/tap.component';
import { FinishComponent } from './user/finish/finish.component';
import { AppRoutingModule } from './route/route.module';
import { HomeComponent } from './admin/home/home.component';
import { StartComponent } from './user/start/start.component';
import { TapOWarService } from './tap-owar.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    WarComponent,
    TeamComponent,
    TapComponent,
    FinishComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TapOWarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartComponent } from './admin/start/start.component';
import { WarComponent } from './admin/war/war.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    WarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

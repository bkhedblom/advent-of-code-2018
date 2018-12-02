import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Day1aComponent } from './day1/day1a/day1a.component';
import { SolversComponent } from './solvers/solvers.component';

@NgModule({
  declarations: [
    AppComponent,
    Day1aComponent,
    SolversComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

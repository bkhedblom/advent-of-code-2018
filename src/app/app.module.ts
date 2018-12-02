import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Day1aComponent } from './day1/day1a/day1a.component';
import { SolversComponent } from './solvers/solvers.component';
import { Day1bComponent } from './day1/day1b/day1b.component';

@NgModule({
  declarations: [
    AppComponent,
    Day1aComponent,
    SolversComponent,
    Day1bComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

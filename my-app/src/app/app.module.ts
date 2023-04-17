import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GlobalTimerComponent } from './global-timer/global-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    GlobalTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

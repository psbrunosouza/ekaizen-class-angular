import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PhoneListModule} from "./phone-list/phone-list.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhoneListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

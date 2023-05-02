import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AlertComponent } from './alert/alert.component';
import { SecondComponent } from './second/second.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { LayoutComponent } from './components/layout/layout.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    SecondComponent,
    LayoutComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

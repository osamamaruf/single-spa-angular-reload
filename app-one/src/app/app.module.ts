import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { ViewThreeComponent } from './view3/second.component';
import { ViewFourComponent } from './view4/second.component';


@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent    ,
    ViewFourComponent,
    ViewThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/app-one' },],
  bootstrap: [AppComponent]
})
export class AppModule { }

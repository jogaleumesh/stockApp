import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WebSocketService } from "angular2-websocket-service";
import { StockService } from "./stock.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    WebSocketService,
    StockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

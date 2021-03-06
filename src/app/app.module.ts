import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

import { AppComponent } from './app.component';
import { AppService } from './app.services';
import { HttpClientModule } from '@angular/common/http';
import { Config } from '../app/config'

const config: SocketIoConfig = { url: Config.url, options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SocketIoModule.forRoot(config) 
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

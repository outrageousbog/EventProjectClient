import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {WebService} from './shared/web/WebService';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserDetailComponent,
    EventDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    WebService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

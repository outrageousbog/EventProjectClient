import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {WebService} from './shared/web/WebService';
import {AppRoutingModules} from './app-routing.modules';
import { NavbarComponent } from './navbar/navbar.component';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatListModule, MatNativeDateModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserCreateComponent } from './user-create/user-create.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserDetailComponent,
    EventDetailComponent,
    NavbarComponent,
    UserCreateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModules,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [
    WebService,
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

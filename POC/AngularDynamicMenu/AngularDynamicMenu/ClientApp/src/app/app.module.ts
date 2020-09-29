//import './rxjs-extensions';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { HttpModule, XHRBackend } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { AuthGuard } from './_guards/auth.guard';

import { JwtInterceptor } from './_helpers/index';

//import { ContentHeaders } from './_common/headers';
import { GlobalEventsManager } from "./_common/gobal-events-manager";
//import { MenuComponent } from "./nav-menu/nav-menu.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AlertService, AuthenticationService, UserService } from './_services/index';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
    //RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent

    //MenuComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    GlobalEventsManager,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

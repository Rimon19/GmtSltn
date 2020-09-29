/// <reference path="fetchemployee/fetchemployee.component.ts" />
/// <reference path="fetchemployee/fetchemployee.component.ts" />

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { FetchfetchemployeeComponent } from './fetchemployee/fetchemployee.component';
import { Createemployee } from './addemployee/addemployee.component';

import { studentsComponent } from './students/students.component';  
import { modalComponent } from './modal/modal.component';  
import { ImageUploadComponent } from './Image-upload/Image-upload.component';  
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FetchfetchemployeeComponent,
    ImageUploadComponent,
    Createemployee,
    studentsComponent,
    modalComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'fetchemployee', component: FetchfetchemployeeComponent },
   
      { path: 'addemployee', component: Createemployee },
      { path: 'employee/edit/:id', component: Createemployee },
      { path: 'registeremployee', component: Createemployee },
      { path: 'students', component: studentsComponent },
      { path: 'modal', component: modalComponent },
      { path: '**', redirectTo: 'home' },
      { path: 'file-upload', component: ImageUploadComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

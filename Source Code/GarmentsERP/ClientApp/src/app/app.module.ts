/// <reference path="fetchInitialOrdere/fetchInitialOrdere.component.ts" />
/// <reference path="fetchCompany/fetchCompany.component.ts" />

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule, MatInputModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CommonModule } from '@angular/common';
import { FetchinitialorderComponent } from './fetchInitialOrdere/fetchInitialOrdere.component';
import { CreateInitorder } from './addInitialOrder/addInitialOrder.component';
import { HttpModule } from '@angular/http';
import { FetchCompanyComponent } from './fetchCompany/fetchCompany.component';
import { CreateCompany } from './addCompany/addCompany.component';
import { FetchLocationComponent } from './fetchlocation/fetchlocation.component';
import { CreateLocation } from './addlocation/addlocation.component';
import { CreateCompanyandlocation } from './AddCompanyandlocation/AddCompanyandlocation.component';
import { modalComponent } from './modal/modal.component';
import { FetchCBuyerComponent } from './fetchBuyer/fetchBuyer.component';
import { CreateBuyer } from './addBuyer/addBuyer.component';
import { FetchRegionComponent } from './fetchCountry/fetchCountry.component';
import { CreateCountry } from './addCountry/addCountry.component';  
import { FetchCMerchandiserComponent } from './fetchMerchandiser/fetchMerchandiser.component';
import { CreateMErchandise } from './addMerchandiser/addMerchandiser.component';
import { fetchTeamleaderComponent } from './fetchTeamleader/fetchTeamleader.component';  
import { ImageUploadComponent } from './Image-upload/Image-upload.component';  
import { PODetailsComponent } from './PODetails/PODetails.component';
import { PrecostingComponent } from './Precosting/Precosting.component';
import { CompanyInfoesService } from './services/CompanyInfoes.service';
import { MathCalculationService } from './services/mathCalculation.service';
import { ParsialFabricBooking } from './parsialFabricBooking/parsialFabricBooking.component';
import { InitialOrderComponent } from './initial-order/initial-order/initial-order.component';
import { AddItemModalComponent } from './initial-order/add-item-modal/add-item-modal.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { initialordersService } from './services/initialorders.service';
//import { InitialOrderService } from '../../shared/initial-order.service';
import { XyzComponent } from './xyz/xyz.component';
import { ParsialFabricBookingSearchComponent } from './parsialFabricBooking/ParsialFabricBookingSearchComponent/parsial-fabric-booking-search/parsial-fabric-booking-search.component';
import { ParsialFabricBookingEditComponent } from './parsialFabricBooking/parsial-fabric-booking-edit/parsial-fabric-booking-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FetchinitialorderComponent,
    CreateInitorder,
    FetchCompanyComponent,
    CreateCompany,
    FetchLocationComponent,
    CreateLocation,
    CreateCompanyandlocation,
    modalComponent,
    FetchCBuyerComponent,
    CreateBuyer,
    FetchRegionComponent,
    CreateCountry,
    FetchCMerchandiserComponent,
    CreateMErchandise,
    fetchTeamleaderComponent,
    ImageUploadComponent,
    PODetailsComponent,
    PrecostingComponent,
    ParsialFabricBooking,
    InitialOrderComponent,
    AddItemModalComponent,
    XyzComponent,
    ParsialFabricBookingSearchComponent,
    ParsialFabricBookingEditComponent
  ],
  imports: [
    MatFormFieldModule,
    MatGridListModule,
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    ToastrModule.forRoot(),
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'fetchInitialOrdere', component: FetchinitialorderComponent },
      { path: 'addInitialOrder', component: CreateInitorder },
      { path: 'initialorder/edit/:id', component: CreateInitorder },
      { path: '**', redirectTo: 'home' },
      { path: 'fetchCompany', component: FetchCompanyComponent },
      { path: 'addCompany', component: CreateCompany }, 
      { path: 'Company/edit/:id', component: CreateCompany },
      { path: 'fetchlocation', component: FetchLocationComponent },
      { path: 'Location/edit/:id', component: CreateLocation },
      { path: 'addlocation', component: CreateLocation },
      { path: 'AddCompanyandlocation', component: CreateCompanyandlocation },
      { path: 'modal', component: modalComponent },
      { path: 'fetchBuyer', component: FetchCBuyerComponent },
      { path: 'addBuyer', component: CreateBuyer },
      { path: 'Buyer/edit/:id', component: CreateCompany },
      { path: 'Country/edit/:id', component: CreateCountry },
      { path: 'fetchCountry', component: FetchRegionComponent },
      { path: 'addCountry', component: CreateCountry },
      { path: 'fetchMerchandiser', component: FetchCMerchandiserComponent },
      { path: 'addMerchandiser', component: CreateMErchandise },
      { path: 'Merchandiser/edit/:id', component: CreateMErchandise },
      { path: 'fetchTeamleader', component: fetchTeamleaderComponent },
      { path: 'Image-upload', component: ImageUploadComponent },
      { path: 'PODetails', component: PODetailsComponent },
      { path: 'Precosting', component: PrecostingComponent },
      { path: 'parsialFabricBooking', component: ParsialFabricBooking },
      { path: 'initial-order', component: InitialOrderComponent },
    ])
  ],
  entryComponents: [AddItemModalComponent, ParsialFabricBookingSearchComponent,ParsialFabricBookingEditComponent],
  providers: [MathCalculationService, CompanyInfoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

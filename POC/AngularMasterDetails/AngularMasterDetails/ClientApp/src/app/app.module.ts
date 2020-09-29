import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { ToastrModule } from 'ngx-toastr';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { OrderItemsComponent } from './orders/order-items/order-items.component';
import { OrderService } from './shared/order.service';
import { CustomerService } from './shared/customer.service';
import { ItemService } from './shared/item.service';

import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule
} from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CheckboxComponent } from './checkbox/checkbox.component';

import {
  MatCheckboxModule,
  MatListModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemsComponent,
    CheckboxComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatCheckboxModule,
    MatListModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: '', redirectTo: 'order', pathMatch: 'full' },
      //{ path: 'home', component: HomeComponent },
      { path: 'orders', component: OrdersComponent },
      {
        path: 'order', children: [
          { path: '', component: OrderComponent },
          { path: 'edit/:id', component: OrderComponent }
        ]
      },
      { path: 'checkbox', component: CheckboxComponent }
    ])
  ],
  //providers: [],
  entryComponents: [OrderItemsComponent],
  providers: [OrderService, CustomerService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

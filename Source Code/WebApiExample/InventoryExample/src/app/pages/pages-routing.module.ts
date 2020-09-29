import { MonthlyExpanseComponent } from './merchandizer-module/InventorySystem/monthly-expanse/monthly-expanse.component';
import { ProductInfoComponent } from './merchandizer-module/InventorySystem/product-info/product-info.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import{merchandizer} from'./merchandizer-module/merchandizer';
import { ShowInitialOrderComponent } from './merchandizer-module/fetch-initial-order/show-initial-order/show-initial-order.component';
import { AddInitialOrderComponent } from './merchandizer-module/fetch-initial-order/add-initial-order/add-initial-order.component';
import { ShowPreCoastingComponent } from './merchandizer-module/pre-coasting/show-pre-coasting/show-pre-coasting.component';
import { ShowParsialFabricBookingComponent } from './merchandizer-module/parsial-fabric-booking/show-parsial-fabric-booking/show-parsial-fabric-booking.component';
import { ShowCompanyComponent } from './merchandizer-module/company/show-company/show-company.component';
import { ShowLocationComponent } from './merchandizer-module/location/show-location/show-location.component';
import { ShowBuyerComponent } from './merchandizer-module/buyer/show-buyer/show-buyer.component';
import { ShowCountryComponent } from './merchandizer-module/country/show-country/show-country.component';
import { ShowMerchandizerComponent } from './merchandizer-module/merchandizer/show-merchandizer/show-merchandizer.component';
import { ShowTeamleaderComponent } from './merchandizer-module/teamleader/show-teamleader/show-teamleader.component';
import { ShowImageComponent } from './merchandizer-module/image/show-image/show-image.component';
import { StockInfoComponent } from './merchandizer-module/InventorySystem/stock-info/stock-info.component';

import { DailyIncomeExpanseComponent } from './merchandizer-module/InventorySystem/daily-income-expanse/daily-income-expanse.component';
import { DailySellsComponent } from './merchandizer-module/InventorySystem/daily-sells/daily-sells.component';

import { InvoicDetailssComponent } from './merchandizer-module/InventorySystem/invoic-detailss/invoic-detailss.component';
import { DeuPaymentDetailsComponent } from './merchandizer-module/InventorySystem/deu-payment-details/deu-payment-details.component';
import { MonthlyIncomeComponent } from './merchandizer-module/InventorySystem/monthly-income/monthly-income.component';
import { ProductCategoriesComponent } from './merchandizer-module/InventorySystem/product-categories/product-categories.component';
import { InvoiceEntryComponent } from './merchandizer-module/InventorySystem/invoice-entry/invoice-entry.component';
import { ProductSubCategoriesComponent } from './merchandizer-module/InventorySystem/product-sub-categories/product-sub-categories.component';
import { InvoicPrintComponent } from './merchandizer-module/InventorySystem/invoic-print/invoic-print.component';
import { DailyExpanseCreatePageComponent } from './merchandizer-module/InventorySystem/daily-expanse-create-page/daily-expanse-create-page.component';
import { ProductEntryCreatePageComponent } from './merchandizer-module/InventorySystem/product-entry-create-page/product-entry-create-page.component';
import { PaymentComponent } from './merchandizer-module/InventorySystem/payment/payment.component';
import { DailyIncomeComponent } from './merchandizer-module/InventorySystem/daily-income/daily-income.component';
import { MonthlyIncomeDueComponent } from './merchandizer-module/InventorySystem/monthly-income-due/monthly-income-due.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component:ECommerceComponent,
    },
   
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
   

    //marchandizing routing
    {
      path: 'marchandizer',
      component:ShowInitialOrderComponent,
    },
    
    {
      path: 'show-precosting',
      component:ShowPreCoastingComponent,
    },
  
    {
      path: 'show-partial-fabric-booking',
      component:ShowParsialFabricBookingComponent,
    },
    {
      path: 'show-company',
      component:ShowCompanyComponent,
    },
    {
      path: 'show-location',
      component:ShowLocationComponent,
    },
   
    {
      path: 'show-buyer',
      component:ShowBuyerComponent,
    },
    {
      path: 'show-country',
      component:ShowCountryComponent,
    },
    {
      path: 'show-marchandizer-info',
      component:ShowMerchandizerComponent,
    },
    {
      path: 'show-teamleader-info',
      component:ShowTeamleaderComponent,
    },
    {
      path: 'show-image',
      component:ShowImageComponent,
    },

//inventory routing 
{
  path: 'daily-Expense',
  component:DailyIncomeExpanseComponent,
},
{
  path: 'daily-Expense-create',
  component:DailyExpanseCreatePageComponent,
},
{
  path: 'daily-Expense-create/:key',
  component:DailyExpanseCreatePageComponent,
},
{
  path: 'daily-sells',
  component:DailySellsComponent,
},
{
  path: 'daily-income',
  component:DailyIncomeComponent,
},
{
  path: 'product-info',
  component:ProductInfoComponent,
},
{
  path: 'product-info-create',
  component:ProductEntryCreatePageComponent,
},
{
  path: 'product-info-create/:key',
  component:ProductEntryCreatePageComponent,
},
{
  path: 'stock-info',
  component:StockInfoComponent,
},
{
  path: 'Invoice-Details',
  component:InvoicDetailssComponent,
},{
  path: 'Invoice-entry',
  component:InvoiceEntryComponent,
},
{
  path: 'Invoice-print/:key',
  component:InvoicPrintComponent,
},
{
  path: 'Deu-Payment-Details',
  component:DeuPaymentDetailsComponent,
},
{
  path: 'payment/:key',
  component:PaymentComponent,
},

{
  path: 'Monthly-income',
  component:MonthlyIncomeComponent,
},
{
  path: 'Monthly-income-due',
  component:MonthlyIncomeDueComponent,
},
{
  path: 'Monthly-Expanse',
  component:MonthlyExpanseComponent,
},
{
  path: 'Product-categories',
  component:ProductCategoriesComponent,
},
{
  path: 'Product-sub-categories',
  component:ProductSubCategoriesComponent,
},
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

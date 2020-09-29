
import { CommonModule } from '@angular/common';
import{merchandizer} from './merchandizer';
import {MatTableModule,MatIconModule, MatButtonModule,
   MatDialogModule, MatSnackBarModule, MatSelectModule, MatNativeDateModule} from '@angular/material';
   import {HttpClientModule} from '@angular/common/http';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbInputModule, 
  NbTreeGridModule ,
  NbCheckboxModule,
  NbDialogModule,
  NbPopoverModule,
  NbTooltipModule,
  NbWindowModule,
  NbDatepickerModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FetchInitialOrderComponent } from './fetch-initial-order/fetch-initial-order.component';
import { AddInitialOrderComponent } from './fetch-initial-order/add-initial-order/add-initial-order.component';
import { ShowInitialOrderComponent } from './fetch-initial-order/show-initial-order/show-initial-order.component';
import { EditInitialOrderComponent } from './fetch-initial-order/edit-initial-order/edit-initial-order.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ModalOverlaysRoutingModule } from '../modal-overlays/modal-overlays-routing.module';
import { CountryComponent } from './country/country.component';
import { ShowCountryComponent } from './country/show-country/show-country.component';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { EditCountryComponent } from './country/edit-country/edit-country.component';
import { DeleteCountryComponent } from './country/delete-country/delete-country.component';
import { ImageComponent } from './image/image.component';
import { AddImageComponent } from './image/add-image/add-image.component';
import { ShowImageComponent } from './image/show-image/show-image.component';
import { DeleteImageComponent } from './image/delete-image/delete-image.component';
import { EditImageComponent } from './image/edit-image/edit-image.component';
import { TeamleaderComponent } from './teamleader/teamleader.component';
import { AddTeamleaderComponent } from './teamleader/add-teamleader/add-teamleader.component';
import { ShowTeamleaderComponent } from './teamleader/show-teamleader/show-teamleader.component';
import { DeleteTeamleaderComponent } from './teamleader/delete-teamleader/delete-teamleader.component';
import { EditTeamleaderComponent } from './teamleader/edit-teamleader/edit-teamleader.component';
import { MerchandizerComponent } from './merchandizer/merchandizer.component';
import { AddMerchandizerComponent } from './merchandizer/add-merchandizer/add-merchandizer.component';
import { ShowMerchandizerComponent } from './merchandizer/show-merchandizer/show-merchandizer.component';
import { EditMerchandizerComponent } from './merchandizer/edit-merchandizer/edit-merchandizer.component';
import { DeleteMerchandizerComponent } from './merchandizer/delete-merchandizer/delete-merchandizer.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AddBuyerComponent } from './buyer/add-buyer/add-buyer.component';
import { ShowBuyerComponent } from './buyer/show-buyer/show-buyer.component';
import { EditBuyerComponent } from './buyer/edit-buyer/edit-buyer.component';
import { DeleteBuyerComponent } from './buyer/delete-buyer/delete-buyer.component';
import { LocationComponent } from './location/location.component';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { ShowLocationComponent } from './location/show-location/show-location.component';
import { DeleteLocationComponent } from './location/delete-location/delete-location.component';
import { EditLocationComponent } from './location/edit-location/edit-location.component';
import { CompanyComponent } from './company/company.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { ShowCompanyComponent } from './company/show-company/show-company.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { DeleteCompanyComponent } from './company/delete-company/delete-company.component';
import { ParsialFabricBookingComponent } from './parsial-fabric-booking/parsial-fabric-booking.component';
import { ShowParsialFabricBookingComponent } from './parsial-fabric-booking/show-parsial-fabric-booking/show-parsial-fabric-booking.component';
import { AddParsialFabricBookingComponent } from './parsial-fabric-booking/add-parsial-fabric-booking/add-parsial-fabric-booking.component';
import { EditParsialFabricBookingComponent } from './parsial-fabric-booking/edit-parsial-fabric-booking/edit-parsial-fabric-booking.component';
import { DeleteParsialFabricBookingComponent } from './parsial-fabric-booking/delete-parsial-fabric-booking/delete-parsial-fabric-booking.component';
import { PreCoastingComponent } from './pre-coasting/pre-coasting.component';
import { ShowPreCoastingComponent } from './pre-coasting/show-pre-coasting/show-pre-coasting.component';
import { AddPreCoastingComponent } from './pre-coasting/add-pre-coasting/add-pre-coasting.component';
import { EditPreCoastingComponent } from './pre-coasting/edit-pre-coasting/edit-pre-coasting.component';
import { DeletePreCoastingComponent } from './pre-coasting/delete-pre-coasting/delete-pre-coasting.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DataTable, DataTableModule } from 'angular5-data-table';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialogService } from '../../@core/mock/mat-dialog.service';
import {MatDatepickerModule, MatDatepicker} from '@angular/material/datepicker';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../../environments/environment';
import { ProductInfoComponent } from './InventorySystem/product-info/product-info.component';
import { StockInfoComponent } from './InventorySystem/stock-info/stock-info.component';
import { DailyInfoComponent } from './InventorySystem/daily-info/daily-info.component';
import { InvoiceDetailsComponent } from './InventorySystem/invoice-details/invoice-details.component';
import { DailyIncomeExpanseComponent } from './InventorySystem/daily-income-expanse/daily-income-expanse.component';
import { DailySellsComponent } from './InventorySystem/daily-sells/daily-sells.component';
import { InvoicDetailssComponent } from './InventorySystem/invoic-detailss/invoic-detailss.component';
import { DeuPaymentDetailsComponent } from './InventorySystem/deu-payment-details/deu-payment-details.component';
import { MonthlyIncomeComponent } from './InventorySystem/monthly-income/monthly-income.component';
import { MonthlyExpanseComponent } from './InventorySystem/monthly-expanse/monthly-expanse.component';
import { InvoiceEntryComponent } from './InventorySystem/invoice-entry/invoice-entry.component';
import { ProductCategoriesComponent } from './InventorySystem/product-categories/product-categories.component';
import { ProductSubCategoriesComponent } from './InventorySystem/product-sub-categories/product-sub-categories.component';
import { InvoicPrintComponent } from './InventorySystem/invoic-print/invoic-print.component';
import {NgxPrintModule} from 'ngx-print';
import { DailyExpanseCreatePageComponent } from './InventorySystem/daily-expanse-create-page/daily-expanse-create-page.component';
import { ProductEntryCreatePageComponent } from './InventorySystem/product-entry-create-page/product-entry-create-page.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { PaymentComponent } from './InventorySystem/payment/payment.component';
import { DailyIncomeComponent } from './InventorySystem/daily-income/daily-income.component';
import { ReportComponent } from './report/report.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MonthlyIncomeDueComponent } from './InventorySystem/monthly-income-due/monthly-income-due.component';
@NgModule({
  declarations: [
    merchandizer,
    FetchInitialOrderComponent,
    AddInitialOrderComponent,
    ShowInitialOrderComponent,
    EditInitialOrderComponent,
    CountryComponent,
    ShowCountryComponent,
    AddCountryComponent,
    EditCountryComponent,
    DeleteCountryComponent,
    ImageComponent,
    AddImageComponent,
    ShowImageComponent,
    DeleteImageComponent,
    EditImageComponent,
    TeamleaderComponent,
    AddTeamleaderComponent,
    ShowTeamleaderComponent,
    DeleteTeamleaderComponent,
    EditTeamleaderComponent,
    MerchandizerComponent,
    AddMerchandizerComponent,
    ShowMerchandizerComponent,
    EditMerchandizerComponent,
    DeleteMerchandizerComponent,
    BuyerComponent,
    AddBuyerComponent,
    ShowBuyerComponent,
    EditBuyerComponent,
    DeleteBuyerComponent,
    LocationComponent,
    AddLocationComponent,
    ShowLocationComponent,
    DeleteLocationComponent,
    EditLocationComponent,
    CompanyComponent,
    AddCompanyComponent,
    ShowCompanyComponent,
    EditCompanyComponent,
    DeleteCompanyComponent,
    ParsialFabricBookingComponent,
    ShowParsialFabricBookingComponent,
    AddParsialFabricBookingComponent,
    EditParsialFabricBookingComponent,
    DeleteParsialFabricBookingComponent,
    PreCoastingComponent,
    ShowPreCoastingComponent,
    AddPreCoastingComponent,
    EditPreCoastingComponent,
    DeletePreCoastingComponent,
    MatConfirmDialogComponent,
    
  

    //inventory system
    ProductInfoComponent,
    StockInfoComponent,
    DailyInfoComponent,
    DailyIncomeExpanseComponent,
    DailySellsComponent,
    InvoiceDetailsComponent,
    InvoicDetailssComponent,
    MatConfirmDialogComponent,
    DeuPaymentDetailsComponent,
    MonthlyIncomeComponent,
    MonthlyExpanseComponent,
    ProductCategoriesComponent,
    ProductSubCategoriesComponent,
    ProductCategoriesComponent,
    InvoiceEntryComponent,
    InvoicPrintComponent,
    DailyExpanseCreatePageComponent,
    ProductEntryCreatePageComponent,
    PaymentComponent,
    DailyIncomeComponent,
    ReportComponent,
    MonthlyIncomeDueComponent
    
  ],
  imports: [
   
    HttpClientModule,
    CommonModule,
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NgxEchartsModule,
    NbInputModule,
    NbTreeGridModule,
    Ng2SmartTableModule, 
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbCheckboxModule,
    NbPopoverModule,
    NbTooltipModule,
    //metarial
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    DataTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSortModule,
    MatSelectModule,
    
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxPrintModule, 
    NbDatepickerModule,
    MatMomentDateModule,
    MatAutocompleteModule
  ],
  providers:[
    MatDialogService,AngularFireModule,AngularFireDatabaseModule,AngularFireAuthModule
  ],
  entryComponents:[
    AddInitialOrderComponent,AddCompanyComponent,
    MatConfirmDialogComponent,EditInitialOrderComponent
  ]
})
export class MerchandizerModuleModule { }

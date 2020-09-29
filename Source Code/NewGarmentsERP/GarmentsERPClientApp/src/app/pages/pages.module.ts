import { NgModule } from '@angular/core';
import {
   MatCheckboxModule, MatNativeDateModule,
   MatDatepickerModule, MatSelectModule, MatSortModule, 
   MatDialogModule, MatSnackBarModule, MatPaginatorModule,
    MatIconModule, MatTableModule, MatButtonModule, 
    MatInputModule, MatFormFieldModule 
  } from '@angular/material';
import { NbMenuModule, NbDatepickerModule, NbCardModule, NbUserModule, NbButtonModule, NbTabsetModule, NbActionsModule, NbRadioModule, NbSelectModule, NbListModule, NbIconModule, NbInputModule, NbTreeGridModule, NbDialogModule, NbWindowModule, NbCheckboxModule, NbPopoverModule, NbTooltipModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import{MerchandizerModuleModule} from'./merchandizer-module/merchandizer-module.module';
import{MerchandizerRoutingModule} from'./merchandizer-module/merchandizer-routing.module';
import { LibraryModule } from './libraryModule/library.module';
import { UserMappingComponent } from './user-mapping/user-mapping.component';
import { AddUserMappingComponent } from './user-mapping/add-user-mapping/add-user-mapping.component';
import { EditUserMappingComponent } from './user-mapping/edit-user-mapping/edit-user-mapping.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgKnifeModule } from 'ng-knife';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from 'angular5-data-table';
import { ErpImagesComponent } from './Shared/erp-images/erp-images.component';
import { PageobjectcreatorComponent } from './Shared/pageobjectcreator/pageobjectcreator.component';
import { ErpFileComponent } from './Shared/erp-file/erp-file.component';



@NgModule({
  
  declarations: [
     PagesComponent,
     UserMappingComponent,
     AddUserMappingComponent,
     EditUserMappingComponent,
     ErpImagesComponent,
     PageobjectcreatorComponent,
     ErpFileComponent,
     
     
     
  
    
  ],
  imports: [
    //  BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      CommonModule,
      ECommerceModule,
      PagesRoutingModule,
      MiscellaneousModule,
      MerchandizerRoutingModule,
      MerchandizerModuleModule,
      DashboardModule,
      LibraryModule,
      NbMenuModule,
      MatCheckboxModule,
      HttpClientModule,
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
  
      ScrollingModule,
      NbDatepickerModule,
      NgMultiSelectDropDownModule.forRoot(),
      NgKnifeModule
      
    ]
 
})
export class PagesModule {
}

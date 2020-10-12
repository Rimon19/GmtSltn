import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommercialRoutingModule } from './commercial-routing.module';

import { PiDetailsComponent } from './pi-details/pi-details.component';
import { AddPiDetailsComponent } from './pi-details/add-pi-details/add-pi-details.component';
import { EditPiDetailsComponent } from './pi-details/edit-pi-details/edit-pi-details.component';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatSelectModule, MatSnackBarModule, MatSortModule, MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { ThemeModule } from '../../@theme/theme.module';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbListModule, NbPopoverModule, NbRadioModule, NbSelectModule, NbTabsetModule, NbTooltipModule, NbTreeGridModule, NbUserModule, NbWindowModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from 'angular5-data-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgKnifeModule } from 'ng-knife';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { YarnPurchaseRequisitionDetailsComponent } from './yarn-purchase-requisition/yarn-purchase-requisition-details/yarn-purchase-requisition-details.component';
import { AddYarnPurchaseRequisitionComponent } from './yarn-purchase-requisition/add-yarn-purchase-requisition/add-yarn-purchase-requisition.component';
import { EditYarnPurchaseRequisitionComponent } from './yarn-purchase-requisition/edit-yarn-purchase-requisition/edit-yarn-purchase-requisition.component';
import { YarnPurchaseRequisitionComponent } from './yarn-purchase-requisition/yarn-purchase-requisition.component';

@NgModule({
  declarations: [YarnPurchaseRequisitionComponent,
     PiDetailsComponent,
      AddPiDetailsComponent, 
      EditPiDetailsComponent, YarnPurchaseRequisitionDetailsComponent, AddYarnPurchaseRequisitionComponent, EditYarnPurchaseRequisitionComponent],
  imports: [
    CommonModule,
    CommercialRoutingModule ,
   
  
  
    MatCheckboxModule,
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

    ScrollingModule,
    NbDatepickerModule,

    NgKnifeModule,
    NgMultiSelectDropDownModule.forRoot(),
  ]
})
export class CommercialModule { }

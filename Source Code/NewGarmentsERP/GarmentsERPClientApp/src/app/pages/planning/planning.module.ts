import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningRoutingModule } from './planning-routing.module';
import { CutandLayEntryComponent } from './cutting-plan/cutand-lay-entry/cutand-lay-entry.component';
import { CutandLayEntryRollWiseComponent } from './cutting-plan/cutand-lay-entry-roll-wise/cutand-lay-entry-roll-wise.component';
import { CutandLayEntryRatioWiseComponent } from './cutting-plan/cutand-lay-entry-ratio-wise/cutand-lay-entry-ratio-wise.component';
import { CreateCutandLayEntryComponent } from './cutting-plan/cutand-lay-entry/create-cutand-lay-entry/create-cutand-lay-entry.component';
import { EditCutandLayEntryComponent } from './cutting-plan/cutand-lay-entry/edit-cutand-lay-entry/edit-cutand-lay-entry.component';
import { MatCheckboxModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatIconModule, MatPaginatorModule, MatDialogModule, MatSnackBarModule, MatSortModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbUserModule, NbButtonModule, NbTabsetModule, NbActionsModule, NbRadioModule, NbSelectModule, NbListModule, NbIconModule, NbInputModule, NbTreeGridModule, NbDialogModule, NbWindowModule, NbCheckboxModule, NbPopoverModule, NbTooltipModule, NbDatepickerModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from 'angular5-data-table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgKnifeModule } from 'ng-knife';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AddSewingOperationForWorkStudyComponent } from './work-study/SewingOperation/add-sewing-operation-for-work-study/add-sewing-operation-for-work-study.component';
import { OperationBulletinComponent } from './work-study/operation-bulletin/operation-bulletin.component';
import { SewingOperationForWorkStudyComponent } from './work-study/SewingOperation/sewing-operation-for-work-study/sewing-operation-for-work-study.component';

import { CreateCutandLayEntryRollWiseComponent } from './cutting-plan/cutand-lay-entry-roll-wise/create-cutand-lay-entry-roll-wise/create-cutand-lay-entry-roll-wise.component';
import { EditCutandLayEntryRollWiseComponent } from './cutting-plan/cutand-lay-entry-roll-wise/edit-cutand-lay-entry-roll-wise/edit-cutand-lay-entry-roll-wise.component';
import { CreateCutandLayEntryRatioWiseComponent } from './cutting-plan/cutand-lay-entry-ratio-wise/create-cutand-lay-entry-ratio-wise/create-cutand-lay-entry-ratio-wise.component';
import { EditCutandLayEntryRatioWiseComponent } from './cutting-plan/cutand-lay-entry-ratio-wise/edit-cutand-lay-entry-ratio-wise/edit-cutand-lay-entry-ratio-wise.component';
import { EditSewingOperationForWorkStudyComponent } from './work-study/SewingOperation/edit-sewing-operation-for-work-study/edit-sewing-operation-for-work-study.component';
import { EfficiencyPercentageSlabComponent } from './work-study/efficiency-percentage-slab/efficiency-percentage-slab.component';
import { CutandLayEntryRatioWise2Component } from './cutting-plan/cutand-lay-entry-ratio-wise2/cutand-lay-entry-ratio-wise2.component';
import { CreateCutandLayEntryRatioWise2Component } from './cutting-plan/cutand-lay-entry-ratio-wise2/create-cutand-lay-entry-ratio-wise2/create-cutand-lay-entry-ratio-wise2.component';
import { EditCutandLayEntryRatioWise2Component } from './cutting-plan/cutand-lay-entry-ratio-wise2/edit-cutand-lay-entry-ratio-wise2/edit-cutand-lay-entry-ratio-wise2.component';
import { CutandLayEntryRatioWiseUrmiComponent } from './cutting-plan/cutand-lay-entry-ratio-wise-urmi/cutand-lay-entry-ratio-wise-urmi.component';
import { CreateCutandLayEntryRatioWiseUrmiComponent } from './cutting-plan/cutand-lay-entry-ratio-wise-urmi/create-cutand-lay-entry-ratio-wise-urmi/create-cutand-lay-entry-ratio-wise-urmi.component';
import { EditCutandLayEntryRatioWiseUrmiComponent } from './cutting-plan/cutand-lay-entry-ratio-wise-urmi/edit-cutand-lay-entry-ratio-wise-urmi/edit-cutand-lay-entry-ratio-wise-urmi.component';







@NgModule({
  declarations:
   [CutandLayEntryComponent,
     CutandLayEntryRollWiseComponent, 
     CutandLayEntryRatioWiseComponent, 
     CreateCutandLayEntryComponent, 
     EditCutandLayEntryComponent, 
     SewingOperationForWorkStudyComponent,
      AddSewingOperationForWorkStudyComponent,
       OperationBulletinComponent,
       EditSewingOperationForWorkStudyComponent,
        CreateCutandLayEntryRollWiseComponent,
         EditCutandLayEntryRollWiseComponent, 
         CreateCutandLayEntryRatioWiseComponent,
        EditCutandLayEntryRatioWiseComponent,
        CutandLayEntryRatioWise2Component,
        CreateCutandLayEntryRatioWise2Component,
        EditCutandLayEntryRatioWise2Component,
        CutandLayEntryRatioWiseUrmiComponent,
        CreateCutandLayEntryRatioWiseUrmiComponent,
        EditCutandLayEntryRatioWiseUrmiComponent,
 
       EditSewingOperationForWorkStudyComponent,
       EfficiencyPercentageSlabComponent
       ],
  imports: [
  CommonModule,
    PlanningRoutingModule,
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
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFireDatabaseModule,
   // AngularFireAuthModule,
    NgKnifeModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class PlanningModule { }

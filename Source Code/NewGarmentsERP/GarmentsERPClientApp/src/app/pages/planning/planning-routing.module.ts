import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CutandLayEntryComponent } from './cutting-plan/cutand-lay-entry/cutand-lay-entry.component';
import { CreateCutandLayEntryComponent } from './cutting-plan/cutand-lay-entry/create-cutand-lay-entry/create-cutand-lay-entry.component';
import { EditCutandLayEntryComponent } from './cutting-plan/cutand-lay-entry/edit-cutand-lay-entry/edit-cutand-lay-entry.component';
import { SewingOperationForWorkStudyComponent } from './work-study/SewingOperation/sewing-operation-for-work-study/sewing-operation-for-work-study.component';
import { AddSewingOperationForWorkStudyComponent } from './work-study/SewingOperation/add-sewing-operation-for-work-study/add-sewing-operation-for-work-study.component';
import { EditSewingOperationForWorkStudyComponent } from './work-study/SewingOperation/edit-sewing-operation-for-work-study/edit-sewing-operation-for-work-study.component';
import { EfficiencyPercentageSlabComponent } from './work-study/efficiency-percentage-slab/efficiency-percentage-slab.component';
import { CutandLayEntryRollWiseComponent } from './cutting-plan/cutand-lay-entry-roll-wise/cutand-lay-entry-roll-wise.component';
import { CreateCutandLayEntryRollWiseComponent } from './cutting-plan/cutand-lay-entry-roll-wise/create-cutand-lay-entry-roll-wise/create-cutand-lay-entry-roll-wise.component';
import { EditCutandLayEntryRollWiseComponent } from './cutting-plan/cutand-lay-entry-roll-wise/edit-cutand-lay-entry-roll-wise/edit-cutand-lay-entry-roll-wise.component';
import { CutandLayEntryRatioWiseComponent } from './cutting-plan/cutand-lay-entry-ratio-wise/cutand-lay-entry-ratio-wise.component';
import { CreateCutandLayEntryRatioWiseComponent } from './cutting-plan/cutand-lay-entry-ratio-wise/create-cutand-lay-entry-ratio-wise/create-cutand-lay-entry-ratio-wise.component';
import { EditCutandLayEntryRatioWiseComponent } from './cutting-plan/cutand-lay-entry-ratio-wise/edit-cutand-lay-entry-ratio-wise/edit-cutand-lay-entry-ratio-wise.component';
import { CutandLayEntryRatioWise2Component } from './cutting-plan/cutand-lay-entry-ratio-wise2/cutand-lay-entry-ratio-wise2.component';
import { CreateCutandLayEntryRatioWise2Component } from './cutting-plan/cutand-lay-entry-ratio-wise2/create-cutand-lay-entry-ratio-wise2/create-cutand-lay-entry-ratio-wise2.component';
import { EditCutandLayEntryRatioWise2Component } from './cutting-plan/cutand-lay-entry-ratio-wise2/edit-cutand-lay-entry-ratio-wise2/edit-cutand-lay-entry-ratio-wise2.component';
import { CutandLayEntryRatioWiseUrmiComponent } from './cutting-plan/cutand-lay-entry-ratio-wise-urmi/cutand-lay-entry-ratio-wise-urmi.component';
import { CreateCutandLayEntryRatioWiseUrmiComponent } from './cutting-plan/cutand-lay-entry-ratio-wise-urmi/create-cutand-lay-entry-ratio-wise-urmi/create-cutand-lay-entry-ratio-wise-urmi.component';
import { EditCutandLayEntryRatioWiseUrmiComponent } from './cutting-plan/cutand-lay-entry-ratio-wise-urmi/edit-cutand-lay-entry-ratio-wise-urmi/edit-cutand-lay-entry-ratio-wise-urmi.component';

const routes: Routes = [
  {path : 'cut-and-lay-entry', component : CutandLayEntryComponent},
  {path : 'create-cut-and-lay-entry', component : CreateCutandLayEntryComponent},
  {path : 'edit-cut-and-lay-entry/:id', component : EditCutandLayEntryComponent},

  {path : 'cut-and-lay-entry-roll-wise', component : CutandLayEntryRollWiseComponent},
  {path : 'create-cut-and-lay-entry-roll-wise', component : CreateCutandLayEntryRollWiseComponent},
  {path : 'edit-cut-and-lay-entry-roll-wise/:id', component : EditCutandLayEntryRollWiseComponent},

  {path : 'cut-and-lay-entry-ratio-wise', component : CutandLayEntryRatioWiseComponent},
  {path : 'create-cut-and-lay-entry-ratio-wise', component : CreateCutandLayEntryRatioWiseComponent},
  {path : 'edit-cut-and-lay-entry-ratio-wise/:id', component : EditCutandLayEntryRatioWiseComponent},
  

  {path : 'cut-and-lay-entry-ratio-wise2', component : CutandLayEntryRatioWise2Component},
  {path : 'create-cut-and-lay-entry-ratio-wise2', component : CreateCutandLayEntryRatioWise2Component},
  {path : 'edit-cut-and-lay-entry-ratio-wise2/:id', component : EditCutandLayEntryRatioWise2Component},
  

  {path : 'cut-and-lay-entry-ratio-wise-urmi', component : CutandLayEntryRatioWiseUrmiComponent},
  {path : 'create-cut-and-lay-entry-ratio-wise-urmi', component : CreateCutandLayEntryRatioWiseUrmiComponent},
  {path : 'edit-cut-and-lay-entry-ratio-wise-urmi/:id', component : EditCutandLayEntryRatioWiseUrmiComponent},
  

  {path : 'sewing-operation-For-Work-Study', component :SewingOperationForWorkStudyComponent },
  {path : 'add-sewing-operation-For-Work-Study', component :AddSewingOperationForWorkStudyComponent },
  {path : 'edit-sewing-operation-For-Work-Study/:id', component :EditSewingOperationForWorkStudyComponent },
  {path : 'efficiency-percentage-slab', component :EfficiencyPercentageSlabComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningRoutingModule { 
  
}

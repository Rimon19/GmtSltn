import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPiDetailsComponent } from './pi-details/add-pi-details/add-pi-details.component';
import { EditPiDetailsComponent } from './pi-details/edit-pi-details/edit-pi-details.component';
import { PiDetailsComponent } from './pi-details/pi-details.component';

import { AddYarnPurchaseRequisitionComponent } from './yarn-purchase-requisition/add-yarn-purchase-requisition/add-yarn-purchase-requisition.component';
import { EditYarnPurchaseRequisitionComponent } from './yarn-purchase-requisition/edit-yarn-purchase-requisition/edit-yarn-purchase-requisition.component';
import { YarnPurchaseRequisitionDetailsComponent } from './yarn-purchase-requisition/yarn-purchase-requisition-details/yarn-purchase-requisition-details.component';
import { YarnPurchaseRequisitionComponent } from './yarn-purchase-requisition/yarn-purchase-requisition.component';

const routes: Routes = [

  {
    path:'PiDetails',
    component: PiDetailsComponent,
  },
  {
    path: "Add-PiDetails",
    component: AddPiDetailsComponent,
  },
  {
    path: "Edit-PiDetails/:id",
    component: EditPiDetailsComponent,
  },
  {
    path:'YarnPurchaseRequisition',
    component: YarnPurchaseRequisitionComponent,
  },
  {
    path: "Add-YarnPurchaseRequisition",
    component: AddYarnPurchaseRequisitionComponent,
  },
  {
    path: "Edit-YarnPurchaseRequisition/:id",
    component: EditYarnPurchaseRequisitionComponent,
  },

  {
    path: "YarnPurchaseRequisition-Details/:masterId",
    component: YarnPurchaseRequisitionDetailsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialRoutingModule { }

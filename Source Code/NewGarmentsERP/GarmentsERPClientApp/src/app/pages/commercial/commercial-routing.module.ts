import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YarnPurchaseRequisitionComponent } from './PurchaseOrder/yarn-purchase-requisition/yarn-purchase-requisition.component';

const routes: Routes = [
  {
    path:'yarn-purchase-requisition',component:YarnPurchaseRequisitionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialRoutingModule { }

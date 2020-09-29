import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommercialRoutingModule } from './commercial-routing.module';
import { YarnPurchaseRequisitionComponent } from './PurchaseOrder/yarn-purchase-requisition/yarn-purchase-requisition.component';

@NgModule({
  declarations: [YarnPurchaseRequisitionComponent],
  imports: [
    CommonModule,
    CommercialRoutingModule
  ]
})
export class CommercialModule { }

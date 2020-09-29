import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData, InitorderData } from '../../../../@core/data/smart-table';
import { MatDialogConfig } from '@angular/material/dialog/typings/dialog-config';
import { MatDialog } from '@angular/material';
import { AddInitialOrderComponent } from '../add-initial-order/add-initial-order.component';
import { NbDialogService, NbDialogRef } from '@nebular/theme';
import { ShowcaseDialogComponent } from '../../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import { company } from '../../../../@core/data/company';
import { CompanyService } from '../../../../@core/mock/company.service';
import { Observable } from 'rxjs';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FetchInitialOrderService } from '../../../../@core/mock/fetch-initial-order.service';
import { OrderInfo } from '../../../../@core/data/marchanzider-model/order-info.model';
@Component({
  selector: 'ngx-show-initial-order',
  templateUrl: './show-initial-order.component.html',
  styleUrls: ['./show-initial-order.component.scss']
})
export class ShowInitialOrderComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private fetchInitialOrderService:FetchInitialOrderService,
    private companyService: CompanyService) {

    } 
ngOnInit(){

}
}
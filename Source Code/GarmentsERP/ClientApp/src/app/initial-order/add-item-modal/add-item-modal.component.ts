
import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { NgForm } from '@angular/forms';
import { AddItemModalProparty } from '../../shared/add-item-modal-proparty.model';
import { initialordersService } from '../../services/initialorders.service';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.css']
})
export class AddItemModalComponent implements OnInit {
  formData:AddItemModalProparty;
  initialitemList: AddItemModalProparty[];
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddItemModalComponent>,
    private initialordersService: initialordersService)
    { }

  ngOnInit() {
    //this.initialordersService.getAddItemModalProparty().then(res => this.initialitemList = res as AddItemModalProparty[]);
    //if (this.data.orderItemIndex == null)
    //{
    //  this.formData = {
    //    OrderNo: 0,
    //    JobNo: '',
    //    CompanyId: 0,
    //    CompanyName: '',
    //    LocationId: 0,
    //    LocationName: '',
    //    BuyerId: 0,
    //    BuyerName: '',
    //    StyleRef: '',
    //    StyleDescription: '',
    //    ProdDeptId: 0,
    //    ProdDeptName: '',
    //    SubDeptId: 0,
    //    SubDeptName: '',
    //    CurrencyId: 0,
    //    RegionId: 0,
    //    RegionName: '',
    //    ProductCatId: 0,
    //    ProductCatName: '',
    //    TeamLeaderId: 0,
    //    TeamLeaderName: '',
    //    DealingMerchantId: 0,
    //    DealingMerchantName: '',
    //    BhMerchant: '',
    //    Remarks: '',
    //    ShipmentModeId: 0,
    //    ShipmentModeName: '',
    //    OrderUomId: 0,
    //    OrderUomName: '',
    //    Smv: 0,
    //    PackingId: 0,
    //    PackingName: 0,
    //    SeasonId: 0,
    //    SeasonName: 0,
    //    AgentId: 0,
    //    AgentName: '',
    //    UserId: 0,
    //    UserName: 0,
    //    RepeatNoJob: 0,
    //    OrderNumber: 0,
    //    OrderImage: null

    //  }
    //}
    //else
    //  this.formData = Object.assign({}, this.initialordersService.initialitemList[this.data.orderItemIndex]);
   
  }
  onSubmit(form: NgForm) {
    
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NbDialogRef } from '@nebular/theme';
import { InitorderData } from '../../../../@core/data/smart-table';
import { NgForm } from '@angular/forms';
import { SmartTableService } from '../../../../@core/mock/smart-table.service';
import { LocationService } from '../../../../@core/mock/location.service';
import { BuyerService } from '../../../../@core/mock/buyer.service';
import { ItemsService } from '../../../../@core/mock/items.service';
import { ProductionDeptInfoesService } from '../../../../@core/mock/production-dept-infoes.service';

@Component({
  selector: 'ngx-add-initial-order',
  templateUrl: './add-initial-order.component.html',
  styleUrls: ['./add-initial-order.component.scss']
})
export class AddInitialOrderComponent implements OnInit {

  
  InitorderData = <InitorderData> {
  }

  constructor(protected ref: NbDialogRef<AddInitialOrderComponent>,
    private smartTableService:SmartTableService,
    private locationService:LocationService,
    private buyerService:BuyerService,
    private itemsService:ItemsService,
    private productionDeptInfoesService:ProductionDeptInfoesService) { }

  ngOnInit() {
    console.log(this.InitorderData);
    this.companydropdownRefresh();
    this.locationdropdownRefresh();
    this.buyerdropdownRefresh();
    this.itemsdropdownRefresh();
    this.ProductionDeptInfoesdropdownRefresh();
  }
  dismiss() {
    this.ref.close();
  }
  save(obj){
    
    console.log(obj.orderAutoId);
    //this.InitorderData;
     //this.ref.close();
    
  }
  
  onSubmit(form:NgForm){
    this.smartTableService.addInitialOrder(form.value).subscribe(res=>{});
  }
  //companydropdown
  public companyListItems: Array<string> = [];
  companydropdownRefresh(){
     this.smartTableService.getCompanyDropDownValues().
     subscribe(data=>{
      this.companyListItems=data;
      data.forEach(element => {
        this.companyListItems.push(element["companyName"]);
      });
     });
     console.log(this.companyListItems);
  }

  //locationdropdown
  public locationListItems: Array<string> = [];
  locationdropdownRefresh(){
    this.locationService.getAllLocations().
    subscribe(data=>{
     //console.log(data);
     data.forEach(element => {
       this.locationListItems.push(element["locationName"]);
     });
    });
 }
   //buyerdropdown
   public buyerListItems: Array<string> = [];
   buyerdropdownRefresh(){
     this.buyerService.getAllBuyer().
     subscribe(data=>{
      //console.log(data);
      data.forEach(element => {
        this.buyerListItems.push(element["buyerName"]);
      });
     });
  }
     //itemsdropdown
     public itemsListItems: Array<string> = [];
     itemsdropdownRefresh(){
       this.itemsService.getitemsDropDownValues().
       subscribe(data=>{
        //console.log(data);
        data.forEach(element => {
          this.itemsListItems.push(element["item"]);
        });
       });
    }
    //ProductionDeptInfoesDDL
    public ProductionDeptInfoesListItems: Array<string> = [];
    ProductionDeptInfoesdropdownRefresh(){
      this.productionDeptInfoesService.getProductionDeptInfoesDDL().
      subscribe(data=>{
       //console.log(data);
       data.forEach(element => {
         this.ProductionDeptInfoesListItems.push(element["prodDeptName"]);
       });
      });
   }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.smartTableService.initialorderFormData = {
      orderAutoId:0,
      companyId: 0,
      locationId:0 ,
      buyerId:0 ,
      styleRef:'',
      styleDescription:'' ,
      prodDeptId: 0,
      subDeptId: 0,
      currencyId: 0,
      regionId: 0,
      productCatId:0 ,
      teamLeaderId:0,
      dealingMerchantId:0 ,
      bhMerchant:'' ,
      remarks: '',
      shipmentModeId:0 ,
      orderUomId: 0,
      smv:'',
      packingId:0 ,
      seasonId: 0,
      agentId: 0,
      userId: 0,
      imagefile:null,
      jobNo: '',
      cmpName:'',
      companyName:''
      
    }
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Tostr } from '../../../@core/data/tostr.model';
import { SampleRequisitionWithBookingService } from '../../../@core/mock/marchandizer/sample-requisition-with-booking.service';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
import { SampleFabricBookingService } from '../../../@core/mock/marchandizer/sample-fabric-booking.service';
import { DatapassingService } from '../../../@core/mock/shared/datapassing.service';
@Component({
  selector: 'ngx-sample-requisition-with-booking',
  templateUrl: './sample-requisition-with-booking.component.html',
  styleUrls: ['./sample-requisition-with-booking.component.scss']
})
export class SampleRequisitionWithBookingComponent implements OnInit {


@ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
dataSource = new MatTableDataSource();
displayedColumns = ['id','requisitionId','sampleStage','requisitionDate','styleRefId','companyNameId','locationId','buyerNameId','seasonId','productDept','dealingMerchantId','agentNameId','buyerRef','bHMerchant','estShipDate','remarksDesc','readyToApproved','materialDeliveryDate',];
Tostr=new Tostr();
filterValues:any={};
  filterSelectObj  = [
    {
        name: 'Requisition Id',
        columnProp: 'requisitionId'
      },{
        name: 'Sample Stage',
        columnProp: 'sampleStage'
      },{
        name: 'Requisition Date',
        columnProp: 'requisitionDate'
      },{
        name: 'Style Ref',
        columnProp: 'styleRefId'
      },{
        name: 'Company Name',
        columnProp: 'companyNameId'
      },{
        name: 'Location',
        columnProp: 'locationId'
      },{
        name: 'Buyer Name',
        columnProp:'buyerNameId'
      },{
        name: 'Season',
        columnProp:'seasonId'
      },{
        name: 'ProductDept',
        columnProp: 'productDept'
      },{
        name: 'Dealing Merchant',
        columnProp: 'dealingMerchantId'
      }, 
  ]
constructor(
  private sampleRequisitionWithBookingService:SampleRequisitionWithBookingService,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
   private router:Router,
   private sampleFabricBookingService:SampleFabricBookingService,
   private datapassingService:DatapassingService,
   private dropdownValueService:DropdownValueService
   ) { }

ngOnInit() {

this.dropdownValueService.getSampleStage();
this.dropdownValueService.getCompany();
this.dropdownValueService.getLocation();
this.dropdownValueService.getBuyers();
//this.dropdownValueService.getBuyerWiseSeason(0);
this.dropdownValueService.getProductDept();
this.dropdownValueService.getDealingMerchant();
this.dropdownValueService.getAgents();
this.dropdownValueService.getYesNo();
this.dropdownValueService.getBuyers();
}

applyFilter(filterValue: string) {
 
  filterValue = filterValue.trim(); 
  filterValue = filterValue.toLowerCase(); 
  this.dataSource.filter = filterValue;
}

redirectToAddPage(){
  this.router.navigate(["/pages/add-sample-requisition-withBooking"]);
 
}
redirectToEditPage(element){
  this.router.navigate(["/pages/edit-sample-requisition-withBooking/",element.id]);  
}

onDelete(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.sampleRequisitionWithBookingService.delete(element.id).subscribe(res=>{
                  this.refresList();
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresList(){    
  this.sampleRequisitionWithBookingService.getAll().subscribe(items=>{
    
    items.forEach(element => {
    
      console.log(element);
        if(element.companyNameId!=0){
        let company_Name=this.dropdownValueService.companyList
        .find(f=>f.compID==element.companyNameId) && this.dropdownValueService.companyList
        .find(f=>f.compID==element.companyNameId).company_Name;
            element.companyNameId=company_Name;
        }else{
          element.companyNameId='';
        } 

      
        if(element.locationId!=0){
        let location_Name=this.dropdownValueService.locationList
        .find(f=>f.locationId==element.locationId) && this.dropdownValueService.locationList
        .find(f=>f.locationId==element.locationId).location_Name;
            element.locationId=location_Name;
        }else{
          element.locationId='';
        } 

      
        if(element.buyerNameId!=0){
        let contactName=this.dropdownValueService.buyerList
        .find(f=>f.id==element.buyerNameId) && this.dropdownValueService.buyerList
        .find(f=>f.id==element.buyerNameId).contactName;
            element.buyerNameId=contactName;
        }else{
          element.buyerNameId='';
        } 

      
        // if(element.seasonId!=0){
        // let seasonName=this.dropdownValueService.buyerWiseSeasonList
        // .find(f=>f.id==element.seasonId).seasonName;
        //     element.seasonId=seasonName;
        // }else{
        //   element.seasonId='';
        // } 

      
        if(element.dealingMerchantId!=0){
        let userId=this.dropdownValueService.dealiningMarchandList
        .find(f=>f.id==element.dealingMerchantId) && this.dropdownValueService.dealiningMarchandList
        .find(f=>f.id==element.dealingMerchantId).userId;
            element.dealingMerchantId=userId;
        }else{
          element.dealingMerchantId='';
        } 

      
        if(element.agentNameId!=0){
        let agent_Name=this.dropdownValueService.agentList
        .find(f=>f.agentID==element.agentNameId) && this.dropdownValueService.agentList
        .find(f=>f.agentID==element.agentNameId).agent_Name;
            element.agentNameId=agent_Name;
        }else{
          element.agentNameId='';
        } 

  });
    
    this.dataSource=new MatTableDataSource(items);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  })
 
}
filterChange(filter, event) {
  //let filterValues = {}
  this.dataSource.filterPredicate = this.createFilter(); 
  this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
  this.dataSource.filter = JSON.stringify(this.filterValues)
}

createFilter() {
  let filterFunction = function (data: any, filter: string): boolean {
    let searchTerms = JSON.parse(filter);
    let isFilterSet = false;
    for (const col in searchTerms) {
      if (searchTerms[col].toString() !== '') {
        isFilterSet = true;
      } else {
        delete searchTerms[col];
      }
    }

    let nameSearch = () => {
      let found = false;
      if (isFilterSet) {
        for (const col in searchTerms) {
          searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
            if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
              found = true
            }
          });
        }
        return found
      } else {
        return true;
      }
    }
    return nameSearch()
  }
  return filterFunction
}

resetFilters() {
  this.filterValues = {}

  this.filterSelectObj.forEach((value:any, key) => {
    value.modelValue = undefined;
  })
  this.dataSource.filter = "";
  this.refresList();
}   

onDetails(id){
  this.sampleFabricBookingService.getAll().subscribe(data=>{
    this.datapassingService.setValue(id);
      let obj=data.find(f=>f.sampleRequisitionId==id)
      if(obj==undefined){
         console.log('save cakk')
         this.router.navigate(["/pages/add-sample-fabric-booking"]);
        }else{
         console.log('edit cakk');
         this.router.navigate(["/pages/edit-sample-fabric-booking/",id]);  
        }
  
      
  })
  
  
    }
}

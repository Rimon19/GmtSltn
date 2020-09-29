import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Tostr } from '../../../@core/data/tostr.model';
import { SampleFabricBookingService } from '../../../@core/mock/marchandizer/sample-fabric-booking.service';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-sample-fabric-booking',
  templateUrl: './sample-fabric-booking.component.html',
  styleUrls: ['./sample-fabric-booking.component.scss']
})
export class SampleFabricBookingComponent implements OnInit {
@ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
dataSource = new MatTableDataSource();
displayedColumns = ['id','bookingNo','bookingDate','styleDesc','currencyId','exchangeRate','attention','payMode','supplierNameId','readyToApproved','teamLeader','dealingMerchant','fabricSource','source','buyerReqNo','revise','file',];
Tostr=new Tostr();
filterValues:any={};
  filterSelectObj  = [
    {
        name: 'Booking No',
        columnProp: 'bookingNo'
      },{
        name: 'Booking Date',
        columnProp: 'bookingDate'
      },{
        name: 'Pay Mode',
        columnProp: 'payMode'
      }, 
  ]
constructor(private sampleFabricBookingService:SampleFabricBookingService,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
   private router:Router,
   private dropdownValueService:DropdownValueService
   ) { }

ngOnInit() {

this.dropdownValueService.getCurrency();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getSuppliers();
this.dropdownValueService.getYesNo();
this.dropdownValueService.getTeamleaders();
this.dropdownValueService.getDealingMerchant();
this.dropdownValueService.getfabricSourceList();
this.dropdownValueService.getSource();

this.refresList();
}

applyFilter(filterValue: string) {
 
  filterValue = filterValue.trim(); 
  filterValue = filterValue.toLowerCase(); 
  this.dataSource.filter = filterValue;
}

redirectToAddPage(){
  this.router.navigate(["/pages/sample-requisition-withBooking"]);
 
}
redirectToEditPage(element){
  this.router.navigate(["/pages/sample-requisition-withBooking/",element.id]);  
}

onDelete(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.sampleFabricBookingService.delete(element.id).subscribe(res=>{
                  this.refresList();
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresList(){    
  this.sampleFabricBookingService.getAll().subscribe(items=>{
    
    items.forEach(element => {
    
      
        if(element.currencyId!=0){
        let discountMethodName=this.dropdownValueService.currencyList
        .find(f=>f.id==element.currencyId).discountMethodName;
            element.currencyId=discountMethodName;
        }else{
          element.currencyId='';
        } 

      
        if(element.supplierNameId!=0){
        let supplierName=this.dropdownValueService.subpplierList
        .find(f=>f.id==element.supplierNameId).supplierName;
            element.supplierNameId=supplierName;
        }else{
          element.supplierNameId='';
        } 

      
        if(element.teamLeader!=0){
        let userId=this.dropdownValueService.teamleaderList
        .find(f=>f.id==element.teamLeader).userId;
            element.teamLeader=userId;
        }else{
          element.teamLeader='';
        } 

      
        if(element.dealingMerchant!=0){
        let userId=this.dropdownValueService.dealiningMarchandList
        .find(f=>f.id==element.dealingMerchant).userId;
            element.dealingMerchant=userId;
        }else{
          element.dealingMerchant='';
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

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Tostr } from '../../../@core/data/tostr.model';
import { ServiceBookingForAOPV2Service } from '../../../@core/mock/marchandizer/service-booking-for-aopv2.service';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
@Component({
  selector: 'ngx-service-booking-for-aopv2',
  templateUrl: './service-booking-for-aopv2.component.html',
  styleUrls: ['./service-booking-for-aopv2.component.scss']
})
export class ServiceBookingForAOPV2Component implements OnInit {

@ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
dataSource = new MatTableDataSource();
displayedColumns = ['id','bookingNo','bookingMonth','bookingYear','companyNameId','buyerNameId','currencyId','exchangeRate','bookingDate','deliveryDate','payMode','source','supplierNameId','isShort','attention','level',];
Tostr=new Tostr();
filterValues:any={};
  filterSelectObj  = [
    {
        name: 'Booking No',
        columnProp: 'bookingNo'
      },{
        name: 'Booking Month',
        columnProp: 'bookingMonth'
      },{
        name: 'Booking Year',
        columnProp: 'bookingYear'
      },{
        name: 'Company Name',
        columnProp: 'companyNameId'
      },{
        name: 'Buyer Name',
        columnProp: 'buyerNameId'
      },{
        name: 'Pay Mode',
        columnProp: 'payMode'
      },{
        name: 'Supplier Name',
        columnProp: 'supplierNameId'
      }, 
  ]
constructor(private serviceBookingForAOPV2Service:ServiceBookingForAOPV2Service,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
   private router:Router,
   private dropdownValueService:DropdownValueService
   ) { }

ngOnInit() {

this.dropdownValueService.getMonth();
this.dropdownValueService.getYear();
this.dropdownValueService.getCompany();
this.dropdownValueService.getBuyers();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getSource();
this.dropdownValueService.getSuppliers();
this.dropdownValueService.getYesNo();
this.dropdownValueService.getLevel();

this.refresList();
}

applyFilter(filterValue: string) {
 
  filterValue = filterValue.trim(); 
  filterValue = filterValue.toLowerCase(); 
  this.dataSource.filter = filterValue;
}

redirectToAddPage(){
  this.router.navigate(["/pages/add-service-booking-for-aopv2"]);
 
}
redirectToEditPage(element){
  this.router.navigate(["/pages/edit-service-booking-for-aopv2/",element.id]);  
}

onDelete(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.serviceBookingForAOPV2Service.delete(element.id).subscribe(res=>{
                  this.refresList();
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresList(){    
  this.serviceBookingForAOPV2Service.getAll().subscribe(items=>{
    
    items.forEach(element => {
    
      
        if(element.companyNameId!=0){
        let company_Name=this.dropdownValueService.companyList
        .find(f=>f.compID==element.companyNameId).company_Name;
            element.companyNameId=company_Name;
        }else{
          element.companyNameId='';
        } 

      
        if(element.buyerNameId!=0){
        let contactName=this.dropdownValueService.buyerList
        .find(f=>f.id==element.buyerNameId).contactName;
            element.buyerNameId=contactName;
        }else{
          element.buyerNameId='';
        } 

      
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

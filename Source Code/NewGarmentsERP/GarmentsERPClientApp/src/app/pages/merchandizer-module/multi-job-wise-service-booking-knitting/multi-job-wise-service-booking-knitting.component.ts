import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { MultiJobWiseServiceBookingKnittingService } from '../../../@core/mock/marchandizer/multi-job-wise-service-booking-knitting.service';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
import { DatapassingService } from '../../../@core/mock/shared/datapassing.service';

@Component({
  selector: 'ngx-multi-job-wise-service-booking-knitting',
  templateUrl: './multi-job-wise-service-booking-knitting.component.html',
  styleUrls: ['./multi-job-wise-service-booking-knitting.component.scss']
})
export class MultiJobWiseServiceBookingKnittingComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id','bookingNo','monthId','yearId','buyerProfileId','currencyId','exchangeRate','bookingDate','deliveryDate','payMode','source','supplierProfileId','readyToApproved','attention','remark',];
  Tostr=new Tostr();
  filterValues:any={};
    filterSelectObj  = [
      {
          name: 'Booking No',
          columnProp: 'bookingNo'
        },{
          name: 'Pay Mode',
          columnProp: 'payMode'
        }, 
    ]
  constructor(private multiJobWiseServiceBookingKnittingService:MultiJobWiseServiceBookingKnittingService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private dropdownValueService:DropdownValueService,
     private datapassingService:DatapassingService
     ) { }
  
  ngOnInit() {
  
  this.dropdownValueService.getMonth();
  this.dropdownValueService.getYear();
  this.dropdownValueService.getBuyers();
  this.dropdownValueService.getCurrency();
  this.dropdownValueService.getPayMode();
  this.dropdownValueService.getSource();
  this.dropdownValueService.getSuppliers();
  this.dropdownValueService.getYesNo();
  
  this.refresList();
  }
  
  onDetails(element){
    this.router.navigate(["/pages/MultiJobWSBKnittingDetails"]);

    this.datapassingService.setValue(element.id);

  }

  applyFilter(filterValue: string) {
   
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  redirectToAddPage(){
    this.router.navigate(["/pages/add-MultiJobWiseServiceBookingKnitting"]);
   
  }
  redirectToEditPage(element){
    this.router.navigate(["/pages/edit-MultiJobWiseServiceBookingKnitting",element.id]);  
  }
  
  onDelete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.multiJobWiseServiceBookingKnittingService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  
  refresList(){    
    this.multiJobWiseServiceBookingKnittingService.getAll().subscribe(items=>{
      
      items.forEach(element => {
      
        
          if(element.monthId!=0){
          let monthName=this.dropdownValueService.monthList
          .find(f=>f.id==element.monthId).monthName;
              element.monthId=monthName;
          }else{
            element.monthId='';
          } 
  
        
          if(element.yearId!=0){
          let year=this.dropdownValueService.yearList
          .find(f=>f.id==element.yearId).year;
              element.yearId=year;
          }else{
            element.yearId='';
          } 
  
        
          if(element.buyerProfileId!=0){
          let contactName=this.dropdownValueService.buyerList
          .find(f=>f.id==element.buyerProfileId).contactName;
              element.buyerProfileId=contactName;
          }else{
            element.buyerProfileId='';
          } 
  
        
          if(element.currencyId!=0){
          let discountMethodName=this.dropdownValueService.currencyList
          .find(f=>f.id==element.currencyId).discountMethodName;
              element.currencyId=discountMethodName;
          }else{
            element.currencyId='';
          } 
  
        
          if(element.supplierProfileId!=0){
          let supplierName=this.dropdownValueService.subpplierList
          .find(f=>f.id==element.supplierProfileId).supplierName;
              element.supplierProfileId=supplierName;
          }else{
            element.supplierProfileId='';
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

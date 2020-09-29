import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { ServiceBookingForKnittingService } from '../../../@core/mock/marchandizer/service-booking-for-knitting.service';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
import { DatapassingService } from '../../../@core/mock/shared/datapassing.service';

@Component({
  selector: 'ngx-service-booking-for-knitting',
  templateUrl: './service-booking-for-knitting.component.html',
  styleUrls: ['./service-booking-for-knitting.component.scss']
})
export class ServiceBookingForKnittingComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id','bookingNo','bookingMonth','bookingYear','orderNo','jobNo','buyerProfileId','currencyId','exchangeRate','bookingDate','deliveryDate','payMode','source','supplierProfileId','attention','readyToApproved',];
  Tostr=new Tostr();
  filterValues:any={};
    filterSelectObj  = [
      {
          name: 'Booking Month',
          columnProp: 'bookingMonth'
        },{
          name: 'Booking Year',
          columnProp: 'bookingYear'
        },{
          name: 'Order No',
          columnProp: 'orderNo'
        },{
          name: 'Pay Mode',
          columnProp: 'payMode'
        }, 
    ]
  constructor(private serviceBookingForKnittingService:ServiceBookingForKnittingService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private dropdownValueService:DropdownValueService,
     private datapassingService:DatapassingService
     ) { 
      this.dropdownValueService.getMonth();    
      this.dropdownValueService.getCurrency();
      this.dropdownValueService.getPayMode();
      this.dropdownValueService.getSource();
      this.dropdownValueService.getSuppliers();
      this.dropdownValueService.getYesNo();     
      this.dropdownValueService.getYear();
      this.dropdownValueService.getBuyers();
     }
  
  ngOnInit() {
 
    
 
  this.refresList();
  }
  
  applyFilter(filterValue: string) {
   
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  onDetails(element){
    this.router.navigate(["/pages/ServiceBookingForKnittingDetail"]);

    this.datapassingService.setValue(element.id);

  }
  
  redirectToAddPage(){
    this.router.navigate(["/pages/add-ServiceBookingForKnitting"]);
   
  }
  redirectToEditPage(element){
    this.router.navigate(["/pages/edit-ServiceBookingForKnitting",element.id]);  
  }
  
  onDelete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.serviceBookingForKnittingService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  
  refresList(){    
    this.serviceBookingForKnittingService.getAll().subscribe(items=>{
      
       
      items.forEach(element => {
          
         //console.log(element.bookingMonth)
          if(element.bookingMonth!=0){
          let monthName=this.dropdownValueService.monthList
          .find(f=>f.id==element.bookingMonth).monthName;
              element.bookingMonth=monthName;
          }else{
            element.bookingMonth='';
          } 
  
        
          if(element.bookingYear!=0){
          let year=this.dropdownValueService.yearList
          .find(f=>f.id==element.bookingYear).year;
              element.bookingYear=year;
          }else{
            element.bookingYear='';
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
          let value=this.dropdownValueService.subpplierList
          .find(f=>f.id==element.supplierProfileId).supplierName;
              element.supplierProfileId=value;
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

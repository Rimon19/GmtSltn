import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { FabricServiceBookingService } from '../../../@core/mock/marchandizer/fabric-service-booking.service';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-fabric-service-booking',
  templateUrl: './fabric-service-booking.component.html',
  styleUrls: ['./fabric-service-booking.component.scss']
})
export class FabricServiceBookingComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id','bookingmonthName','bookingYearName','bookingNo','orderNo','jobNo','buyerName','currencyName','exchangeRate','bookingDate','deliveryDate','payMode','source','supplierName','attention','fabricDescriptionName','processName','sensitivity',];
  Tostr=new Tostr();
  filterValues:any={};
    filterSelectObj  = [
      {
          name: 'Booking Month',
          columnProp: 'bookingmonthName'
        },{
          name: 'Booking Year',
          columnProp: 'bookingYearName'
        },{
          name: 'Pay Mode',
          columnProp: 'payMode'
        },{
          name: 'Supplier Name',
          columnProp: 'supplierName'
        },{
          name: 'Process',
          columnProp: 'processName'
        },{
          name: 'Sensitivity',
          columnProp: 'sensitivity'
        }, 
    ]
  constructor(private fabricServiceBookingService:FabricServiceBookingService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private dropdownValueService:DropdownValueService
     ) { }
  
  ngOnInit() {
  
  this.dropdownValueService.getMonth();
  this.dropdownValueService.getYear();
  this.dropdownValueService.getBuyers();
  this.dropdownValueService.getCurrency();
  this.dropdownValueService.getPayMode();
  this.dropdownValueService.getSource();
  this.dropdownValueService.getFabricDescription();
  this.dropdownValueService.getProductionProcess();
  this.dropdownValueService.getSensitivity();
  
  this.refresList();
  }
  
  applyFilter(filterValue: string) {
   
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  redirectToAddPage(){
    this.router.navigate(["/pages/add-FabricServiceBooking"]);
   
  }
  redirectToEditPage(element){
    this.router.navigate(["/pages/edit-FabricServiceBooking",element.id]);  
  }
  
  onDelete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.fabricServiceBookingService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  
  refresList(){    
    this.fabricServiceBookingService.getAll().subscribe(items=>{
      
      items.forEach(element => {
      
        
        if(element.bookingMonth!=0){
          let monthName=this.dropdownValueService.monthList
          .find(f=>f.monthNumber==element.bookingMonth).monthName;
              element.bookingmonthName=monthName;
          }else{
            element.bookingmonthName='';
          } 
  
        
          if(element.bookingYear!=0){
          let year=this.dropdownValueService.yearList
          .find(f=>f.id==element.bookingYear).year;
              element.bookingYearName=year;
          }else{
            element.bookingYearName='';
          } 
  
        
          if(element.buyerProfileId!=0){
          let contactName=this.dropdownValueService.buyerList
          .find(f=>f.id==element.buyerProfileId).contactName;
              element.buyerName=contactName;
          }else{
            element.buyerName='';
          } 
  
        
          if(element.currencyId!=0){
          let discountMethodName=this.dropdownValueService.currencyList
          .find(f=>f.id==element.currencyId).discountMethodName;
              element.currencyName=discountMethodName;
          }else{
            element.currencyName='';
          } 
  
        
          if(element.fabricDescriptionId!=0){
          let fabNature=this.dropdownValueService.fabricDescriptionList
          .find(f=>f.id==element.fabricDescriptionId).fabNature;
              element.fabricDescriptionName=fabNature;
          }else{
            element.fabricDescriptionName='';
          } 
  
        
          if(element.process!=0){
          let productionProcessName=this.dropdownValueService.productionProcessList
          .find(f=>f.id==element.process).productionProcessName;
              element.processName=productionProcessName;
          }else{
            element.processName='';
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

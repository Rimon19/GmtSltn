
  
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Tostr } from '../../../@core/data/tostr.model';
import { MainFabricBookingV2Service } from '../../../@core/mock/marchandizer/main-fabric-booking-v2.service';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-main-fabric-booking-v2',
  templateUrl: './main-fabric-booking-v2.component.html',
  styleUrls: ['./main-fabric-booking-v2.component.scss']
})
export class MainFabricBookingV2Component implements OnInit {


@ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
dataSource = new MatTableDataSource();
displayedColumns = ['id','bookingNo','buyerProfileId','jobNo','fabricNatureId','fabricSource','bookingDate','orderOrPoNo','deliveryDate','payMode','supplierProfileId','currencyId','exchangeRate','source'];
Tostr=new Tostr();
filterValues:any={};
  filterSelectObj  = [
    {
        name: 'Booking No',
        columnProp: 'bookingNo'
      },{
        name: 'Buyer Name',
        columnProp: 'buyerProfileId'
      },{
        name: 'Job No',
        columnProp: 'jobNo'
      },{
        name: 'Fabric Nature',
        columnProp: 'fabricNatureId'
      },{
        name: 'Fabric Source',
        columnProp: 'fabricSource'
      },{
        name: 'Booking Date',
        columnProp: 'bookingDate'
      },{
        name: 'Order No',
        columnProp: 'orderOrPoNo'
      },{
        name: 'Delivery Date',
        columnProp: 'deliveryDate'
      },{
        name: 'Pay Mode',
        columnProp: 'payMode'
      },{
        name: 'Supplier Name',
        columnProp: 'supplierProfileId'
      }, 
  ]
constructor(private mainFabricBookingV2Service:MainFabricBookingV2Service,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
   private router:Router,
   private dropdownValueService:DropdownValueService
   ) { }

ngOnInit() {

this.dropdownValueService.getBuyers();
this.dropdownValueService.getMonth();
this.dropdownValueService.getYear();
this.dropdownValueService.getFabricNature();
this.dropdownValueService.getUom();
this.dropdownValueService.getfabricSourceList();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getSuppliers();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getSource();
this.dropdownValueService.getYesNo();

this.refresList();
}

applyFilter(filterValue: string) {
 
  filterValue = filterValue.trim(); 
  filterValue = filterValue.toLowerCase(); 
  this.dataSource.filter = filterValue;
}

redirectToAddPage(){
  this.router.navigate(["/pages/add-main-fabric-bookingV2"]);
 
}
redirectToEditPage(element){
  this.router.navigate(["/pages/edit-main-fabric-bookingV2",element.id]);  
}

onDelete(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.mainFabricBookingV2Service.delete(element.id).subscribe(res=>{
                  this.refresList();
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresList(){    
  this.mainFabricBookingV2Service.getAll().subscribe(items=>{
    
    items.forEach(element => {
    
      
        if(element.buyerProfileId!=0){
        let contactName=this.dropdownValueService.buyerList
        .find(f=>f.id==element.buyerProfileId).contactName;
            element.buyerProfileId=contactName;
        }else{
          element.buyerProfileId='';
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

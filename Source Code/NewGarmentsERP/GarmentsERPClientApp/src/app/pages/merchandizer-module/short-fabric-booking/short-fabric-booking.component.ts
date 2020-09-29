
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
import { ShortFabricBookingService } from '../../../@core/mock/marchandizer/short-fabric-booking.service';
import { Tostr } from '../../../@core/data/tostr.model';
import { DatapassingService } from '../../../@core/mock/shared/datapassing.service';
import { ShortFabricBookingDetailsService } from '../../../@core/mock/marchandizer/short-fabric-booking-details.service';
@Component({
  selector: 'ngx-short-fabric-booking',
  templateUrl: './short-fabric-booking.component.html',
  styleUrls: ['./short-fabric-booking.component.scss']
})
export class ShortFabricBookingComponent implements OnInit {

@ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
dataSource = new MatTableDataSource();
displayedColumns = ['id','bookingNo','buyerProfileId','jobNo','fabricNature','fabricSource','bookingDate','orderNo','currency','exchangeRate','source','deliveryDate','payMode','supplierProfileId','readyToApproved','shortBookingType','supplierLocation'];
Tostr=new Tostr();
filterValues:any={};
  filterSelectObj  = [
    {
        name: 'Buyer Name',
        columnProp: 'buyerProfileId'
      },{
        name: 'Job No',
        columnProp: 'jobNo'
      },{
        name: 'Fabric Nature',
        columnProp: 'fabricNature'
      },{
        name: 'Fabric Source',
        columnProp: 'fabricSource'
      },{
        name: 'Booking Date',
        columnProp: 'bookingDate'
      },{
        name: 'Order No',
        columnProp: 'orderNo'
      },{
        name: 'Pay Mode',
        columnProp: 'payMode'
      },{
        name: 'Supplier Name',
        columnProp: 'supplierProfileId'
      }, 
  ]
constructor(private shortFabricBookingService:ShortFabricBookingService,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
   private router:Router,
   private dropdownValueService:DropdownValueService,
   private datapassingService:DatapassingService,
   private shortFabricBookingDetailsService:ShortFabricBookingDetailsService
   ) { }

ngOnInit() {

this.dropdownValueService.getBuyers();
this.dropdownValueService.getMonth();
this.dropdownValueService.getYear();
this.dropdownValueService.getFabricNature();
this.dropdownValueService.getfabricSourceList();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getSource();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getSuppliers ();
this.dropdownValueService.getYesNo();
this.dropdownValueService.getShortFabricBookingType();
this.dropdownValueService.getLocation();

this.refresList();
}

applyFilter(filterValue: string) {
 
  filterValue = filterValue.trim(); 
  filterValue = filterValue.toLowerCase(); 
  this.dataSource.filter = filterValue;
}

redirectToAddPage(){
  this.router.navigate(["/pages/add-short-fabric-booking"]);
 
}
redirectToEditPage(element){
  this.router.navigate(["/pages/edit-short-fabric-booking/",element.id]);  
}

onDelete(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.shortFabricBookingService.delete(element.id).subscribe(res=>{
                  this.refresList();
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresList(){    
  this.shortFabricBookingService.getAll().subscribe(items=>{
    
    items.forEach(element => {
    
      
        if(element.buyerProfileId!=0){
        let contactName=this.dropdownValueService.buyerList
        .find(f=>f.id==element.buyerProfileId).contactName;
            element.buyerProfileId=contactName;
        }else{
          element.buyerProfileId='';
        } 

      
        // if(element.bookingYear!=0){
        // let year=this.dropdownValueService.yearList
        // .find(f=>f.year==element.bookingYear).year;
        //     element.bookingYear=year;
        // }else{
        //   element.bookingYear='';
        // } 

      
        if(element.supplierProfileId!=0){
        let supplierName=this.dropdownValueService.subpplierList
        .find(f=>f.id==element.supplierProfileId).supplierName;
            element.supplierProfileId=supplierName;
        }else{
          element.supplierProfileId='';
        } 

      
        if(element.supplierLocation!=0){
        let location_Name=this.dropdownValueService.locationList
        .find(f=>f.locationId==element.supplierLocation).location_Name;
            element.supplierLocation=location_Name;
        }else{
          element.supplierLocation='';
        } 

  });
    
    this.dataSource=new MatTableDataSource(items);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  });
 
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

onDetails(element){
console.log(element);

//set orginal jobno tested code is below
element.jobNo=1;

this.datapassingService.setValue(element);
this.shortFabricBookingDetailsService.getAll().subscribe(data=>{
  let isShortFabricBookingDetailsExist=data.find(f=>f.shortFabricBookingId==element.id);
  if(isShortFabricBookingDetailsExist==undefined){
    this.router.navigate(["/pages/add-short-fabric-booking-Details/"]);
  }else{
    this.router.navigate(["/pages/edit-short-fabric-booking-Details/",element.id]);  
  }
});

}

}

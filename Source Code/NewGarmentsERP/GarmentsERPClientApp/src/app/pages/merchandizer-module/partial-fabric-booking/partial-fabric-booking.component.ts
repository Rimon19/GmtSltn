import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Tostr } from '../../../@core/data/tostr.model';
import { PartialFabricBookingService } from '../../../@core/mock/marchandizer/partial-fabric-booking.service';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';

@Component({
  selector: 'ngx-partial-fabric-booking',
  templateUrl: './partial-fabric-booking.component.html',
  styleUrls: ['./partial-fabric-booking.component.scss']
})
export class PartialFabricBookingComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
dataSource = new MatTableDataSource();
displayedColumns = ['id','bookingNo','buyerProfileId','fabricNatureId','fabricSource','bookingDate','deliveryDate','payMode','supplierProfileId','currencyId','exchangeRate','source'];
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
constructor(private partialFabricBookingService:PartialFabricBookingService,
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
  this.router.navigate(["/pages/add-partial-fabric-booking"]);
 
}
redirectToEditPage(element){
  this.router.navigate(["/pages/edit-partial-fabric-booking",element.id]);  
}

onDelete(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.partialFabricBookingService.delete(element.id).subscribe(res=>{
                  this.refresList();
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresList(){    
  this.partialFabricBookingService.getAll().subscribe(items=>{
    
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

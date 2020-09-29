import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Tostr } from '../../../@core/data/tostr.model';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
import { ServiceBookingForKnitingandDyeingWithoutOrderDetailsService } from '../../../@core/mock/marchandizer/service-booking-for-knitingand-dyeing-without-order-details.service';

@Component({
  selector: 'ngx-service-booking-for-kniting-and-dyeing-details',
  templateUrl: './service-booking-for-kniting-and-dyeing-details.component.html',
  styleUrls: ['./service-booking-for-kniting-and-dyeing-details.component.scss']
})
export class ServiceBookingForKnitingAndDyeingDetailsComponent implements OnInit {
@ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
dataSource = new MatTableDataSource();
displayedColumns = ['id','fabricSource','fabricDescription','gsm','dia','uom','artworkNo','gmtsColor','wOQty','rate','amount','deliveryStartDate','deliveryEndDate','remarks','process'];
Tostr=new Tostr();
filterValues:any={};
  filterSelectObj  = [
    {
        name: 'Fabric Source',
        columnProp: 'fabricSource'
      },{
        name: 'Fabric Description',
        columnProp: 'fabricDescription'
      },{
        name: 'Rate',
        columnProp: 'rate'
      },{
        name: 'Amount',
        columnProp: 'amount'
      },{
        name: 'Delivery Start Date',
        columnProp: 'deliveryStartDate'
      },{
        name: 'Delivery End Date',
        columnProp: 'deliveryEndDate'
      },{
        name: 'Process',
        columnProp: 'process'
      }, 
  ]
constructor(private serviceBookingForKnitingandDyeingWithoutOrderDetailsService:ServiceBookingForKnitingandDyeingWithoutOrderDetailsService,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
   private router:Router,
   private dropdownValueService:DropdownValueService
   ) { }

ngOnInit() {

this.dropdownValueService.getfabricSourceList();
this.dropdownValueService.getFabricDescription();
this.dropdownValueService.getUom ();
this.dropdownValueService.getAllProductionProcess();

this.refresList();
}

applyFilter(filterValue: string) {
 
  filterValue = filterValue.trim(); 
  filterValue = filterValue.toLowerCase(); 
  this.dataSource.filter = filterValue;
}

redirectToAddPage(){
  this.router.navigate(["/pages/"]);
 
}
redirectToEditPage(element){
  this.router.navigate(["/pages/",element.id]);  
}

onDelete(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.delete(element.id).subscribe(res=>{
                  this.refresList();
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresList(){    
  this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.getAll().subscribe(items=>{
    
    items.forEach(element => {
    
      
        if(element.fabricSource!=0){
        let value=this.dropdownValueService.fabricSourceList            
        .find(f=>f.value==element.fabricSource).value;
            element.fabricSource=value;
        }else{
          element.fabricSource='';
        } 

      
        if(element.fabricDescription!=0){
        let   fabNature=this.dropdownValueService.fabricDescriptionList 
        .find(f=>f.id==element.fabricDescription).  fabNature;
            element.fabricDescription=  fabNature;
        }else{
          element.fabricDescription='';
        } 

      
        if(element.uom!=0){
        let uomName=this.dropdownValueService.uomList
        .find(f=>f.id==element.uom).uomName;
            element.uom=uomName;
        }else{
          element.uom='';
        } 

      
        if(element.process!=0){
        let productionProcessName=this.dropdownValueService.processList
        .find(f=>f.id==element.process).productionProcessName;
            element.process=productionProcessName;
        }else{
          element.process='';
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

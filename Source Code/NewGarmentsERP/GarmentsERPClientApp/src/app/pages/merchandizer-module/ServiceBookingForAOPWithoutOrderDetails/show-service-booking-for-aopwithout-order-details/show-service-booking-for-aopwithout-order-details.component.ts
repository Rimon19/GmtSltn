import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { ServiceBookingForAOPWithoutOrderDetailsService } from '../../../../@core/mock/marchandizer/service-booking-for-aopwithout-order-details.service';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-show-service-booking-for-aopwithout-order-details',
  templateUrl: './show-service-booking-for-aopwithout-order-details.component.html',
  styleUrls: ['./show-service-booking-for-aopwithout-order-details.component.scss']
})
export class ShowServiceBookingForAOPWithoutOrderDetailsComponent implements OnInit {
@ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
dataSource = new MatTableDataSource();
displayedColumns = ['id','fabricSource','fabricDescriptionId','aOPGSM','aOPDia','uOMId','artworkNo','gmtsColor','wOQnty','aopRate','amount','deliveryStartDate','deliveryEndDate','remarks','printingColor',];
Tostr=new Tostr();
filterValues:any={};
  filterSelectObj  = [
    {
        name: 'Fabric Source',
        columnProp: 'fabricSource'
      },{
        name: 'Fabric Description',
        columnProp: 'fabricDescriptionId'
      },{
        name: 'Aop Rate',
        columnProp: 'aopRate'
      },{
        name: 'Amount	',
        columnProp: 'amount'
      },{
        name: 'Delivery Start Date',
        columnProp: 'deliveryStartDate'
      },{
        name: 'Delivery End Date	',
        columnProp: 'deliveryEndDate'
      },{
        name: 'Printing Color	',
        columnProp: 'printingColor'
      }, 
  ]
constructor(private serviceBookingForAOPWithoutOrderDetailsService:ServiceBookingForAOPWithoutOrderDetailsService,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
   private router:Router,
   private dropdownValueService:DropdownValueService
   ) { }

ngOnInit() {

this.dropdownValueService.getfabricSourceList();
//this.dropdownValueService.getFabricDescription();
this.dropdownValueService.getUom();

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
                this.serviceBookingForAOPWithoutOrderDetailsService.delete(element.id).subscribe(res=>{
                  this.refresList();
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresList(){    
  this.serviceBookingForAOPWithoutOrderDetailsService.getAll().subscribe(items=>{
    
    items.forEach(element => {
    
      
        // if(element.fabricDescriptionId!=0){
        // let fabNature=this.dropdownValueService.fabricDescriptionList       
        // .find(f=>f.id==element.fabricDescriptionId).fabNature;
        //     element.fabricDescriptionId=fabNature;
        // }else{
        //   element.fabricDescriptionId='';
        // } 

      
        if(element.uOMId!=0){
        let uomName=this.dropdownValueService.uomList                    
        .find(f=>f.id==element.uOMId).uomName;
            element.uOMId=uomName;
        }else{
          element.uOMId='';
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

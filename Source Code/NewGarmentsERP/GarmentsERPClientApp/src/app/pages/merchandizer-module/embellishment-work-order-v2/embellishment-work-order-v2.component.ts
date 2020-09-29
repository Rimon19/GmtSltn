import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { ViewService } from '../../../@core/mock/marchandizer/views/view.service';
import { EmbellishmentWorkOrderV2Service } from '../../../@core/mock/marchandizer/embellishment-work-order-v2.service';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
import { DatapassingService } from '../../../@core/mock/shared/datapassing.service';
import { EmbellishmentWorkOrderV2DetailsService } from '../../../@core/mock/marchandizer/embellishment-work-order-v2-details.service';
import { __await } from 'tslib';

@Component({
  selector: 'ngx-embellishment-work-order-v2',
  templateUrl: './embellishment-work-order-v2.component.html',
  styleUrls: ['./embellishment-work-order-v2.component.scss']
})
export class EmbellishmentWorkOrderV2Component implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
dataSource = new MatTableDataSource();
displayedColumns = [
  'id',
  'woNo',
  'jobNo', 
 'buyerName', 
 'woDate', 
 'deliveryDate', 
 'supplierName', 
 'readyToApprove', 
 'ordNo', 
 'garmentsItemName',
 'bookingNature' 
];
Tostr=new Tostr();
filterValues:any={};
  filterSelectObj  = [
    {
        name: 'WO Date',
        columnProp: 'wODate'
      },{
        name: 'Delivery Date',
        columnProp: 'deliveryDate'
      },{
        name: 'Pay Mode',
        columnProp: 'payMode'
      }, 
  ]
constructor(private embellishmentWorkOrderV2Service:EmbellishmentWorkOrderV2Service,
  private viewService:ViewService,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
   private router:Router,
   private dropdownValueService:DropdownValueService,
   private datapassingService:DatapassingService,
   private embellishmentWorkOrderV2DetailsService:EmbellishmentWorkOrderV2DetailsService
   ) { }

ngOnInit() {



this.refresList();
}

applyFilter(filterValue: string) {
 
  filterValue = filterValue.trim(); 
  filterValue = filterValue.toLowerCase(); 
  this.dataSource.filter = filterValue;
}

redirectToAddPage(){
  this.router.navigate(["/pages/add-EmbellishmentWorkOrderV2"]);
 
}
redirectToEditPage(element){
  this.router.navigate(["/pages/edit-EmbellishmentWorkOrderV2",element.id]);  
}

redirectToDetails(element){
this.embellishmentWorkOrderV2DetailsService.getAll().subscribe(data=>{
  let obj=  data.find(f=>f.embellishmentWorkOrderV2Id==element.id);
  console.log( obj);
  if (obj!=undefined){
    this.router.navigate(["/pages/edit-EmbellishmentWorkOrderV2Details",element.id]);

    console.log(element);  
  }
  else{
    this.router.navigate(["/pages/add-EmbellishmentWorkOrderV2Details"]);
     this.datapassingService.setValue(element);
     console.log(element);
  }

})
 
}

onDelete(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.embellishmentWorkOrderV2Service.delete(element.id).subscribe(res=>{
                  this.refresList();
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresList(){    
  this.viewService.getEmbellishmentWOV2Views().subscribe(items=>{
    
    console.log(items);
    
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

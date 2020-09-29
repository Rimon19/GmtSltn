import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';

import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
import { YarnDyeingWOWithoutOrderMasterService } from '../../../@core/mock/marchandizer/yarn-dyeing-wowithout-order-master.service';
import { DatapassingService } from '../../../@core/mock/shared/datapassing.service';
import { YarnDyeingWOWithoutOrderDetailService } from '../../../@core/mock/marchandizer/yarn-dyeing-wowithout-order-detail.service';
import { YarnDyeingWOWithoutOrderDetail } from '../../../@core/data/marchanzider-model/yarn-dyeing-wowithout-order-detail.model';

@Component({
  selector: 'ngx-yarn-dyeing-wowithout-order-master',
  templateUrl: './yarn-dyeing-wowithout-order-master.component.html',
  styleUrls: ['./yarn-dyeing-wowithout-order-master.component.scss']
})
export class YarnDyeingWOWithoutOrderMasterComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id','yarnDyeingWoNo','yarnDyeingFactory','bookingDate','attention','currencyId','exchangeRate','payMode','source','gorYIssueStart','gorYIssueEnd','dorYDeliveryStart','dorYDeliveryEnd','itemCategoryId',];
  Tostr=new Tostr();
  filterValues:any={};
    filterSelectObj  = [
      {
          name: 'Yarn Dyeing Factory	',
          columnProp: 'yarnDyeingFactory'
        },{
          name: 'Booking Date',
          columnProp: 'bookingDate'
        },{
          name: 'Pay Mode',
          columnProp: 'payMode'
        }, 
    ]
  constructor(public yarnDyeingWOWithoutOrderMasterService:YarnDyeingWOWithoutOrderMasterService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private dropdownValueService:DropdownValueService,
     private datapassingService:DatapassingService,
     private yarnDyeingWOWithoutOrderDetailService:YarnDyeingWOWithoutOrderDetailService

     ) { }
  
  ngOnInit() {
  
  this.dropdownValueService.getSuppliers();
  this.dropdownValueService.getCurrency();
  this.dropdownValueService.getPayMode();
  this.dropdownValueService.getSource();
  this.dropdownValueService.getItemCategory();
  
  this.refresList();
  }
  
  applyFilter(filterValue: string) {
   
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  redirectToAddPage(){
    this.router.navigate(["/pages/add-YarnDyeingWOWithoutOrderMaster"]);
   
  }
  redirectToEditPage(element){
    this.router.navigate(["/pages/edit-YarnDyeingWOWithoutOrderMaster",element.id]);  
  }

  onDetails(element){

   
     this.yarnDyeingWOWithoutOrderDetailService.getAll().subscribe(data=>{
     
  let item=data.find(f=>f.yarnDyeingWOWithoutOrderMasterId==element.id);
   
        console.log(item);

        if(item!=undefined || item!=null){
          this.router.navigate(["/pages/edit-YarnDyeingWOWithoutOrderDetails",item.id]);
    
         }
         else{
          this.router.navigate(["/pages/add-YarnDyeingWOWithoutOrderDetails"]);
         this.datapassingService.setValue(element);
         }
     });

    
    
   

  }
  
  onDelete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.yarnDyeingWOWithoutOrderMasterService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  
  refresList(){    
    this.yarnDyeingWOWithoutOrderMasterService.getAll().subscribe(items=>{
      
      items.forEach(element => {
      
        
          if(element.yarnDyeingFactory!=0){
          let supplierName=this.dropdownValueService.subpplierList 
          .find(f=>f.id==element.yarnDyeingFactory).supplierName;
              element.yarnDyeingFactory=supplierName;
          }else{
            element.yarnDyeingFactory='';
          } 
  
        
          if(element.currencyId!=0){
          let discountMethodName=this.dropdownValueService.currencyList
          .find(f=>f.id==element.currencyId).discountMethodName;
              element.currencyId=discountMethodName;
          }else{
            element.currencyId='';
          } 
  
        
          if(element.itemCategoryId!=0){
          let itemCategoryName=this.dropdownValueService.itemCategoryList
          .find(f=>f.id==element.itemCategoryId).itemCategoryName;
              element.itemCategoryId=itemCategoryName;
          }else{
            element.itemCategoryId='';
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

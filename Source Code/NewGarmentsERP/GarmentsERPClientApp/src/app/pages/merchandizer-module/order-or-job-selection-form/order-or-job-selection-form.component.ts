import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { FetchInitialOrderService } from '../../../@core/mock/fetch-initial-order.service';
import { MasterPodetailsInfroesService } from '../../../@core/mock/marchandizer/master-podetails-infroes.service';
import { OrderInfo } from '../../../@core/data/marchanzider-model/order-info.model';
import { MasterPodetailsInfroes } from '../../../@core/data/marchanzider-model/master-podetails-infroes.model';
import { Tostr } from '../../../@core/data/tostr.model';
import { ViewService } from '../../../@core/mock/marchandizer/views/view.service';
import { DatapassingService } from '../../../@core/mock/shared/datapassing.service';

@Component({
  selector: 'ngx-order-or-job-selection-form',
  templateUrl: './order-or-job-selection-form.component.html',
  styleUrls: ['./order-or-job-selection-form.component.scss']
})
export class OrderOrJobSelectionFormComponent implements OnInit {
   public orderInfoList:OrderInfo[];
  public  poDetailsInfoList:MasterPodetailsInfroes[];
  public  orderInfoListNpoDetailsInfoList:any[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
dataSource = new MatTableDataSource();
displayedColumns = ['button','jobNo','buyerName','styleRefNo','jobQty','poNumber','poQuantity','shipmentDate','fileNo'];
Tostr=new Tostr();
filterValues:any={};
  filterSelectObj  = [
    {
        name: 'JobNo',
        columnProp: 'jobNo'
      },{
        name: 'BuyerName',
        columnProp: 'buyerName'
      },{
        name: 'StyleRefNo',
        columnProp: 'styleRefNo'
      },{
        name: 'JobQty',
        columnProp: 'jobQty'
      },{
        name: 'PoNumber',
        columnProp: 'poNumber'
      },{
        name: 'PoQuantity',
        columnProp: 'poQuantity'
      },{
        name: 'ShipmentDate',
        columnProp: 'shipmentDate'
      },{
        name: 'FileNo',
        columnProp: 'fileNo'
      } 
      
  ]
  constructor(
    public dialogbox: MatDialogRef<OrderOrJobSelectionFormComponent>,
    private viewService:ViewService ,
    private datapassingService:DatapassingService
  ) {
      
   }

  ngOnInit() {
    this.refresList();
  }
  onClose(){
    this.dialogbox.close();
  }

  refresList(){    
    this.viewService.getOrderOrJobSelectionFromView().subscribe(items=>{
      console.log(items);
     
      this.dataSource=new MatTableDataSource(items);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }
  applyFilter(filterValue: string) {
 
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
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
    //this.refresList();
  }   
  
  onSelect(element){
    console.log(element);
  this.datapassingService.setJobSelectionFormValue(element);
  
 this.onClose();
  }
}

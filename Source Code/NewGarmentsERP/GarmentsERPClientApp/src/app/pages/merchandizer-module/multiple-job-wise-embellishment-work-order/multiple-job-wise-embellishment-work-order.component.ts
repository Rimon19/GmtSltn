import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Tostr } from '../../../@core/data/tostr.model';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { MultipleJobWiseEmbellishmentWorkOrderService } from '../../../@core/mock/marchandizer/multiple-job-wise-embellishment-work-order.service';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-multiple-job-wise-embellishment-work-order',
  templateUrl: './multiple-job-wise-embellishment-work-order.component.html',
  styleUrls: ['./multiple-job-wise-embellishment-work-order.component.scss']
})
export class MultipleJobWiseEmbellishmentWorkOrderComponent implements OnInit {
@ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
dataSource = new MatTableDataSource();
displayedColumns = ['id','woNo','companyNameId','buyerNameId','woDate','deliveryDate','currencyId','source','payMode','supplierNameId','readyToApprove','level','attention','remarks',];
Tostr=new Tostr();
filterValues:any={};
  filterSelectObj  = [
    {
        name: 'WoNo',
        columnProp: 'woNo'
      },{
        name: 'WODate',
        columnProp: 'woDate'
      },{
        name: 'DeliveryDate',
        columnProp: 'deliveryDate'
      },{
        name: 'PayMode',
        columnProp: 'payMode'
      },{
        name: 'SupplierNameId',
        columnProp: 'supplierNameId'
      }, 
  ]
constructor(private multipleJobWiseEmbellishmentWorkOrderService:MultipleJobWiseEmbellishmentWorkOrderService,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
   private dropdownValueService: DropdownValueService,
   private router:Router,
   ) { }

ngOnInit() {
  this.dropdownValueService.getCompany();
  this.dropdownValueService.getBuyers();
  this.dropdownValueService.getSuppliers();
  this.dropdownValueService.getCurrency();
this.refresList();
}

applyFilter(filterValue: string) {
 
  filterValue = filterValue.trim(); 
  filterValue = filterValue.toLowerCase(); 
  this.dataSource.filter = filterValue;
}

redirectToAddPage(){
  this.router.navigate(["/pages/add-Multiple-Job-Wise-Embelisment-Work-Order"]);
 
}
redirectToEditPage(element){
  this.router.navigate(["/pages/edit-Multiple-Job-Wise-Embelisment-Work-Order",element.id]);  
}

onDelete(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.multipleJobWiseEmbellishmentWorkOrderService.delete(element.id).subscribe(res=>{
                  this.refresList();
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresList(){    
  this.multipleJobWiseEmbellishmentWorkOrderService.getAll().subscribe(item=>{
    item.forEach(element=>{

        //Get company name from company table and then assaign to companyID
        if(element.companyNameId!=0){
        let companyName=this.dropdownValueService.companyList
        .find(f=>f.compID==element.companyNameId).company_Name;
            element.companyNameId=companyName;
        }else{
          element.companyNameId='';
        }  

      //Get buyer name from buyer table and then assaign to buyerID
       if(element.buyerNameId!=0){
         let buyerName=this.dropdownValueService.buyerList
        .find(f=>f.id==element.buyerNameId).contactName;
            element.buyerNameId=buyerName;
        }else{
          element.buyerNameId='';
        } 
         //Get Supplier name from Supplier table and then assaign to supplierNameId
        if (element.supplierNameId!=0) {
          let supplierName=this.dropdownValueService.subpplierList.find(
            f=>f.id==element.supplierNameId
          ).supplierName;
          element.supplierNameId=supplierName;
        } else {
          element.supplierNameId='';
        }
        //Get currency name from DiscountMethod table and then assaign to currencyId
        if (element.currencyId!=0) {
          let currencyName=this.dropdownValueService.currencyList.find(f=>f.id==element.currencyId).discountMethodName;
          element.currencyId=currencyName;
        } else {
          element.currencyId='';
        }

    });
    this.dataSource=new MatTableDataSource(item);
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

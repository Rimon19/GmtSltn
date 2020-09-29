import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../../@core/data/tostr.model';
import { YarnDyeingWorkOrderService } from '../../../../@core/mock/marchandizer/yarn-dyeing-work-order.service';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';

@Component({
  selector: 'ngx-show-yarn-dyeing-work-order',
  templateUrl: './show-yarn-dyeing-work-order.component.html',
  styleUrls: ['./show-yarn-dyeing-work-order.component.scss']
})
export class ShowYarnDyeingWorkOrderComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id','yarnDyeingFactory','bookingDate','attention','yarnDyeingWoNo','currency','exchangeRate','payMode','source','gorYIssueStart','gorYIssueEnd','dorYDeliveryStart','dorYDeliveryEnd','itemCategory','isShort','isApproved',];
  Tostr=new Tostr();
  filterValues:any={};
    filterSelectObj  = [
      {
          name: 'YarnDyeingFactory',
          columnProp: 'yarnDyeingFactory'
        },{
          name: 'BookingDate',
          columnProp: 'bookingDate'
        },{
          name: 'PayMode',
          columnProp: 'payMode'
        },{
          name: 'Source',
          columnProp: 'source'
        }, 
    ]
  constructor(private yarnDyeingWorkOrderService:YarnDyeingWorkOrderService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private datapassingService:DatapassingService,
     private route:ActivatedRoute,
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
    this.router.navigate(["/pages/Yarn-Dyeing-Work-Order/",0]);
   
  }

  onDetails(element){
  
  
    this.datapassingService.setValue(element.id);
    this.router.navigate(["/pages/show-YarnDyeingWODetails"]);
   
  }
  redirectToEditPage(element){
    this.router.navigate(["/pages/Yarn-Dyeing-Work-Order/",element.id]);  
  }
  
  onDelete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.yarnDyeingWorkOrderService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  
  refresList(){    
    this.yarnDyeingWorkOrderService.getAll().subscribe(item=>{
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

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../../../@core/data/tostr.model';
import { YarnDyeingWoDetailService } from '../../../../../@core/mock/marchandizer/yarn-dyeing-wo-detail.service';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { DropdownValueService } from '../../../../../@core/mock/shared/dropdown-value.service';
import { DatapassingService } from '../../../../../@core/mock/shared/datapassing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-show-yarn-dyeing-wodetails',
  templateUrl: './show-yarn-dyeing-wodetails.component.html',
  styleUrls: ['./show-yarn-dyeing-wodetails.component.scss']
})
export class ShowYarnDyeingWODetailsComponent implements OnInit {
  yarnDyeingwoId:number=0;
  subscription: Subscription;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
dataSource = new MatTableDataSource();
displayedColumns = ['id','jobNo','lotNo','countId','yarnDescription','yarnColorId','colorRangeId','refNo','uomId','bookingBalance','yarnWoQnty','dyeingCharge','amount','noofBag','noofCone','minReqCone','fileNo','internalRefNo','remarks',];
Tostr=new Tostr();
filterValues:any={};
  filterSelectObj  = [
    {
        name: 'JobNo',
        columnProp: 'jobNo'
      },{
        name: 'LotNo',
        columnProp: 'lotNo'
      },{
        name: 'YarnColorId',
        columnProp: 'yarnColorId'
      }, 
  ]
constructor(private yarnDyeingWoDetailService:YarnDyeingWoDetailService,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
   private router:Router,
   private dropdownValueService:DropdownValueService,
   private datapassingService:DatapassingService
   ) { 

    
    
     this.yarnDyeingwoId=this.datapassingService.getValue();
  
   }

ngOnInit() {

this.dropdownValueService.getYarnCount();
this.dropdownValueService.getColor();
this.dropdownValueService.getColorRange();
this.dropdownValueService.getUom();
this.refresYarnDyeingWODetailsList(this.yarnDyeingwoId);
//this.refresList();
}
refresYarnDyeingWODetailsList(id) {
  this.yarnDyeingWoDetailService.getAll().subscribe(data=>{

  
   
      let  item =data.filter(f=>f.yarnDyeingWOId==id)
        console.log(item);
  
  
    
   item.forEach(element => {
     
    if(element.countId!=0){
      let name=this.dropdownValueService.yarnCountList
      .find(f=>f.id==element.countId).name;
          element.countId=name;
      }else{
        element.countId='';
      } 

    
      if(element.yarnColorId!=0){
      let ColorName=this.dropdownValueService.colorList
      .find(f=>f.id==element.yarnColorId).colorName;
          element.yarnColorId=ColorName;
      }else{
        element.yarnColorId='';
      } 

    
      if(element.colorRangeId!=0){
      let colorRangeName=this.dropdownValueService.colorRangeList
      .find(f=>f.id==element.colorRangeId).colorRangeName;
          element.colorRangeId=colorRangeName;
      }else{
        element.colorRangeId='';
      } 

    
      if(element.uomId!=0){
      let uomName=this.dropdownValueService.uomList
      .find(f=>f.id==element.uomId).uomName;
          element.uomId=uomName;
      }else{
        element.uomId='';
      } 

     
   });
       
    this.dataSource=new MatTableDataSource(item);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
      
  });
   
}
applyFilter(filterValue: string) {
 
  filterValue = filterValue.trim(); 
  filterValue = filterValue.toLowerCase(); 
  this.dataSource.filter = filterValue;
}

redirectToAddPage(){
 
  this.datapassingService.setValue(this.yarnDyeingwoId);
  this.router.navigate(["/pages/YarnDyeingWODetails/0"]);
 
}
redirectToEditPage(element){
  this.router.navigate(["/pages/YarnDyeingWODetails/",element.id]);  
}

onDelete(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.yarnDyeingWoDetailService.delete(element.id).subscribe(res=>{
                  this.refresYarnDyeingWODetailsList(this.yarnDyeingwoId);
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
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
  this.refresYarnDyeingWODetailsList(this.yarnDyeingwoId);
}   

backTo(){
  this.router.navigate(['/pages/show-Yarn-Dyeing-Work-Order']);
}


}

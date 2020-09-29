import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { ShortFabricBookingDetailsService } from '../../../../@core/mock/marchandizer/short-fabric-booking-details.service';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
@Component({
  selector: 'ngx-short-fabric-booking-details',
  templateUrl: './short-fabric-booking-details.component.html',
  styleUrls: ['./short-fabric-booking-details.component.scss']
})
export class ShortFabricBookingDetailsComponent implements OnInit {


@ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
dataSource = new MatTableDataSource();
displayedColumns = ['id','fabricDescriptionId','garmentsColor','fabricColor','garmentssize','itemsize','diaOrWidth','finishFabric','processloss','grayFabric','rate','amount','rmgQty','departments','responsibleperson','reason',];
Tostr=new Tostr();
filterValues:any={};
  filterSelectObj  = [
    {
        name: 'Garments Color',
        columnProp: 'garmentsColor'
      },{
        name: 'Fabric Color',
        columnProp: 'fabricColor'
      },{
        name: 'Garments size',
        columnProp: 'garmentssize'
      },{
        name: 'Finish Fabric',
        columnProp: 'finishFabric'
      },{
        name: 'Rate',
        columnProp: 'rate'
      },{
        name: 'Responsible Dept',
        columnProp: 'departments'
      },{
        name: 'Responsible Persion',
        columnProp: 'responsibleperson'
      }, 
  ]
constructor(private shortFabricBookingDetailsService:ShortFabricBookingDetailsService,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
   private router:Router,
   private dropdownValueService:DropdownValueService
   ) { }

ngOnInit() {

this.dropdownValueService.getFabricDescription();
this.dropdownValueService.getGarmentsColor(1);
this.dropdownValueService.getGarmentsColor(1);
this.dropdownValueService.getGarmentsSize(1);
this.dropdownValueService.getGarmentsSize(1);
this.dropdownValueService. getDepartments();

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
                this.shortFabricBookingDetailsService.delete(element.id).subscribe(res=>{
                  this.refresList();
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresList(){    
  this.shortFabricBookingDetailsService.getAll().subscribe(items=>{
    
    items.forEach(element => {
    
      
        if(element.fabricDescriptionId!=0){
        let fabNature=this.dropdownValueService.fabricDescriptionList
        .find(f=>f.id==element.fabricDescriptionId).fabNature;
            element.fabricDescriptionId=fabNature;
        }else{
          element.fabricDescriptionId='';
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

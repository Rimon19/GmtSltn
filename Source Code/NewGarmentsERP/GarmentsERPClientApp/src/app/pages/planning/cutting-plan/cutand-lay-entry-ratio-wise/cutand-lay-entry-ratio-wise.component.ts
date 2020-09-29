import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { CutandLayEntryService } from '../../../../@core/mock/planning/cutand-lay-entry.service';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { CutandLayEntryRollWiseService } from '../../../../@core/mock/planning/cutand-lay-entry-roll-wise.service';
import { CutandLayEntryRatioWiseService } from '../../../../@core/mock/planning/cutand-lay-entry-ratio-wise.service';

@Component({
  selector: 'ngx-cutand-lay-entry-ratio-wise',
  templateUrl: './cutand-lay-entry-ratio-wise.component.html',
  styleUrls: ['./cutand-lay-entry-ratio-wise.component.scss']
})
export class CutandLayEntryRatioWiseComponent implements OnInit {

  
@ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
dataSource = new MatTableDataSource();
displayedColumns = ['id','locationId','floorId','tableNo','cadMarkerlength','cadMarkerWidthOrDia','cadFabricWidthOrDia','cadGsm','jobNo','yearId','batch','buyerProfileId','planStartDate','startTimeHour','planEndDate','endTimeHour'];
Tostr=new Tostr();
filterValues:any={};
  filterSelectObj  = [
    {
        name: 'Locaton',
        columnProp: 'locationId'
      },{
        name: 'Floor',
        columnProp: 'floorId'
      },{
        name: 'Year',
        columnProp: 'yearId'
      },{
        name: 'Buyer',
        columnProp: 'buyerProfileId'
      },{
        name: 'Plan Start Date',
        columnProp: 'planStartDate'
      }, 
  ]
constructor(private cutandLayEntryRatioWiseService:CutandLayEntryRatioWiseService,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
   private router:Router,
   private dropdownValueService:DropdownValueService
   ) { }

ngOnInit() {

this.dropdownValueService.getLocation();
this.dropdownValueService.getFloors();
this.dropdownValueService.getYear();
this.dropdownValueService.getBuyers();
this.dropdownValueService.getBuyers();

this.refresList();
}

applyFilter(filterValue: string) {
 
  filterValue = filterValue.trim(); 
  filterValue = filterValue.toLowerCase(); 
  this.dataSource.filter = filterValue;
}

redirectToAddPage(){
  this.router.navigate(["/pages/planning/create-cut-and-lay-entry-ratio-wise"]);
 
}
redirectToEditPage(element){
  this.router.navigate(["/pages/planning/edit-cut-and-lay-entry-ratio-wise",element.id]);  
}

onDelete(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.cutandLayEntryRatioWiseService.delete(element.id).subscribe(res=>{
                  this.refresList();
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresList(){    
  this.cutandLayEntryRatioWiseService.getAll().subscribe(items=>{
    
    items.forEach(element => {
    
      
        if(element.locationId!=0){
        let location_Name=this.dropdownValueService.locationList
        .find(f=>f.locationId==element.locationId).location_Name;
            element.locationId=location_Name;
        }else{
          element.locationId='';
        } 

      
        if(element.floorId!=0){
        let floorName=this.dropdownValueService.floorsList
        .find(f=>f.id==element.floorId).floorName;
            element.floorId=floorName;
        }else{
          element.floorId='';
        } 

      
        if(element.yearId!=0){
        let year=this.dropdownValueService.yearList
        .find(f=>f.id==element.yearId).year;
            element.yearId=year;
        }else{
          element.yearId='';
        } 

      
        if(element.buyerProfileId!=0){
        let contactName=this.dropdownValueService.buyerList
        .find(f=>f.id==element.buyerProfileId).contactName;
            element.buyerProfileId=contactName;
        }else{
          element.buyerProfileId='';
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

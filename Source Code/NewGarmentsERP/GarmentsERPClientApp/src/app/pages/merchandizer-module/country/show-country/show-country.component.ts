import { Component, OnInit, ViewChild } from '@angular/core';
  import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
  import { NbToastrService } from '@nebular/theme';
  import { Router } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { CountryService } from '../../../../@core/mock/country.service';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';

@Component({
  selector: 'ngx-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.scss']
})
export class ShowCountryComponent implements OnInit {


  
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id','region_Name','cuttOff',];
  Tostr=new Tostr();
  filterValues:any={};
    filterSelectObj  = [
      {
          name: 'Region_Name',
          columnProp: 'region_Name'
        }, 
    ]
  constructor(private countryService:CountryService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
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
    this.router.navigate(["/pages/add-country"]);
   
  }
  redirectToEditPage(element){
    this.router.navigate(["/pages/edit-country",element.regionID]);  
  }
  
  onDelete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.countryService.deleteCountry(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  
  refresList(){    
    this.countryService.getAllCountry().subscribe(item=>{
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

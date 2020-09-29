import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { ServiceBookingForKnitingDetailService } from '../../../@core/mock/marchandizer/service-booking-for-kniting-detail.service';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
import { Subscription } from 'rxjs';
import { DatapassingService } from '../../../@core/mock/shared/datapassing.service';

@Component({
  selector: 'ngx-service-booking-for-kniting-detail',
  templateUrl: './service-booking-for-kniting-detail.component.html',
  styleUrls: ['./service-booking-for-kniting-detail.component.scss']
})
export class ServiceBookingForKnitingDetailComponent implements OnInit {
  PrimaryId :number=0;
  subscription: Subscription;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id','processId','sensitivity','programNo','fabricDescriptionId','dia',];
  Tostr=new Tostr();
  filterValues:any={};
    filterSelectObj  = [
       
    ]
  constructor(private serviceBookingForKnitingDetailService:ServiceBookingForKnitingDetailService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private dropdownValueService:DropdownValueService,
     private datapassingService:DatapassingService
     ) { 
        this.PrimaryId = this.datapassingService.getValue(); 
     }
  
  ngOnInit() {
  
  this.dropdownValueService.getAllProductionProcess();
  this.dropdownValueService.getSensitivity();
  this.dropdownValueService. getFabricDescription();
  
  this.refresSBFKDetailsList(this.PrimaryId);
  }
  
  applyFilter(filterValue: string) {
   
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  refresPODetailsInfoList(id) {
    
  }
  
  redirectToAddPage(){
    this.router.navigate(["/pages/add-ServiceBookingForKnittingDetail"]);
    this.datapassingService.setValue(this.PrimaryId);
   
  }
  redirectToEditPage(element){
    this.router.navigate(["/pages/edit-ServiceBookingForKnittingDetail",element.id]);  
  }
  
  onDelete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.serviceBookingForKnitingDetailService.delete(element.id).subscribe(res=>{
                    this.refresSBFKDetailsList(this.PrimaryId);
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  
  // refresList(){    
  //   this.serviceBookingForKnitingDetailService.getAll().subscribe(items=>{
      
  //     items.forEach(element => {
      
        
  //         if(element.processId!=0){
  //         let productionProcessName=this.dropdownValueService.processList
  //         .find(f=>f.id==element.processId).productionProcessName;
  //             element.processId=productionProcessName;
  //         }else{
  //           element.processId='';
  //         } 
  
        
  //         if(element.fabricDescriptionId!=0){
  //         let fabNature=this.dropdownValueService.fabricDescriptionList
  //         .find(f=>f.id==element.fabricDescriptionId).fabNature;
  //             element.fabricDescriptionId=fabNature;
  //         }else{
  //           element.fabricDescriptionId='';
  //         } 
  
  //   });
      
  //     this.dataSource=new MatTableDataSource(items);
  //     this.dataSource.sort = this.sort;
  //     this.dataSource.paginator = this.paginator;
  //   })
     
    
  // }

  refresSBFKDetailsList(id) {
    this.serviceBookingForKnitingDetailService.getAll().subscribe(data=>{
  
    
     
        let  item =data.filter(f=>f.serviceBookingForKnitingId==id)
          console.log(item);
    
    
      
          item.forEach(element => {
      
        
            if(element.processId!=0){
            let productionProcessName=this.dropdownValueService.processList
            .find(f=>f.id==element.processId).productionProcessName;
                element.processId=productionProcessName;
            }else{
              element.processId='';
            } 
    
          
            if(element.fabricDescriptionId!=0){
            let fabNature=this.dropdownValueService.fabricDescriptionList
            .find(f=>f.id==element.fabricDescriptionId).fabNature;
                element.fabricDescriptionId=fabNature;
            }else{
              element.fabricDescriptionId='';
            } 
    
      });
         
      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
        
    });
     
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
    this.refresSBFKDetailsList(this.PrimaryId);
  }   

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Tostr } from '../../../@core/data/tostr.model';
import { SampleFabricBookingWithoutorderDetailsService } from '../../../@core/mock/marchandizer/sample-fabric-booking-withoutorder-details.service';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
@Component({
  selector: 'ngx-sample-fabric-booking-withoutorder-details',
  templateUrl: './sample-fabric-booking-withoutorder-details.component.html',
  styleUrls: ['./sample-fabric-booking-withoutorder-details.component.scss']
})
export class SampleFabricBookingWithoutorderDetailsComponent implements OnInit {

 
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id','sfbWithoutOrderId','buyerProfileId','stypeRef','styleDes','sampletype','bodyPartEntryId','colorType','fabricDescriptionId','gsm','gmtsColor','fabricColor','gmtsSize','itemsize','diaWidth','finishFabric','processloss','grayFabric','articleNumber','rate','amount','bodyPartTypeId','itemQty','yarnDetails','fabricSource','knittingChargeKG','bhQty','rhQty','deliveryDate','remarks','uom',];
  Tostr=new Tostr();
  filterValues:any={};
    filterSelectObj  = [
      {
          name: 'Style Ref',
          columnProp: 'stypeRef'
        },{
          name: 'Style Des',
          columnProp: 'styleDes'
        },{
          name: 'Sample type',
          columnProp: 'sampletype'
        },{
          name: 'Body Part',
          columnProp: 'bodyPartEntryId'
        },{
          name: 'Color Type',
          columnProp: 'colorType'
        },{
          name: 'Fabric Description',
          columnProp: 'fabricDescriptionId'
        },{
          name: 'GSM',
          columnProp: 'gsm'
        },{
          name: 'Body Type',
          columnProp: 'bodyPartTypeId'
        },{
          name: 'Fabric Source',
          columnProp: 'fabricSource'
        }, 
    ]
  constructor(private sampleFabricBookingWithoutorderDetailsService:SampleFabricBookingWithoutorderDetailsService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private dropdownValueService:DropdownValueService
     ) { }
  
  ngOnInit() {
  
  this.dropdownValueService.getsampleType();
  this.dropdownValueService.getBodyPart();
  this.dropdownValueService.getColorType();
  this.dropdownValueService.getFabricDescription();
  this.dropdownValueService.getBodyPartType();
  this.dropdownValueService.getfabricSourceList();
  this.dropdownValueService.getUom();
  
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
                  this.sampleFabricBookingWithoutorderDetailsService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  
  refresList(){    
    this.sampleFabricBookingWithoutorderDetailsService.getAll().subscribe(items=>{
      
      items.forEach(element => {
      
        
          if(element.bodyPartEntryId!=0){
          let bodyPartFullName=this.dropdownValueService.bodyPartList
          .find(f=>f.id==element.bodyPartEntryId).bodyPartFullName;
              element.bodyPartEntryId=bodyPartFullName;
          }else{
            element.bodyPartEntryId='';
          } 
  
        
          if(element.fabricDescriptionId!=0){
          let fabNature=this.dropdownValueService.fabricDescriptionList
          .find(f=>f.id==element.fabricDescriptionId).fabNature;
              element.fabricDescriptionId=fabNature;
          }else{
            element.fabricDescriptionId='';
          } 
  
        
          if(element.bodyPartTypeId!=0){
          let bodyPartTypeName=this.dropdownValueService.bodyPartTypeList
          .find(f=>f.id==element.bodyPartTypeId).bodyPartTypeName;
              element.bodyPartTypeId=bodyPartTypeName;
          }else{
            element.bodyPartTypeId='';
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

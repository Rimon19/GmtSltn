import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { TnaMailSetupService } from '../../../@core/mock/library/tna-mail-setup.service';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
import { TNATaskEntriesService } from '../../../@core/mock/library/tnatask-entries.service';

@Component({
  selector: 'ngx-tna-mail-setup',
  templateUrl: './tna-mail-setup.component.html',
  styleUrls: ['./tna-mail-setup.component.scss']
})
export class TnaMailSetupComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id','user','tnaTask','mailType',];
  Tostr=new Tostr();
  filterValues:any={};
    filterSelectObj  = [
      {
          name: 'User',
          columnProp: 'user'
        },{
          name: 'TNA Task',
          columnProp: 'tnaTask'
        },{
          name: 'Mail Type',
          columnProp: 'mailType'
        }, 
    ]
  constructor(private tnaMailSetupService:TnaMailSetupService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private dropdownValueService:DropdownValueService,
     private tNATaskEntriesService:TNATaskEntriesService,
     ) { }
  
  ngOnInit() {
  
  this.dropdownValueService.getUsersByEmail();
  this.dropdownValueService.getTNAShortName();
  this.dropdownValueService.getMailType();
  
  this.refresList();
  }
  
  applyFilter(filterValue: string) {
   
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  redirectToAddPage(){
    this.router.navigate(["/pages/create-TnaMailSetup"]);
   
  }
  redirectToEditPage(element){
    this.router.navigate(["/pages/edit-TnaMailSetup",element.id]);  
  }
  
  onDelete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.tnaMailSetupService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  
  refresList(){    
    this.tnaMailSetupService.getAll().subscribe(items=>{
      
      items.forEach(element => {
      
        
          if(element.user!=0){
          let fullName=this.dropdownValueService.userList
          .find(f=>f.userID==element.user).fullName;
              element.user=fullName;
          }else{
            element.user='';
          } 


          if(element.tnaTask!=""){
            this.tNATaskEntriesService.getTNATaskEntries().subscribe(data=>{
                let tnaTaskIds= element.tnaTask.split(',');
          let array=[];
          tnaTaskIds.forEach(ele => {
                  let obj= data.find(f=>f.id==parseInt(ele));
                  console.log(obj);
                array.push(obj);
                  
                });
                console.log(array);
                
                //element.tnaTask=array;
                element.tnaTask='';
                array.forEach(e => {
                  element.tnaTask +=e.taskShortName+",";
                });

               console.log(element.tnaTask);
                
          });
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

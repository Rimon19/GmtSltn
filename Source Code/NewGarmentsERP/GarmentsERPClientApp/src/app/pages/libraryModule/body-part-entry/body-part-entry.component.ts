import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { BodyPartEntry } from '../../../@core/data/Library-Modul-model/BodyPartEntry';
import { BodyPartEntryService } from '../../../@core/mock/library/body-part-entry.service';
import { PageInfoService } from '../../../@core/mock/library/page-info.service';



@Component({
  selector: 'ngx-body-part-entry',
  templateUrl: './body-part-entry.component.html',
  styleUrls: ['./body-part-entry.component.scss']
})
export class BodyPartEntryComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'bodyPartFullName','bodyPartShortName','entryPages','bodyPartType','status'];
  bodyPartEntry:BodyPartEntry[]=[];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(private bodyPartEntryService:BodyPartEntryService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private pageInfoService:PageInfoService) { }

  ngOnInit() {
  
   this.refresList();
 

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  AddNewInpurRow(){
    this.router.navigate(["/pages/body-part-create"]);
   
  }


  save(element){


  }

  edit(element){
      this.router.navigate(["/pages/body-part-edit/",element.id]);  
  }

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.bodyPartEntryService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }


  refresList(){
    
    this.bodyPartEntryService.getAll().subscribe(item=>{
      this.pageInfoService.getAll().subscribe(data=>{

        item.forEach(element => {
          let entPage= element.entryPages.split(',');
          element.entryPages='';
          if(entPage.length>0){
            entPage.forEach(el=> {
              if(el!=''||el!=undefined){
               let pageName= data.find(f=>f.id==parseInt(el)).pageName;
               element.entryPages +=pageName+',';
              }
             });
          }
            
            //  element.entryPages.substring(0,  element.entryPages.length - 1);
         });
         
      })
     
     
     this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }



}

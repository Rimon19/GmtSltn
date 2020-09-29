import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { TNATaskNameEntryService } from '../../../@core/mock/library/tnatask-name-entry.service';
import { Router } from '@angular/router';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { NbToastrService } from '@nebular/theme';
import { TNATaskNameEntry } from '../../../@core/data/Library-Modul-model/tnatask-name-entry';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';

@Component({
  selector: 'ngx-tnatask-name-entry',
  templateUrl: './tnatask-name-entry.component.html',
  styleUrls: ['./tnatask-name-entry.component.scss']
})
export class TNATaskNameEntryComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'tnaTaskName','status'];
  Tostr=new Tostr();
  subscription:Subscription;
  tNATaskNameEntry: TNATaskNameEntry[]; 
  constructor(
     
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private TNATaskNameEntryService:TNATaskNameEntryService) { }
    

  ngOnInit() {
 this.getTNATaskNameEntryInfoDetails();

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-tNA-task-name"]);
   
  }
     delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.TNATaskNameEntryService.deleteTNATaskNameEntry(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getTNATaskNameEntryInfoDetails();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
      }
      getTNATaskNameEntryInfoDetails(){
    this.subscription=   this.TNATaskNameEntryService.getTNATaskNameEntry().subscribe(data=>{
    this.tNATaskNameEntry=data;
    
    this.dataSource=new MatTableDataSource(this.tNATaskNameEntry);
    console.log('po details',this.tNATaskNameEntry);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-tNA-task-name/",element.id]);  
        }
  

}

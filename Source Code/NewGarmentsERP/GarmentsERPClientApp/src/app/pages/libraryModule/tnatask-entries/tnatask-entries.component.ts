import { Component, OnInit, ViewChild } from '@angular/core';
import { TNATaskEntriesService } from '../../../@core/mock/library/tnatask-entries.service';
import { Router } from '@angular/router';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { NbToastrService } from '@nebular/theme';
import { TNATaskEntries } from '../../../@core/data/Library-Modul-model/tnatask-entries';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { TNATaskNameEntry } from '../../../@core/data/Library-Modul-model/tnatask-name-entry';
import { TNATaskNameEntryService } from '../../../@core/mock/library/tnatask-name-entry.service';

@Component({
  selector: 'ngx-tnatask-entries',
  templateUrl: './tnatask-entries.component.html',
  styleUrls: ['./tnatask-entries.component.scss']
})
export class TNATaskEntriesComponent implements OnInit {
  public tNATaskNameEntryListItems:TNATaskNameEntry[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
    groupName: string;
    displayedColumns = ['id', 'taskNameId','taskShortName','penalty','sequenceNo','completion','groupName','status','groupSeqNo'];
  Tostr=new Tostr();
  subscription:Subscription;
  tNATaskEntries: TNATaskEntries[]; 
  constructor(
    private tNATaskNameEntryService:TNATaskNameEntryService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private tNATaskEntriesService:TNATaskEntriesService) { }
    

  ngOnInit() {
 this.getTNATaskEntriesInfoDetails();
  this.tnaTaskNameDDL();
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
    this.router.navigate(["/pages/add-tNA-task-entries"]);  
  }
     delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.tNATaskEntriesService.deleteTNATaskEntries(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getTNATaskEntriesInfoDetails();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
      }
      tnaTaskNameDDL(){
      
     }

      getTNATaskEntriesInfoDetails(){
    this.subscription=   this.tNATaskEntriesService.getTNATaskEntries().subscribe(data=>{
    this.tNATaskEntries=data;
    this.tNATaskEntries.forEach(res=>{
    
      this.tNATaskNameEntryService.getTNATaskNameEntry().
      subscribe(data=>{
      this.tNATaskNameEntryListItems=data;
      console.log('tNATaskNameEntryListItems list',this.tNATaskNameEntryListItems)
       let tNAName=this.tNATaskNameEntryListItems.find(data=>data.id==res.taskNameId).tnaTaskName;
        res.taskNameId=tNAName;
        
    });

        
    })
   
    this.dataSource=new MatTableDataSource(this.tNATaskEntries);
    console.log('po details',this.tNATaskEntries);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-tNA-task-entries/",element.id]);  
        }


}

 
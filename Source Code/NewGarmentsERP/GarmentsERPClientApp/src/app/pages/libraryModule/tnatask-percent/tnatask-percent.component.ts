import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { TNATaskPercent } from '../../../@core/data/Library-Modul-model/tnatask-percent';
import { TNATaskPercentService } from '../../../@core/mock/library/tnatask-percent.service';
import { TNATaskNameEntryService } from '../../../@core/mock/library/tnatask-name-entry.service';
import { TNATaskNameEntry } from '../../../@core/data/Library-Modul-model/tnatask-name-entry';
import { buyer } from '../../../@core/data/buyer';
import { BuyerProfileService } from '../../../@core/mock/library/buyer-profile.service';
import { BuyerProfile } from '../../../@core/data/Library-Modul-model/buyer-profile';

@Component({
  selector: 'ngx-tnatask-percent',
  templateUrl: './tnatask-percent.component.html',
  styleUrls: ['./tnatask-percent.component.scss']
})
export class TNATaskPercentComponent implements OnInit {
  public buyerListItems:BuyerProfile[] = [];
  public tNATaskNameEntryListItems:TNATaskNameEntry[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = 
  [
    'id',
    'taskNameId',
    'buyerNameId',
    'startPercent',
    'endPercent',
    'noticeBefore'

  
  ];
  Tostr=new Tostr();
  subscription:Subscription;
  tNATaskPercent: TNATaskPercent[]; 
  constructor(
     
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private buyerService:BuyerProfileService,
     private tNATaskNameEntryService:TNATaskNameEntryService,
     private tNATaskPercentService:TNATaskPercentService) { }
    

  ngOnInit() {
 this.gettNATaskPercent();

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
    this.router.navigate(["/pages/add-tNA-task-percent"]);
   
  }
     delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.tNATaskPercentService.deleteTNATaskPercent(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.gettNATaskPercent();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
      }
      gettNATaskPercent(){
    this.subscription=   this.tNATaskPercentService.getTNATaskPercent().subscribe(data=>{
    this.tNATaskPercent=data;
     
    this.tNATaskPercent.forEach(res=>{
    
      this.tNATaskNameEntryService.getTNATaskNameEntry().
      subscribe(data=>{
      this.tNATaskNameEntryListItems=data;
      console.log('tNATaskNameEntryListItems list',this.tNATaskNameEntryListItems)
       let tNAName=this.tNATaskNameEntryListItems.find(data=>data.id==res.taskNameId).tnaTaskName;
        res.taskNameId=tNAName;
        
    });
  
  })

  this.tNATaskPercent.forEach(res=>{
    
    this.buyerService.getAll().
    subscribe(data=>{
    this.buyerListItems=data;
    console.log('buyerListItems list',this.tNATaskNameEntryListItems)
     let buyerName=this.buyerListItems.find(data=>data.id==res.buyerNameId).contactName;
      res.buyerNameId=buyerName;
      
  });

})
    this.dataSource=new MatTableDataSource(this.tNATaskPercent);
    console.log('tNATaskPercent',this.tNATaskPercent);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-tNA-task-percent/",element.id]);  
        }
  


}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { NbToastrService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';
import { JournalSetup } from '../../../@core/data/Library-Modul-model/journal-setup.model';
import { JournalSetupService } from '../../../@core/mock/library/journal-setup.service';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';


@Component({
  selector: 'ngx-journal-setup',
  templateUrl: './journal-setup.component.html',
  styleUrls: ['./journal-setup.component.scss']
})
export class JournalSetupComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'journalTypeId','preFix','startingNumber','status'];
  Tostr=new Tostr();
  subscription:Subscription;
  journalSetup: JournalSetup[]; 

  constructor( private toastrService:NbToastrService,
    private mathdialogService: MatDialogService,
    private router:Router,
    public journalSetupService:JournalSetupService,
    private staticFeaturesService:StaticFeaturesService,) { }

  ngOnInit() {
    this.refresList();
  } 
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  AddNewInpurRow(){
    this.router.navigate(["/pages/Journal-Setup-create"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
              .afterClosed().subscribe(res=>{
                if(res){
                  this.journalSetupService.delete(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getJournalSetupInfoDetails();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
              })
  }
  getJournalSetupInfoDetails(){
            this.subscription=this.journalSetupService.getAll().subscribe(data=>{
            this.journalSetup=data;
            
            this.dataSource=new MatTableDataSource(this.journalSetup);
            console.log('po details',this.journalSetup);
          });
  }
  edit(element){
    this.router.navigate(["/pages/Journal-Setup-edit/",element.id]);  
  }

  refresList(){
    
    this.journalSetupService.getAll().subscribe(item=>{
      item.forEach(element => {

        this.staticFeaturesService.getAllJournalType().
        subscribe(data=>{
     
        let journalTypeName=data.find(f=>f.id==element.journalTypeId).journalTypeName;
        element.journalTypeId=journalTypeName;
         });  

        });

      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }


}

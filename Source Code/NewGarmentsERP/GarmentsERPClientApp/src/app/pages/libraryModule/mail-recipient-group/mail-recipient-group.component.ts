import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { MailRecipientGroup } from '../../../@core/data/Library-Modul-model/mail-recipient-group';
import { MailRecipientGroupService } from '../../../@core/mock/library/mail-recipient-group.service';

@Component({
  selector: 'ngx-mail-recipient-group',
  templateUrl: './mail-recipient-group.component.html',
  styleUrls: ['./mail-recipient-group.component.scss']
})
export class MailRecipientGroupComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
    'id',
    'companyName',
    'mailItem',
    'youHaveSelected',
    'status'
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  mailRecipientGroup:MailRecipientGroup[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     public mailRecipientGroupService:MailRecipientGroupService,
     ) { }
    

  ngOnInit() {
 this.getMailRecipientGroup();

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
    this.router.navigate(["/pages/add-mail-recipient-group"]);
   
  }
    delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.mailRecipientGroupService.deleteMailRecipientGroup(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getMailRecipientGroup();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
    }
  getMailRecipientGroup(){
    this.subscription=this.mailRecipientGroupService.getAllMailRecipientGroup().subscribe(data=>{
    this.mailRecipientGroup=data;
  
    this.dataSource=new MatTableDataSource(this.mailRecipientGroup);
    console.log('mailRecipientGroup',this.mailRecipientGroup);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-mail-recipient-group/",element.id]);  
      }

}

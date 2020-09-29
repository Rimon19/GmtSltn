import { Component, OnInit, ViewChild } from '@angular/core';
import { Tostr } from '../../../@core/data/tostr.model';
import { EmailAddressSetupService } from '../../../@core/mock/library/email-address-setup.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { EmailAddressSetup } from '../../../@core/data/Library-Modul-model/email-address-setup';

@Component({
  selector: 'ngx-email-address-setup',
  templateUrl: './email-address-setup.component.html',
  styleUrls: ['./email-address-setup.component.scss']
})
export class EmailAddressSetupComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
    'id',
    'userType',
    'recipientName',
    'emailAddress'
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  emailAddressSetup:EmailAddressSetup[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     public emailAddressSetupService:EmailAddressSetupService,
     ) { }
    

  ngOnInit() {
 this.getemailAddressSetup();

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
    this.router.navigate(["/pages/add-email-address-setup"]);
   
  }
    delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.emailAddressSetupService.deleteEmailAddressSetup(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getemailAddressSetup();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
    }
  getemailAddressSetup(){
    this.subscription=this.emailAddressSetupService.getAllEmailAddressSetup().subscribe(data=>{
    this.emailAddressSetup=data;
  
    this.dataSource=new MatTableDataSource(this.emailAddressSetup);
    console.log('emailAddressSetup',this.emailAddressSetup);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-email-address-setup/",element.id]);  
      }


}

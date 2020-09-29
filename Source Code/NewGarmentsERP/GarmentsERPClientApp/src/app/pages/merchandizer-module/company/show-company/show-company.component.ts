import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs';
import { CompanyService } from '../../../../@core/mock/company.service';
import { AddCompanyComponent } from '../add-company/add-company.component';
import { NbDialogService, NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalLogicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';
import { company } from '../../../../@core/data/company';
import { MatPaginator, MatTableDataSource, MatSort, MatSnackBar } from '@angular/material';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { ToasterConfig } from 'angular2-toaster';
import { Tostr } from '../../../../@core/data/tostr.model';

@Component({
  selector: 'ngx-show-company',
  templateUrl: './show-company.component.html',
  styleUrls: ['./show-company.component.scss']
})
export class ShowCompanyComponent implements OnInit,OnDestroy {
  status: NbComponentStatus = 'primary';

  Tostr=new Tostr();
  company:company;
  subscription:Subscription;
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate:true
    },
     edit: {
       
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave:true
    },
    
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    details: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      compID: {
        title: 'Company Id',
        type: 'int',
        "show": false
      },
      company_Name: {
        title: 'Company Name',
        type: 'string',
       
      },
      details: {
        title: 'Company Details',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();  
  public companyListItems: Array<company> = [];
   constructor(private companyService: CompanyService,
    private dialogService: NbDialogService,
    private mathdialogService: MatDialogService,
    private snackBar:MatSnackBar,
    private toastrService:NbToastrService
    ) {
   
    }
   
  open() {
    this.dialogService.open(AddCompanyComponent, {
     
    });
  }
 
  ngOnInit() {
    this.refreshcompanyList();
    if (this.settings.columns["compID"].hasOwnProperty("show")) {
      if (this.settings.columns["compID"].show ==false) {
       delete  this.settings.columns["compID"];
         
      }
}
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  refreshcompanyList(){
   this.subscription= this.companyService.getAllCompany().subscribe(data=>{
      this.source.load(data);
      this.companyListItems=data;
      console.log(this.companyListItems);
    });
  }
  

  addRecord(event) {
    this.company = {
      compID :0,
      company_Name : event.newData.company_Name,
       details : event.newData.details
                
   };
  console.log(this.company);
    if(this.company.company_Name!=""&&this.company.details!=""){
    this.subscription=  this.companyService.addCompany(this.company ).subscribe(s=>{
      
       this.Tostr.showToast(this.status,"", "Saved Successfully", "",this.toastrService);
       this.refreshcompanyList();

     })
   }else{
     if(this.company.company_Name==""){
      this.Tostr.showToast("danger","Company Name ", "Filed is Requird ! ", "",this.toastrService);
     }
     if(this.company.details==""){
      this.Tostr.showToast("danger"," Company Details ", "Filed is Requird ! ", "",this.toastrService);
    }
       
   }
  
   }
   
   updateRecord(event) {
       this.company = {
               compID:event.newData.compID,
               company_Name : event.newData.company_Name,
              details : event.newData.details
                
              };

              if(this.company.company_Name!=""&&this.company.details!=""){
                this.subscription= this.companyService.updateCompany(this.company).subscribe(s=>{
                  this.Tostr.showToast(this.status,"", "Updated Successfully", "",this.toastrService);
                  this.refreshcompanyList();
                })
              }
              else{
                if(this.company.company_Name==""){
                 this.Tostr.showToast("danger","Company Name ", "Filed is Requird ! ", "",this.toastrService);
                }
                if(this.company.details==""){
                 this.Tostr.showToast("danger"," Company Details ", "Filed is Requird ! ", "",this.toastrService);
               }
            
              }
     }  

    deleteRecord(event){
               console.log(event.data.compID);
               this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.companyService.deleteCompany(event.data.compID).subscribe(res=>{
                    this.refreshcompanyList();
                    this.Tostr.showToast(this.status,"", "Deleleted", "Successfully",this.toastrService);
                  });
                }
               })
          
           }                       
          
         
         
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { NbToastrService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';
import { BankInfo } from '../../../@core/data/Library-Modul-model/bank-info.model';
import { AccountInfo } from '../../../@core/data/Library-Modul-model/account-info.model';
import { BankInfoService } from '../../../@core/mock/library/bank-info.service';
import { AccountInfoService } from '../../../@core/mock/library/account-info.service';


@Component({
  selector: 'ngx-bank-info',
  templateUrl: './bank-info.component.html',
  styleUrls: ['./bank-info.component.scss']
})
export class BankInfoComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'bankName','branchName','status','totalAccount'];
  Tostr=new Tostr();
  subscription:Subscription;
  bankInfo: BankInfo[]; 
  accountInfo: AccountInfo[]; 
  


  constructor(private toastrService:NbToastrService,
    private mathdialogService: MatDialogService,
    private router:Router,
    public BankInfoService:BankInfoService,
    private accountInfoService:AccountInfoService) { } 

  ngOnInit() {
 this.countTotalAccount();
 
  }

  countTotalAccount(){

    this.BankInfoService.getAll().subscribe(bankInfoData=>{
      bankInfoData.forEach(element => {
        this.accountInfoService.getAll().subscribe(accData=>{
          let accountListByBankId=accData.filter(f=>f.bankInfoId==element.id);
          let countAccount=accountListByBankId.length;
          element.totalAccount=countAccount; 
        });
        
      });
      this.dataSource=new MatTableDataSource(bankInfoData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
   
    })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  
  AddNewInpurRow(){
    this.router.navigate(["/pages/BankInfo-create"]);
   
  }

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
              .afterClosed().subscribe(res=>{
                if(res){
                  this.BankInfoService.delete(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getJournalSetupInfoDetails();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
              })
  }
  getJournalSetupInfoDetails(){
            this.subscription=this.BankInfoService.getAll().subscribe(data=>{
            this.bankInfo=data;
            
            this.dataSource=new MatTableDataSource(this.bankInfo);
            console.log('po details',this.bankInfo);
          });
  }
  edit(element){
    this.router.navigate(["/pages/BankInfo-edit/",element.id]);  
  }

 
}


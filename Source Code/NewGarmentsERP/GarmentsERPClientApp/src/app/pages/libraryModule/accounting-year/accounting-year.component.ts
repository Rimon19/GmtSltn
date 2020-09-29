import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { CountryService } from '../../../@core/mock/country.service';
import { AccountingYearService } from '../../../@core/mock/library/accounting-year.service';
import { CompanyService } from '../../../@core/mock/company.service';

@Component({
  selector: 'ngx-accounting-year',
  templateUrl: './accounting-year.component.html',
  styleUrls: ['./accounting-year.component.scss']
})
export class AccountingYearComponent implements OnInit {

 
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'companyId','startingYear','currentYear','startingMonth','endingMonth','periodName','isActive'];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private companyService:CompanyService,
     private router:Router,
     public accountingYearService:AccountingYearService) { }

  ngOnInit() {
 this.refresList();

  }
 
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-accounting-year"]);
   
  }
  edit(element){
    this.router.navigate(["/pages/edit-accounting-year/",element.id]);  
}

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.accountingYearService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }


  refresList(){
    
    this.accountingYearService.getAll().subscribe(item=>{
     
      item.forEach(element => {

        this.companyService.getAllCompany().subscribe(data=>{
          let companyName=data.find(f=>f.compID==element.companyId).company_Name;
          element.companyId=companyName;
        });
          
        });
     
      
      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }

}

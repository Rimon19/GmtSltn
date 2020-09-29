import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { QuotationInquery } from '../../../@core/data/marchanzider-model/quotation-inquery';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { QuotationInqueryService } from '../../../@core/mock/marchandizer/quotation-inquery.service';
import { CompanyService } from '../../../@core/mock/company.service';
import { company } from '../../../@core/data/company';
import { BuyerProfileService } from '../../../@core/mock/library/buyer-profile.service';
import { BuyerProfile } from '../../../@core/data/Library-Modul-model/buyer-profile';

@Component({
  selector: 'ngx-quotation-inquery',
  templateUrl: './quotation-inquery.component.html',
  styleUrls: ['./quotation-inquery.component.scss']
})
export class QuotationInqueryComponent implements OnInit {
  public companyListItems:company[]=[];
  public buyerListItems:BuyerProfile[] = [];
  public  quotationInquery:QuotationInquery[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
'id',
'companyId',
'buyerId',
'styleRefName',
'inqRcvdDate',
'bulkEstShipDate',
'fabrication'

  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private buyerProfileService:BuyerProfileService,
     private companyService:CompanyService,
     private router:Router,
     private quotationInqueryService:QuotationInqueryService,
     ) { }
    

  ngOnInit() {
 this.getQuotationInquery();

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
    this.router.navigate(["/pages/add-quotation-inquery"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.quotationInqueryService.deleteQuotationInquery(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getQuotationInquery();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  
       getQuotationInquery(){
    this.subscription=   this.quotationInqueryService.getAllQuotationInquery().subscribe(data=>{
    this.quotationInquery=data;
     this.quotationInquery.forEach(element=>{

       //Get Company Name from Company Table
        this.companyService.getAllCompany().subscribe(data=>{
        this.companyListItems=data;
        let companyName=this.companyListItems.find(f=>f.compID==element.companyId).company_Name;
        element.companyId=companyName;
        
        
       //Get Buyer Name from Buyer Table
        this.buyerProfileService.getAll().subscribe(data=>{
          this.buyerListItems=data;
          let buyerName=this.buyerListItems.find(f=>f.id==element.buyerId).contactName;
           element.buyerId=buyerName;
        }) 

       })
     })
    this.dataSource=new MatTableDataSource(this.quotationInquery);
    console.log('quotationInquery',this.quotationInquery);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-quotation-inquery/",element.id]);  
      }

}

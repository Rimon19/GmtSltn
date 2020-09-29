import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Tostr } from '../../../@core/data/tostr.model';
import { MultipleJobWiseTrimsBookingV2Service } from '../../../@core/mock/marchandizer/multiple-job-wise-trims-booking-v2.service';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { MultipleJobWiseTrimsBookingV2 } from '../../../@core/data/marchanzider-model/multiple-job-wise-trims-booking-v2';
import { CompanyService } from '../../../@core/mock/company.service';
import { company } from '../../../@core/data/company';
import { BuyerProfileService } from '../../../@core/mock/library/buyer-profile.service';
import { BuyerProfile } from '../../../@core/data/Library-Modul-model/buyer-profile';
import { SupplierProfileService } from '../../../@core/mock/library/supplier-profile.service';
import { SupplierProfile } from '../../../@core/data/Library-Modul-model/supplier-profile';
import { Currency } from '../../../@core/data/marchanzider-model/currency.model';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';
@Component({
  selector: 'ngx-multiple-job-wise-trims-booking-v2',
  templateUrl: './multiple-job-wise-trims-booking-v2.component.html',
  styleUrls: ['./multiple-job-wise-trims-booking-v2.component.scss']
})
export class MultipleJobWiseTrimsBookingV2Component implements OnInit { 
  public companyListItems: company[] = [];
  public buyerListItems: BuyerProfile[] = [];
  public CurrencyListItems: any[] = [];
  public SupplierProfileListItems: SupplierProfile[] = [];
  public multipleJobWiseTrimsBookingV2:MultipleJobWiseTrimsBookingV2[]
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id','bookingNo','shipmentMonth','shipmentYear','companyNameId','buyerNameId','bookingDate','payMode','deliveryDate','currencyId','supplierNameId','materialSource','attention','readyToApproved','source','remarks','level','deliveryTo','unapproverequest',];
  Tostr=new Tostr();
  filterValues:any={};
    filterSelectObj  = [
      {
          name: 'BookingNo',
          columnProp: 'bookingNo'
        },{
          name: 'ShipmentMonth',
          columnProp: 'shipmentMonth'
        },{
          name: 'ShipmentYear',
          columnProp: 'shipmentYear'
        },{
          name: 'CompanyNameId',
          columnProp: 'companyNameId'
        },{
          name: 'BuyerNameId',
          columnProp: 'buyerNameId'
        },{
          name: 'BookingDate',
          columnProp: 'bookingDate'
        },{
          name: 'DeliveryDate',
          columnProp: 'deliveryDate'
        },{
          name: 'PayMode',
          columnProp: 'payMode'
        },{
          name: 'CurrencyId',
          columnProp: 'currencyId'
        },{
          name: 'SupplierNameId',
          columnProp: 'supplierNameId'
        },{
          name: 'Source',
          columnProp: 'source'
        }, 
    ]
  constructor(private multipleJobWiseTrimsBookingV2Service :MultipleJobWiseTrimsBookingV2Service ,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private supplierProfileService:SupplierProfileService,
     private buyerService: BuyerProfileService,
     private staticFeaturesService:StaticFeaturesService,
     private companyService:CompanyService,
     ) { }
  
  ngOnInit() {
  this.refresList();
  }
  
  applyFilter(filterValue: string) {
    
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  redirectToAddPage(){
    this.router.navigate(["/pages/add-multiple-jobWise-trimsBookingV2"]);
   
  }
  redirectToEditPage(element){
    this.router.navigate(["/pages/edit-multiple-jobWise-trimsBookingV2",element.id]);  
  }
  
  onDelete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.multipleJobWiseTrimsBookingV2Service .delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  
  refresList(){    
    this.multipleJobWiseTrimsBookingV2Service .getAll().subscribe(item=>{
     this.multipleJobWiseTrimsBookingV2=item;
      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.DropDownIdToNameDisplay();   
    })
  }
  // This method used for repleceing DropDownId To DropDownName
   DropDownIdToNameDisplay(){
    this.multipleJobWiseTrimsBookingV2.forEach(res=>{
      //Get company name from company table and then assaign to companyID
       this.companyService.getAllCompany().subscribe(data=>{
         this.companyListItems=data;
             let companyName=this.companyListItems.find(f=>f.compID==res.companyNameId).company_Name;
             res.companyNameId=companyName
       });

        //Get buyer name from buyer table and then assaign to buyerID
        this.buyerService.getAll().subscribe((data) => {
          this.buyerListItems = data;
          let buyerName = this.buyerListItems.find((f) => f.id == res.buyerNameId)
            .contactName;
          res.buyerNameId=buyerName;
        });


        //Get supplier Profile name from SupplierProfile table and then assaign to supplierNameId
        this.supplierProfileService.getAll().subscribe(data=>{
              this.SupplierProfileListItems=data;
              let supplierName=this.SupplierProfileListItems.find(f=>f.id==res.supplierNameId).supplierName;
              res.supplierNameId=supplierName;
        })
             
         //Get currency name from DiscountMethod table and then assaign to currencyId
        this.staticFeaturesService.getAllDiscountMethod().subscribe(data=>{
          this.CurrencyListItems=data;
          let currencyName=this.CurrencyListItems.find(f=>f.id==res.currencyId).discountMethodName;
          res.currencyId=currencyName;
        })
      

     });     
    }
  filterChange(filter, event) {
    //let filterValues = {}
    this.dataSource.filterPredicate = this.createFilter(); 
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }
  
  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }
  
      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
              if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
                found = true
              }
            });
          }
          return found
        } else {
          return true;
        }
      }
      return nameSearch()
    }
    return filterFunction
  }
  
  resetFilters() {
    this.filterValues = {}
  
    this.filterSelectObj.forEach((value:any, key) => {
      value.modelValue = undefined;
    })
    this.dataSource.filter = "";
    this.refresList();
  }   
  

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { ShortTrimsBooking } from '../../../@core/data/marchanzider-model/short-trims-booking';
import { ShortTrimsBookingService } from '../../../@core/mock/marchandizer/short-trims-booking.service';
import { CompanyService } from '../../../@core/mock/company.service';
import { company } from '../../../@core/data/company';
import { BuyerProfileService } from '../../../@core/mock/library/buyer-profile.service';
import { BuyerProfile } from '../../../@core/data/Library-Modul-model/buyer-profile';
import { SupplierProfileService } from '../../../@core/mock/library/supplier-profile.service';
import { SupplierProfile } from '../../../@core/data/Library-Modul-model/supplier-profile';

@Component({
  selector: 'ngx-short-trims-booking',
  templateUrl: './short-trims-booking.component.html',
  styleUrls: ['./short-trims-booking.component.scss']
})
export class ShortTrimsBookingComponent implements OnInit {
  public companyListItems: company[] = [];
  public buyerListItems: BuyerProfile[] = [];
  public supplierProfileItems: SupplierProfile[] = [];
  // @ViewChild("ShortTrimsBookingsort", { static: true }) ShortTrimsBookingsort: MatSort;
  // @ViewChild("ShortTrimsBookingPaginator", { static: true })
  // ShortTrimsBookingPaginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
    'id',
    'bookingNo',
    'bookingMonth',
    'bookingYear',
    'jobNo',
    'companyNameId',
    'buyerNameId',
    'payMode',
    'supplierNameId',
    'materialSource',
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  shortTrimsBooking:ShortTrimsBooking[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private companyService: CompanyService,
     private buyerService:BuyerProfileService,
     private supplierProfileService:SupplierProfileService,
     private router:Router,
     public shortTrimsBookingService:ShortTrimsBookingService,
     ) { }
    

  ngOnInit() {
 this.getShortTrimsBooking();

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
    this.router.navigate(["/pages/add-short-trims-booking"]);
   
  }
    delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.shortTrimsBookingService.deleteShortTrimsBooking(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getShortTrimsBooking();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
    }
  getShortTrimsBooking(){
    this.subscription=this.shortTrimsBookingService.getAllShortTrimsBooking().subscribe(data=>{
    this.shortTrimsBooking=data;
    this.shortTrimsBooking.forEach((res) => {
  //Get company name from company table and then assaign to companyNameId
  this.companyService.getAllCompany().subscribe((data) => {
    this.companyListItems = data;
    let companyName = this.companyListItems.find(
      (f) => f.compID == res.companyNameId
    ).company_Name;
    res.companyNameId = companyName;


 //Get buyer name from buyer table and then assaign to buyerNameId
 this.buyerService.getAll().subscribe((data) => {
  this.buyerListItems = data;
  let buyerName = this.buyerListItems.find((f) => f.id == res.buyerNameId)
    .contactName;
  res.buyerNameId = buyerName;
});
 //Get supplierProfile Name from supplierProfile table and then assaign to supplierNameId
 this.supplierProfileService.getAllSupplier().subscribe((data) => {
  this.supplierProfileItems = data;
  let supplierProfileName = this.supplierProfileItems.find((f) => f.id == res.supplierNameId)
    .supplierName;
  res.supplierNameId = supplierProfileName;
});

  });
});
    this.dataSource=new MatTableDataSource(this.shortTrimsBooking);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-short-trims-booking/",element.id]);  
      }

}

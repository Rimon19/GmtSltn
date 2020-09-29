import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { company } from '../../../../@core/data/company';
import { OrderInfo } from '../../../../@core/data/marchanzider-model/order-info.model';
import { SupplierProfile } from '../../../../@core/data/Library-Modul-model/supplier-profile';
import { CompanyService } from '../../../../@core/mock/company.service';
import { BuyerProfileService } from '../../../../@core/mock/library/buyer-profile.service';
import { ShortTrimsBookingService } from '../../../../@core/mock/marchandizer/short-trims-booking.service';
import { SupplierProfileService } from '../../../../@core/mock/library/supplier-profile.service';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { NbToastrService } from '@nebular/theme';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { FetchInitialOrderService } from '../../../../@core/mock/fetch-initial-order.service';
import { NgForm } from '@angular/forms';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { BuyerProfile } from '../../../../@core/data/Library-Modul-model/buyer-profile';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-edit-short-trims-booking',
  templateUrl: './edit-short-trims-booking.component.html',
  styleUrls: ['./edit-short-trims-booking.component.scss']
})
export class EditShortTrimsBookingComponent implements OnInit {
  editedId:any;
  Tostr = new Tostr();
  public companyListItems: company[] = [];
  public buyerListItems: BuyerProfile[] = [];
  public  orderInfoList: OrderInfo[];
  public  supplierProfileList:SupplierProfile[];
  public  bookingMonthList:any[];
  public  bookingYearsList:any[];
  public currencyList: any[] = [];
  public readyToApprovedList: any[] = [];
  public sourceList: any[] = [];
  public materialSourceList: any[] = [];
  public payModeList: any[] = [];
  constructor(
    private companyService: CompanyService,
    private buyerService:BuyerProfileService,
    public shortTrimsBookingService:ShortTrimsBookingService,
    private supplierProfileService:SupplierProfileService,
    private staticFeaturesService:StaticFeaturesService,
    private toastrService:NbToastrService,
    private route:ActivatedRoute,
    private router:Router,
    private dateResizeService:DateResizeService,
    private fetchInitialOrderService:FetchInitialOrderService,
  ) { 
    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.shortTrimsBookingService.getAllShortTrimsBooking().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.shortTrimsBookingService.shortTrimsBooking=items;
  })  
  }

  ngOnInit() {
    this.companyDDL();
    this.buyerDDL();
    this.jobNumberDDL();
    this.supplierProfileDDL();
    this.bookingMonthDDL();
    this.bookingYearDDL();
    this.currencyDDL();
    this.readyToApprovedDDL();
    this.sourceDDL();
    this.MaterialSourceDDL();
    this.PayModeDDL();
    this.resetFormForShortTrimsBooking();
  }
  resetFormForShortTrimsBooking(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.shortTrimsBookingService.shortTrimsBooking = {
      id:0,
      bookingNo:'',
      bookingMonth:'',
      bookingYear:'',
      jobNo:'',
       companyNameId:'',
       buyerNameId:'',
       bookingDate:'',
       payMode:'',
       deliveryDate:'',
       currencyId:'',
       exchangeRate:0,
       supplierNameId:'',
      source:'',
      selectItem:'',
      attention:'',
      readyToApproved:'',
      materialSource :'',
      entryDate :'',
      entryBy :'',
       status :'',   
     
    
    }
    
   }
  companyDDL() {
    this.companyService.getAllCompany().subscribe((data) => {
      this.companyListItems = data;
    });
  }
  buyerDDL() {
    this.buyerService.getAll().subscribe((data) => {
      this.buyerListItems = data;  
    });
  }
  jobNumberDDL() {
    this.fetchInitialOrderService
      .getInitialAllOrderList().subscribe(data=>{
        this.orderInfoList=data;  
      });
    }
    supplierProfileDDL(){
      this.supplierProfileService.getAll().subscribe(data=>{
        this.supplierProfileList=data;     
      })
    }
    bookingMonthDDL(){
      this.staticFeaturesService.getAllMonths().subscribe(data=>{
        this.bookingMonthList=data;
        
      })
    }
    bookingYearDDL(){
      this.staticFeaturesService.getAllYears().subscribe(data=>{
        this.bookingYearsList=data;
     
      })
    }
    currencyDDL() {
      this.staticFeaturesService.getAllDiscountMethod().subscribe((data) => {
        this.currencyList = data;
       console.log(this.currencyList)
      });
    }
    readyToApprovedDDL() {
    this.readyToApprovedList=this.staticFeaturesService.getYesOrNo();
    }
    sourceDDL() {
    this.sourceList=this.staticFeaturesService.getInvetoryILEorLandedCostStandardSource();
    }
    MaterialSourceDDL() {
    this.materialSourceList=this.staticFeaturesService.getMaterialSource();
    }
    PayModeDDL() {
    this.payModeList=this.staticFeaturesService.getPayMode();
    }
    update(){
      this.shortTrimsBookingService.shortTrimsBooking.entryBy=EntryBy.userName;
      this.shortTrimsBookingService.shortTrimsBooking.entryDate=this.dateResizeService.dateResize(new Date);
      this.shortTrimsBookingService.shortTrimsBooking.status='Active';
      

      this.shortTrimsBookingService.shortTrimsBooking.bookingDate=this.dateResizeService.dateResize(this.shortTrimsBookingService.shortTrimsBooking.bookingDate);
      this.shortTrimsBookingService.shortTrimsBooking.deliveryDate=this.dateResizeService.dateResize(this.shortTrimsBookingService.shortTrimsBooking.deliveryDate);
      this.shortTrimsBookingService.updateShortTrimsBooking(this.shortTrimsBookingService.shortTrimsBooking).subscribe(data=>{

      });
      this.Tostr.showToast('primary','', 'update Successfully', '',this.toastrService);
      this.router.navigate(["/pages/short-trims-booking"]); 
      
    }
    backToTaskEntriesHomePage(){
      this.router.navigate(['/pages/short-trims-booking']);
    } 
}

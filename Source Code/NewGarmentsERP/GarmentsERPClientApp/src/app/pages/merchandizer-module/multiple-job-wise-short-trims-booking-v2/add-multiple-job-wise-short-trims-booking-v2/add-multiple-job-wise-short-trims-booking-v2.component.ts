import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { MultipleJobWiseShortTrimsBookingV2Service } from '../../../../@core/mock/marchandizer/multiple-job-wise-short-trims-booking-v2.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { EntryBy, } from '../../../../@core/data/Shared/entry-by';
import { ApprovedBy } from './../../../../@core/data/Shared/approved-by';
@Component({
  selector: 'ngx-add-multiple-job-wise-short-trims-booking-v2',
  templateUrl: './add-multiple-job-wise-short-trims-booking-v2.component.html',
  styleUrls: ['./add-multiple-job-wise-short-trims-booking-v2.component.scss']
})
export class AddMultipleJobWiseShortTrimsBookingV2Component implements OnInit {

  Tostr=new Tostr();
  
  constructor(
  public multipleJobWiseShortTrimsBookingV2Service:MultipleJobWiseShortTrimsBookingV2Service,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService
    ) { }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getMonth();
this.dropdownValueService.getYear();
this.dropdownValueService.getCompany();
this.dropdownValueService.getBuyers();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getSuppliers();
this.dropdownValueService.getSource();
this.dropdownValueService.getYesNo();
this.dropdownValueService.getLevel();

  }

   resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.multipleJobWiseShortTrimsBookingV2Service.multipleJobWiseShortTrimsBookingV2 = {
    id: 0,
    bookingNo: '' ,
shipmentMonth: '' ,
shipmentYear: '' ,
companyNameId: '' ,
buyerNameId: '' ,
bookingDate: '' ,
deliveryDate: '' ,
payMode: '' ,
currencyId:2,
supplierNameId: '' ,
source: '' ,
attention: '' ,
readyToApproved: '' ,
level: '' ,
remarks: '' ,

    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }
  
 }


  onSubmit(){  
    if(this.multipleJobWiseShortTrimsBookingV2Service.multipleJobWiseShortTrimsBookingV2.currencyId==undefined||this.multipleJobWiseShortTrimsBookingV2Service.multipleJobWiseShortTrimsBookingV2.currencyId==''){
      this.multipleJobWiseShortTrimsBookingV2Service.multipleJobWiseShortTrimsBookingV2.currencyId=0;
    }
    this.multipleJobWiseShortTrimsBookingV2Service.multipleJobWiseShortTrimsBookingV2.bookingDate=this.dateResizeService.dateResize(this.multipleJobWiseShortTrimsBookingV2Service.multipleJobWiseShortTrimsBookingV2.bookingDate); 
    this.multipleJobWiseShortTrimsBookingV2Service.multipleJobWiseShortTrimsBookingV2.deliveryDate=this.dateResizeService.dateResize(this.multipleJobWiseShortTrimsBookingV2Service.multipleJobWiseShortTrimsBookingV2.deliveryDate); 
  this.multipleJobWiseShortTrimsBookingV2Service.multipleJobWiseShortTrimsBookingV2.approvedDate=this.dateResizeService.dateResize(new Date);
  this.multipleJobWiseShortTrimsBookingV2Service.multipleJobWiseShortTrimsBookingV2.approvedBy=ApprovedBy.userName;
  this.multipleJobWiseShortTrimsBookingV2Service.multipleJobWiseShortTrimsBookingV2.isApproved=true;
  this.multipleJobWiseShortTrimsBookingV2Service.multipleJobWiseShortTrimsBookingV2.entryBy=EntryBy.userName;
  this.multipleJobWiseShortTrimsBookingV2Service.multipleJobWiseShortTrimsBookingV2.status='Active';
this.multipleJobWiseShortTrimsBookingV2Service.multipleJobWiseShortTrimsBookingV2.entryDate=this.dateResizeService.dateResize(new Date);
  this.multipleJobWiseShortTrimsBookingV2Service.add(this.multipleJobWiseShortTrimsBookingV2Service.multipleJobWiseShortTrimsBookingV2).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.resetForm();
   this.router.navigate(["/pages/multiple-jobWise-short-BookingV2"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/multiple-jobWise-trimsBookingV2']);
    }
    
    
  

}

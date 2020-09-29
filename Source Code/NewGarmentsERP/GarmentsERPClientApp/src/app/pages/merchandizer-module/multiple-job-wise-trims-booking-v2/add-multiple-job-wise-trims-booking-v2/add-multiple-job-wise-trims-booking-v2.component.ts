
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { MultipleJobWiseTrimsBookingV2Service } from '../../../../@core/mock/marchandizer/multiple-job-wise-trims-booking-v2.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';

@Component({
  selector: 'ngx-add-multiple-job-wise-trims-booking-v2',
  templateUrl: './add-multiple-job-wise-trims-booking-v2.component.html',
  styleUrls: ['./add-multiple-job-wise-trims-booking-v2.component.scss']
})
export class AddMultipleJobWiseTrimsBookingV2Component implements OnInit {
  Tostr=new Tostr();
  constructor(
  public multipleJobWiseTrimsBookingV2Service :MultipleJobWiseTrimsBookingV2Service ,
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
this.dropdownValueService.getMaterialSource();
this.dropdownValueService.getYesNo();
this.dropdownValueService.getSource();
this.dropdownValueService.getLevel();

  }

   resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.multipleJobWiseTrimsBookingV2Service .multipleJobWiseTrimsBookingV2 = {
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
materialSource: '' ,
attention: '' ,
readyToApproved: '' ,
source: '' ,
remarks: '' ,
level: '' ,
deliveryTo: '' ,
unapproverequest: '' ,

    entryDate :'',
    entryBy :'',
    status :''
  }
  
 }


  onSubmit(){  
    
this.multipleJobWiseTrimsBookingV2Service .multipleJobWiseTrimsBookingV2.entryBy=EntryBy.userName;
this.multipleJobWiseTrimsBookingV2Service .multipleJobWiseTrimsBookingV2.status='Active';
this.multipleJobWiseTrimsBookingV2Service .multipleJobWiseTrimsBookingV2.entryDate=this.dateResizeService.dateResize(new Date);

this.multipleJobWiseTrimsBookingV2Service .multipleJobWiseTrimsBookingV2.bookingDate=this.dateResizeService.dateResize(this.multipleJobWiseTrimsBookingV2Service .multipleJobWiseTrimsBookingV2.bookingDate);
this.multipleJobWiseTrimsBookingV2Service .multipleJobWiseTrimsBookingV2.deliveryDate=this.dateResizeService.dateResize(this.multipleJobWiseTrimsBookingV2Service .multipleJobWiseTrimsBookingV2.deliveryDate);
if(this.multipleJobWiseTrimsBookingV2Service .multipleJobWiseTrimsBookingV2.currencyId==''||this.multipleJobWiseTrimsBookingV2Service .multipleJobWiseTrimsBookingV2.currencyId==undefined){
  this.multipleJobWiseTrimsBookingV2Service .multipleJobWiseTrimsBookingV2.currencyId=0;
}

  this.multipleJobWiseTrimsBookingV2Service .add(this.multipleJobWiseTrimsBookingV2Service .multipleJobWiseTrimsBookingV2).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
   this.router.navigate(["/pages/multiple-jobWise-trimsBookingV2"]);
   this.resetForm();
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/multiple-jobWise-trimsBookingV2']);
    }
    
    
  
      
    

}

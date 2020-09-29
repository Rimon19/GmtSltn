import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';  
import { Tostr } from '../../../../@core/data/tostr.model';
import { MultipleJobWiseTrimsBookingV2Service } from '../../../../@core/mock/marchandizer/multiple-job-wise-trims-booking-v2.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
@Component({
  selector: 'ngx-edit-multiple-job-wise-trims-booking-v2',
  templateUrl: './edit-multiple-job-wise-trims-booking-v2.component.html',
  styleUrls: ['./edit-multiple-job-wise-trims-booking-v2.component.scss']
})
export class EditMultipleJobWiseTrimsBookingV2Component implements OnInit {
  
  editedId;
  Tostr=new Tostr();
  
  constructor(
  public multipleJobWiseTrimsBookingV2Service :MultipleJobWiseTrimsBookingV2Service ,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService
    ) {
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.multipleJobWiseTrimsBookingV2Service .getAll().subscribe(data=>{
 let items=  data.find(f=>f.id==this.editedId);
 console.log(items);
 this.multipleJobWiseTrimsBookingV2Service .multipleJobWiseTrimsBookingV2=items;
  });

     }

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
currencyId: '' ,
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
  this.multipleJobWiseTrimsBookingV2Service .update(this.multipleJobWiseTrimsBookingV2Service .multipleJobWiseTrimsBookingV2).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
   this.router.navigate(["/pages/multiple-jobWise-trimsBookingV2"]);
 
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/multiple-jobWise-trimsBookingV2']);
    }

    
    
  


}

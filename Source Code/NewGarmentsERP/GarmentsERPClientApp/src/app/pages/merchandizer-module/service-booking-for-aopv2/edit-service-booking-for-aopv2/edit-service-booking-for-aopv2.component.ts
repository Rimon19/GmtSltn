  import { Component, OnInit } from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { Router, ActivatedRoute } from '@angular/router';
  import { NbToastrService } from '@nebular/theme';    
import { Tostr } from '../../../../@core/data/tostr.model';
import { ServiceBookingForAOPV2Service } from '../../../../@core/mock/marchandizer/service-booking-for-aopv2.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';

@Component({
  selector: 'ngx-edit-service-booking-for-aopv2',
  templateUrl: './edit-service-booking-for-aopv2.component.html',
  styleUrls: ['./edit-service-booking-for-aopv2.component.scss']
})
export class EditServiceBookingForAOPV2Component implements OnInit {

  editedId;
  Tostr=new Tostr();
  
  constructor(
  public serviceBookingForAOPV2Service:ServiceBookingForAOPV2Service,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService
    ) {

    
  
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.serviceBookingForAOPV2Service.getAll().subscribe(data=>{
 let items=  data.find(f=>f.id==this.editedId);
 this.serviceBookingForAOPV2Service.serviceBookingForAOPV2=items;
  });

     }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getMonth();
this.dropdownValueService.getYear();
this.dropdownValueService.getCompany();
this.dropdownValueService.getBuyers();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getSource();
this.dropdownValueService.getSuppliers();
this.dropdownValueService.getYesNo();
this.dropdownValueService.getLevel();

  }

   resetForm(form?:NgForm){
if(form!=null)
form.resetForm();
this.serviceBookingForAOPV2Service.serviceBookingForAOPV2 = {
  id: 0,
  bookingNo: '' ,
bookingMonth: '' ,
bookingYear: '' ,
companyNameId: '' ,
buyerNameId: '' ,
currencyId: '' ,
exchangeRate: '' ,
bookingDate: '' ,
deliveryDate: '' ,
payMode: '' ,
source: '' ,
supplierNameId: '' ,
isShort: '' ,
attention: '' ,
level: '' ,

  entryDate :'',
  entryBy :'',
  approvedDate :'',
  approvedBy :'',
  isApproved :false,
  status :''
}

}


  onSubmit(){  
    
    
 
  this.serviceBookingForAOPV2Service.serviceBookingForAOPV2.approvedDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForAOPV2Service.serviceBookingForAOPV2.bookingDate=this.dateResizeService.dateResize(this.serviceBookingForAOPV2Service.serviceBookingForAOPV2.bookingDate);
  this.serviceBookingForAOPV2Service.serviceBookingForAOPV2.deliveryDate=this.dateResizeService.dateResize(this.serviceBookingForAOPV2Service.serviceBookingForAOPV2.deliveryDate);
  this.serviceBookingForAOPV2Service.serviceBookingForAOPV2.approvedBy=ApprovedBy.userName;
  this.serviceBookingForAOPV2Service.serviceBookingForAOPV2.isApproved=true;
  this.serviceBookingForAOPV2Service.serviceBookingForAOPV2.entryBy=EntryBy.userName;
  this.serviceBookingForAOPV2Service.serviceBookingForAOPV2.status='Active';
this.serviceBookingForAOPV2Service.serviceBookingForAOPV2.entryDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForAOPV2Service.update(this.serviceBookingForAOPV2Service.serviceBookingForAOPV2).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
   this.resetForm();
   this.router.navigate(["/pages/service-booking-for-aopv2"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/service-booking-for-aopv2']);
    }

    
    
  

}

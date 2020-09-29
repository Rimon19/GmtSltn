import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { ServiceBookingForAOPWithoutOrderDetailsService } from '../../../../@core/mock/marchandizer/service-booking-for-aopwithout-order-details.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
@Component({
  selector: 'ngx-add-service-booking-for-aopwithout-order-details',
  templateUrl: './add-service-booking-for-aopwithout-order-details.component.html',
  styleUrls: ['./add-service-booking-for-aopwithout-order-details.component.scss']
})
export class AddServiceBookingForAOPWithoutOrderDetailsComponent implements OnInit {
  Tostr=new Tostr(); 
  constructor(
  public serviceBookingForAOPWithoutOrderDetailsService:ServiceBookingForAOPWithoutOrderDetailsService,
  private router:Router,
  private dateResizeService:DateResizeService,
  private datapassingService:DatapassingService,
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService
    ) { }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getfabricSourceList();
  this.dropdownValueService.getFabricDescription();
this.dropdownValueService.getUom();
  

  }

   resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails = {
    id: 0,
    serviceBookingForAOPWithoutOrderId: 0,
    fabricSource: '' ,
fabricDescriptionId: '' ,
aOPGSM: '' ,
aOPDia: '' ,
uOMId: '' ,
artworkNo: '' ,
gmtsColor: '' ,
wOQnty: '' ,
aopRate: '' ,
amount: '' ,
deliveryStartDate: '' ,
deliveryEndDate: '' ,
remarks: '' ,
printingColor: '' ,

    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }
  
 }
 WOQntyCalculate(formObj){
  formObj.serviceBookingForAOPWithoutOrderDetails.amount=formObj.serviceBookingForAOPWithoutOrderDetails.wOQnty*formObj.serviceBookingForAOPWithoutOrderDetails.aopRate;
}
  onSubmit(){  
      if(this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.uOMId==''){
        this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.uOMId=0;
      }
  this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.approvedDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.serviceBookingForAOPWithoutOrderId=this.datapassingService.getValue();
  console.log( this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.serviceBookingForAOPWithoutOrderId);
  this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.deliveryStartDate=this.dateResizeService.dateResize(this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.deliveryStartDate);
  this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.deliveryEndDate=this.dateResizeService.dateResize(  this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.deliveryEndDate);
  this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.approvedBy=ApprovedBy.userName;
  this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.isApproved=true;
  this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.entryBy=EntryBy.userName;
  this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.status='Active';
this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.entryDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForAOPWithoutOrderDetailsService.add(this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.resetForm();
  // this.router.navigate(["/pages/"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/service-booking-forAOP-withoutOrder']);
    }
    
    
  
 

  // ngOnInit() {
  //   this.datapassingService.getValue().subscribe(data=>{
  //     console.log(data);
  //   })
  // }

}

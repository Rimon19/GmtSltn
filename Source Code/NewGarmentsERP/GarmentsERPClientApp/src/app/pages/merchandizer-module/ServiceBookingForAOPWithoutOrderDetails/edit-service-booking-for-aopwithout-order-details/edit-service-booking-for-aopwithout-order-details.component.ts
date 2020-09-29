import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';    
import { Tostr } from '../../../../@core/data/tostr.model';
import { ServiceBookingForAOPWithoutOrderDetailsService } from '../../../../@core/mock/marchandizer/service-booking-for-aopwithout-order-details.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
@Component({
  selector: 'ngx-edit-service-booking-for-aopwithout-order-details',
  templateUrl: './edit-service-booking-for-aopwithout-order-details.component.html',
  styleUrls: ['./edit-service-booking-for-aopwithout-order-details.component.scss']
})
export class EditServiceBookingForAOPWithoutOrderDetailsComponent implements OnInit {


  editedId;
  Tostr=new Tostr();
  
  constructor(
  public serviceBookingForAOPWithoutOrderDetailsService:ServiceBookingForAOPWithoutOrderDetailsService,
  private router:Router,
  private dateResizeService:DateResizeService,
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService
    ) {
  this.editedId = this.route.snapshot.paramMap.get('id');
  console.log(this.editedId)
  this.serviceBookingForAOPWithoutOrderDetailsService.getAll().subscribe(data=>{
    console.log(data);
 let items=data.find(f=>f.serviceBookingForAOPWithoutOrderId==this.editedId);
 console.log(items);
 this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails=items;
  });

     }

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


  onSubmit(){  
    
      if(this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.uOMId==''){
        this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.uOMId=0;
      } 
  this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.deliveryStartDate=this.dateResizeService.dateResize(this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.deliveryStartDate);
  this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.deliveryEndDate=this.dateResizeService.dateResize(  this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.deliveryEndDate);
  this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.approvedDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.approvedBy=ApprovedBy.userName;
  this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.isApproved=true;
  this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.entryBy=EntryBy.userName;
  this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.status='Active';
this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails.entryDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForAOPWithoutOrderDetailsService.update(this.serviceBookingForAOPWithoutOrderDetailsService.serviceBookingForAOPWithoutOrderDetails).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
   this.resetForm();
   this.router.navigate(["/pages/service-booking-forAOP-withoutOrder"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/service-booking-forAOP-withoutOrder']);
    }

    
    
  

}

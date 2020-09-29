import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { FabricServiceBookingService } from '../../../../@core/mock/marchandizer/fabric-service-booking.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { NgForm } from '@angular/forms';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';

@Component({
  selector: 'ngx-add-fabric-service-booking',
  templateUrl: './add-fabric-service-booking.component.html',
  styleUrls: ['./add-fabric-service-booking.component.scss']
})
export class AddFabricServiceBookingComponent implements OnInit {

  Tostr=new Tostr();
  
  constructor(
  public fabricServiceBookingService:FabricServiceBookingService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService
    ) { }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getMonth();
this.dropdownValueService.getYear();
this.dropdownValueService.getBuyers();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getSource();
this.dropdownValueService.getFabricDescription();
this.dropdownValueService.getProductionProcess();
this.dropdownValueService.getSensitivity();

  }

   resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.fabricServiceBookingService.fabricServiceBooking = {
    id: 0,
    bookingMonth: '' ,
bookingYear: '' ,
bookingNo: '' ,
orderNo: '' ,
jobNo: '' ,
buyerProfileId: '' ,
currencyId: '' ,
exchangeRate: 0 ,
bookingDate: '' ,
deliveryDate: '' ,
payMode: '' ,
source: '' ,
supplierName: '' ,
attention: '' ,
fabricDescriptionId: '' ,
process: '' ,
sensitivity: '' ,
currencyName:'',
bookingmonthName:'',
bookingYearName:'',
buyerName:'',
fabricDescriptionName:'',
processName:'',

    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }
  
 }


  onSubmit(){  
    
      if(this.fabricServiceBookingService.fabricServiceBooking.buyerProfileId==''){
        this.fabricServiceBookingService.fabricServiceBooking.buyerProfileId=0;
      }
      
      if(this.fabricServiceBookingService.fabricServiceBooking.fabricDescriptionId==''){
        this.fabricServiceBookingService.fabricServiceBooking.fabricDescriptionId=0;
      }
      
    

  
  this.fabricServiceBookingService.fabricServiceBooking.approvedDate=this.dateResizeService.dateResize(new Date);
  this.fabricServiceBookingService.fabricServiceBooking.approvedBy=ApprovedBy.userName;
  this.fabricServiceBookingService.fabricServiceBooking.isApproved=true;
  this.fabricServiceBookingService.fabricServiceBooking.entryBy=EntryBy.userName;
  this.fabricServiceBookingService.fabricServiceBooking.status='Active';
this.fabricServiceBookingService.fabricServiceBooking.entryDate=this.dateResizeService.dateResize(new Date);
  this.fabricServiceBookingService.add(this.fabricServiceBookingService.fabricServiceBooking).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.resetForm();
   this.router.navigate(["/pages/FabricServiceBooking"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/FabricServiceBooking']);
    }

}

import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { FabricServiceBookingService } from '../../../../@core/mock/marchandizer/fabric-service-booking.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { NgForm } from '@angular/forms';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';

@Component({
  selector: 'ngx-edit-fabric-service-booking',
  templateUrl: './edit-fabric-service-booking.component.html',
  styleUrls: ['./edit-fabric-service-booking.component.scss']
})
export class EditFabricServiceBookingComponent implements OnInit {

  editedId;
  Tostr=new Tostr();
  
  constructor(
  public fabricServiceBookingService:FabricServiceBookingService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService
    ) {

    
  
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.fabricServiceBookingService.getAll().subscribe(data=>{
 let items=  data.find(f=>f.id==this.editedId);
 this.fabricServiceBookingService.fabricServiceBooking=items;
  });

     }

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
  this.fabricServiceBookingService.update(this.fabricServiceBookingService.fabricServiceBooking).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
   this.resetForm();
   this.router.navigate(["/pages/FabricServiceBooking"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/FabricServiceBooking']);
    }

}

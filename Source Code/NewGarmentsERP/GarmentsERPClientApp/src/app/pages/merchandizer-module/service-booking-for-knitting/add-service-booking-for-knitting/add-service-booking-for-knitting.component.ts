import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { ServiceBookingForKnittingService } from '../../../../@core/mock/marchandizer/service-booking-for-knitting.service';
import { Router } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { NgForm } from '@angular/forms';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { OrderOrJobSelectionFormComponent } from '../../order-or-job-selection-form/order-or-job-selection-form.component';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';

@Component({
  selector: 'ngx-add-service-booking-for-knitting',
  templateUrl: './add-service-booking-for-knitting.component.html',
  styleUrls: ['./add-service-booking-for-knitting.component.scss']
})
export class AddServiceBookingForKnittingComponent implements OnInit {
 
  Tostr=new Tostr();
  
  constructor(
  public serviceBookingForKnittingService:ServiceBookingForKnittingService,
  private router:Router,
  private dateResizeService:DateResizeService,
  private dialog: MatDialog,
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService,
  private datapassingService:DatapassingService
    ) { 
      
    }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getMonth();
this.dropdownValueService.getYear();
this.dropdownValueService.getBuyers();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getSource();
this.dropdownValueService.getSuppliers();
this.dropdownValueService.getYesNo();

this.datapassingService.getJobSelectionFormValue().subscribe(data=>{

  if(data!=0){
   this.serviceBookingForKnittingService.serviceBookingForKnitting.jobNo=data.jobNo;
    
   this.serviceBookingForKnittingService.serviceBookingForKnitting.orderNo=data.poNumber;
  }
})


  }

   resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.serviceBookingForKnittingService.serviceBookingForKnitting = {
    id: 0,
    bookingNo: '' ,
bookingMonth: '' ,
bookingYear: '' ,
orderNo: '' ,
jobNo: '' ,
buyerProfileId: '' ,
currencyId: '' ,
exchangeRate: 0 ,
bookingDate: '' ,
deliveryDate: '' ,
payMode: '' ,
source: '' ,
supplierProfileId: '' ,
attention: '' ,
readyToApproved: '' ,

    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }
  
 }

 onLoadOrderOrJobSelectionFormComponent() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "80%";
  dialogConfig.height = "80%";

  this.dialog.open(OrderOrJobSelectionFormComponent, dialogConfig);
}

  onSubmit(){  
    
      if(this.serviceBookingForKnittingService.serviceBookingForKnitting.buyerProfileId==''){
        this.serviceBookingForKnittingService.serviceBookingForKnitting.buyerProfileId=0;
      }
      
      if(this.serviceBookingForKnittingService.serviceBookingForKnitting.currencyId==''){
        this.serviceBookingForKnittingService.serviceBookingForKnitting.currencyId=0;
      }
      
      if(this.serviceBookingForKnittingService.serviceBookingForKnitting.supplierProfileId==''){
        this.serviceBookingForKnittingService.serviceBookingForKnitting.supplierProfileId=0;
      }

      
      
    

  
  this.serviceBookingForKnittingService.serviceBookingForKnitting.approvedDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForKnittingService.serviceBookingForKnitting.approvedBy=ApprovedBy.userName;
  this.serviceBookingForKnittingService.serviceBookingForKnitting.isApproved=true;
  this.serviceBookingForKnittingService.serviceBookingForKnitting.entryBy=EntryBy.userName;
  this.serviceBookingForKnittingService.serviceBookingForKnitting.status='Active';
this.serviceBookingForKnittingService.serviceBookingForKnitting.entryDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForKnittingService.add(this.serviceBookingForKnittingService.serviceBookingForKnitting).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.resetForm();
   this.router.navigate(["/pages/ServiceBookingForKnitting"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/ServiceBookingForKnitting']);
    }

}

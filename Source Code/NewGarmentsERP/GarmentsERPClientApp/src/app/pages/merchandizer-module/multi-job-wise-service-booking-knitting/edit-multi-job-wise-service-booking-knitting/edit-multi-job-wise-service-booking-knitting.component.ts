import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { MultiJobWiseServiceBookingKnittingService } from '../../../../@core/mock/marchandizer/multi-job-wise-service-booking-knitting.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { NgForm } from '@angular/forms';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { BookingNoSelectionFormComponent } from '../../booking-no-selection-form/booking-no-selection-form.component';

@Component({
  selector: 'ngx-edit-multi-job-wise-service-booking-knitting',
  templateUrl: './edit-multi-job-wise-service-booking-knitting.component.html',
  styleUrls: ['./edit-multi-job-wise-service-booking-knitting.component.scss']
})
export class EditMultiJobWiseServiceBookingKnittingComponent implements OnInit {

  editedId;
    Tostr=new Tostr();
    
    constructor(
    public multiJobWiseServiceBookingKnittingService:MultiJobWiseServiceBookingKnittingService,
    private router:Router,
    private dateResizeService:DateResizeService,
    private dialog: MatDialog,
    private toastrService:NbToastrService,
    private route:ActivatedRoute,
    private dropdownValueService:DropdownValueService,
    private datapassingService:DatapassingService
      ) {

      
    
    this.editedId = this.route.snapshot.paramMap.get('id');
    this.multiJobWiseServiceBookingKnittingService.getAll().subscribe(data=>{
   let items=  data.find(f=>f.id==this.editedId);
   this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting=items;
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
this.dropdownValueService.getSuppliers();
this.dropdownValueService.getYesNo();

this.datapassingService.getBookingNoSelectionFormValue().subscribe(data=>{

  if(data!=0){
   this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting.buyerProfileId=data.buyerProfileId;
    
   this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting.bookingNo=data.bookingNo;
   this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting.bookingDate=data.bookingDate;
   this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting.monthId=data.bookingMonth;
   this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting.yearId=data.bookingYear;
   this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting.payMode=data.payMode;
   this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting.source=data.source;
   this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting.currencyId=data.currencyId;
  }
})

    }

     resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting = {
    id: 0,
    bookingNo: '' ,
monthId: '' ,
yearId: '' ,
buyerProfileId: '' ,
currencyId: '' ,
exchangeRate: '' ,
bookingDate:  this.dateResizeService.dateResize(new Date)  ,
deliveryDate: '' ,
payMode: '' ,
source: '' ,
supplierProfileId: '' ,
readyToApproved: '' ,
attention: '' ,
remark: '' ,

    entryDate :'',
    entryBy :'',
    status :'',
    MerchandApprovalDate :'',
    MerchandApproval :false,
    ApprovedByMerchandUserId :'',

    AgmApprovalDate :'',
    AgmApproval :false,
    ApprovedByAgmUserId :'',

     GmApprovalDate :'',
     GmApproval :false,
     ApprovedByGmUserId :'',

     MdApprovalDate :'',
     MdApproval :false,
     ApprovedByMdUserId :''
  }
  
 }

 onLoadBookingNoSelectionFormComponent() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "80%";
  dialogConfig.height = "80%";

  this.dialog.open(BookingNoSelectionFormComponent, dialogConfig);
}
  
    onSubmit(){  
      
        if(this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting.buyerProfileId==''){
          this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting.buyerProfileId=0;
        }
        if(this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting.currencyId==''){
          this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting.currencyId=0;
        }
        if(this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting.supplierProfileId==''){
          this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting.supplierProfileId=0;
        }
      
   

    this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting.entryBy=EntryBy.userName;
    this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting.status='Active';
  this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting.entryDate=this.dateResizeService.dateResize(new Date);
    this.multiJobWiseServiceBookingKnittingService.update(this.multiJobWiseServiceBookingKnittingService.multiJobWiseServiceBookingKnitting).subscribe(res=>{
      console.log(res);       
     this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
     this.resetForm();
     this.router.navigate(["/pages/MultiJobWiseServiceBookingKnitting"]);
     
    })
      
    }

  
      backTo(){
        this.router.navigate(['/pages/MultiJobWiseServiceBookingKnitting']);
      }

}

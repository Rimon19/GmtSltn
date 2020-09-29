import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';

import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { ErpImagesComponent } from '../../../Shared/erp-images/erp-images.component';
import { PartialFabricBookingService } from '../../../../@core/mock/marchandizer/partial-fabric-booking.service';

@Component({
  selector: 'ngx-add-partial-fabric-booking',
  templateUrl: './add-partial-fabric-booking.component.html',
  styleUrls: ['./add-partial-fabric-booking.component.scss']
})
export class AddPartialFabricBookingComponent implements OnInit {

  Tostr=new Tostr();
  
  constructor(
  public partialFabricBookingService:PartialFabricBookingService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService,
  private datapassingService:DatapassingService,
  private dialog:MatDialog
    ) { }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getBuyers();
this.dropdownValueService.getMonth();
this.dropdownValueService.getYear();
this.dropdownValueService.getFabricNature();
this.dropdownValueService.getUom();
this.dropdownValueService.getfabricSourceList();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getSuppliers();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getSource();
this.dropdownValueService.getYesNo();

  }

   resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.partialFabricBookingService.partialFabricBooking = {
    id: 0,
    bookingNo: '' ,
buyerProfileId: '' ,
jobNo: '' ,
bookingMonthId: '' ,
yearId: '' ,
fabricNatureId: '' ,
uomId: '' ,
fabricSource: '' ,
bookingDate: new Date ,
orderOrPoNo: 0 ,
deliveryDate: '' ,
payMode: '' ,
supplierProfileId: '' ,
currencyId: '' ,
exchangeRate: 0 ,
source: '' ,
attention: '' ,
bookingPercent: 0 ,
colarExcessCut: 0 ,
cuffExcessCut: 0 ,
readyToApproved: '' ,
internalRefNo: '' ,
fileno: '' ,
unapproverequest: '' ,
fabricComposition: '' ,
remarks: '' ,
termsNcondition: '' ,
processLoss: '' ,
trimsDyingToMatch: '' ,//used for level

    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }
  
 }


  onSubmit(){  
    
      if(this.partialFabricBookingService.partialFabricBooking.buyerProfileId==''){
        this.partialFabricBookingService.partialFabricBooking.buyerProfileId=0;
      }
      
    

  
  this.partialFabricBookingService.partialFabricBooking.approvedDate=this.dateResizeService.dateResize(new Date);
  this.partialFabricBookingService.partialFabricBooking.approvedBy=ApprovedBy.userName;
  this.partialFabricBookingService.partialFabricBooking.isApproved=true;
  this.partialFabricBookingService.partialFabricBooking.entryBy=EntryBy.userName;
  this.partialFabricBookingService.partialFabricBooking.status='Active';
this.partialFabricBookingService.partialFabricBooking.entryDate=this.dateResizeService.dateResize(new Date);
this.partialFabricBookingService.partialFabricBooking.bookingDate=this.dateResizeService.dateResize(this.partialFabricBookingService.partialFabricBooking.bookingDate);
this.partialFabricBookingService.partialFabricBooking.deliveryDate=this.dateResizeService.dateResize(this.partialFabricBookingService.partialFabricBooking.deliveryDate);
  this.partialFabricBookingService.add(this.partialFabricBookingService.partialFabricBooking).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.resetForm();
   this.router.navigate(["/pages/partial-fabric-booking"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/partial-fabric-booking']);
    }
     onAddImage(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus= true;
      dialogConfig.width="50%";
      dialogConfig.height="50%";
    // page id is 2 here from according to table imageOrFileHolderPages
    
      this.datapassingService.setValue({pageId:2,primaryKey:this.partialFabricBookingService.partialFabricBooking.id});
    
      this.dialog.open(ErpImagesComponent, dialogConfig);
    }
    
  



}

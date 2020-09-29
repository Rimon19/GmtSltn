import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';    
import { Tostr } from '../../../../@core/data/tostr.model';
import { MainFabricBookingV2Service } from '../../../../@core/mock/marchandizer/main-fabric-booking-v2.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { ErpImagesComponent } from '../../../Shared/erp-images/erp-images.component';
import { PartialFabricBookingService } from '../../../../@core/mock/marchandizer/partial-fabric-booking.service';
@Component({
  selector: 'ngx-edit-partial-fabric-booking',
  templateUrl: './edit-partial-fabric-booking.component.html',
  styleUrls: ['./edit-partial-fabric-booking.component.scss']
})
export class EditPartialFabricBookingComponent implements OnInit {

 
  editedId;
  Tostr=new Tostr();
  
  constructor(
  public partialFabricBookingService:PartialFabricBookingService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService,
  private datapassingService:DatapassingService,
  private dialog:MatDialog
    ) {

    
  
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.partialFabricBookingService.getAll().subscribe(data=>{
 let items=  data.find(f=>f.id==this.editedId);
 this.partialFabricBookingService.partialFabricBooking=items;
  });

     }

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
bookingDate: '' ,
orderOrPoNo: 0 ,
deliveryDate: '' ,
payMode: '' ,
supplierProfileId: '' ,
currencyId: '' ,
exchangeRate: '' ,
source: '' ,
attention: '' ,
bookingPercent: '' ,
colarExcessCut: '' ,
cuffExcessCut: '' ,
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
  this.partialFabricBookingService.update(this.partialFabricBookingService.partialFabricBooking).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
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

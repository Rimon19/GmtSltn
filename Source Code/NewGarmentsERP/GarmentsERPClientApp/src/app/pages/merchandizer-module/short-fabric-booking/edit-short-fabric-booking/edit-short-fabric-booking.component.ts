import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme'; 
import { Tostr } from '../../../../@core/data/tostr.model';
import { ShortFabricBookingService } from '../../../../@core/mock/marchandizer/short-fabric-booking.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ErpImagesComponent } from '../../../Shared/erp-images/erp-images.component';

@Component({
  selector: 'ngx-edit-short-fabric-booking',
  templateUrl: './edit-short-fabric-booking.component.html',
  styleUrls: ['./edit-short-fabric-booking.component.scss']
})
export class EditShortFabricBookingComponent implements OnInit {

  
    

  editedId;
  Tostr=new Tostr();
  
  constructor(
  public shortFabricBookingService:ShortFabricBookingService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService,
  private dialog:MatDialog
    ) {

    
  
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.shortFabricBookingService.getAll().subscribe(data=>{
 let items=  data.find(f=>f.id==this.editedId);
 this.shortFabricBookingService.shortFabricBooking=items;
  });

     }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getBuyers();
this.dropdownValueService.getMonth();
this.dropdownValueService.getYear();
this.dropdownValueService.getFabricNature();
this.dropdownValueService.getfabricSourceList();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getSource();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getSuppliers ();
this.dropdownValueService.getYesNo();
this.dropdownValueService.getShortFabricBookingType();
this.dropdownValueService.getLocation();

  }

   resetForm(form?:NgForm){
if(form!=null)
form.resetForm();
this.shortFabricBookingService.shortFabricBooking = {
  id: 0,
  bookingNo: '' ,
buyerProfileId: '' ,
jobNo: '' ,
bookingMonth: '' ,
bookingYear: '' ,
fabricNature: '' ,
fabricSource: '' ,
bookingDate: '' ,
orderNo: '' ,
currency: '' ,
exchangeRate: '' ,
source: '' ,
deliveryDate: '' ,
payMode: '' ,
supplierProfileId: '' ,
attention: '' ,
readyToApproved: '' ,
internalRefNo: '' ,
shortBookingType: '' ,
remarks: '' ,
fileno: '' ,
supplierLocation: '' ,
termsNCondition: '' ,

  entryDate :'',
  entryBy :'',
  approvedDate :'',
  approvedBy :'',
  isApproved :false,
  status :''
}

}


  onSubmit(){  
    
      if(this.shortFabricBookingService.shortFabricBooking.buyerProfileId==''){
        this.shortFabricBookingService.shortFabricBooking.buyerProfileId=0;
      }
      if(this.shortFabricBookingService.shortFabricBooking.bookingYear==''){
        this.shortFabricBookingService.shortFabricBooking.bookingYear=0;
      }
      if(this.shortFabricBookingService.shortFabricBooking.supplierProfileId==''){
        this.shortFabricBookingService.shortFabricBooking.supplierProfileId=0;
      }
      if(this.shortFabricBookingService.shortFabricBooking.supplierLocation==''){
        this.shortFabricBookingService.shortFabricBooking.supplierLocation=0;
      }
    
 
  this.shortFabricBookingService.shortFabricBooking.approvedDate=this.dateResizeService.dateResize(new Date);
  this.shortFabricBookingService.shortFabricBooking.approvedBy=ApprovedBy.userName;
  this.shortFabricBookingService.shortFabricBooking.isApproved=true;
  this.shortFabricBookingService.shortFabricBooking.entryBy=EntryBy.userName;
  this.shortFabricBookingService.shortFabricBooking.status='Active';
this.shortFabricBookingService.shortFabricBooking.entryDate=this.dateResizeService.dateResize(new Date);
this.shortFabricBookingService.shortFabricBooking.bookingDate=this.dateResizeService.dateResize(this.shortFabricBookingService.shortFabricBooking.bookingDate);
this.shortFabricBookingService.shortFabricBooking.deliveryDate=this.dateResizeService.dateResize(this.shortFabricBookingService.shortFabricBooking.deliveryDate);
  this.shortFabricBookingService.update(this.shortFabricBookingService.shortFabricBooking).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
   this.resetForm();
   this.router.navigate(["/pages/short-fabric-booking"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/short-fabric-booking']);
    }

     onAddImage(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus= true;
      dialogConfig.width="50%";
      dialogConfig.height="50%";
    // page id is 2 here from according to table imageOrFileHolderPages
    
      //this.datapassingService.sendQuotationInqueryToErpImages.next({pageId:2,primaryKey:this.shortFabricBookingService.shortFabricBooking.id});
    
      this.dialog.open(ErpImagesComponent, dialogConfig);
    }
    
  

}

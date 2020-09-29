   
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { SampleFabricBookingWithorderService } from '../../../../@core/mock/marchandizer/sample-fabric-booking-withorder.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { ErpImagesComponent } from '../../../Shared/erp-images/erp-images.component';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
@Component({
  selector: 'ngx-add-sample-fabric-booking-withorder',
  templateUrl: './add-sample-fabric-booking-withorder.component.html',
  styleUrls: ['./add-sample-fabric-booking-withorder.component.scss']
})
export class AddSampleFabricBookingWithorderComponent implements OnInit {



  Tostr=new Tostr();
  
  constructor(
  public sampleFabricBookingWithorderService:SampleFabricBookingWithorderService,
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
this.dropdownValueService.getfabricSourceList();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getSource();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getSuppliers();
this.dropdownValueService.getYesNo();

  }

   resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder = {
    id: 0,
    bookingNo: '' ,
buyerProfileId: '' ,
month: '' ,
year: '' ,
fabricNature: '' ,
fabricSource: '' ,
bookingDate:new Date,
orderNo: '' ,
currency: '' ,
exchangeRate:0 ,
source: '' ,
deliveryDate: '' ,
payMode: '' ,
supplierProfileId: '' ,
attention: '' ,
readyToApproved: '' ,
fabricComposition: '' ,
fileNo: '' ,
refNo: '' ,
tagBookingNo: '' ,
accessories: '' ,
termsNcondition: '' ,

    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }
  
 }


  onSubmit(){  
    
      if(this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder.buyerProfileId==''){
        this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder.buyerProfileId=0;
      }
      
      if(this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder.year==''){
        this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder.year=0;
      }
      
      if(this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder.supplierProfileId==''){
        this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder.supplierProfileId=0;
      }
      
    
      this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder.bookingDate=this.dateResizeService.dateResize( this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder.bookingDate);
      this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder.deliveryDate=this.dateResizeService.dateResize( this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder.deliveryDate);
  
  this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder.approvedDate=this.dateResizeService.dateResize(new Date);
  this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder.approvedBy=ApprovedBy.userName;
  this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder.isApproved=true;
  this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder.entryBy=EntryBy.userName;
  this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder.status='Active';
this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder.entryDate=this.dateResizeService.dateResize(new Date);
  this.sampleFabricBookingWithorderService.add(this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.resetForm();
   this.router.navigate(["/pages/sample-fabric-booking-withorder"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/sample-fabric-booking-withorder']);
    }
     onAddImage(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus= true;
      dialogConfig.width="50%";
      dialogConfig.height="50%";
    // page id is 2 here from according to table imageOrFileHolderPages
    
      this.datapassingService.setValue({pageId:2,primaryKey:this.sampleFabricBookingWithorderService.sampleFabricBookingWithorder.id});
    
      this.dialog.open(ErpImagesComponent, dialogConfig);
    }
    
  

}

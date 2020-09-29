import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { SampleFabricBookingWithoutorderMastersService } from '../../../../@core/mock/marchandizer/sample-fabric-booking-withoutorder-masters.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { ErpImagesComponent } from '../../../Shared/erp-images/erp-images.component';
@Component({
  selector: 'ngx-add-sample-fabric-booking-withoutorder-masters',
  templateUrl: './add-sample-fabric-booking-withoutorder-masters.component.html',
  styleUrls: ['./add-sample-fabric-booking-withoutorder-masters.component.scss']
})
export class AddSampleFabricBookingWithoutorderMastersComponent implements OnInit {

  Tostr=new Tostr();
  
  constructor(
  public sampleFabricBookingWithoutOrderMasterService:SampleFabricBookingWithoutorderMastersService,
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
  this.dropdownValueService.getFabricNature();
this.dropdownValueService.getfabricSourceList();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getSource();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getSuppliers();
this.dropdownValueService.getYesNo();
this.dropdownValueService.getTeamleaders();
this.dropdownValueService.getDealingMerchant();

  }

   resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster = {
    id: 0,
    bookingNo: '' ,
buyerProfileId: '' ,
fabricNature: '' ,
fabricSource: '' ,
bookingDate: new Date(),
currency: '' ,
exchangeRate: '' ,
source: '' ,
deliveryDate: '' ,
payMode: '' ,
supplierProfileId: '' ,
attention: '' ,
readyToApproved: '' ,
teamLeaderId: '' ,
dealingMerchantId: '' ,
copyFrom: '' ,
image: '' ,
accessories: '' ,
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
    
  this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.approvedDate=this.dateResizeService.dateResize(new Date);
  this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.approvedBy=ApprovedBy.userName;
  this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.isApproved=true;
  this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.entryBy=EntryBy.userName;
  this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.status='Active';
this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.entryDate=this.dateResizeService.dateResize(new Date);

      if(this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.teamLeaderId==''){
      this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.teamLeaderId=0;
    }

    if(this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.dealingMerchantId==''){
      this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.dealingMerchantId=0;
    }
    if(this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.supplierProfileId==''){
      this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.supplierProfileId=0;
    }
    if(this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.exchangeRate==''){
      this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.exchangeRate=0;
    }   
    this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.bookingDate=this.dateResizeService.dateResize( this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.bookingDate);
    this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.deliveryDate=this.dateResizeService.dateResize( this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.deliveryDate);

  this.sampleFabricBookingWithoutOrderMasterService.add(this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.resetForm();
   this.router.navigate(["/pages/sample-fabric-booking-without-order"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/sample-fabric-booking-without-order']);
    }
     onAddImage(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus= true;
      dialogConfig.width="50%";
      dialogConfig.height="50%";
    // page id is 2 here from according to table imageOrFileHolderPages
    
      this.datapassingService.sendInfoPageToErpImages.next({pageId:2,primaryKey:this.sampleFabricBookingWithoutOrderMasterService.sampleFabricBookingWithoutOrderMaster.id});
    
      this.dialog.open(ErpImagesComponent, dialogConfig);
    }
    
   
}

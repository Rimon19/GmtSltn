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
@Component({
  selector: 'ngx-edit-main-fabric-booking-v2',
  templateUrl: './edit-main-fabric-booking-v2.component.html',
  styleUrls: ['./edit-main-fabric-booking-v2.component.scss']
})
export class EditMainFabricBookingV2Component implements OnInit {



    editedId;
    Tostr=new Tostr();
    
    constructor(
    public mainFabricBookingV2Service:MainFabricBookingV2Service,
    private router:Router,
    private dateResizeService:DateResizeService,
    
    private toastrService:NbToastrService,
    private route:ActivatedRoute,
    private dropdownValueService:DropdownValueService,
    private datapassingService:DatapassingService,
    private dialog:MatDialog
      ) {

      
    
    this.editedId = this.route.snapshot.paramMap.get('id');
    this.mainFabricBookingV2Service.getAll().subscribe(data=>{
   let items=  data.find(f=>f.id==this.editedId);
   this.mainFabricBookingV2Service.mainFabricBookingV2=items;
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
  this.mainFabricBookingV2Service.mainFabricBookingV2 = {
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
orderOrPoNo: '' ,
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
trimsDyingToMatch: '' ,

    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }
  
 }

  
    onSubmit(){  
      
        if(this.mainFabricBookingV2Service.mainFabricBookingV2.buyerProfileId==''){
          this.mainFabricBookingV2Service.mainFabricBookingV2.buyerProfileId=0;
        }
      
   
    this.mainFabricBookingV2Service.mainFabricBookingV2.approvedDate=this.dateResizeService.dateResize(new Date);
    this.mainFabricBookingV2Service.mainFabricBookingV2.approvedBy=ApprovedBy.userName;
    this.mainFabricBookingV2Service.mainFabricBookingV2.isApproved=true;
    this.mainFabricBookingV2Service.mainFabricBookingV2.entryBy=EntryBy.userName;
    this.mainFabricBookingV2Service.mainFabricBookingV2.status='Active';
  this.mainFabricBookingV2Service.mainFabricBookingV2.entryDate=this.dateResizeService.dateResize(new Date);
  this.mainFabricBookingV2Service.mainFabricBookingV2.bookingDate=this.dateResizeService.dateResize(this.mainFabricBookingV2Service.mainFabricBookingV2.bookingDate);
this.mainFabricBookingV2Service.mainFabricBookingV2.deliveryDate=this.dateResizeService.dateResize(this.mainFabricBookingV2Service.mainFabricBookingV2.deliveryDate);
    this.mainFabricBookingV2Service.update(this.mainFabricBookingV2Service.mainFabricBookingV2).subscribe(res=>{
      console.log(res);       
     this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
     this.resetForm();
     this.router.navigate(["/pages/main-fabric-bookingV2"]);
     
    })
      
    }

  
      backTo(){
        this.router.navigate(['/pages/main-fabric-bookingV2']);
      }

       onAddImage(){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus= true;
        dialogConfig.width="50%";
        dialogConfig.height="50%";
      // page id is 2 here from according to table imageOrFileHolderPages
      
        this.datapassingService.setValue({pageId:2,primaryKey:this.mainFabricBookingV2Service.mainFabricBookingV2.id});
      
        this.dialog.open(ErpImagesComponent, dialogConfig);
      }
      

}

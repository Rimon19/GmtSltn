 
  import { Component, OnInit } from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { Router, ActivatedRoute } from '@angular/router';
  import { NbToastrService } from '@nebular/theme';    
import { Tostr } from '../../../../@core/data/tostr.model';
import { SampleFabricBookingService } from '../../../../@core/mock/marchandizer/sample-fabric-booking.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';

@Component({
  selector: 'ngx-edit-sample-fabric-booking',
  templateUrl: './edit-sample-fabric-booking.component.html',
  styleUrls: ['./edit-sample-fabric-booking.component.scss']
})
export class EditSampleFabricBookingComponent implements OnInit {


  editedId;
  Tostr=new Tostr();
  
  constructor(
  public sampleFabricBookingService:SampleFabricBookingService,
  private router:Router,
  private dateResizeService:DateResizeService,
  private datapassingService:DatapassingService,
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService
    ) {

    
  
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.sampleFabricBookingService.getAll().subscribe(data=>{
 let items=  data.find(f=>f.sampleRequisitionId==this.editedId);
 this.sampleFabricBookingService.sampleFabricBooking=items;
  });

     }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getCurrency();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getSuppliers();
this.dropdownValueService.getYesNo();
this.dropdownValueService.getTeamleaders();
this.dropdownValueService.getDealingMerchant();
this.dropdownValueService.getfabricSourceList();
this.dropdownValueService.getSource();

  }

   resetForm(form?:NgForm){
if(form!=null)
form.resetForm();
this.sampleFabricBookingService.sampleFabricBooking = {
  id: 0,
  sampleRequisitionId:0,
  bookingNo: '' ,
bookingDate: '' ,
styleDesc: '' ,
currencyId: '' ,
exchangeRate: '' ,
attention: '' ,
payMode: '' ,
supplierNameId: '' ,
readyToApproved: '' ,
teamLeader: '' ,
dealingMerchant: '' ,
fabricSource: '' ,
source: '' ,
buyerReqNo: '' ,
revise: '' ,
file: '' ,

  entryDate :'',
  entryBy :'',
  approvedDate :'',
  approvedBy :'',
  isApproved :false,
  status :''
}

}


  onSubmit(){  
    
      if(this.sampleFabricBookingService.sampleFabricBooking.currencyId==''){
        this.sampleFabricBookingService.sampleFabricBooking.currencyId=0;
      }
      if(this.sampleFabricBookingService.sampleFabricBooking.supplierNameId==''){
        this.sampleFabricBookingService.sampleFabricBooking.supplierNameId=0;
      }
      if(this.sampleFabricBookingService.sampleFabricBooking.teamLeader==''){
        this.sampleFabricBookingService.sampleFabricBooking.teamLeader=0;
      }
      if(this.sampleFabricBookingService.sampleFabricBooking.dealingMerchant==''){
        this.sampleFabricBookingService.sampleFabricBooking.dealingMerchant=0;
      }
      if(this.sampleFabricBookingService.sampleFabricBooking.exchangeRate==''){
        this.sampleFabricBookingService.sampleFabricBooking.exchangeRate=0;
      }
    
      this.sampleFabricBookingService.sampleFabricBooking.sampleRequisitionId=this.datapassingService.getValue()
  this.sampleFabricBookingService.sampleFabricBooking.approvedDate=this.dateResizeService.dateResize(new Date);
  this.sampleFabricBookingService.sampleFabricBooking.bookingDate=this.dateResizeService.dateResize(this.sampleFabricBookingService.sampleFabricBooking.bookingDate);
  this.sampleFabricBookingService.sampleFabricBooking.approvedBy=ApprovedBy.userName;
  this.sampleFabricBookingService.sampleFabricBooking.isApproved=true;
  this.sampleFabricBookingService.sampleFabricBooking.entryBy=EntryBy.userName;
  this.sampleFabricBookingService.sampleFabricBooking.status='Active';
this.sampleFabricBookingService.sampleFabricBooking.entryDate=this.dateResizeService.dateResize(new Date);
  this.sampleFabricBookingService.update(this.sampleFabricBookingService.sampleFabricBooking).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
   this.resetForm();
   this.router.navigate(["/pages/sample-requisition-withBooking"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/sample-requisition-withBooking']);
    }

    
    //  onAddFile(){
    //   const dialogConfig = new MatDialogConfig();
    //   dialogConfig.disableClose = true;
    //   dialogConfig.autoFocus= true;
    //   dialogConfig.width="50%";
    //   dialogConfig.height="50%";
    // // page id is 2 here from according to table imageOrFileHolderPages
    
    //   this.datapassingService.sendQuotationInqueryToErpImages.next({pageId:2,primaryKey:this.sampleFabricBookingService.sampleFabricBooking.id});
    
    //   this.dialog.open(ErpFileComponent, dialogConfig);
    // }
  

}

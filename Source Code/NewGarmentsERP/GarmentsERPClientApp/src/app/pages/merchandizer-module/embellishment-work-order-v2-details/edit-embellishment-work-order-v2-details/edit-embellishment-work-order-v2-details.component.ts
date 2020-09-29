import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { EmbellishmentWorkOrderV2DetailsService } from '../../../../@core/mock/marchandizer/embellishment-work-order-v2-details.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { NgForm } from '@angular/forms';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { OrderOrJobSelectionFormComponent } from '../../order-or-job-selection-form/order-or-job-selection-form.component';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { ItemDetailsOrderEntriesService } from '../../../../@core/mock/marchandizer/item-details-order-entries.service';
import { ViewService } from '../../../../@core/mock/marchandizer/views/view.service';

@Component({
  selector: 'ngx-edit-embellishment-work-order-v2-details',
  templateUrl: './edit-embellishment-work-order-v2-details.component.html',
  styleUrls: ['./edit-embellishment-work-order-v2-details.component.scss']
})
export class EditEmbellishmentWorkOrderV2DetailsComponent implements OnInit {
  id :number=0
  editedId;
    Tostr=new Tostr();
    
    constructor(
    public embellishmentWorkOrderV2DetailsService:EmbellishmentWorkOrderV2DetailsService,
    private router:Router,
    private dateResizeService:DateResizeService,
    private dialog: MatDialog,
    private toastrService:NbToastrService,
    private route:ActivatedRoute,
    private dropdownValueService:DropdownValueService,
    private datapassingService:DatapassingService,
    private viewService:ViewService
      ) {

      
    
    this.editedId = this.route.snapshot.paramMap.get('id');
    this.embellishmentWorkOrderV2DetailsService.getAll().subscribe(data=>{
   let items=  data.find(f=>f.id==this.editedId);
   this.embellishmentWorkOrderV2DetailsService.embellishmentWorkOrderV2Details=items;
   this.viewService.getOrderOrJobSelectionFromView().subscribe(data=>{
   let itemDtls=data.find(f=>f.poNumber==items.ordNo).orderAutoId;

   this.dropdownValueService.getGarmentItemsByOrderNo(itemDtls);
   });
  
    });

       }
  
    ngOnInit() {
      this.resetForm();
      this.dropdownValueService.getColor();
this.dropdownValueService.getEmbellishmentName();
this.dropdownValueService.getBookingType();
this.datapassingService.getJobSelectionFormValue().subscribe(data=>{

  if(data!=0){
  
      this.id=data.orderAutoId;
    
   
    this.dropdownValueService.getGarmentItemsByOrderNo(this.id);
   this.embellishmentWorkOrderV2DetailsService.embellishmentWorkOrderV2Details.ordNo=data.poNumber;
   
   
  }

})

    }

     resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.embellishmentWorkOrderV2DetailsService.embellishmentWorkOrderV2Details = {
    id: 0,
    ordNo: '' ,
garmentsItemId: '' ,
bookingNature: '' ,
bookingType: '' ,
colorId: '' ,
orderQty: 0 ,
description: '' ,
reqQtyDZN: 0,
cuWoqDZN: 0,
balQtyDZN: 0 ,
woqDZN: 0 ,
rateDZN: 0 ,
amountDZN: 0 ,
delvDate: '' ,
embellishmentWorkOrderV2Id: '' ,

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
      
      //this.embellishmentWorkOrderV2DetailsService.embellishmentWorkOrderV2Details.embellishmentWorkOrderV2Id=this.datapassingService.getValue();
        if(this.embellishmentWorkOrderV2DetailsService.embellishmentWorkOrderV2Details.garmentsItemId==''){
          this.embellishmentWorkOrderV2DetailsService.embellishmentWorkOrderV2Details.garmentsItemId=0;
        }
        if(this.embellishmentWorkOrderV2DetailsService.embellishmentWorkOrderV2Details.colorId==''){
          this.embellishmentWorkOrderV2DetailsService.embellishmentWorkOrderV2Details.colorId=0;
        }
      
   
    this.embellishmentWorkOrderV2DetailsService.embellishmentWorkOrderV2Details.approvedDate=this.dateResizeService.dateResize(new Date);
    this.embellishmentWorkOrderV2DetailsService.embellishmentWorkOrderV2Details.approvedBy=ApprovedBy.userName;
    this.embellishmentWorkOrderV2DetailsService.embellishmentWorkOrderV2Details.isApproved=true;
    this.embellishmentWorkOrderV2DetailsService.embellishmentWorkOrderV2Details.entryBy=EntryBy.userName;
    this.embellishmentWorkOrderV2DetailsService.embellishmentWorkOrderV2Details.status='Active';
  this.embellishmentWorkOrderV2DetailsService.embellishmentWorkOrderV2Details.entryDate=this.dateResizeService.dateResize(new Date);
    this.embellishmentWorkOrderV2DetailsService.update(this.embellishmentWorkOrderV2DetailsService.embellishmentWorkOrderV2Details).subscribe(res=>{
      console.log(res);       
     this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
     this.resetForm();
     this.router.navigate(["/pages/EmbellishmentWorkOrderV2"]);
     
    })
    this.datapassingService.setJobSelectionFormValue(0);
    }

  
      backTo(){
        this.router.navigate(['/pages/EmbellishmentWorkOrderV2']);
      }

}

import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { EmbellishmentWorkOrderV2Service } from '../../../../@core/mock/marchandizer/embellishment-work-order-v2.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { NgForm } from '@angular/forms';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { OrderOrJobSelectionFormComponent } from '../../order-or-job-selection-form/order-or-job-selection-form.component';

@Component({
  selector: 'ngx-edit-embellishment-work-order-v2',
  templateUrl: './edit-embellishment-work-order-v2.component.html',
  styleUrls: ['./edit-embellishment-work-order-v2.component.scss']
})
export class EditEmbellishmentWorkOrderV2Component implements OnInit {
  buyerId:number=0;
  editedId;
  Tostr=new Tostr();
  
  constructor(
  public embellishmentWorkOrderV2Service:EmbellishmentWorkOrderV2Service,
  private router:Router,
  private dateResizeService:DateResizeService,
  private dialog: MatDialog,
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService,
  private datapassingService:DatapassingService
    ) {

    
  
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.embellishmentWorkOrderV2Service.getAll().subscribe(data=>{
 let items=  data.find(f=>f.id==this.editedId);
 console.log(items);
 this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2=items;
 console.log(this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2);
 this.dropdownValueService.getBuyerWiseSeason(items.buyerProfileId);
  });
    
  

     }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getBuyers();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getYesNo();
this.dropdownValueService.getSource();
this.dropdownValueService.getCalculationBasis();
this.dropdownValueService.getLevel();
this.dropdownValueService.getYesNo();
this.datapassingService.getJobSelectionFormValue().subscribe(data=>{

  if(data!=0){
    if(this.buyerId==0){
      this.buyerId=data.buyerId;
    }
  
   
    this.dropdownValueService.getBuyerWiseSeason(this.buyerId);
   this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2.buyerProfileId=data.buyerId;
   this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2.jobNo=data.jobNo;

  }
  console.log(this.buyerId);

})

  }

   resetForm(form?:NgForm){
if(form!=null)
form.resetForm();
this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2 = {
  id: 0,
  woNo: '' ,
jobNo: '' ,
buyerProfileId: '' ,
woDate: new Date(),
deliveryDate: '' ,
currencyId: '' ,
exchangeRate: 0 ,
payMode: '' ,
supplierName: '' ,
readyToApprove: '' ,
source: '' ,
attention: '' ,
calculationBasis: '' ,
level: '' ,
isShort: '' ,
seasonId: '' ,

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
    
      if(this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2.buyerProfileId==''){
        this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2.buyerProfileId=0;
      }
      if(this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2.currencyId==''){
        this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2.currencyId=0;
      }
      if(this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2.seasonId==''){
        this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2.seasonId=0;
      }
    
      if(this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2.deliveryDate!=''){
        this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2.deliveryDate=this.dateResizeService.dateResize(this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2.deliveryDate);
        }
  this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2.approvedDate=this.dateResizeService.dateResize(new Date);
  this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2.approvedBy=ApprovedBy.userName;
  this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2.isApproved=true;
  this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2.entryBy=EntryBy.userName;
  this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2.status='Active';
this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2.entryDate=this.dateResizeService.dateResize(new Date);
  this.embellishmentWorkOrderV2Service.update(this.embellishmentWorkOrderV2Service.embellishmentWorkOrderV2).subscribe(res=>{
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

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { YarnPurchaseRequisitionDetailsService } from '../../../../@core/data/commercial/yarn-purchase-requisition-details.service';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { Tostr } from '../../../../@core/data/tostr.model';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-yarn-purchase-requisition-details',
  templateUrl: './yarn-purchase-requisition-details.component.html',
  styleUrls: ['./yarn-purchase-requisition-details.component.scss']
})
export class YarnPurchaseRequisitionDetailsComponent implements OnInit {

  Tostr=new Tostr();
 editedId;

  constructor(
  public yarnPurchaseRequisitionDetailsService:YarnPurchaseRequisitionDetailsService,
  private router:Router,
  private dateResizeService:DateResizeService,
  private fb: FormBuilder,
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService,
  private route:ActivatedRoute
    ) { 
         this.editedId=parseInt(localStorage.getItem('yarnPurchaseRequisitionId'))
         this.yarnPurchaseRequisitionDetailsService.getAll().subscribe(data=>{
           let item = data.find(f=>f.yarnPurchaseRequisitionId==this.editedId)
           
         })
    }

  ngOnInit() {
    this.yarnPurchaseRequisitionDetailsService.YarnPurchaseRequisitionDetailsForm=this.fb.array([]);
    this.dropdownValueService.getBuyers();
this.dropdownValueService.getYarnCount();
this.dropdownValueService.getYarnComp1DDL();
this.dropdownValueService.gettypeDDL();
this.dropdownValueService.getUom();

  }


onDelete(id, i) {
  this.yarnPurchaseRequisitionDetailsService.count=this.yarnPurchaseRequisitionDetailsService.count-1;
  if (id == 0)
    this.yarnPurchaseRequisitionDetailsService.YarnPurchaseRequisitionDetailsForm.removeAt(i);
  else if (confirm('Are you sure to delete this record ?'))
    this.yarnPurchaseRequisitionDetailsService.deleteWithOutSubcribe(id).subscribe(
      res => {
        this.yarnPurchaseRequisitionDetailsService.YarnPurchaseRequisitionDetailsForm.removeAt(i);
        this.Tostr.showToast('primary','', 'Delete Successfully', '',this.toastrService);
      });
}


  onSubmit(){  
    
      if(this.yarnPurchaseRequisitionDetailsService.yarnPurchaseRequisitionDetails.buyerProfileId==''){
        this.yarnPurchaseRequisitionDetailsService.yarnPurchaseRequisitionDetails.buyerProfileId=0;
      }
      
      if(this.yarnPurchaseRequisitionDetailsService.yarnPurchaseRequisitionDetails.yarnCountId==''){
        this.yarnPurchaseRequisitionDetailsService.yarnPurchaseRequisitionDetails.yarnCountId=0;
      }
      
      if(this.yarnPurchaseRequisitionDetailsService.yarnPurchaseRequisitionDetails.compositionId==''){
        this.yarnPurchaseRequisitionDetailsService.yarnPurchaseRequisitionDetails.compositionId=0;
      }
      
      if(this.yarnPurchaseRequisitionDetailsService.yarnPurchaseRequisitionDetails.yarnTypeId==''){
        this.yarnPurchaseRequisitionDetailsService.yarnPurchaseRequisitionDetails.yarnTypeId=0;
      }
      
      if(this.yarnPurchaseRequisitionDetailsService.yarnPurchaseRequisitionDetails.uomId==''){
        this.yarnPurchaseRequisitionDetailsService.yarnPurchaseRequisitionDetails.uomId=0;
      }
      
    
  //this.yarnPurchaseRequisitionDetailsService.addOrUpdateMultilines(this.YarnPurchaseRequisitionDetailsForm.value);
  this.yarnPurchaseRequisitionDetailsService.YarnPurchaseRequisitionDetailsForm.value.forEach(element => {
    element.entryBy=EntryBy.userName;
    element.status='Active';
    element.entryDate=this.dateResizeService.dateResize(new Date);
    element.approvedDate=this.dateResizeService.dateResize(new Date);
    element.approvedBy=ApprovedBy.userName;
    element.isApproved=true;

     element.yarnInhouseDate=this.dateResizeService.dateResize( element.yarnInhouseDate);
    element.yarnPurchaseRequisitionId=parseInt(localStorage.getItem('yarnPurchaseRequisitionId'));

    if(element.id!=0){
      this.yarnPurchaseRequisitionDetailsService.updateMultiline(element,element.id);
    }
    if(element.id==0){
      console.log(element.id);
      this.yarnPurchaseRequisitionDetailsService.createMultiline(element);
    }
    
  });
  this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
  this.router.navigate(["/pages/"]);
  this.yarnPurchaseRequisitionDetailsService.YarnPurchaseRequisitionDetailsForm=this.fb.array([]);
  
    
  }


    backTo(){
      this.router.navigate(['/pages/']);
    }
}

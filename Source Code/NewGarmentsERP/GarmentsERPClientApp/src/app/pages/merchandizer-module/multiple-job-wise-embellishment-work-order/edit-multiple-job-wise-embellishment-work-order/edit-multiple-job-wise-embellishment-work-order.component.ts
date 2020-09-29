import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';    
import { Tostr } from '../../../../@core/data/tostr.model';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { MultipleJobWiseEmbellishmentWorkOrderService } from '../../../../@core/mock/marchandizer/multiple-job-wise-embellishment-work-order.service';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';

@Component({
  selector: 'ngx-edit-multiple-job-wise-embellishment-work-order',
  templateUrl: './edit-multiple-job-wise-embellishment-work-order.component.html',
  styleUrls: ['./edit-multiple-job-wise-embellishment-work-order.component.scss']
})
export class EditMultipleJobWiseEmbellishmentWorkOrderComponent implements OnInit {

  editedId;
  Tostr=new Tostr();
  
  constructor(
  public multipleJobWiseEmbellishmentWorkOrderService:MultipleJobWiseEmbellishmentWorkOrderService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService
    ) {

    
  
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.multipleJobWiseEmbellishmentWorkOrderService.getAll().subscribe(data=>{
 let items=  data.find(f=>f.id==this.editedId);
 this.multipleJobWiseEmbellishmentWorkOrderService.multipleJobWiseEmbellishmentWorkOrder=items;
  });

     }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getCompany();
this.dropdownValueService.getBuyers();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getSource();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getSuppliers();
this.dropdownValueService.getYesNo();
this.dropdownValueService.getLevel();

  }

   resetForm(form?:NgForm){
if(form!=null)
form.resetForm();
this.multipleJobWiseEmbellishmentWorkOrderService.multipleJobWiseEmbellishmentWorkOrder = {
  id: 0,
  woNo: '' ,
companyNameId: '' ,
buyerNameId: '' ,
woDate: '' ,
deliveryDate: '' ,
currencyId: '' ,
source: '' ,
payMode: '' ,
supplierNameId: '' ,
readyToApprove: '' ,
level: '' ,
attention: '' ,
remarks: '' ,

  entryDate :'',
  entryBy :'',
  approvedDate :'',
  approvedBy :'',
  isApproved :false,
  status :''
}

}


  onSubmit(){  
    if(this.multipleJobWiseEmbellishmentWorkOrderService.multipleJobWiseEmbellishmentWorkOrder.buyerNameId==undefined||this.multipleJobWiseEmbellishmentWorkOrderService.multipleJobWiseEmbellishmentWorkOrder.buyerNameId==''){
      this.multipleJobWiseEmbellishmentWorkOrderService.multipleJobWiseEmbellishmentWorkOrder.buyerNameId=0;
    }
    if(this.multipleJobWiseEmbellishmentWorkOrderService.multipleJobWiseEmbellishmentWorkOrder.currencyId==undefined||this.multipleJobWiseEmbellishmentWorkOrderService.multipleJobWiseEmbellishmentWorkOrder.currencyId==''){
      this.multipleJobWiseEmbellishmentWorkOrderService.multipleJobWiseEmbellishmentWorkOrder.currencyId=0;
    }
  this.multipleJobWiseEmbellishmentWorkOrderService.multipleJobWiseEmbellishmentWorkOrder.approvedDate=this.dateResizeService.dateResize(new Date);
  this.multipleJobWiseEmbellishmentWorkOrderService.multipleJobWiseEmbellishmentWorkOrder.approvedBy=ApprovedBy.userName;
  this.multipleJobWiseEmbellishmentWorkOrderService.multipleJobWiseEmbellishmentWorkOrder.isApproved=true;
  this.multipleJobWiseEmbellishmentWorkOrderService.multipleJobWiseEmbellishmentWorkOrder.entryBy=EntryBy.userName;
  this.multipleJobWiseEmbellishmentWorkOrderService.multipleJobWiseEmbellishmentWorkOrder.status='Active';
this.multipleJobWiseEmbellishmentWorkOrderService.multipleJobWiseEmbellishmentWorkOrder.entryDate=this.dateResizeService.dateResize(new Date);
  this.multipleJobWiseEmbellishmentWorkOrderService.update(this.multipleJobWiseEmbellishmentWorkOrderService.multipleJobWiseEmbellishmentWorkOrder).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
   this.resetForm();
   this.router.navigate(["/pages/Multiple-Job-Wise-Embelisment-Work-Order"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/Multiple-Job-Wise-Embelisment-Work-Order']);
    }

    
    
  

}

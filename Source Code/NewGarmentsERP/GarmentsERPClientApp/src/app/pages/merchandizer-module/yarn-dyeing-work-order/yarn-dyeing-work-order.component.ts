import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tostr } from '../../../@core/data/tostr.model';
import { YarnDyeingWorkOrderService } from '../../../@core/mock/marchandizer/yarn-dyeing-work-order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateResizeService } from '../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
import { ApprovedBy } from '../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../@core/data/Shared/entry-by';

@Component({
  selector: 'ngx-yarn-dyeing-work-order',
  templateUrl: './yarn-dyeing-work-order.component.html',
  styleUrls: ['./yarn-dyeing-work-order.component.scss']
})
export class YarnDyeingWorkOrderComponent implements OnInit {
  editedId;
  Tostr=new Tostr();
  
  constructor(
  public yarnDyeingWorkOrderService:YarnDyeingWorkOrderService,
  private router:Router,
  private dateResizeService:DateResizeService,
  private route:ActivatedRoute,
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService
    ) { 
      this.editedId = this.route.snapshot.paramMap.get('id');

      if(this.editedId!=0)
      {
      this.yarnDyeingWorkOrderService.getAll().subscribe(data=>{
     let items=  data.find(f=>f.id==this.editedId);
     this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder=items;
      });
    }
    }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getSuppliers();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getSource();
this.dropdownValueService.getItemCategory();
this.dropdownValueService.getYesNo();

  }

   resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder = {
    id: 0,
    yarnDyeingFactory: '' ,
bookingDate: '' ,
attention: '' ,
yarnDyeingWoNo: '' ,
currency: 0 ,
exchangeRate: 0 ,
payMode: '' ,
source: '' ,
gorYIssueStart: '' ,
gorYIssueEnd: '' ,
dorYDeliveryStart: '' ,
dorYDeliveryEnd: '' ,
itemCategory: 0 ,
isShort: '' ,


    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }
  
 }


  onSubmit(){  
 
      this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder.dorYDeliveryEnd=this.dateResizeService.dateResize(this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder.dorYDeliveryEnd);

      this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder.dorYDeliveryStart=this.dateResizeService.dateResize(this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder.dorYDeliveryStart);

      this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder.gorYIssueEnd=this.dateResizeService.dateResize(this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder.gorYIssueEnd);

      this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder.gorYIssueStart=this.dateResizeService.dateResize(this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder.gorYIssueStart);
   
      this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder.bookingDate=this.dateResizeService.dateResize(this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder.bookingDate);

 
    
   

  this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder.approvedDate=this.dateResizeService.dateResize(new Date);
  this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder.approvedBy=ApprovedBy.userName;
  this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder.isApproved=true;
  this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder.entryBy=EntryBy.userName;
  this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder.status='Active';
this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder.entryDate=this.dateResizeService.dateResize(new Date);

if(this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder.id==0){


  this.yarnDyeingWorkOrderService.add(this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.resetForm();
   this.router.navigate(["/pages/show-Yarn-Dyeing-Work-Order"]);
   
  })
}
else{
  this.yarnDyeingWorkOrderService.update(this.yarnDyeingWorkOrderService.yarnDyeingWorkOrder).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
   this.resetForm();
   this.router.navigate(["/pages/show-Yarn-Dyeing-Work-Order"]);
   
  })
}
    
  }


    backTo(){
      this.router.navigate(['/pages/show-Yarn-Dyeing-Work-Order']);
    }

}

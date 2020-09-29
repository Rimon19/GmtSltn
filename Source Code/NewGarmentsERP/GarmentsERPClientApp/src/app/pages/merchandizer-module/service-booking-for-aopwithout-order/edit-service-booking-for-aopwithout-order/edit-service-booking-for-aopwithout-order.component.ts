import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';    
import { Tostr } from '../../../../@core/data/tostr.model';
import { ServiceBookingForAOPWithoutOrderService } from '../../../../@core/mock/marchandizer/service-booking-for-aopwithout-order.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';

@Component({
  selector: 'ngx-edit-service-booking-for-aopwithout-order',
  templateUrl: './edit-service-booking-for-aopwithout-order.component.html',
  styleUrls: ['./edit-service-booking-for-aopwithout-order.component.scss']
})
export class EditServiceBookingForAOPWithoutOrderComponent implements OnInit {

  
 
  editedId;
  Tostr=new Tostr();
  public nextId:number;
  constructor(
  public serviceBookingForAOPWithoutOrderService:ServiceBookingForAOPWithoutOrderService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService
    ) {
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.nextId=this.editedId; 
  this.serviceBookingForAOPWithoutOrderService.getAll().subscribe(data=>{
 let items=  data.find(f=>f.id==this.editedId);
 this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder=items;
  });
}

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getCompany();
    //this.dropdownValueService.getFabBookingNo();
this.dropdownValueService.getBuyers();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getSource();
this.dropdownValueService.getAopSource();
this.dropdownValueService.getSuppliers();

  }

   resetForm(form?:NgForm){
if(form!=null)
form.resetForm();
this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder = {
  id: 0,
  woNo: '' ,
companyNameId: '' ,
fabBookingNoId: '' ,
buyerNameId: '' ,
bookingDate: '' ,
currencyId: '' ,
exchangeRate:0 ,
payMode: '' ,
source: '' ,
aopSource: '' ,
supplierNameId: '' ,
attention: '' ,

  entryDate :'',
  entryBy :'',
  approvedDate :'',
  approvedBy :'',
  isApproved :false,
  status :''
}

}


  onSubmit(){  
    
      if(this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.fabBookingNoId==''){
        this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.fabBookingNoId=0;
      }
      if(this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.buyerNameId==''){
        this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.buyerNameId=0;
      }
      if(this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.currencyId==''){
        this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.currencyId=0;
      }
      if(this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.supplierNameId==''){
        this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.supplierNameId=0;
      }
    
 
  this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.approvedDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.approvedBy=ApprovedBy.userName;
  this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.isApproved=true;
  this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.entryBy=EntryBy.userName;
  this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.status='Active';
this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.entryDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForAOPWithoutOrderService.update(this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder).subscribe(res=>{
    
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
   this.resetForm();
   this.router.navigate(["/pages/service-booking-forAOP-withoutOrder"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/service-booking-forAOP-withoutOrder']);
    }

    
    
  

}

import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { ServiceBookingForAOPWithoutOrderService } from '../../../../@core/mock/marchandizer/service-booking-for-aopwithout-order.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { NgForm } from '@angular/forms';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';

@Component({
  selector: 'ngx-add-service-booking-for-aopwithout-order',
  templateUrl: './add-service-booking-for-aopwithout-order.component.html',
  styleUrls: ['./add-service-booking-for-aopwithout-order.component.scss']
})
export class AddServiceBookingForAOPWithoutOrderComponent implements OnInit {

  Tostr=new Tostr();
  public nextId:number=0;
  constructor(
  public serviceBookingForAOPWithoutOrderService:ServiceBookingForAOPWithoutOrderService,
  private router:Router,
  private datapassingService:DatapassingService,
  private dateResizeService:DateResizeService,
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService
    ) {

    
  


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
exchangeRate: 0 ,
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
  this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.bookingDate=this.dateResizeService.dateResize(  this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.bookingDate);
  this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.approvedBy=ApprovedBy.userName;
  this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.isApproved=true;
  this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.entryBy=EntryBy.userName;
  this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.status='Active';
this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder.entryDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForAOPWithoutOrderService.add(this.serviceBookingForAOPWithoutOrderService.serviceBookingForAOPWithoutOrder).subscribe(res=>{
    
    this.nextId=res.id;
   this.Tostr.showToast('primary','', 'Save Successfully', '',this.toastrService);
   this.resetForm();
   this.router.navigate(["/pages/add-service-booking-forAOP-withoutOrder"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/service-booking-forAOP-withoutOrder']);
    }

    
    
  

}




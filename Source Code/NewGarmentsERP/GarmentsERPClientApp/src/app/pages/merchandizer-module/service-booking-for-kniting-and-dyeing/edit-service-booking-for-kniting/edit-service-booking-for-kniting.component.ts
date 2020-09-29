import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';    
import { Tostr } from '../../../../@core/data/tostr.model';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { ServiceBookingForKnitingandDyeingWithoutOrderService } from '../../../../@core/mock/marchandizer/service-booking-for-knitingand-dyeing-without-order.service';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';

@Component({
  selector: 'ngx-edit-service-booking-for-kniting',
  templateUrl: './edit-service-booking-for-kniting.component.html',
  styleUrls: ['./edit-service-booking-for-kniting.component.scss']
})
export class EditServiceBookingForKnitingComponent implements OnInit {
  editedId;
  Tostr=new Tostr();
  
  constructor(
  public serviceBookingForKnitingandDyeingWithoutOrderService:ServiceBookingForKnitingandDyeingWithoutOrderService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService
    ) {

    
  
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.serviceBookingForKnitingandDyeingWithoutOrderService.getAll().subscribe(data=>{
 let items=  data.find(f=>f.id==this.editedId);
 this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder=items;
  });

     }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService. getCompany();
this.dropdownValueService.getBuyers();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getSource();
this.dropdownValueService. getAopSource   ();
this.dropdownValueService.getSuppliers  ();

  }

   resetForm(form?:NgForm){
if(form!=null)
form.resetForm();
this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder = {
  id: 0,
  woNo: '' ,
companyNameId: '' ,
fabBookingNo: '' ,
buyerNameId: '' ,
bookingDate: '' ,
currencyId: '' ,
exchangeRate: '' ,
payMode: '' ,
source: '' ,
knitDyeSource: '' ,
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
    
      if(this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder.buyerNameId==''){
        this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder.buyerNameId=0;
      }
      if(this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder.currencyId==''){
        this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder.currencyId=0;
      }
      if(this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder.supplierNameId==''){
        this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder.supplierNameId=0;
      }
      if(this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder.exchangeRate==''){
        this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder.exchangeRate=0;
      }
  this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder.bookingDate=this.dateResizeService.dateResize(this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder.bookingDate);
  this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder.approvedDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder.approvedBy=ApprovedBy.userName;
  this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder.isApproved=true;
  this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder.entryBy=EntryBy.userName;
  this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder.status='Active';
this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder.entryDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForKnitingandDyeingWithoutOrderService.update(this.serviceBookingForKnitingandDyeingWithoutOrderService.serviceBookingForKnitingandDyeingWithoutOrder).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
   this.resetForm();
   this.router.navigate(["/pages/service-bookingFor-knitingAnd-dyeing"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/service-bookingFor-knitingAnd-dyeing']);
    }

    
    
  

}

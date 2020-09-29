import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { ServiceBookingForDyeingService } from '../../../../@core/mock/marchandizer/service-booking-for-dyeing.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';

@Component({
  selector: 'ngx-add-service-booking-for-dyeing',
  templateUrl: './add-service-booking-for-dyeing.component.html',
  styleUrls: ['./add-service-booking-for-dyeing.component.scss']
})
export class AddServiceBookingForDyeingComponent implements OnInit {
  Tostr=new Tostr();
  
  constructor(
  public serviceBookingForDyeingService:ServiceBookingForDyeingService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService
    ) { }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getMonth();
this.dropdownValueService.getYear();
this.dropdownValueService.getCompany();
this.dropdownValueService.getBuyers();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getSource();
this.dropdownValueService.getSuppliers();
this.dropdownValueService.getMaterialSource();

  }

   resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.serviceBookingForDyeingService.serviceBookingForDyeing = {
    id: 0,
    bookingNo: '' ,
bookingMonth: '' ,
bookingYear: '' ,
selectedOrderNo: '' ,
jobNoId: '' ,
companyNameId: '' ,
buyerNameId: '' ,
currencyId: '' ,
exchangeRate: '' ,
bookingDate: '' ,
deliveryDate: '' ,
payMode: '' ,
source: '' ,
supplierNameId: '' ,
attention: '' ,
withMaterial: '' ,

    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }
  
 }


  onSubmit(){  
    
      if(this.serviceBookingForDyeingService.serviceBookingForDyeing.buyerNameId==''){
        this.serviceBookingForDyeingService.serviceBookingForDyeing.buyerNameId=0;
      }
      
      if(this.serviceBookingForDyeingService.serviceBookingForDyeing.currencyId==''){
        this.serviceBookingForDyeingService.serviceBookingForDyeing.currencyId=0;
      }
      
      if(this.serviceBookingForDyeingService.serviceBookingForDyeing.supplierNameId==''){
        this.serviceBookingForDyeingService.serviceBookingForDyeing.supplierNameId=0;
      }
      if(this.serviceBookingForDyeingService.serviceBookingForDyeing.exchangeRate==''){
        this.serviceBookingForDyeingService.serviceBookingForDyeing.exchangeRate=0;
      }
      
    

  
  this.serviceBookingForDyeingService.serviceBookingForDyeing.approvedDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForDyeingService.serviceBookingForDyeing.bookingDate=this.dateResizeService.dateResize(  this.serviceBookingForDyeingService.serviceBookingForDyeing.bookingDate);
  this.serviceBookingForDyeingService.serviceBookingForDyeing.deliveryDate=this.dateResizeService.dateResize(  this.serviceBookingForDyeingService.serviceBookingForDyeing.deliveryDate);
  this.serviceBookingForDyeingService.serviceBookingForDyeing.approvedBy=ApprovedBy.userName;
  this.serviceBookingForDyeingService.serviceBookingForDyeing.isApproved=true;
  this.serviceBookingForDyeingService.serviceBookingForDyeing.entryBy=EntryBy.userName;
  this.serviceBookingForDyeingService.serviceBookingForDyeing.status='Active';
this.serviceBookingForDyeingService.serviceBookingForDyeing.entryDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForDyeingService.add(this.serviceBookingForDyeingService.serviceBookingForDyeing).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.resetForm();
   this.router.navigate(["/pages/service-booking-for-dyeing"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/service-booking-for-dyeing']);
    }
    
    
  

}

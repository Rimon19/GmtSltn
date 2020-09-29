import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';    
import { Tostr } from '../../../../@core/data/tostr.model';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { ServiceBookingForKnitingandDyeingWithoutOrderDetailsService } from '../../../../@core/mock/marchandizer/service-booking-for-knitingand-dyeing-without-order-details.service';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';

@Component({
  selector: 'ngx-edit-service-booking-for-kniting-details',
  templateUrl: './edit-service-booking-for-kniting-details.component.html',
  styleUrls: ['./edit-service-booking-for-kniting-details.component.scss']
})
export class EditServiceBookingForKnitingDetailsComponent implements OnInit {

  

  editedId;
  Tostr=new Tostr();
  
  constructor(
  public serviceBookingForKnitingandDyeingWithoutOrderDetailsService:ServiceBookingForKnitingandDyeingWithoutOrderDetailsService,
  private router:Router,
  private dateResizeService:DateResizeService,
  private datapassingService:DatapassingService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService
    ) {
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.getAll().subscribe(data=>{

 let items=  data.find(f=>f.serviceBookingMasterId==this.editedId);
 this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails=items;
  });

     }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getfabricSourceList();
this.dropdownValueService.getFabricDescription();
this.dropdownValueService.getUom ();
this.dropdownValueService.getAllProductionProcess();

  }

   resetForm(form?:NgForm){
if(form!=null)
form.resetForm();
this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails = {
  id: 0,
  fabricSource: '' ,
fabricDescription: '' ,
gsm: '' ,
dia: '' ,
uom: '' ,
artworkNo: '' ,
gmtsColor: '' ,
woQty: '' ,
rate: '' ,
amount: '' ,
deliveryStartDate: '' ,
deliveryEndDate: '' ,
remarks: '' ,
process: '' ,
serviceBookingMasterId:0,

  entryDate :'',
  entryBy :'',
  approvedDate :'',
  approvedBy :'',
  isApproved :false,
  status :''
}

}


  onSubmit(){  
    
    if(this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.uom==''){
      this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.uom=0;
    }
    if(this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.rate==''){
      this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.rate=0;
    }
    if(this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.amount==''){
      this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.rate=0;
    }
    if(this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.woQty==''){
      this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.woQty=0;
    }
       this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.serviceBookingMasterId=this.datapassingService.getValue();
    this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.deliveryStartDate=this.dateResizeService.dateResize(this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.deliveryStartDate);
    this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.deliveryEndDate=this.dateResizeService.dateResize(this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.deliveryEndDate);
  this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.approvedDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.approvedBy=ApprovedBy.userName;
  this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.isApproved=true;
  this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.entryBy=EntryBy.userName;
  this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.status='Active';
this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails.entryDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.update(this.serviceBookingForKnitingandDyeingWithoutOrderDetailsService.serviceBookingForKnitingandDyeingWithoutOrderDetails).subscribe(res=>{
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

   
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../../@core/data/tostr.model';
import { ShortFabricBookingDetailsService } from '../../../../../@core/mock/marchandizer/short-fabric-booking-details.service';
import { DateResizeService } from '../../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../../@core/mock/shared/dropdown-value.service';
import { ApprovedBy } from '../../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../../@core/data/Shared/entry-by';
import { DatapassingService } from '../../../../../@core/mock/shared/datapassing.service';
@Component({
  selector: 'ngx-add-short-fabric-booking-details',
  templateUrl: './add-short-fabric-booking-details.component.html',
  styleUrls: ['./add-short-fabric-booking-details.component.scss']
})
export class AddShortFabricBookingDetailsComponent implements OnInit {



  Tostr=new Tostr();
  
  constructor(
  public shortFabricBookingDetailsService:ShortFabricBookingDetailsService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService,
  private datapassingService:DatapassingService
    ) { }

  ngOnInit() {
    let shortFabricBookingObj=  this.datapassingService.getValue();
     let poId=parseInt(shortFabricBookingObj.jobNo);
    this.resetForm();
    this.dropdownValueService.getFabricDescription();
this.dropdownValueService.getGarmentsColor(poId);
this.dropdownValueService.getGarmentsColor(poId);
this.dropdownValueService.getGarmentsSize(poId);
this.dropdownValueService.getGarmentsSize(poId);
this.dropdownValueService. getDepartments();

  }

   resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.shortFabricBookingDetailsService.shortFabricBookingDetails = {
    id: 0,
    shortFabricBookingId:0,
    fabricDescriptionId: '' ,
garmentsColor: '' ,
fabricColor: '' ,
garmentssize: '' ,
itemsize: '' ,
diaOrWidth: '' ,
finishFabric: 0 ,
processloss: 0 ,
grayFabric: 0 ,
rate: 0 ,
amount: 0 ,
rmgQty: 0 ,
departments: '' ,
responsibleperson: '' ,
reason: '' ,

    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }
  
 }

calculateTotalAmount(){
  this.shortFabricBookingDetailsService.shortFabricBookingDetails.amount= this.shortFabricBookingDetailsService.shortFabricBookingDetails.finishFabric*this.shortFabricBookingDetailsService.shortFabricBookingDetails.rate;
}
  onSubmit(){  

let shortFabricBookingObj=this.datapassingService.getValue();
this.shortFabricBookingDetailsService.shortFabricBookingDetails.shortFabricBookingId=shortFabricBookingObj.id;
  this.shortFabricBookingDetailsService.shortFabricBookingDetails.approvedDate=this.dateResizeService.dateResize(new Date);
  this.shortFabricBookingDetailsService.shortFabricBookingDetails.approvedBy=ApprovedBy.userName;
  this.shortFabricBookingDetailsService.shortFabricBookingDetails.isApproved=true;
  this.shortFabricBookingDetailsService.shortFabricBookingDetails.entryBy=EntryBy.userName;
  this.shortFabricBookingDetailsService.shortFabricBookingDetails.status='Active';
this.shortFabricBookingDetailsService.shortFabricBookingDetails.entryDate=this.dateResizeService.dateResize(new Date);
console.log(this.shortFabricBookingDetailsService.shortFabricBookingDetails);
this.shortFabricBookingDetailsService.add(this.shortFabricBookingDetailsService.shortFabricBookingDetails).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.resetForm();
   this.router.navigate(["/pages/short-fabric-booking"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/short-fabric-booking']);
    }
    
    
  

}

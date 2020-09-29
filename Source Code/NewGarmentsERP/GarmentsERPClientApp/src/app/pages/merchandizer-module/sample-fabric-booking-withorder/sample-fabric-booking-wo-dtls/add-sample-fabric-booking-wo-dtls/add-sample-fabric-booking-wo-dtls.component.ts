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
import { SampleFabricBookingWoDtlsService } from '../../../../../@core/mock/marchandizer/sample-fabric-booking-wo-dtls.service';
@Component({
  selector: 'ngx-add-sample-fabric-booking-wo-dtls',
  templateUrl: './add-sample-fabric-booking-wo-dtls.component.html',
  styleUrls: ['./add-sample-fabric-booking-wo-dtls.component.scss']
})
export class AddSampleFabricBookingWoDtlsComponent implements OnInit {

 

  Tostr=new Tostr();
  
  constructor(
  public sampleFabricBookingWoDtlsService:SampleFabricBookingWoDtlsService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService,
  private datapassingService:DatapassingService
    ) { }

  ngOnInit() {
    let sampleFabricBookingwithOrderObj=  this.datapassingService.getValue();
     let poId=parseInt(sampleFabricBookingwithOrderObj.jobNo);
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
  this.sampleFabricBookingWoDtlsService.sampleFabricBookingWithOrderDetails = {
    id: 0,
    sampleFabricBookingId:0,
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
  this.sampleFabricBookingWoDtlsService.sampleFabricBookingWithOrderDetails.amount= this.sampleFabricBookingWoDtlsService.sampleFabricBookingWithOrderDetails.finishFabric*this.sampleFabricBookingWoDtlsService.sampleFabricBookingWithOrderDetails.rate;
}
  onSubmit(){  

let sampleFabricBookingwithOrderObj=this.datapassingService.getValue();
this.sampleFabricBookingWoDtlsService.sampleFabricBookingWithOrderDetails.sampleFabricBookingId=sampleFabricBookingwithOrderObj.id;
  this.sampleFabricBookingWoDtlsService.sampleFabricBookingWithOrderDetails.approvedDate=this.dateResizeService.dateResize(new Date);
  this.sampleFabricBookingWoDtlsService.sampleFabricBookingWithOrderDetails.approvedBy=ApprovedBy.userName;
  this.sampleFabricBookingWoDtlsService.sampleFabricBookingWithOrderDetails.isApproved=true;
  this.sampleFabricBookingWoDtlsService.sampleFabricBookingWithOrderDetails.entryBy=EntryBy.userName;
  this.sampleFabricBookingWoDtlsService.sampleFabricBookingWithOrderDetails.status='Active';
this.sampleFabricBookingWoDtlsService.sampleFabricBookingWithOrderDetails.entryDate=this.dateResizeService.dateResize(new Date);
console.log(this.sampleFabricBookingWoDtlsService.sampleFabricBookingWithOrderDetails);
this.sampleFabricBookingWoDtlsService.add(this.sampleFabricBookingWoDtlsService.sampleFabricBookingWithOrderDetails).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.resetForm();
   this.router.navigate(["/pages/sample-fabric-booking-withorder"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/sample-fabric-booking-withorder']);
    }
    
    
  

}

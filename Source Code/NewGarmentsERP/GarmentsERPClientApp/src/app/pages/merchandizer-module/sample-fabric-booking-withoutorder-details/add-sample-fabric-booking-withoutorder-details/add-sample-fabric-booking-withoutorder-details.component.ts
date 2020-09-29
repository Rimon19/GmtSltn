
  import { Component, OnInit } from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { Router, ActivatedRoute } from '@angular/router';
  import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { SampleFabricBookingWithoutorderDetailsService } from '../../../../@core/mock/marchandizer/sample-fabric-booking-withoutorder-details.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
  
@Component({
  selector: 'ngx-add-sample-fabric-booking-withoutorder-details',
  templateUrl: './add-sample-fabric-booking-withoutorder-details.component.html',
  styleUrls: ['./add-sample-fabric-booking-withoutorder-details.component.scss']
})
export class AddSampleFabricBookingWithoutorderDetailsComponent implements OnInit {


  Tostr=new Tostr();
  
  constructor(
  public sampleFabricBookingWithoutorderDetailsService:SampleFabricBookingWithoutorderDetailsService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService,
  private datapassingService:DatapassingService
   
  ) { }

  ngOnInit() {
    this.resetForm();
   
    this.dropdownValueService.getsampleType();
this.dropdownValueService.getBodyPart();
this.dropdownValueService.getColorType();
this.dropdownValueService.getFabricDescription();
this.dropdownValueService.getBodyPartType();
this.dropdownValueService.getfabricSourceList();
this.dropdownValueService.getUom();

  }

   resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails = {
    id: 0,
    sfbWithoutOrderId: 0 ,
buyerProfileId: 0 ,
stypeRef: '' ,
styleDes: '' ,
sampletype: '' ,
bodyPartEntryId: '' ,
colorType: '' ,
fabricDescriptionId: '' ,
gsm: '' ,
gmtsColor: '' ,
fabricColor: '' ,
gmtsSize: '' ,
itemsize: '' ,
diaWidth: '' ,
finishFabric: '' ,
processloss: 0 ,
grayFabric: '' ,
articleNumber: '' ,
rate: 0 ,
amount: 0 ,
bodyPartTypeId: '' ,
itemQty: 0 ,
yarnDetails: '' ,
fabricSource: '' ,
knittingChargeKG: '' ,
bhQty: 0 ,
rhQty: 0 ,
deliveryDate: '' ,
remarks: '' ,
uom: '' ,

    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }
  
 }


  onSubmit(){  
  
    

    this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails.sfbWithoutOrderId=  this.datapassingService.getValue().element.id;
this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails.buyerProfileId=  this.datapassingService.getValue().buyerProfileId;
      if(this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails.bodyPartTypeId==''){
        this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails.bodyPartTypeId=0;
      }
      if(this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails.grayFabric==''){
        this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails.grayFabric='0';
      }
      if(this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails.articleNumber==''){
        this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails.articleNumber='0';
      }
  
  this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails.approvedDate=this.dateResizeService.dateResize(new Date);
  this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails.approvedBy=ApprovedBy.userName;
  this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails.isApproved=true;
  this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails.entryBy=EntryBy.userName;
  this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails.status='Active';
this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails.entryDate=this.dateResizeService.dateResize(new Date);

console.log(this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails);

//var sampleFabBWOMasterInfo = localStorage.getItem('sampleFabBWOMasterInfo');
//let sampleFabBWOMasterInfoObject= JSON.parse(sampleFabBWOMasterInfo);
//this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails.sfbWithoutOrderId=sampleFabBWOMasterInfoObject.pkId;
//this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails.buyerProfileId= parseInt(sampleFabBWOMasterInfoObject.buyerProfileId);
this.sampleFabricBookingWithoutorderDetailsService.add(this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails).subscribe(res=>{
  console.log(res);       
 this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
  this.resetForm();
 this.router.navigate(["/pages/sample-fabric-booking-without-order"]);
 
})

    
  }


    backTo(){
      this.router.navigate(['/pages/sample-fabric-booking-without-order']);
    }
    

}

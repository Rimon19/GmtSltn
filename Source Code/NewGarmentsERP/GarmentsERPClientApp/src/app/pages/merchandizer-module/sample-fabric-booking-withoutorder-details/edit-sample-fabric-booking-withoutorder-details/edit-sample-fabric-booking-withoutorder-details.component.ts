   
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
  selector: 'ngx-edit-sample-fabric-booking-withoutorder-details',
  templateUrl: './edit-sample-fabric-booking-withoutorder-details.component.html',
  styleUrls: ['./edit-sample-fabric-booking-withoutorder-details.component.scss']
})
export class EditSampleFabricBookingWithoutorderDetailsComponent implements OnInit {



  editedId;
  Tostr=new Tostr();
  subjectObj:any;
  constructor(
  public sampleFabricBookingWithoutorderDetailsService:SampleFabricBookingWithoutorderDetailsService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService,
  private datapassingService:DatapassingService
    ) {

    
      this.resetForm();
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.sampleFabricBookingWithoutorderDetailsService.getAll().subscribe(data=>{
 let items=  data.find(f=>f.sfbWithoutOrderId==this.editedId);
 this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails=items;
  });

     }

  ngOnInit() {
    
    this.dropdownValueService.getsampleType();
this.dropdownValueService.getBodyPart();
this.dropdownValueService.getColorType();
this.dropdownValueService.getFabricDescription();
this.dropdownValueService.getBodyPartType();
this.dropdownValueService.getfabricSourceList();
this.dropdownValueService.getUom();
this.datapassingService.getValue().subscribe(data=>{
this.subjectObj=data;
console.log(this.subjectObj);
});  
  }

   resetForm(form?:NgForm){
if(form!=null)
form.resetForm();
this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails = {
  id: 0,
  sfbWithoutOrderId: '' ,
buyerProfileId: '' ,
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
processloss: '' ,
grayFabric: '' ,
articleNumber: '' ,
rate: '' ,
amount: '' ,
bodyPartTypeId: '' ,
itemQty: '' ,
yarnDetails: '' ,
fabricSource: '' ,
knittingChargeKG: '' ,
bhQty: '' ,
rhQty: '' ,
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
  
//var sampleFabBWOMasterInfo = localStorage.getItem('sampleFabBWOMasterInfo');
//let sampleFabBWOMasterInfoObject= JSON.parse(sampleFabBWOMasterInfo);
//this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails.sfbWithoutOrderId=sampleFabBWOMasterInfoObject.pkId;
//this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails.buyerProfileId= parseInt(sampleFabBWOMasterInfoObject.buyerProfileId);
console.log(this.subjectObj);
this.sampleFabricBookingWithoutorderDetailsService.update(this.sampleFabricBookingWithoutorderDetailsService.sampleFabricBookingWithoutorderDetails).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
   this.resetForm();
   this.router.navigate(["/pages/sample-fabric-booking-without-order"]);
   
  });

 

}


    backTo(){
      this.router.navigate(['/pages/sample-fabric-booking-without-order']);
    }


}

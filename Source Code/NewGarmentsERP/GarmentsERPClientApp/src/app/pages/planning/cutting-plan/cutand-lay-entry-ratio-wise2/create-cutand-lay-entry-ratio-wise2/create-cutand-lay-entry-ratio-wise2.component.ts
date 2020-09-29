import { Component, OnInit } from '@angular/core';
import { NgForm, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { OrderOrJobSelectionFormComponent } from '../../../../merchandizer-module/order-or-job-selection-form/order-or-job-selection-form.component';
import { Tostr } from '../../../../../@core/data/tostr.model';
import { DateResizeService } from '../../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../../@core/mock/shared/dropdown-value.service';
import { ApprovedBy } from '../../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../../@core/data/Shared/entry-by';
import { DatapassingService } from '../../../../../@core/mock/shared/datapassing.service';
import { CutandLayEntryRollWiseService } from '../../../../../@core/mock/planning/cutand-lay-entry-roll-wise.service';
import { CutandLayRollWisedetailsService } from '../../../../../@core/mock/planning/cutand-lay-roll-wisedetails.service';
import { CutandLayEntryRatioWiseService } from '../../../../../@core/mock/planning/cutand-lay-entry-ratio-wise.service';
import { CutandLayEntryRatioWiseDetailsService } from '../../../../../@core/mock/planning/cutand-lay-entry-ratio-wise-details.service';
import { CutandLayEntryRatioWise2Service } from '../../../../../@core/mock/planning/cutand-lay-entry-ratio-wise2.service';
import { CutandLayEntryRatioWise2DetailsService } from '../../../../../@core/mock/planning/cutand-lay-entry-ratio-wise2-details.service';

@Component({
  selector: 'ngx-create-cutand-lay-entry-ratio-wise2',
  templateUrl: './create-cutand-lay-entry-ratio-wise2.component.html',
  styleUrls: ['./create-cutand-lay-entry-ratio-wise2.component.scss']
})
export class CreateCutandLayEntryRatioWise2Component implements OnInit {

  Tostr=new Tostr();
  CutandLaydetailsForm: FormArray = this.fb.array([]);
 public count=0;
  constructor(
  public cutandLayEntryRatioWiseService:CutandLayEntryRatioWise2Service,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService,
  private datapassingService:DatapassingService,
  private dialog:MatDialog,
  public cutandLayEntryRatioWiseDetailsService:CutandLayEntryRatioWise2DetailsService,
  private fb: FormBuilder,
    ) { }

  ngOnInit() {
    this.resetForm();
    this.CutandLaydetailsForm=this.fb.array([]);

    this.dropdownValueService.getLocation();
this.dropdownValueService.getFloors();
this.dropdownValueService.getYear();
this.dropdownValueService.getBuyers();
this.dropdownValueService.getBuyers();

this.dropdownValueService.getPoDetailsInfrosByJobNo(0);
   this.dropdownValueService.getGarmentItemsByOrderNo(0);
   this.dropdownValueService.getGarmentsColor(0);

  this.datapassingService.getJobSelectionFormValue().subscribe(data=>{
    this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.jobNo=data.jobNo;
    this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.buyerProfileId=data.buyerId;

if(data!=0){
  this.dropdownValueService.getPoDetailsInfrosByJobNo(data.orderAutoId);
   this.dropdownValueService.getGarmentItemsByOrderNo(data.orderAutoId);
   this.dropdownValueService.getGarmentsColor(data.poDetId);
}
   

  });

  }

   resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2 = {
    id: 0,
    cuttingNumber:'',
    locationId: '' ,
floorId: '' ,
tableNo: '' ,
cadMarkerlength: '' ,
cadMarkerWidthOrDia: '' ,
cadFabricWidthOrDia: '' ,
cadGsm: '' ,
jobNo: '' ,
yearId: '' ,
batch: '' ,
buyerProfileId: '' ,
planStartDate: '' ,
startTimeHour: '' ,
startTimeMinute: '' ,
planEndDate: '' ,
endTimeHour: '' ,
endTimeMinute: '' ,
widthOrDiaType: '' ,

cadMarkerConsOrDzn: '' ,
styleRef:'',


    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }
  
 }
 CutandLaydetailsFormAction() {
  this.count=this.count+1;
  this.CutandLaydetailsForm.push(this.fb.group({
  id: [0],
  poId:['',Validators.required],
orderCutNo:['',Validators.required],
shipDate: '' ,
garmentsItemId: '' ,
garmentsColor: '' ,
batch: '' ,
plies:['',Validators.required],
sizeRatio: '' ,
markerQnty: '' ,
orderqty: '' ,
totalLayqty: '' ,
laybalanceqty: '' ,
cutandLayEntryRatioWise2MasterId: '' ,

  entryDate :'',
  entryBy :'',
  approvedDate :'',
  approvedBy :'',
  isApproved :false,
  status :''
}))
};


  onSubmit(){  
    
      if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.locationId==''){
        this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.locationId=0;
      }
      
      if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.floorId==''){
        this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.floorId=0;
      }
      
      if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.yearId==''){
        this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.yearId=0;
      }
      
      if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.buyerProfileId==''){
        this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.buyerProfileId=0;
      }
      //fghjk
      if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.cadFabricWidthOrDia==''){
        this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.cadFabricWidthOrDia=0;
      }
      if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.cadGsm==''){
        this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.cadGsm=0;
      }
      if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.cadMarkerConsOrDzn==''){
        this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.cadMarkerConsOrDzn=0;
      }
      if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.cadMarkerWidthOrDia==''){
        this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.cadMarkerWidthOrDia=0;
      }
      if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.endTimeHour==''){
        this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.endTimeHour=0;
      }
      
      if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.startTimeHour==''){
        this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.startTimeHour=0;
      }
      if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.endTimeMinute==''){
        this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.endTimeMinute=0;
      }
      if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.startTimeMinute==''){
        this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.startTimeMinute=0;
      }

      if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.tableNo==''){
        this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.tableNo=0;
      }
  
  this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.approvedDate=this.dateResizeService.dateResize(new Date);
  this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.approvedBy=ApprovedBy.userName;
  this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.isApproved=true;
  this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.entryBy=EntryBy.userName;
  this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.status='Active';
this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.entryDate=this.dateResizeService.dateResize(new Date);
  this.cutandLayEntryRatioWiseService.add(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
   this.datapassingService.setValue(res.id);
   this.resetForm();
   
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/planning/cut-and-lay-entry-ratio-wise2']);
    }
    onAddjobNo(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus= true;
      dialogConfig.width="90%";
      dialogConfig.height="50%";
    // page id is 2 here from according to table imageOrFileHolderPages
    
     // this.datapassingService.sendQuotationInqueryToErpImages.next({pageId:2,primaryKey:this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise2.id});
    
      this.dialog.open(OrderOrJobSelectionFormComponent, dialogConfig);
    }
    


    onDelete(id, i) {
      this.count=this.count-1;
      if (id == 0)
        this.CutandLaydetailsForm.removeAt(i);
      else if (confirm('Are you sure to delete this record ?'))
        this.cutandLayEntryRatioWiseDetailsService.delete(id).subscribe(
          res => {
            this.CutandLaydetailsForm.removeAt(i);
            this.Tostr.showToast('primary','', 'Delete Successfully', '',this.toastrService);
          });
    }


    onSubmitCutNLayDetails(){  
      console.log(this.datapassingService.getValue());
  
   if(this.datapassingService.getValue()!=0){
    this.CutandLaydetailsForm.value.forEach(element => {
      let cutNLayMasterId= this.datapassingService.getValue();
      element.cutandLayEntryRatioWise2MasterId=cutNLayMasterId;
      if(element.garmentsItemId==''){
        element.garmentsItemId=0;
      }
      if(element.cutandLayEntryRatioWise2MasterId==''){
        element.cutandLayEntryRatioWise2MasterId=0;
      }
      if(element.laybalanceqty==''){
        element.laybalanceqty=0;
      }
      if(element.markerQnty==''){
        element.markerQnty=0;
      }
      if(element.orderqty==''){
        element.orderqty=0;
      }
      if(element.totalLayqty==''){
        element.totalLayqty=0;
      }
      if(element.sizeRatio==''){
        element.sizeRatio=0;
      }
      element.entryBy=EntryBy.userName;
      element.status='Active';
      element.entryDate=this.dateResizeService.dateResize(new Date);
      element.approvedDate=this.dateResizeService.dateResize(new Date);
      
      element.approvedBy=ApprovedBy.userName;
      element.isApproved=true;
  
      if(element.id!=0){
        this.cutandLayEntryRatioWiseDetailsService.update(element).subscribe(data=>{
        
        });
      }
      if(element.id==0){
        console.log(element.id);
        this.cutandLayEntryRatioWiseDetailsService.add(element).subscribe(data=>{
        
        });
      }
      
    });
    this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
   // this.datapassingService.setValue(undefined);
    this.CutandLaydetailsForm=this.fb.array([]);
    this.count=0;
   }else{
    this.Tostr.showToast('danger','', 'Master Part Save First', '',this.toastrService);
   }

    
  }



}

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
import { CutandLayEntryRatioWiseUrmiService } from '../../../../../@core/mock/planning/cutand-lay-entry-ratio-wise-urmi.service';
import { CutandLayEntryRatioWiseUrmiDetailsService } from '../../../../../@core/mock/planning/cutand-lay-entry-ratio-wise-urmi-details.service';

@Component({
  selector: 'ngx-create-cutand-lay-entry-ratio-wise-urmi',
  templateUrl: './create-cutand-lay-entry-ratio-wise-urmi.component.html',
  styleUrls: ['./create-cutand-lay-entry-ratio-wise-urmi.component.scss']
})
export class CreateCutandLayEntryRatioWiseUrmiComponent implements OnInit {

  Tostr=new Tostr();
  CutandLaydetailsForm: FormArray = this.fb.array([]);
 public count=0;
  constructor(
  public cutandLayEntryRatioWiseUrmiService:CutandLayEntryRatioWiseUrmiService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService,
  private datapassingService:DatapassingService,
  private dialog:MatDialog,
  public cutandLayEntryRatioWiseUrmiDetailsService:CutandLayEntryRatioWiseUrmiDetailsService,
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
    this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.jobNo=data.jobNo;
    this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.buyerProfileId=data.buyerId;

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
  this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi = {
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
cutandLayEntryRatioWiseUrmiMasterId: '' ,

  entryDate :'',
  entryBy :'',
  approvedDate :'',
  approvedBy :'',
  isApproved :false,
  status :''
}))
};


  onSubmit(){  
    
      if(this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.locationId==''){
        this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.locationId=0;
      }
      
      if(this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.floorId==''){
        this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.floorId=0;
      }
      
      if(this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.yearId==''){
        this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.yearId=0;
      }
      
      if(this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.buyerProfileId==''){
        this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.buyerProfileId=0;
      }
      //fghjk
      if(this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.cadFabricWidthOrDia==''){
        this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.cadFabricWidthOrDia=0;
      }
      if(this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.cadGsm==''){
        this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.cadGsm=0;
      }
      if(this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.cadMarkerConsOrDzn==''){
        this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.cadMarkerConsOrDzn=0;
      }
      if(this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.cadMarkerWidthOrDia==''){
        this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.cadMarkerWidthOrDia=0;
      }
      if(this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.endTimeHour==''){
        this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.endTimeHour=0;
      }
      
      if(this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.startTimeHour==''){
        this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.startTimeHour=0;
      }
      if(this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.endTimeMinute==''){
        this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.endTimeMinute=0;
      }
      if(this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.startTimeMinute==''){
        this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.startTimeMinute=0;
      }

      if(this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.tableNo==''){
        this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.tableNo=0;
      }
  
  this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.approvedDate=this.dateResizeService.dateResize(new Date);
  this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.approvedBy=ApprovedBy.userName;
  this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.isApproved=true;
  this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.entryBy=EntryBy.userName;
  this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.status='Active';
this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.entryDate=this.dateResizeService.dateResize(new Date);
  this.cutandLayEntryRatioWiseUrmiService.add(this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
   this.datapassingService.setValue(res.id);
   this.resetForm();
   
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/planning/cut-and-lay-entry-ratio-wise']);
    }
    onAddjobNo(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus= true;
      dialogConfig.width="90%";
      dialogConfig.height="50%";
    // page id is 2 here from according to table imageOrFileHolderPages
    
     // this.datapassingService.sendQuotationInqueryToErpImages.next({pageId:2,primaryKey:this.cutandLayEntryRatioWiseUrmiService.cutandLayEntryRatioWiseUrmi.id});
    
      this.dialog.open(OrderOrJobSelectionFormComponent, dialogConfig);
    }
    


    onDelete(id, i) {
      this.count=this.count-1;
      if (id == 0)
        this.CutandLaydetailsForm.removeAt(i);
      else if (confirm('Are you sure to delete this record ?'))
        this.cutandLayEntryRatioWiseUrmiDetailsService.delete(id).subscribe(
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
      element.cutandLayEntryRatioWiseUrmiMasterId=cutNLayMasterId;
      if(element.garmentsItemId==''){
        element.garmentsItemId=0;
      }
      if(element.cutandLayEntryRatioWiseUrmiMasterId==''){
        element.cutandLayEntryRatioWiseUrmiMasterId=0;
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
        console.log(element);
        this.cutandLayEntryRatioWiseUrmiDetailsService.update(element).subscribe(data=>{
        
        });
      }
      if(element.id==0){
        console.log(element.id);
        console.log(element);
        this.cutandLayEntryRatioWiseUrmiDetailsService.add(element).subscribe(data=>{
        
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

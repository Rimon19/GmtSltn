import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';   
import { Tostr } from '../../../../../@core/data/tostr.model';
import { CutandLayEntryService } from '../../../../../@core/mock/planning/cutand-lay-entry.service';
import { DateResizeService } from '../../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../../@core/mock/shared/dropdown-value.service';
import { ApprovedBy } from '../../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../../@core/data/Shared/entry-by';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { OrderOrJobSelectionFormComponent } from '../../../../merchandizer-module/order-or-job-selection-form/order-or-job-selection-form.component';
import { DatapassingService } from '../../../../../@core/mock/shared/datapassing.service';
import { CutandLaydetailsService } from '../../../../../@core/mock/planning/cutand-laydetails.service';
import { CutandLayEntryRollWiseService } from '../../../../../@core/mock/planning/cutand-lay-entry-roll-wise.service';
import { CutandLayRollWisedetailsService } from '../../../../../@core/mock/planning/cutand-lay-roll-wisedetails.service';
import { CutandLayEntryRatioWiseService } from '../../../../../@core/mock/planning/cutand-lay-entry-ratio-wise.service';
import { CutandLayEntryRatioWiseDetailsService } from '../../../../../@core/mock/planning/cutand-lay-entry-ratio-wise-details.service';

@Component({
  selector: 'ngx-edit-cutand-lay-entry-ratio-wise',
  templateUrl: './edit-cutand-lay-entry-ratio-wise.component.html',
  styleUrls: ['./edit-cutand-lay-entry-ratio-wise.component.scss']
})
export class EditCutandLayEntryRatioWiseComponent implements OnInit {

  editedId;
  Tostr=new Tostr();
  CutandLaydetailsForm: FormArray = this.fb.array([]);
  public count=0;
  constructor(
  public cutandLayEntryRatioWiseService:CutandLayEntryRatioWiseService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService,
  private dialog:MatDialog,
  private datapassingService:DatapassingService,
  public cutandLayEntryRatioWiseDetailsService:CutandLayEntryRatioWiseDetailsService,
  private fb: FormBuilder,
    ) {

    
  
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.cutandLayEntryRatioWiseService.getAll().subscribe(data=>{
 let items=  data.find(f=>f.id==this.editedId);
 this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise=items;
 this.dropdownValueService.getInitialOrder();
let orderId= this.dropdownValueService.initialOrderList.find(f=>f.jobNo.toLowerCase()==items.jobNo.toLowerCase()).orderAutoID;
//  this.dropdownValueService.getPoDetailsInfros();
 //this.dropdownValueService.PodetailsList.find(f=>f.initialOrderID==orderId).
this.dropdownValueService.getPoDetailsInfrosByJobNo(orderId);

 
 //this.dropdownValueService. getGarmentsItem();

 this.cutandLayEntryRatioWiseDetailsService.getAll().subscribe(d=>{
 
   let cutandLayDetails= d.filter(f=>f.cutandLayEntryRatioWiseMasterId==items.id);
   
   cutandLayDetails.forEach(el => {
    this.dropdownValueService.getGarmentsColor(el.poId);
    this.count=this.count+1;
    this.CutandLaydetailsForm.push(this.fb.group({
    id: el.id,
    poId:el.poId,
  orderCutNo:el.orderCutNo,
  shipDate: el.shipDate ,
  garmentsItemId: el.garmentsItemId,
  garmentsColor:el.garmentsColor,
  batch:el.batch,
  plies:el.plies,
  sizeRatio:el.sizeRatio,
  markerQnty: el.markerQnty,
  orderqty: el.orderqty ,
  totalLayqty: el.totalLayqty ,
  laybalanceqty: el. laybalanceqty,
  cutandLayEntryRatioWiseMasterId: el.cutandLayEntryRatioWiseMasterId ,
  
    entryDate :el.entryDate,
    entryBy :el.entryBy,
    approvedDate :el.approvedDate,
    approvedBy :el.approvedBy,
    isApproved :el.isApproved,
    status :el.status
  }))
   });
 });


  });

     }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getLocation();
this.dropdownValueService.getFloors();
this.dropdownValueService.getYear();
this.dropdownValueService.getBuyers();
this.dropdownValueService.getBuyers();

this.dropdownValueService.getPoDetailsInfrosByJobNo(0);
   this.dropdownValueService.getGarmentItemsByOrderNo(0);
   this.dropdownValueService.getGarmentsColor(0);

  this.datapassingService.getJobSelectionFormValue().subscribe(data=>{
    this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.jobNo=data.jobNo;
    this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.buyerProfileId=data.buyerId;

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
    this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise = {
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
  cutandLayEntryRatioWiseMasterId: '' ,
  
    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }))
  };
  
  onSubmit(){  
    
    if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.locationId==''){
      this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.locationId=0;
    }
    
    if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.floorId==''){
      this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.floorId=0;
    }
    
    if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.yearId==''){
      this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.yearId=0;
    }
    
    if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.buyerProfileId==''){
      this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.buyerProfileId=0;
    }
    //fghjk
    if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.cadFabricWidthOrDia==''){
      this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.cadFabricWidthOrDia=0;
    }
    if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.cadGsm==''){
      this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.cadGsm=0;
    }
    if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.cadMarkerConsOrDzn==''){
      this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.cadMarkerConsOrDzn=0;
    }
    if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.cadMarkerWidthOrDia==''){
      this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.cadMarkerWidthOrDia=0;
    }
    if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.endTimeHour==''){
      this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.endTimeHour=0;
    }
   

    if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.startTimeHour==''){
      this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.startTimeHour=0;
    }
    if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.endTimeMinute==''){
      this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.endTimeMinute=0;
    }
    if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.startTimeMinute==''){
      this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.startTimeMinute=0;
    }

    if(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.tableNo==''){
      this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.tableNo=0;
    }
    
 
  this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.approvedDate=this.dateResizeService.dateResize(new Date);
  this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.approvedBy=ApprovedBy.userName;
  this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.isApproved=true;
  this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.entryBy=EntryBy.userName;
  this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.status='Active';
this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.entryDate=this.dateResizeService.dateResize(new Date);
let id= this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.id;
  this.cutandLayEntryRatioWiseService.update(this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
  
   this.resetForm();

  // this.router.navigate(["/pages/planning/cut-and-lay-entry"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/planning/cut-and-lay-entry-ratio-wise']);
    }
    onAddjobNo(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus= true;
      dialogConfig.width="80%";
      dialogConfig.height="50%";
    // page id is 2 here from according to table imageOrFileHolderPages
    
     // this.datapassingService.sendQuotationInqueryToErpImages.next({pageId:2,primaryKey:this.cutandLayEntryRatioWiseService.cutandLayEntryRatioWise.id});
    
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
      
  
   if(this.editedId!=0){
    this.CutandLaydetailsForm.value.forEach(element => {
      let cutNLayMasterId= this.editedId;
      element.cutandLayEntryRatioWiseMasterId=cutNLayMasterId;
      if(element.garmentsItemId==''){
        element.garmentsItemId=0;
      }
      if(element.cutandLayEntryRatioWiseMasterId==''){
        element.cutandLayEntryRatioWiseMasterId=0;
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
    this.Tostr.showToast('primary','', 'update Successfully', '',this.toastrService);
   // this.datapassingService.setValue(undefined);
  // this.CutandLaydetailsForm=this.fb.array([]);
   // this.count=0;
   }else{
    this.Tostr.showToast('danger','', 'Master Part Save First', '',this.toastrService);
   }

    
  }


}

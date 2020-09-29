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

@Component({
  selector: 'ngx-edit-cutand-lay-entry-roll-wise',
  templateUrl: './edit-cutand-lay-entry-roll-wise.component.html',
  styleUrls: ['./edit-cutand-lay-entry-roll-wise.component.scss']
})
export class EditCutandLayEntryRollWiseComponent implements OnInit {

  editedId;
  Tostr=new Tostr();
  CutandLaydetailsForm: FormArray = this.fb.array([]);
  public count=0;
  constructor(
  public cutandLayEntryRollWiseService:CutandLayEntryRollWiseService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService,
  private dialog:MatDialog,
  private datapassingService:DatapassingService,
  public cutandLayRollWisedetailsService:CutandLayRollWisedetailsService,
  private fb: FormBuilder,
    ) {

    
  
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.cutandLayEntryRollWiseService.getAll().subscribe(data=>{
 let items=  data.find(f=>f.id==this.editedId);
 this.cutandLayEntryRollWiseService.cutandLayEntryRollWise=items;
 this.dropdownValueService.getInitialOrder();
let orderId= this.dropdownValueService.initialOrderList.find(f=>f.jobNo.toLowerCase()==items.jobNo.toLowerCase()).orderAutoID;
//  this.dropdownValueService.getPoDetailsInfros();
 //this.dropdownValueService.PodetailsList.find(f=>f.initialOrderID==orderId).
this.dropdownValueService.getPoDetailsInfrosByJobNo(orderId);

 
 //this.dropdownValueService. getGarmentsItem();

 this.cutandLayRollWisedetailsService.getAll().subscribe(d=>{
 
   let cutandLayDetails= d.filter(f=>f.cutandLayEntryRollWiseMasterId==items.id);
   
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
  cutandLayEntryRollWiseMasterId: el.cutandLayEntryRollWiseMasterId ,
  
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
    this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.jobNo=data.jobNo;
    this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.buyerProfileId=data.buyerId;

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
    this.cutandLayEntryRollWiseService.cutandLayEntryRollWise = {
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
  cutandLayEntryRollWiseMasterId: '' ,
  
    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }))
  };
  
  onSubmit(){  
    
    if(this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.locationId==''){
      this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.locationId=0;
    }
    
    if(this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.floorId==''){
      this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.floorId=0;
    }
    
    if(this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.yearId==''){
      this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.yearId=0;
    }
    
    if(this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.buyerProfileId==''){
      this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.buyerProfileId=0;
    }
    //fghjk
    if(this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.cadFabricWidthOrDia==''){
      this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.cadFabricWidthOrDia=0;
    }
    if(this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.cadGsm==''){
      this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.cadGsm=0;
    }
    if(this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.cadMarkerConsOrDzn==''){
      this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.cadMarkerConsOrDzn=0;
    }
    if(this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.cadMarkerWidthOrDia==''){
      this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.cadMarkerWidthOrDia=0;
    }
    if(this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.endTimeHour==''){
      this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.endTimeHour=0;
    }
   

    if(this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.startTimeHour==''){
      this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.startTimeHour=0;
    }
    if(this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.endTimeMinute==''){
      this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.endTimeMinute=0;
    }
    if(this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.startTimeMinute==''){
      this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.startTimeMinute=0;
    }

    if(this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.tableNo==''){
      this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.tableNo=0;
    }
    
 
  this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.approvedDate=this.dateResizeService.dateResize(new Date);
  this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.approvedBy=ApprovedBy.userName;
  this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.isApproved=true;
  this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.entryBy=EntryBy.userName;
  this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.status='Active';
this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.entryDate=this.dateResizeService.dateResize(new Date);
let id= this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.id;
  this.cutandLayEntryRollWiseService.update(this.cutandLayEntryRollWiseService.cutandLayEntryRollWise).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
  
   this.resetForm();

  // this.router.navigate(["/pages/planning/cut-and-lay-entry"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/planning/cut-and-lay-entry']);
    }
    onAddjobNo(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus= true;
      dialogConfig.width="80%";
      dialogConfig.height="50%";
    // page id is 2 here from according to table imageOrFileHolderPages
    
     // this.datapassingService.sendQuotationInqueryToErpImages.next({pageId:2,primaryKey:this.cutandLayEntryRollWiseService.cutandLayEntryRollWise.id});
    
      this.dialog.open(OrderOrJobSelectionFormComponent, dialogConfig);
    }
    
    onDelete(id, i) {
      this.count=this.count-1;
      if (id == 0)
        this.CutandLaydetailsForm.removeAt(i);
      else if (confirm('Are you sure to delete this record ?'))
        this.cutandLayRollWisedetailsService.delete(id).subscribe(
          res => {
            this.CutandLaydetailsForm.removeAt(i);
            this.Tostr.showToast('primary','', 'Delete Successfully', '',this.toastrService);
          });
    }


    onSubmitCutNLayDetails(){  
      
  
   if(this.editedId!=0){
    this.CutandLaydetailsForm.value.forEach(element => {
      let cutNLayMasterId= this.editedId;
      element.cutandLayEntryRollWiseMasterId=cutNLayMasterId;
      if(element.garmentsItemId==''){
        element.garmentsItemId=0;
      }
      if(element.cutandLayEntryRollWiseMasterId==''){
        element.cutandLayEntryRollWiseMasterId=0;
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
        this.cutandLayRollWisedetailsService.update(element).subscribe(data=>{
        
        });
      }
      if(element.id==0){
        console.log(element.id);
        this.cutandLayRollWisedetailsService.add(element).subscribe(data=>{
        
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

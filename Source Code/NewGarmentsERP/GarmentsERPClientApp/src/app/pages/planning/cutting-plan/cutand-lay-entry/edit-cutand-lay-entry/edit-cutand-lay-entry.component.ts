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

@Component({
  selector: 'ngx-edit-cutand-lay-entry',
  templateUrl: './edit-cutand-lay-entry.component.html',
  styleUrls: ['./edit-cutand-lay-entry.component.scss']
})
export class EditCutandLayEntryComponent implements OnInit {

  editedId;
  Tostr=new Tostr();
  CutandLaydetailsForm: FormArray = this.fb.array([]);
  public count=0;
  constructor(
  public cutandLayEntryService:CutandLayEntryService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService,
  private dialog:MatDialog,
  private datapassingService:DatapassingService,
  public cutandLaydetailsService:CutandLaydetailsService,
  private fb: FormBuilder,
    ) {

    
  
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.cutandLayEntryService.getAll().subscribe(data=>{
 let items=  data.find(f=>f.id==this.editedId);
 this.cutandLayEntryService.cutandLayEntry=items;
 this.dropdownValueService.getInitialOrder();
let orderId= this.dropdownValueService.initialOrderList.find(f=>f.jobNo.toLowerCase()==items.jobNo.toLowerCase()).orderAutoID;
//  this.dropdownValueService.getPoDetailsInfros();
 //this.dropdownValueService.PodetailsList.find(f=>f.initialOrderID==orderId).
this.dropdownValueService.getPoDetailsInfrosByJobNo(orderId);

 
 //this.dropdownValueService. getGarmentsItem();

 this.cutandLaydetailsService.getAll().subscribe(d=>{
 
   let cutandLayDetails= d.filter(f=>f.cutandLayEntryMasterId==items.id);
   
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
  plies:el.plies,
  sizeRatio:el.sizeRatio,
  markerQnty: el.markerQnty,
  orderqty: el.orderqty ,
  totalLayqty: el.totalLayqty ,
  laybalanceqty: el. laybalanceqty,
  cutandLayEntryMasterId: el.cutandLayEntryMasterId ,
  
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
    this.cutandLayEntryService.cutandLayEntry.jobNo=data.jobNo;
    this.cutandLayEntryService.cutandLayEntry.buyerProfileId=data.buyerId;

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
this.cutandLayEntryService.cutandLayEntry = {
  id: 0,
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
layFabricWeight: '' ,
cadMarkerConsOrDzn: '' ,
wastageQnty: '' ,
remark: '' ,
efficiency: '' ,

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
plies:['',Validators.required],
sizeRatio: '' ,
markerQnty: '' ,
orderqty: '' ,
totalLayqty: '' ,
laybalanceqty: '' ,
cutandLayEntryMasterId: '' ,

  entryDate :'',
  entryBy :'',
  approvedDate :'',
  approvedBy :'',
  isApproved :false,
  status :''
}))
};
  onSubmit(){  
    
    if(this.cutandLayEntryService.cutandLayEntry.locationId==''){
      this.cutandLayEntryService.cutandLayEntry.locationId=0;
    }
    
    if(this.cutandLayEntryService.cutandLayEntry.floorId==''){
      this.cutandLayEntryService.cutandLayEntry.floorId=0;
    }
    
    if(this.cutandLayEntryService.cutandLayEntry.yearId==''){
      this.cutandLayEntryService.cutandLayEntry.yearId=0;
    }
    
    if(this.cutandLayEntryService.cutandLayEntry.buyerProfileId==''){
      this.cutandLayEntryService.cutandLayEntry.buyerProfileId=0;
    }
    //fghjk
    if(this.cutandLayEntryService.cutandLayEntry.cadFabricWidthOrDia==''){
      this.cutandLayEntryService.cutandLayEntry.cadFabricWidthOrDia=0;
    }
    if(this.cutandLayEntryService.cutandLayEntry.cadGsm==''){
      this.cutandLayEntryService.cutandLayEntry.cadGsm=0;
    }
    if(this.cutandLayEntryService.cutandLayEntry.cadMarkerConsOrDzn==''){
      this.cutandLayEntryService.cutandLayEntry.cadMarkerConsOrDzn=0;
    }
    if(this.cutandLayEntryService.cutandLayEntry.cadMarkerWidthOrDia==''){
      this.cutandLayEntryService.cutandLayEntry.cadMarkerWidthOrDia=0;
    }
    if(this.cutandLayEntryService.cutandLayEntry.endTimeHour==''){
      this.cutandLayEntryService.cutandLayEntry.endTimeHour=0;
    }
    if(this.cutandLayEntryService.cutandLayEntry.layFabricWeight==''){
      this.cutandLayEntryService.cutandLayEntry.layFabricWeight=0;
    }

    if(this.cutandLayEntryService.cutandLayEntry.startTimeHour==''){
      this.cutandLayEntryService.cutandLayEntry.startTimeHour=0;
    }
    if(this.cutandLayEntryService.cutandLayEntry.endTimeMinute==''){
      this.cutandLayEntryService.cutandLayEntry.endTimeMinute=0;
    }
    if(this.cutandLayEntryService.cutandLayEntry.startTimeMinute==''){
      this.cutandLayEntryService.cutandLayEntry.startTimeMinute=0;
    }

    if(this.cutandLayEntryService.cutandLayEntry.tableNo==''){
      this.cutandLayEntryService.cutandLayEntry.tableNo=0;
    }
    if(this.cutandLayEntryService.cutandLayEntry.wastageQnty==''){
      this.cutandLayEntryService.cutandLayEntry.wastageQnty=0;
    }
 
  this.cutandLayEntryService.cutandLayEntry.approvedDate=this.dateResizeService.dateResize(new Date);
  this.cutandLayEntryService.cutandLayEntry.approvedBy=ApprovedBy.userName;
  this.cutandLayEntryService.cutandLayEntry.isApproved=true;
  this.cutandLayEntryService.cutandLayEntry.entryBy=EntryBy.userName;
  this.cutandLayEntryService.cutandLayEntry.status='Active';
this.cutandLayEntryService.cutandLayEntry.entryDate=this.dateResizeService.dateResize(new Date);
let id= this.cutandLayEntryService.cutandLayEntry.id;
  this.cutandLayEntryService.update(this.cutandLayEntryService.cutandLayEntry).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
  
   this.resetForm();

   this.router.navigate(["/pages/planning/cut-and-lay-entry"]);
   
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
    
     // this.datapassingService.sendQuotationInqueryToErpImages.next({pageId:2,primaryKey:this.cutandLayEntryService.cutandLayEntry.id});
    
      this.dialog.open(OrderOrJobSelectionFormComponent, dialogConfig);
    }
    
    onDelete(id, i) {
      this.count=this.count-1;
      if (id == 0)
        this.CutandLaydetailsForm.removeAt(i);
      else if (confirm('Are you sure to delete this record ?'))
        this.cutandLaydetailsService.delete(id).subscribe(
          res => {
            this.CutandLaydetailsForm.removeAt(i);
            this.Tostr.showToast('primary','', 'Delete Successfully', '',this.toastrService);
          });
    }


    onSubmitCutNLayDetails(){  
      
  
   if(this.editedId!=0){
    this.CutandLaydetailsForm.value.forEach(element => {
      let cutNLayMasterId= this.editedId;
      element.cutandLayEntryMasterId=cutNLayMasterId;
      if(element.garmentsItemId==''){
        element.garmentsItemId=0;
      }
      if(element.cutandLayEntryMasterId==''){
        element.cutandLayEntryMasterId=0;
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
        this.cutandLaydetailsService.update(element).subscribe(data=>{
        
        });
      }
      if(element.id==0){
        console.log(element.id);
        this.cutandLaydetailsService.add(element).subscribe(data=>{
        
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

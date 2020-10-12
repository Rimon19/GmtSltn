import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../@core/data/tostr.model';
import { SampledetailsService } from '../../../@core/mock/marchandizer/sampledetails.service';
import { Router } from '@angular/router';
import { DateResizeService } from '../../../@core/mock/marchandizer/date-resize.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
import { EntryBy } from '../../../@core/data/Shared/entry-by';
import { ApprovedBy } from '../../../@core/data/Shared/approved-by';
import { RequiredAccessoriesService } from '../../../@core/mock/marchandizer/required-accessories.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
//import { SizeInfoComponent } from '../size-info/size-info.component';
import { RequiredFabricService } from '../../../@core/mock/marchandizer/required-fabric.service';
import { RequiredEmbellishmentService } from '../../../@core/mock/marchandizer/required-embellishment.service';

@Component({
  selector: 'ngx-sample-requisition-required-details',
  templateUrl: './sample-requisition-required-details.component.html',
  styleUrls: ['./sample-requisition-required-details.component.scss']
})
export class SampleRequisitionRequiredDetailsComponent implements OnInit {
    Tostr=new Tostr();
    SampledetailsForm: FormArray = this.fb.array([]);
    RequiredAccessoriesForm: FormArray = this.fb.array([]);
    RequiredFabricForm: FormArray = this.fb.array([]);
    RequiredEmbellishmentForm: FormArray = this.fb.array([]);
   public count=0;
   public count1=0;
   public count2=0;   
   public count3=0;
    constructor(
    public requiredFabricService:RequiredFabricService,
    public sampledetailsService:SampledetailsService,
    public requiredAccessoriesService:RequiredAccessoriesService,
    public requiredEmbellishmentService:RequiredEmbellishmentService,
    private router:Router,
    private dialog:MatDialog,
    private dateResizeService:DateResizeService,
    private fb: FormBuilder,
    private toastrService:NbToastrService,
    private dropdownValueService:DropdownValueService
      ) { }
  
    ngOnInit() {
      //this.SampledetailsFormAction();
     // this.RequiredAccessoriesFormAction();
     
      this.SampledetailsForm=this.fb.array([]);
  this.RequiredAccessoriesForm=this.fb.array([]);
  this.RequiredFabricForm=this.fb.array([]);
  this.dropdownValueService. getSampleName();
  this.dropdownValueService.getColor();
  this.dropdownValueService.getCurrency();
  

  this.RequiredAccessoriesForm=this.fb.array([]);
  this.dropdownValueService.getSampleName();
 
//this.dropdownValueService.getGarmentItemsByOrderNo(1);
this.dropdownValueService.getGarmentItemsByOrderNo(1);//need orginal order no
this.dropdownValueService.getTrimsGroup();
this.dropdownValueService.getSuppliers();
this.dropdownValueService.getUom();
this.dropdownValueService.getAccountSource ();
this.dropdownValueService.getGarmentsItem();
this.dropdownValueService.getBodyPart ();
this.dropdownValueService.getFabricNature ();
this.dropdownValueService.getFabricDescription();
this.dropdownValueService.getColorType ();
this.dropdownValueService.getfabricSourceList();
//RequiredEmbellishment
this.RequiredEmbellishmentForm=this.fb.array([]);
//this.dropdownValueService.getSampleName();
this.dropdownValueService. getGarmentItemsByOrderNo (3);//need orginal order no
this.dropdownValueService.getEmbellishmentName();
this.dropdownValueService.getEmbellishmentType();
this.dropdownValueService.getSuppliers();

    }
  
     SampledetailsFormAction() {
    this.count=this.count+1;
    this.SampledetailsForm.push(this.fb.group({
    id: [0],
    sampleFabricBookingid:[0],
    sampleRequisitionId:[0],
    orderId:[0],
    sampleName:['',Validators.required],
  garmentItem:['',Validators.required],
  smv: '' ,
  articleNo: '' ,
  color:['',Validators.required],
  sampleReqQty:['',Validators.required],
  submnQty:['',Validators.required],
  delvStartDate:['',Validators.required],
  delvEndDate:['',Validators.required],
  buyerSubDate: '' ,
  chargeUnit: '' ,
  currencyId: '' ,
  image: '' ,
  comments: '' ,
  
    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }))
  };

  RequiredFabricFormAction() {
    this.count1=this.count1+1;
    this.RequiredFabricForm.push(this.fb.group({
    id: [0],
    sampleFabricBookingId: [0],
    orderId: [0],
    sampleRequisitionId: [0],
    sampleName:['',Validators.required],
  garmentItemId:['',Validators.required],
  bodyPartId:['',Validators.required],
  fabricNature:['',Validators.required],
  fabricDescriptionId:['',Validators.required],
  gsm:['',Validators.required],
  dia: '' ,
  colorId:['',Validators.required],
  colorTypeId:['',Validators.required],
  widthDia: '' ,
  uomId:['',Validators.required],
  finishReqQty:['',Validators.required],
  processLoss: '' ,
  greyReqQty: '' ,
  fabricDelDate: '' ,
  fabricSource: '' ,
  image: '' ,
  remarks: '' ,
  
    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }))
  };
  
  onDeleteRequiredFabric(id, i) {
    this.count1=this.count1-1;
    if (id == 0)
      this.RequiredFabricForm.removeAt(i);
    else if (confirm('Are you sure to delete this record ?'))
      this.requiredFabricService.delete(id).subscribe(
        res => {
          this.RequiredFabricForm.removeAt(i);
          this.Tostr.showToast('primary','', 'Delete Successfully', '',this.toastrService);
        });
  }
    onSubmitRequiredFabricForm(RequiredFabricForm){  
           RequiredFabricForm.value.forEach(element => {
      element.entryBy=EntryBy.userName;
      element.status='Active';
      element.entryDate=this.dateResizeService.dateResize(new Date);
      element.approvedDate=this.dateResizeService.dateResize(new Date);
      element.fabricDelDate=this.dateResizeService.dateResize(element.fabricDelDate);
      element.approvedBy=ApprovedBy.userName;
      element.isApproved=true;
  
      if(element.id!=0){
        this.requiredFabricService.update(element).subscribe(data=>{
        
        });
      }
      if(element.id==0){
        console.log(element.id);
        this.requiredFabricService.add(element).subscribe(data=>{ 
        
        });
      }
      
    });
    this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.router.navigate(["/pages/"]);
    this.RequiredFabricForm=this.fb.array([]);
    
      
    }
  RequiredAccessoriesFormAction() {
    this.count2=this.count2+1;
    this.RequiredAccessoriesForm.push(this.fb.group({
    id: [0],
    sampleName:['',Validators.required],
  garmentsItemId:['',Validators.required],
  trimsGroupId:['',Validators.required],
  supplierProfileId:['',Validators.required],
  brandOrSuppRef: '' ,
  description:['',Validators.required],
  sampleFabricBookingid: 0,
  orderId: 0 ,
  sampleRequisitionId: 0 ,
  uom:['',Validators.required],
  reqDzn: '' ,
  reqQty: '' ,
  accDelDate: '' ,
  accSource: '' ,
  remarks: '' ,
  image: '' ,
  
    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }))
  };
  onDelete(id, i) {
    this.count=this.count-1;
    if (id == 0)
      this.SampledetailsForm.removeAt(i);
    else if (confirm('Are you sure to delete this record ?'))
      this.sampledetailsService.delete(id).subscribe(
        res => {
          this.SampledetailsForm.removeAt(i);
          this.Tostr.showToast('primary','', 'Delete Successfully', '',this.toastrService);
        });
  }
  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    dialogConfig.width="90%";
    dialogConfig.height="70%"; 
    //this.dialog.open(SizeInfoComponent, dialogConfig);
         } 
  onDeleteRequisitionAccessories(id, i) {
    this.count2=this.count2-1;
    if (id == 0)
      this.RequiredAccessoriesForm.removeAt(i);
    else if (confirm('Are you sure to delete this record ?'))
      this.requiredAccessoriesService.delete(id).subscribe(
        res => {
          this.RequiredAccessoriesForm.removeAt(i);
          this.Tostr.showToast('primary','', 'Delete Successfully', '',this.toastrService);
        });
  }
    // onSubmit(){  

    // this.SampledetailsForm.value.forEach(element => {
    //   if(element.currencyId==''){
    //     element.currencyId=0;
    //   }
      

    //   element.entryBy=EntryBy.userName;
    //   element.status='Active';
    //   element.entryDate=this.dateResizeService.dateResize(new Date);
    //   element.approvedDate=this.dateResizeService.dateResize(new Date);
    //   element.accDelDate=this.dateResizeService.dateResize(element.accDelDate);
    //   element.approvedBy=ApprovedBy.userName;
    //   element.isApproved=true;
  
    //   if(element.id!=0){
    //     this.sampledetailsService.update(element).subscribe(data=>{
        
    //     });
    //   }
    //   if(element.id==0){
    //     console.log(element.id);
    //     this.sampledetailsService.add(element).subscribe(data=>{
        
    //     });
    //   }
      
    // });
    // this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    // this.router.navigate(["/pages/"]);
    // this.SampledetailsForm=this.fb.array([]);
    
      
    // }
  
    // onSubmitRequisitionAccessories(){  

    //   this.RequiredAccessoriesForm.value.forEach(element => {
    //     element.entryBy=EntryBy.userName;
    //     element.status='Active';
    //     element.entryDate=this.dateResizeService.dateResize(new Date);
    //     element.approvedDate=this.dateResizeService.dateResize(new Date);
    //     element.approvedBy=ApprovedBy.userName;
    //     element.isApproved=true;
    
    //     if(element.id!=0){
    //       this.requiredAccessoriesService.update(element).subscribe(data=>{
          
    //       });
    //     }
    //     if(element.id==0){
    //       console.log(element.id);
    //       this.requiredAccessoriesService.add(element).subscribe(data=>{
          
    //       });
    //     }
        
    //   });
    //   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    //   this.router.navigate(["/pages/"]);
    //   this.RequiredAccessoriesForm=this.fb.array([]);
      
        
    //   }
      backTo(){
        this.router.navigate(['/pages/']);
      }
      


      ///Required Embellishment 

      RequiredEmbellishmentFormAction() {
        this.count3=this.count3+1;
        this.RequiredEmbellishmentForm.push(this.fb.group({
        id: [0],
        sampleFabricBookingId: 0 ,
      orderId: 0 ,
      sampleRequisitionId: 0 ,
      sampleName:['',Validators.required],
      garmentItemId:['',Validators.required],
      embellishmentName:['',Validators.required],
      embellishmentTypeListId:['',Validators.required],
      bodyPartEntrieId: '' ,
      supplierProfileId: '' ,
      remarks: '' ,
      deliveryDate: '' ,
      image: '' ,
      
        entryDate :'',
        entryBy :'',
        approvedDate :'',
        approvedBy :'',
        isApproved :false,
        status :''
      }))
      };



      onRequiredEmbellishmentSubmit(){  
    
        if(this.requiredEmbellishmentService.requiredEmbellishment.bodyPartEntrieId==''){
          this.requiredEmbellishmentService.requiredEmbellishment.bodyPartEntrieId=0;
        }
        
        if(this.requiredEmbellishmentService.requiredEmbellishment.supplierProfileId==''){
          this.requiredEmbellishmentService.requiredEmbellishment.supplierProfileId=0;
        }
        
      
    
    this.RequiredEmbellishmentForm.value.forEach(element => {
      element.entryBy=EntryBy.userName;
      element.status='Active';
      element.entryDate=this.dateResizeService.dateResize(new Date);
      element.approvedDate=this.dateResizeService.dateResize(new Date);
      element.approvedBy=ApprovedBy.userName;
      element.isApproved=true;
  
      if(element.id!=0){
        this.requiredEmbellishmentService.update(element).subscribe(data=>{
        
        });
      }
      if(element.id==0){
        console.log(element.id);
        this.requiredEmbellishmentService.add(element).subscribe(data=>{
        
        });
      }
      
    });
    this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    //this.router.navigate(["/pages/"]);
    this.RequiredEmbellishmentForm=this.fb.array([]);
    
      
    }
      
    
  onSubmit(SampledetailsForm){  
    SampledetailsForm.value.forEach(element => {
        if(element.currencyId==''){
          element.currencyId=0;
        }
    element.entryBy=EntryBy.userName;
    element.status='Active';
    element.entryDate=this.dateResizeService.dateResize(new Date);
    element.delvStartDate=this.dateResizeService.dateResize(element.delvStartDate);
    element.delvEndDate=this.dateResizeService.dateResize(element.delvEndDate);
    element.buyerSubDate=this.dateResizeService.dateResize(element.buyerSubDate);
    element.approvedDate=this.dateResizeService.dateResize(new Date);
    element.accDelDate=this.dateResizeService.dateResize(element.accDelDate);
    element.approvedBy=ApprovedBy.userName;
    element.isApproved=true;

    if(element.id!=0){
      this.sampledetailsService.update(element).subscribe(data=>{
      
      });
    }
    if(element.id==0){
      console.log(element.id);
      this.sampledetailsService.add(element).subscribe(data=>{
      
      });
    }
    
  });
  this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
  this.router.navigate(["/pages/"]);
  this.SampledetailsForm=this.fb.array([]);
  
    
  }
      onSubmitRequisitionAccessories(){  
        this.RequiredAccessoriesForm.value.forEach(element => {
          element.entryBy=EntryBy.userName;
          element.status='Active';
          element.entryDate=this.dateResizeService.dateResize(new Date);
          element.approvedDate=this.dateResizeService.dateResize(new Date);
          element.approvedBy=ApprovedBy.userName;
          element.isApproved=true;
      
          if(element.id!=0){
            this.requiredAccessoriesService.update(element).subscribe(data=>{
            
            });
          }
          if(element.id==0){
            console.log(element.id);
            this.requiredAccessoriesService.add(element).subscribe(data=>{
            
            });
          }
          
        });
        this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
        this.router.navigate(["/pages/"]);
        this.RequiredAccessoriesForm=this.fb.array([]);
        
          
        }


}

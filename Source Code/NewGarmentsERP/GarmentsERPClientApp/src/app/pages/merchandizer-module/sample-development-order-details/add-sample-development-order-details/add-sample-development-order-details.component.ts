import { Component, OnInit, ViewChild } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { SampleDevelopmentOrderDetailsService } from '../../../../@core/mock/marchandizer/sample-development-order-details.service';
import { Router } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { NgForm } from '@angular/forms';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { MatDialogConfig, MatDialog, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { ErpImagesComponent } from '../../../Shared/erp-images/erp-images.component';
import { SampleDevelopmentEntryService } from '../../../../@core/mock/marchandizer/sample-development-entry.service';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { SizeDitsComponent } from './size-dits/size-dits.component';

@Component({
  selector: 'ngx-add-sample-development-order-details',
  templateUrl: './add-sample-development-order-details.component.html',
  styleUrls: ['./add-sample-development-order-details.component.scss']
})
export class AddSampleDevelopmentOrderDetailsComponent implements OnInit {
  Tostr=new Tostr();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
dataSource = new MatTableDataSource();
displayedColumns = ['id','sampleTypeId','sampleColor','rcvDateFromBuyer','workingFactory','sentToSmplDept','fabrication','fabricSource','sentToBuyer','approvalStatus','statusDate','buyerMeeting','sampleCharge'];
valueOne: string = "";
valueTwo: string = "";
  
  constructor(
  public sampleDevelopmentOrderDetailsService:SampleDevelopmentOrderDetailsService,
  private router:Router,
  private dateResizeService:DateResizeService,
  private mathdialogService: MatDialogService,
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService,
  private datapassingService:DatapassingService,
  private dialog:MatDialog,
  public sampleDevelopmentEntryService:SampleDevelopmentEntryService,
  private staticFeaturesService:StaticFeaturesService

    ) { } 

  ngOnInit() {
    this.resetForm();
    this.resetEntryForm();
    this.refresList();
    this.dropdownValueService.getBuyers();
this.dropdownValueService.getProductDept();
this.dropdownValueService. getGarmentsItem();
this.dropdownValueService.getProductCategory();
this.dropdownValueService.getRegion();
this.dropdownValueService.getAgents();
this.dropdownValueService.getTeamleaders();
this.dropdownValueService.getDealingMerchant();
this.dropdownValueService.getSampleDevelopmentSeason(); 
this.dropdownValueService.getsampleType();
this.dropdownValueService.getfabricSourceList();
this.dropdownValueService.getapprovalStatus();
this.dropdownValueService.getCurrency();


  }

   resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.sampleDevelopmentOrderDetailsService.sampleDevelopmentOrderDetails = {
    id: 0,
    buyerId: '' ,
styleName: '' ,
productDept: '' ,
articleNumber: '' ,
garmentsItemId: '' ,
productCategoryId: '' ,
regionId: '' ,
agentId: '' ,
teamLeaderId: '' ,
dealingMerchantId: '' ,
bHMerchant: '' ,
estShipDate: '' ,
season: '' ,
remarks: '' ,
images: '' ,
file: '' ,

    entryDate :'',
    entryBy :'',
    status :''
  }
  
 }

 resetEntryForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.sampleDevelopmentEntryService.sampleDevelopmentEntry = {
    id: 0,
    sampleTypeId: '' ,
sampleColor: '' ,
rcvDateFromBuyer: '' ,
tfReceivDate: '' ,
buyerDeadLine: '' ,
workingFactory: '' ,
sentToSmplDept: '' ,
deadLine: '' ,
rcvFromSmplDept: '' ,
fabrication: '' ,
fabricSource: '' ,
sentToBuyer: '' ,
keyPointOrValDrive: '' ,
department: '' ,
approvalStatus: '' ,
statusDate: '' ,
buyerMeeting: '' ,
sampleCharge: '' ,
buyerReqNo: '' ,
comments: '' ,
currency:'',

    entryDate :'',
    entryBy :'',
    status :''
  }
  
 }

 onAddImage(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus= true;
  dialogConfig.width="50%"; 
  dialogConfig.height="50%";
// page id is 2 here from according to table imageOrFileHolderPages

  this.datapassingService.sendInfoPageToErpImages.next({pageId:3,primaryKey:this.sampleDevelopmentOrderDetailsService.sampleDevelopmentOrderDetails.id});

  this.dialog.open(ErpImagesComponent, dialogConfig);
}

onAddFile(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus= true;
  dialogConfig.width="50%"; 
  dialogConfig.height="50%";
// page id is 2 here from according to table imageOrFileHolderPages

  this.datapassingService.sendInfoPageToErpImages.next({pageId:3,primaryKey:this.sampleDevelopmentOrderDetailsService.sampleDevelopmentOrderDetails.id});

  this.dialog.open(ErpImagesComponent, dialogConfig);
}

  onSubmit(){  


    
  this.sampleDevelopmentOrderDetailsService.sampleDevelopmentOrderDetails.entryBy=EntryBy.userName;
  this.sampleDevelopmentOrderDetailsService.sampleDevelopmentOrderDetails.status='Active';
this.sampleDevelopmentOrderDetailsService.sampleDevelopmentOrderDetails.entryDate=this.dateResizeService.dateResize(new Date);
this.sampleDevelopmentOrderDetailsService.sampleDevelopmentOrderDetails.estShipDate=this.dateResizeService.dateResize(this.sampleDevelopmentOrderDetailsService.sampleDevelopmentOrderDetails.estShipDate);
  this.sampleDevelopmentOrderDetailsService.add(this.sampleDevelopmentOrderDetailsService.sampleDevelopmentOrderDetails).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
   this.router.navigate(["/pages/SampleDevelopmentOrderDetails"]);
   this.resetForm();
    })


   

  }
//for sampleDevlopment entry 

onSizeDits(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus= true;
  dialogConfig.width = "50%";
    dialogConfig.height = "50%";
// page id is 2 here from according to table imageOrFileHolderPages

  // this.datapassingService.sendQuotationInqueryToErpImages.next({pageId:3,primaryKey:this.sampleDevelopmentOrderDetailsService.sampleDevelopmentOrderDetails.id});

  this.dialog.open(SizeDitsComponent, dialogConfig);
}
  onSubmitOfEntry(){  
    if(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.id==0){
    this.sampleDevelopmentEntryService.sampleDevelopmentEntry.entryBy=EntryBy.userName;
    this.sampleDevelopmentEntryService.sampleDevelopmentEntry.status='Active';
  this.sampleDevelopmentEntryService.sampleDevelopmentEntry.entryDate=this.dateResizeService.dateResize(new Date);

  this.sampleDevelopmentEntryService.sampleDevelopmentEntry.rcvDateFromBuyer=this.dateResizeService.dateResize(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.rcvDateFromBuyer);
  this.sampleDevelopmentEntryService.sampleDevelopmentEntry.tfReceivDate=this.dateResizeService.dateResize(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.tfReceivDate);
  this.sampleDevelopmentEntryService.sampleDevelopmentEntry.buyerDeadLine=this.dateResizeService.dateResize(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.buyerDeadLine);
  this.sampleDevelopmentEntryService.sampleDevelopmentEntry.sentToSmplDept=this.dateResizeService.dateResize(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.sentToSmplDept);
  this.sampleDevelopmentEntryService.sampleDevelopmentEntry.deadLine=this.dateResizeService.dateResize(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.deadLine);
  this.sampleDevelopmentEntryService.sampleDevelopmentEntry.rcvFromSmplDept=this.dateResizeService.dateResize(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.rcvFromSmplDept);
  this.sampleDevelopmentEntryService.sampleDevelopmentEntry.sentToBuyer=this.dateResizeService.dateResize(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.sentToBuyer);
  this.sampleDevelopmentEntryService.sampleDevelopmentEntry.statusDate=this.dateResizeService.dateResize(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.statusDate);
  this.sampleDevelopmentEntryService.sampleDevelopmentEntry.buyerMeeting=this.dateResizeService.dateResize(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.buyerMeeting);
  

  
    this.sampleDevelopmentEntryService.add(this.sampleDevelopmentEntryService.sampleDevelopmentEntry).subscribe(res=>{
      console.log(res);       
     this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    
     this.resetEntryForm();
    //  this.sampleDevelopmentEntryService.smeRefreshList();
     this.refresList();
      })
    }
    else{
      this.sampleDevelopmentEntryService.sampleDevelopmentEntry.entryBy=EntryBy.userName;
      this.sampleDevelopmentEntryService.sampleDevelopmentEntry.status='Active';
    this.sampleDevelopmentEntryService.sampleDevelopmentEntry.entryDate=this.dateResizeService.dateResize(new Date);

    this.sampleDevelopmentEntryService.sampleDevelopmentEntry.rcvDateFromBuyer=this.dateResizeService.dateResize(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.rcvDateFromBuyer);
    this.sampleDevelopmentEntryService.sampleDevelopmentEntry.tfReceivDate=this.dateResizeService.dateResize(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.tfReceivDate);
    this.sampleDevelopmentEntryService.sampleDevelopmentEntry.buyerDeadLine=this.dateResizeService.dateResize(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.buyerDeadLine);
    this.sampleDevelopmentEntryService.sampleDevelopmentEntry.sentToSmplDept=this.dateResizeService.dateResize(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.sentToSmplDept);
    this.sampleDevelopmentEntryService.sampleDevelopmentEntry.deadLine=this.dateResizeService.dateResize(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.deadLine);
    this.sampleDevelopmentEntryService.sampleDevelopmentEntry.rcvFromSmplDept=this.dateResizeService.dateResize(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.rcvFromSmplDept);
    this.sampleDevelopmentEntryService.sampleDevelopmentEntry.sentToBuyer=this.dateResizeService.dateResize(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.sentToBuyer);
    this.sampleDevelopmentEntryService.sampleDevelopmentEntry.statusDate=this.dateResizeService.dateResize(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.statusDate);
    this.sampleDevelopmentEntryService.sampleDevelopmentEntry.buyerMeeting=this.dateResizeService.dateResize(this.sampleDevelopmentEntryService.sampleDevelopmentEntry.buyerMeeting);
   
      this.sampleDevelopmentEntryService.update(this.sampleDevelopmentEntryService.sampleDevelopmentEntry).subscribe(res=>{
        console.log(res);       
       this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
       
       this.resetEntryForm();
      //  this.sampleDevelopmentEntryService.smeRefreshList();
      this.refresList();
        })
    }
    }

    onChangeForUpdateOfEntry(id){
     
      console.log(id)

      this.sampleDevelopmentEntryService.getAll().subscribe(data=>{
     let items=  data.find(f=>f.id==id);
     this.sampleDevelopmentEntryService.sampleDevelopmentEntry=items;
      });
     
    }
  backTo(){
    this.router.navigate(['/pages/SampleDevelopmentOrderDetails']);
  }


  //for dispaly
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  onDelete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.sampleDevelopmentEntryService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  
  refresList(){    
    this.sampleDevelopmentEntryService.getAll().subscribe(item=>{

      item.forEach(element => { 
        this.staticFeaturesService.getAllSampleType().subscribe(data=>{
          
        let sampleName=data.find(f=>f.id==element.sampleTypeId).sampleTypeName;
        element.sampleTypeId=sampleName;
     
        })

        this.staticFeaturesService.getAllDiscountMethod().subscribe(data=>{
          let currencyName= data.find(f=>f.id==element.currency).discountMethodName;
          element.currency=currencyName;
        })

    })
      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }
  


}

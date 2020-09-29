import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../../@core/mock/company.service';
import { company } from '../../../../@core/data/company';
import { MarchandizerInfoService } from '../../../../@core/mock/marchandizer/marchandizer-info.service';
import { SeasonInfoesService } from '../../../../@core/mock/marchandizer/season-infoes.service';
import { SeasonInfoes } from '../../../../@core/data/marchanzider-model/season-infoes.model';
import { GarmentsItemEntriesService } from '../../../../@core/mock/library/garments-item-entries.service';
import { GarmentsItemEntries } from '../../../../@core/data/Library-Modul-model/garments-item-entries';
import { QuotationInqueryService } from '../../../../@core/mock/marchandizer/quotation-inquery.service';
import { NgForm } from '@angular/forms';
import { BuyerProfile } from '../../../../@core/data/Library-Modul-model/buyer-profile';
import { BuyerProfileService } from '../../../../@core/mock/library/buyer-profile.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { FabricationDetailsComponent } from '../fabrication-details/fabrication-details.component';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { UserService } from '../../../../@core/mock/users.service';
import { UserMappingService } from '../../../../@core/mock/user-mapping.service';
import { UserMapping } from '../../../../@core/data/user-mapping';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { Router } from '@angular/router';
import { ErpImagesComponent } from '../../../Shared/erp-images/erp-images.component';
import { ErpImagesService } from '../../../../@core/mock/shared/erp-images.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-add-quotation-inquery',
  templateUrl: './add-quotation-inquery.component.html',
  styleUrls: ['./add-quotation-inquery.component.scss']
})
export class AddQuotationInqueryComponent implements OnInit {
  public companyListItems:company[]=[];
  public buyerListItems:BuyerProfile[] = [];
  public MarchandizerInfoItems:UserMapping[] = [];
  public userMapping:UserMapping[] = [];
  public seasonInfoesItems:SeasonInfoes[] = [];
  public garmentItemList:GarmentsItemEntries[]=[];
  public progress: number;
  Tostr=new Tostr();
  
  selectedFiles:FileList;
  selectedImageFiles:FileList;

   file:File;
   ImageFiles:File;
  output_image;
  output_image_ViewToImage;
  
  constructor( 
    private companyService:CompanyService,
    private userMappingService:UserMappingService,
    private seasonInfoesService:SeasonInfoesService,
    private buyerProfileService:BuyerProfileService,
    private dialog:MatDialog,
    private router:Router,
    public http: HttpClient,
    private userService:UserService ,
    private toastrService:NbToastrService,
    private dateResizeService:DateResizeService,
    private garmentsItemEntriesService:GarmentsItemEntriesService,
    private marchandizerInfoService:MarchandizerInfoService,
    public quotationInqueryService:QuotationInqueryService,
    private datapassingService:DatapassingService,
    private erpImagesService:ErpImagesService) { }

  ngOnInit() {
  
   
    this.companyDDL();
    this.buyerDDL();
    this.dealingMerchantDDL();
    this.seasonInfoesDDL();
    this.garmentItemDDL();
    this.resetFormForquotationInquery();
    
    this.datapassingService.subjectFabricationDetails.subscribe(data=>{
      console.log(data.fabricDescription); 
      if(data.fabricDescription==undefined){
        this.quotationInqueryService.quotationInquery.fabrication='';
      }else{
        this.quotationInqueryService.quotationInquery.fabrication=data.fabricDescription;
      }
  
    });
  }
  resetFormForquotationInquery(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.quotationInqueryService.quotationInquery = {
      id:0,
      companyId:'',
      buyerId:'',
      styleRefName:'',
      season:'',
      inqRcvdDate:'',
      status:'',
      buyerInquiryNo:'',
      dealingMerchantId:'',
      gmtsItemId:0,
      bulkEstShipDate:'',
      fabrication:'',
      bulkOfferQty:0,
      bodyColor:'',
      targetReqQuotDate:'',
      targetSampSubDate:'',
      actualSampSendDate:'',
      departmentName:'',
      actualQuotDate:'',
      buyerTargetPrice:0,
      buyerSubmitPrice:0,
      remarks:'',
      fileName:'',
      filePath:'',
      imageName:'',
      imagePath:''
    }
    
   }
   
   onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    dialogConfig.width="50%"; 
    dialogConfig.height="50%";
// page id is 2 here from according to table imageOrFileHolderPages
let primaryKey=0; 
    this.datapassingService.sendInfoPageToErpImages.next({pageId:2,primaryKey:primaryKey});

    this.dialog.open(ErpImagesComponent, dialogConfig);
  }
   onAddFabricDetails(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    dialogConfig.width="50%"; 
    dialogConfig.height="50%";
    this.dialog.open(FabricationDetailsComponent, dialogConfig);
  }
  
   Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
  companyDDL(){
    this. companyService.getAllCompany().
    subscribe(data=>{
    this.companyListItems=data;
    console.log('company list',this.companyListItems)
  });
 }
 buyerDDL(){
  this.buyerProfileService.getAll().
  subscribe(data=>{
  this.buyerListItems=data;
  console.log('buyer list',this.buyerListItems)
  });
}  

 seasonInfoesDDL(){
  this.seasonInfoesService.getAllSeasonInfoes().
  subscribe(data=>{
  this.seasonInfoesItems=data;
  console.log('seasonInfoes list',this.seasonInfoesItems)
  });
 }
 garmentItemDDL(){
  this.garmentsItemEntriesService.getGarmentsItemEntries().subscribe(data=>{
    this.garmentItemList=data;
    console.log(this.garmentItemList);
  });
}
dealingMerchantDDL() {
  this.userMappingService.getAllUserMapping().subscribe((data) => {
    this.userMapping = data;
    let marchandisingInfoByempCategoryId = this.userMapping.filter(
      (f) => f.empCategoryId == 5
    );
  
    marchandisingInfoByempCategoryId.forEach((element) => {
      this.userService.getAllUser().subscribe((data) => {
        let marchandName = data.find((f) => f.userID == element.userId)
          .fullName;
        element.userId = marchandName;
   
      });
    });

    this.MarchandizerInfoItems = marchandisingInfoByempCategoryId;
   
  });
}
detectFilesForImageUrlFile(event) {
  this.selectedFiles = event.target.files;
  this.file = this.selectedFiles.item(0);
  
  this.output_image=this.file.name;
  const file = (event.target as HTMLInputElement).files[0];
 const reader = new FileReader();
  reader.onload = () => {
 // this.output_image = reader.result as string;
    
  }
  reader.readAsDataURL(file);
  
}
detectFilesForViewToImageUrlFile(event){
this.selectedImageFiles=event.target.files;
this.ImageFiles=this.selectedImageFiles.item(0);
const file = (event.target as HTMLInputElement).files[0];
const reader = new FileReader();
reader.onload = () => {
  this.output_image_ViewToImage = reader.result as string;
}
reader.readAsDataURL(file);
}
onSubmit(){
  this.quotationInqueryService.quotationInquery.inqRcvdDate= this.dateResizeService.dateResize(this.quotationInqueryService.quotationInquery.inqRcvdDate);
  this.quotationInqueryService.quotationInquery.targetReqQuotDate= this.dateResizeService.dateResize(this.quotationInqueryService.quotationInquery.targetReqQuotDate);
  this.quotationInqueryService.quotationInquery.bulkEstShipDate= this.dateResizeService.dateResize(this.quotationInqueryService.quotationInquery.bulkEstShipDate);
  this.quotationInqueryService.quotationInquery.targetSampSubDate= this.dateResizeService.dateResize(this.quotationInqueryService.quotationInquery.targetSampSubDate);
  this.quotationInqueryService.quotationInquery.actualSampSendDate= this.dateResizeService.dateResize(this.quotationInqueryService.quotationInquery.actualSampSendDate);
  this.quotationInqueryService.quotationInquery.actualQuotDate= this.dateResizeService.dateResize(this.quotationInqueryService.quotationInquery.actualQuotDate);
  this.quotationInqueryService.addQuotationInquery(this.quotationInqueryService.quotationInquery).subscribe(res=>{

    let id=res.id;
  this.datapassingService.recievePageInfoFromErpImagesObservable.subscribe(imgDataList=>{
  imgDataList.forEach(element => {
   element.pageSpecificationId=id;
    this.erpImagesService.update(element).subscribe(s=>{});
 });
 });

    this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.resetFormForquotationInquery();
     this.router.navigate(["/pages/quotation-inquery"]);
   });



 

}
}

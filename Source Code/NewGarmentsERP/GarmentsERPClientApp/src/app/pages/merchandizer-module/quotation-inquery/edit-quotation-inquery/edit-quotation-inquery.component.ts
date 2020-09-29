import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../../@core/mock/company.service';
import { UserMappingService } from '../../../../@core/mock/user-mapping.service';
import { SeasonInfoesService } from '../../../../@core/mock/marchandizer/season-infoes.service';
import { BuyerProfileService } from '../../../../@core/mock/library/buyer-profile.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../@core/mock/users.service';
import { NbToastrService } from '@nebular/theme';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { GarmentsItemEntriesService } from '../../../../@core/mock/library/garments-item-entries.service';
import { MarchandizerInfoService } from '../../../../@core/mock/marchandizer/marchandizer-info.service';
import { QuotationInqueryService } from '../../../../@core/mock/marchandizer/quotation-inquery.service';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { company } from '../../../../@core/data/company';
import { BuyerProfile } from '../../../../@core/data/Library-Modul-model/buyer-profile';
import { UserMapping } from '../../../../@core/data/user-mapping';
import { SeasonInfoes } from '../../../../@core/data/marchanzider-model/season-infoes.model';
import { GarmentsItemEntries } from '../../../../@core/data/Library-Modul-model/garments-item-entries';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NgForm } from '@angular/forms';
import { FabricationDetailsComponent } from '../fabrication-details/fabrication-details.component';

@Component({
  selector: 'ngx-edit-quotation-inquery',
  templateUrl: './edit-quotation-inquery.component.html',
  styleUrls: ['./edit-quotation-inquery.component.scss']
})
export class EditQuotationInqueryComponent implements OnInit {

  public companyListItems:company[]=[];
  public buyerListItems:BuyerProfile[] = [];
  public MarchandizerInfoItems:UserMapping[] = [];
  public userMapping:UserMapping[] = [];
  public seasonInfoesItems:SeasonInfoes[] = [];
  public garmentItemList:GarmentsItemEntries[]=[];
  Tostr=new Tostr();
  editedId:any;
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
    private route:ActivatedRoute,
    private userService:UserService ,
    private toastrService:NbToastrService,
    private dateResizeService:DateResizeService,
    private garmentsItemEntriesService:GarmentsItemEntriesService,
    private marchandizerInfoService:MarchandizerInfoService,
    public quotationInqueryService:QuotationInqueryService,
    private datapassingService:DatapassingService) { 
      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.quotationInqueryService.getAllQuotationInquery().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.quotationInqueryService.quotationInquery=items;
    })
    }

  ngOnInit() {
    this.companyDDL();
    this.buyerDDL();
    this.marchandizerInfoDDL();
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

   // this.datapassingService.sourceAddQuotationInquery.next(11);

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
marchandizerInfoDDL(){
  this.userMappingService.getAllUserMapping().
  subscribe(data=>{
  this.userMapping=data;
  let marchandisingInfoByempCategoryId= this.userMapping.filter(f=>f.empCategoryId==3);
  marchandisingInfoByempCategoryId.forEach(element => {
    this.userService.getAllUser().subscribe(data=>{
     let marchandName= data.find(f=>f.userID==element.userId).fullName;
    element.userId=marchandName;
     console.log(marchandName);
    })
   
  });

  this.MarchandizerInfoItems=marchandisingInfoByempCategoryId;
  console.log('userMapping list',marchandisingInfoByempCategoryId)
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
// onSubmit(){
//   this.quotationInqueryService.quotationInquery.inqRcvdDate= this.dateResizeService.dateResize(this.quotationInqueryService.quotationInquery.inqRcvdDate);
//   this.quotationInqueryService.quotationInquery.targetReqQuotDate= this.dateResizeService.dateResize(this.quotationInqueryService.quotationInquery.targetReqQuotDate);
//   this.quotationInqueryService.quotationInquery.bulkEstShipDate= this.dateResizeService.dateResize(this.quotationInqueryService.quotationInquery.bulkEstShipDate);
//   this.quotationInqueryService.quotationInquery.targetSampSubDate= this.dateResizeService.dateResize(this.quotationInqueryService.quotationInquery.targetSampSubDate);
//   this.quotationInqueryService.quotationInquery.actualSampSendDate= this.dateResizeService.dateResize(this.quotationInqueryService.quotationInquery.actualSampSendDate);
//   this.quotationInqueryService.quotationInquery.actualQuotDate= this.dateResizeService.dateResize(this.quotationInqueryService.quotationInquery.actualQuotDate);
//   if(this.file==undefined||this.file==null){
//     this.Tostr.showToast('danger','', 'Please Select a Photo !', '',this.toastrService);
//      return;
//    }
// this.quotationInqueryService.uploadFileViewToImage(this.ImageFiles).subscribe(img=>{
// console.log(img);
// this.quotationInqueryService.uploadFile(this.file).subscribe(data=>{
//   console.log('result after file save',data);
//   this.quotationInqueryService.quotationInquery.fileName=data.fileName;
//   this.quotationInqueryService.quotationInquery.filePath=data.filePath;
//   this.quotationInqueryService.quotationInquery.imageName=img.fileName;
//   this.quotationInqueryService.quotationInquery.imagePath=img.filePath;
//   this.quotationInqueryService.addQuotationInquery(this.quotationInqueryService.quotationInquery).subscribe(d=>{
//     this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
//      this.resetFormForquotationInquery();
//      this.file=null;
//      this.ImageFiles=null;
//      this.output_image='';
//      this.output_image_ViewToImage='';
//      this.router.navigate(["/pages/quotation-inquery"]);
//    });
// })
// });


 

// }
update(quotationInquery){
  console.log(quotationInquery);
  this.quotationInqueryService.quotationInquery.inqRcvdDate= this.dateResizeService.dateResize(this.quotationInqueryService.quotationInquery.inqRcvdDate);
  this.quotationInqueryService.quotationInquery.targetReqQuotDate= this.dateResizeService.dateResize(this.quotationInqueryService.quotationInquery.targetReqQuotDate);
  this.quotationInqueryService.quotationInquery.bulkEstShipDate= this.dateResizeService.dateResize(this.quotationInqueryService.quotationInquery.bulkEstShipDate);
  this.quotationInqueryService.quotationInquery.targetSampSubDate= this.dateResizeService.dateResize(this.quotationInqueryService.quotationInquery.targetSampSubDate);
  this.quotationInqueryService.quotationInquery.actualSampSendDate= this.dateResizeService.dateResize(this.quotationInqueryService.quotationInquery.actualSampSendDate);
  this.quotationInqueryService.quotationInquery.actualQuotDate= this.dateResizeService.dateResize(this.quotationInqueryService.quotationInquery.actualQuotDate);
  this.quotationInqueryService.updateQuotationInquery(quotationInquery).subscribe(s=>{
    this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
    this.router.navigate(['/pages/quotation-inquery']);
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
    } 
    backToTaskEntriesHomePage(){
      this.router.navigate(['/pages/quotation-inquery']);
    } 
}

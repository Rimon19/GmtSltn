import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class StaticFeaturesService {

  constructor(public http:HttpClient) { }
  getAllUOM(){

    return  this.http.get<any[]>(BaseURL.apiUrl+'/UOMs');
    
  } 
  getAllDiscountMethod(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/DiscountMethods');
  } 
    getAllBodyPartType(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/BodyPartTypes');
  } 
  getAllCommercialInvoice(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/CommercialInvoices');
  } 
  getAllFabricNature(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/FabricNatures');
  } 
  getAllColorRange(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/ColorRanges');
  } 
  getAllSampleType(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/SampleTypes');
  } 
  getAllProductCategory(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/ProductCategories');
  } 
  getAllProductType(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/ProductTypes');
  } 
  getAllYears(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/Years');
  } 
  getAllMonths(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/Months');
  } 
  getAllResources(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/Resources');
  } 
  getAllProductionProcess(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/ProductionProcesses');
  } 
  getAllJournalType(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/JournalTypes');
  }
  getAllType(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/Typpes')
  }
  getAllReligion(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/Religions')
  }
  getAllBloodGroups(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/BloodGroups')
  }
  getAllEmployeeCategories(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/EmployeeCategories')
  }
  getAllDesignationLebels(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/DesignationLebels')
  }

  getAllDesignations(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/Designations')
  }

  getAllfunctionalSuperior(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/FunctionalSuperiors')
  }

  getAllAdminSuperiors(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/AdminSuperiors')
  }

  getAllFloors(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/Floors');
  }

  getAllLineNoes(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/LineNoes');
  }

  getAllSections(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/Sections');
  }

  getAllDepartments(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/Departments');
  }

  getAllDivisions(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/Divisions');
  }
  getAllModules(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/Modules');
  }
  getAllReports(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/Reports');
  }
  getAllReportFormats(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/ReportFormats');
  }
  getAllColorTypes(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/ColorTypes');
  }

  getEmbellismentType(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/EmbellishmentTypes');
  }

  getERPModule(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/ERPModules');
  }

  getAccountTypes(){
    return this.http.get<any[]>(BaseURL.apiUrl+'/AccountTypes');
  }
getEmpCategorie(){
  return this.http.get<any[]>(BaseURL.apiUrl+'/EmpCategories');
}
getEmpDepartments(){
 return this.http.get<any[]>(BaseURL.apiUrl+'/Departments');
}
getEmpDesignations(){
 return this.http.get<any[]>(BaseURL.apiUrl+'/EmpDesignations');
}
getEmpAdditionalDesignations(){
 return this.http.get<any[]>(BaseURL.apiUrl+'/EmpAdditionalDesignations');
}
  getCostHeads(){
    let costHeadsList=[{value:'Knitting'},
                        {value:'Yarn Dyeing'},
                        {value:'Fabric Dyeing'},
                        {value:'All Over Printing'},
                        {value:'Knit Fabric Purchase'},
                        {value:'Woven Fabric Purchase'},
                        {value:'Printing'},
                        {value:'Embroidery'},
                        {value:'Wash'}
                      ];
    return costHeadsList;
  }
  getMaterialSource(){
    let PurchaseList=[{value:'Purchase'},
                        {value:'Buyer Supplied'}
                      ];
    return PurchaseList;
  }
  getPayMode(){
    let PayModeList=[{value:'Credit'},
                        {value:'Import'},
                        {value:'In House'},
                        {value:'Cash'},
             {value:'Within Group'},
                      ];
    return PayModeList;
  }
  getTeamLeader(){
   let teamLeaderList=
   [{id:1,value:'Mahmuduzzaman Rayon'},
   {id:2,value:'Md.Shohidul Islam'},
   {id:3,value:'Shohidul'},
   {id:4,value:'habibul mowla shamim'},
   {id:5,value:'mohammed abdul bari'},
   {id:6,value:'shamimul islam'}
 ];
 return teamLeaderList;
  }
  getStatus(){
    let statusList=[
      {id:1,value:'Active'},
      {id:2,value:'InActive'},
      {id:3,value:'Cancelled'}
      
      ];
   return statusList;
  }
  getPoOrderStatus(){
    let statusList=[
      {id:1,value:'Confirmed'},
      {id:2,value:'Projected'}
      
      ];
   return statusList;
  }


  getYesOrNo(){
    let yesOrNoList=[
      {value:'Yes'},
      {value:'No'}
    ];
    return yesOrNoList;
  }

  getExportSource(){
    let sourceList=[
      {value:'Manual (Existing)'},
      {value:'Gate Out ID'},
      {value:'Garment Delivery ID'}
    ];
    return sourceList;
  }

  getAfterGoodsReceiveDataSource(){
    let reciveDataSource=[
      {value:'Work Order'},
      {value:'Receive'}
    ];
    return reciveDataSource;
  }

  getInvetoryILEorLandedCostStandardSource(){
    let costStandardSource=[
      {value:'Abroad'},
      {value:'EPZ'},
      {value:'Non-EPZ'}
    ];
    return costStandardSource;
  }

  getBarcodeGeneration(){
    let barcodeGeneration=[
      {value:'From System'},
      {value:'External Device For Barcode'}
    ];

    return barcodeGeneration;
  }

  getBundleNoCreation(){
    let bundleNoCreation=[

      {value:'Cutting No. Wise'},
      {value:'Job No. Wise'},
      {value:'Order No. Wise'}
    ];
    return bundleNoCreation;
  }
  getDepartmentCode(){
    let departmentCode=[

      {value:'Cutting'},
      {value:'Finishing'},
      {value:'Sewing'}
    ];
    return departmentCode;
  }

  getDeleveryBasis(){
    let deleveryBasis=[
      {value:'Order No'},
      {value:'Cut Number'},
      {value:'Bundle Number'}
    ];
    return deleveryBasis;
  }

  getPieceRateWQLimit(){
    let pieceRateWQLimit=[
      {value:'Up to Order Qty'},
      {value:'Up to Plan Cut Qty'}
    ];
    return pieceRateWQLimit;
  }
  getFabricProductionItemCategory(){
    let FabricProductionItemCategory=[
      {value:'Grey Fabric(Knit)'}
    ];
    return FabricProductionItemCategory;
  }

  getFabricSource(){
    let fabricSource=[
      {value:'Receive'},
      {value:'Production'},
      {value:'Issue'},
      {value:'Purchase'},
      {value:'Buyer Supplied'},
      {value:'Stock'}
    ];
    return fabricSource;
  }

  getAccountSource(){
    let accSource=[
      {value:'Purchase'},
      {value:'Stock'}
    ];
    return accSource;
  }

  getBookKeepingMethod(){
    let bookKeepingMethod=[
      {value:'FIFO'},
      {value:'LIFO'}

    ];
    return bookKeepingMethod;
  }
  getUpTo(){
    let upTo=[
      {value:'Store'},
      {value:'Floor'},
      {value:'Room'},
      {value:'Rack'},
      {value:'Shelf'},
      {value:'Bin/Box'}
    ];
    return upTo;
  }

  getRBTItemCategory(){
    let itemCategory=[
      {value:'Grey Fabric(Knit)'},
      {value:'Knit Finish Fabrics'}
    ];
    return itemCategory;
  }
//subcontract
  getBillOn(){
    let billOn=[
      {value:'On Grey Qty'},
      {value:'On Delivery Qty'}
    ];
    return billOn;
  }
  getBillRateType(){
    let billRateType=[
      {value:'Rate Manually'},
      {value:'Rate from Library'}
    ];
    return billRateType;
  }

  getKnitBillFrom()
  {
    let knitBillFrom=[

      {value:'Production type auto fabric yes & Store Receive'},
      {value:'Fabric Delivery to Store'}
    ];
    return knitBillFrom;
  }

  getBillControl()
  {
    let billControl=[
      {value:'Pre-Cost/Budget'}
     
    ];
    return billControl;
  }  

  getPlanningBoardStripCaption(){
    let pbsc =[
      {value:'Plan Cut Qnty'},
      {value:'Style Ref'},
      {value:'Order No'}
    ];
    return pbsc;
  }
  getLevel(){
    let level=[
      {value:'PO level'},
      {value:'JOB level'},
    ]
    return  level;
  }
  getPlanLevelEntry(){
    let planLevelEntry=[
      {value:'PO Level'},
      {value:'Color Level'},
      {value:'Country Level'}
    ];
    return planLevelEntry;
  }

  getMonitoringHead(){
    let sourceList=[
      {value:'BL Standard'},
      {value:'GSP Standard'},
      {value:'CO Standard'}
    ];
    return sourceList;
  }

  getRateSource(){
    let rateSource=[
      {value:'BOM'},
      {value:'Work Order'}
    ];
    return rateSource;
  }

  getProductionUpdateAreas(){
    let productionUpdateAreas=[
      {value:'Gross Quantity Level'},
      {value:'Color Level'},
      {value:'Color & Size Level'}
    ];
    return productionUpdateAreas;
  }

  getRMGNoCreation(){
    let RMGNoCreation =[
     {value:'Size Wise'},
     {value:'Cutting No. Wise'},
     {value:'Job No. Wise'},
     {value:'Order No. Wise'}

    ];
    return RMGNoCreation;
  }

  getSMVSource(){
     let SMVSource=[
       {value:'From Order Entry'},
       {value:'From Pre-Costing'},
       {value:'From GSD Entry'}
     ];
     return SMVSource;
  }
  getSMVBasic(){
     let SMVBasic=[
       {value:'Non-Calculative'},
       {value:'Calculative'}
     ];
     return SMVBasic;
  }

  getTXTBusinessConcept(){
    let TXTBusinessConcept=[
      {value:'Composite'},
      {value:'Textile'},
      {value:'Both'}
    ];
    return TXTBusinessConcept;
  }

  getPrecedingProcess(){
    let precedingProcess=[
      {value:'Cutting Delivery To Input Challan'},
      {value:'Cutting QC'},
      {value:'Ex-Factory'},
      {value:'Finishing Input'},
      {value:'Inspection'},
      {value:'Iron entry'},
      {value:'Packing And Finishing'},
      {value:'Poly Entry'},
      {value:'Sewing Input'},
      {value:'Sewing Output'}
    ];
    return precedingProcess;
  }
  
   getProdQtyCategory(){
     let prodQtyCategory=[
       {value:'Ex-Factory'},
       {value:'Finishing Input'},
       {value:'Inspection'},
       {value:'Iron entry'},
       {value:'Packing And Finishing'},
       {value:'Poly Entry'},
       {value:'Sewing Input'},
       {value:'Sewing Output'},
       {value:'Plan Cut'}

     ];
     return prodQtyCategory;
   }

   getProdQtyCategorySweater(){
    let prodQtyCategorySweater=[
      {value:'Ex-Factory'},
      {value:'Operation wise entry'},
      {value:'Final Inspection'},
      {value:'Iron entry'},
      {value:'Packing And Finishing'},
      {value:'Poly Entry'},
      {value:'Linking QC'},
      {value:'Lot Ratio'},
      {value:'Plan Cut'},
      {value:'Bundle Issue to Knitting Floor'},
      {value:'Bundle Receive from Knitting Floor'},
      {value:'Knitting QC'},
      {value:'Bundle issue to Linking '},
      {value:'Bundle receive in Linking'},
      {value:'Bundle Wise Linking Input'},
      {value:'Bundle Wise Linking Output'},
      {value:'Delivery to Wash'},
      {value:'Receive in Wash'},
      {value:'Batch Creation for Wash'},
      {value:'Recipe for Wash'},
      {value:'Wash Chemical Issue Requisition'},
      {value:'Wash Production Entry (QC Passed)'},
      {value:'Embellishment Receive'},
      {value:'Re-linking'},
      {value:'Special Operation'}


    ];
    return prodQtyCategorySweater;
  }

  getPrecedingProcessSweater(){
    let precedingProcessSweater=[
      {value:'Ex-Factory'},
      {value:'Operation wise entry'},
      {value:'Final Inspection'},
      {value:'Iron entry'},
      {value:'Packing And Finishing'},
      {value:'Poly Entry'},
      {value:'Linking QC'},
      {value:'Lot Ratio'},
      {value:'Plan Cut'},
      {value:'Bundle Issue to Knitting Floor'},
      {value:'Bundle Receive from Knitting Floor'},
      {value:'Knitting QC'},
      {value:'Bundle issue to Linking '},
      {value:'Bundle receive in Linking'},
      {value:'Bundle Wise Linking Input'},
      {value:'Bundle Wise Linking Output'},
      {value:'Delivery to Wash'},
      {value:'Receive in Wash'},
      {value:'Batch Creation for Wash'},
      {value:'Recipe for Wash'},
      {value:'Wash Chemical Issue Requisition'},
      {value:'Wash Production Entry (QC Passed)'},
      {value:'Embellishment Receive'},
      {value:'Re-linking'},
      {value:'Special Operation'}
    ];
    return precedingProcessSweater;
  }
   
  getFPOCItemCategory(){
    let FPOCItemCategory=[
      {value:'Knitting'},
      {value:'Finish Fabric'},
      {value:'AOP'}
    ];
    return FPOCItemCategory;
  }

  getFebricInRollUpTo(){
    let febricInRollUpTo=[
      {value:'Heat setting'},
      {value:'Dyeing'},
      {value:'Slitting  Squeezing'},
      {value:'Stentering'},
      {value:'Drying'},
      {value:'Special Finish'},
      {value:'Compacting'},
      {value:'Singeing'}
    
    ];
    return febricInRollUpTo;
  }

  getProductDept(){
    let 	ProductDept=[
      {value:'Mens'},
      {value:'Ladies'},
      {value:'Teenage-Girls'},
      {value:'Teenage-Boys'},
      {value:'Kids-Boys'},
      {value:'Infant'},
      {value:'Unisex'},
      {value:'Kids-Girls'},
      {value:'Baby'},
      {value:'Kids'},
      {value:'Women'}
    ];
    return ProductDept;
  }

  getSampleDevelopmentSeason(){
    let SampleDevelopmentSeason=[
      {value:'Z191'},
      {value:'W191'}

    ];
    return SampleDevelopmentSeason;
  }
  getAopSource(){
    let AopSource=[
      {value:'In-house'},
      {value:'Out-bound Subcontract'}

    ];
    return AopSource;
  }

  //sampleDevlopment Entry

  // getFabricSourceTwo(){
  //   let fabricSource=[
  //     {value:'Production'},
  //     {value:'Purchase'},
  //     {value:'Buyer Supplied'},
  //     {value:'Stock'}
      
  //   ];
  //   return fabricSource;
  // }

  getApprovalStatus(){
    let approvalStatus=[
      {value:'Submitted'},
      {value:'Rejected'},
      {value:'Approved'},
      {value:'Cancelled'},
      {value:'Re-Submitted'}
    ];
    return approvalStatus;
  }
  getDelayFor(){
    let delayFor=[
      {value:'Sample Approval Delay'},
      {value:'Lab Dip Approval Delay'},
      {value:'Trims Approval Delay'},
      {value:'Yarn In-House Delay'},
      {value:'Knitting Delay'},
      {value:'Dyeing Delay'},
      {value:'Fabric In-House Delay'},
      {value:'Trims In-House Delay'},
      {value:'Print/Emb Delay'},
      {value:'Line Insufficient'},
      {value:'Worker Insufficient'},
      {value:'Bulk Prod. Approval Delay'},
      {value:'Traget Falilure'},
      {value:'Inspection Fail'},
      {value:'Production Problem'},
      {value:'Quality Problem'}
      
    ];
    return delayFor;
  }

  getSampleName(){
    let sampleName =[
      {value:'FIT Sample'},
      {value:'PP Sample'},
      {value:'SMS Sample'},
      {value:'Production Sample'}
    
    ];
    return  sampleName;
  }
  getShortFabricBookingType(){
    let bookingtype=[
      {value:'Additional'},
      {value:'Compensative'},
      {value:'Compensative -Dia Change'},
      {value:'Compensative -On Return'},
      
    ];
    
    return bookingtype;
  }
  getCountryType(){
    let countryType=[
      {value:'General '},
      {value:'Special'},
    ]; 
    return countryType;
  }
  getCuttOff(){
    let cuttOff=[
      {value:'1st Cutt Off'},
      {value:'2nd Cutt Off'},
      {value:'3rd Cutt Off'},
    ]; 
    return cuttOff;
  }

  getSensitivity(){
    let Sensitivity=[
      {value:'As per Gmts. Color' },
      {value:'Size Sensitive' },
      {value:'Contrast Color' },
      {value:'Color & Size Sensitive' }
    ];
    return Sensitivity;
  }

  getMailType(){
    let mailType=[
      {value:'Starting Reminder'},
      {value:'Completion Reminder'},
      {value:'Yesterday Start Pending'},
      {value:'Yesterday Completion Pending'},
      {value:'Total Start Pending'},
      {value:'Total Completion Pending'}
    ];

    return mailType;
  }



  getSampleStage(){
    let sampleStage=[
      {value:'After Order Place'},
      {value:'Before Order Place'},
      {value:'R&D'}    
    ];
    
    return sampleStage;
  }

  getEmbellishmentName(){
    let embellishmentName=[
      {value:'Printing'},
      {value:'Embroidery'},
      {value:'Wash'},
      {value:'Special Works'},
      {value:'Gmts Dyeing'},
      {value:'Others'}
    ];
    return embellishmentName;
  }

  getCalculationBasis(){
    let calculationBasis=[
      {value:'Order Qty'},
      {value:'Plan Cut Qty'}
    ];
    return calculationBasis;
  }

  getBookingType(){
    let bookingType=[
      {value:'Rubber'}
    ]
    return bookingType;
  }
}



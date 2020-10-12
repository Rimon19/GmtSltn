import { Injectable } from '@angular/core';
import { BuyerProfile } from '../../data/Library-Modul-model/buyer-profile';
import { BuyerProfileService } from '../library/buyer-profile.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SupplierProfile } from '../../data/Library-Modul-model/supplier-profile';
import { SupplierProfileService } from '../library/supplier-profile.service';
import { AgentInfoesService } from '../marchandizer/agent-infoes.service';
import { AgentInfoes } from '../../data/marchanzider-model/agent-infoes.model';
import { UserMappingService } from '../user-mapping.service';
import { UserService } from '../users.service';
import { UserData } from '../../data/users';
import { StaticFeaturesService } from '../library/static-features.service';
import { company } from '../../data/company';
import { CompanyService } from '../company.service';
import { location } from '../../data/location';
import { LocationService } from '../location.service';
import { ProductionFloorService } from '../library/production-floor.service';
import { GarmentsItemEntries } from '../../data/Library-Modul-model/garments-item-entries';
import { GarmentsItemEntriesService } from '../library/garments-item-entries.service';
import { CountryService } from '../country.service';
import { BuyerWiesSeasonService } from '../library/buyer-wies-season.service';
import { BuyerWiesSeason } from '../../data/Library-Modul-model/buyer-wies-season.model';
import { GarmentsItemEntriesComponent } from '../../../pages/libraryModule/garments-item-entries/garments-item-entries.component';
import { ItemDetailsOrderEntriesService } from '../marchandizer/item-details-order-entries.service';
import { ItemDetailsOrderEntries } from '../../data/marchanzider-model/item-details-order-entries.model';
import { ItemCategoryService } from '../library/item-category.service';
import { BodyPartEntryService } from '../library/body-part-entry.service';
import { BodyPartEntry } from '../../data/Library-Modul-model/BodyPartEntry';
import { FabricDesPreCostService } from '../marchandizer/fabric-des-pre-cost.service';
import { FabricDesPreCost } from '../../data/marchanzider-model/fabric-des-pre-cost.model';
import { YarnCountsService } from '../marchandizer/yarn-counts.service';
import { YarnCounts } from '../../../pages/libraryModule/Model/YarnCounts';
import { ColourEntryService } from '../library/colour-entry.service';
import { ColourEntry } from '../../data/Library-Modul-model/colour-entry';
import { UserInfo } from 'firebase';
import { TNATaskEntriesService } from '../library/tnatask-entries.service';
import { InputPannelPodetailsService } from '../marchandizer/input-pannel-podetails.service';
import { SizeWisePannelPodetailsService } from '../marchandizer/size-wise-pannel-podetails.service';
import { SizeWisePannelPodetails } from '../../data/marchanzider-model/size-wise-pannel-podetails.model';
import { TrimsGroup } from '../../data/Library-Modul-model/trims-groups';
import { TrimsGroupService } from '../library/trims-group.service';
import { ProductionDeptInfoesService } from '../production-dept-infoes.service';
import { PackingInfoesService } from '../marchandizer/packing-infoes.service';
import { FetchInitialOrderComponent } from '../../../pages/merchandizer-module/fetch-initial-order/fetch-initial-order.component';
import { OrderInfo } from '../../data/marchanzider-model/order-info.model';
import { FetchInitialOrderService } from '../fetch-initial-order.service';
import { PreCosting } from '../../data/marchanzider-model/pre-costing.model';
import { PrecostingService } from '../marchandizer/precosting.service';
import { MasterPodetailsInfroesService } from '../marchandizer/master-podetails-infroes.service';
import { MasterPodetailsInfroes } from '../../data/marchanzider-model/master-podetails-infroes.model';
import { YarnCountDeterminationService } from '../library/yarn-count-determination.service';
import { YarnCountDetermination } from '../../data/Library-Modul-model/yarn-count-determination';
import { MarketingTeamInfoService } from '../library/marketing-team-info.service';
import { MarketingTeamInfo } from '../../data/Library-Modul-model/marketing-team-info';
import { InputPannelPodetails } from './../../data/marchanzider-model/input-pannel-podetails.model';
import { FabricCostService } from '../marchandizer/fabric-cost.service';
import { FabricCost } from '../../data/marchanzider-model/fabric-cost';
import { CompositionEntryService } from '../library/composition-entry.service';
import { ItemGroup } from '../../data/Library-Modul-model/ItemGroup';
import { ItemGroupService } from '../library/item-group.service';
import { Observable } from 'rxjs';
import { YarnTypesService } from '../marchandizer/yarn-types.service';


@Injectable({
  providedIn: 'root'
})
export class DropdownValueService {
  public buyerList:BuyerProfile[]=[];
  public companyList:company[]=[];
  public locationList:location[]=[];
  public floorsList:any[]=[];
  public subpplierList:SupplierProfile[]=[];
  public agentList:AgentInfoes[]=[];
  public teamleaderList:any[]=[];
  public userList:UserData[]=[];
  public statusList:any[]=[];
  public levelList:any[]=[];
  public payModeList:any[]=[];
  public processList:any[]=[];
  public bodyPartList:BodyPartEntry[]=[];
  public bodyPartTypeList:any[]=[];
  public fabricDescriptionList:FabricDesPreCost[]=[];
  public sourceList:any[]=[];
  public colorTypeList:any[]=[];
  public readyToApprovedList:any[]=[];
  public materialSourceList:any[]=[];
  public dealiningMarchandList:any[]=[];
  public factoryMarchandList:any[]=[];
  public uomList:any[]=[];
  public departmentCodeList:any[]=[];
  public currencyList:any[]=[];
  public yearList:any[]=[];
  public monthList:any[]=[];
  public productDeptList:any[]=[];
  public sMVBasicList:any[]=[];
  public garmentsItemList:GarmentsItemEntries[]=[];
  public productCategoryList:any[]=[];
  public sampleDevelopmentSeasonList:any[]=[];
  public packingInfoesItemsList:any[]=[];
  public itemGroupList:ItemGroup[]=[];   
  public regionList:any[]=[];
  public resourcesList:any[]=[];
  public sampleTypeList:any[]=[];
  public fabricSourceList:any[]=[];
  public fabricNatureList:any[]=[];
  public approvalStatusList:any[]=[];
  public delayForList:any[]=[];
  public SampleStageList:any[]=[];
  public buyerWiseSeasonList:BuyerWiesSeason[]=[];
  public itemCategoryList:any[]=[];
  public isShortList:any[]=[];	
  public aopSourceList:any[]=[];	
  public yarnCountList:YarnCounts[]=[];
  public colorList:ColourEntry[]=[];
  public testcolorList;
  public colorRangeList:any[]=[];
  public yesNoList:any[]=[];
  public sampleNameList:any[]=[];
  public shortFabricBookingTypeList:any[]=[];
  public productionProcessList:any[]=[];
  public erpModuleList:any[]=[];
  public mailTypeList:any[]=[];
  public tnaShortNameList:any[]=[];
 public calculationBasisList:any[]=[];
  public sensitivityList :any=[]=[];
  public ProductionDeptInfoesListItems :any=[]=[];
  public garmentsColorList:any[]=[];
  public garmentsSizList:any[]=[];
  public departmentsList:any[]=[];
  public embellishmentNameList:any[]=[];
  public embellishmentTypeList:any[]=[];
  public trimsgroupList:TrimsGroup[]=[];
  public accountSourceList:any[]=[];
  public initialOrderList:OrderInfo[]=[];
  public preCostingList:PreCosting[]=[];
  public fabricCostList:FabricCost[]=[];
  public bookingTypeList:any[]=[];
  public PodetailsList:MasterPodetailsInfroes[]=[];
  public SizeWisePannelPodetailList:SizeWisePannelPodetails[]=[];
  public yarnCountDeterminationList:YarnCountDetermination[]=[];
  public marketingTeamInfoList:MarketingTeamInfo[]=[];
  public yarnCountDeterminationChilddataList:[]=[];
  public InputPannelPodetailsList:InputPannelPodetails[]=[];
  public yarnComp1List:any[]=[];
  public typeList:any[]=[];
  public moduleList:any[]=[];
  public piBasisList:any[]=[];
  public goodsRcvStatusList:any[]=[];
  public  indentorList:any[]=[];
  public yarnTypeList:any[]=[];

  
  constructor(public http:HttpClient,
    private buyerProfileService:BuyerProfileService,
    private supplierProfileService:SupplierProfileService,
    private agentInfoesService:AgentInfoesService,
    private userMappingService:UserMappingService,
    private packingInfoesService:PackingInfoesService,
    private userService:UserService,
    private itemGroupService:ItemGroupService,
    private companyService:CompanyService,
    private locationService:LocationService,
    private staticFeaturesService:StaticFeaturesService,
    private garmentsItemEntriesService:GarmentsItemEntriesService,
    private regionService:CountryService,
    private buyerWiesSeasonService:BuyerWiesSeasonService,
    private  itemDetailsOrderEntriesService:ItemDetailsOrderEntriesService,
    private itemCategoryService:ItemCategoryService,
    private bodyPartEntryService:BodyPartEntryService,
    private fabricDesPreCostService:FabricDesPreCostService,
    private yarnCountsService:YarnCountsService,
    private colourEntryService:ColourEntryService,
    private inputPannelPodetailsService:InputPannelPodetailsService,
    private sizeWisePannelPodetailsService:SizeWisePannelPodetailsService,
    private tNATaskEntriesService:TNATaskEntriesService,
    private trimsGroupService:TrimsGroupService,
    private productionDeptInfoesService:ProductionDeptInfoesService,
    private fetchInitialOrderService:FetchInitialOrderService,
    private precostingService:PrecostingService,
    private masterPodetailsInfroesService:MasterPodetailsInfroesService,
    private yarnCountDeterminationService:YarnCountDeterminationService,
    private marketingTeamInfoService:MarketingTeamInfoService,
   
    private fabricCostService:FabricCostService,
    private compositionEntryService:CompositionEntryService

    ) {
         
     }
  getUsers(){
  this.userService.getAllUser().subscribe(data=>{
    this.userList=data;
    
  })
  }
getProductionDeptInfoes(){
  this.productionDeptInfoesService
  .getProductionDeptInfoesDDL()
  .subscribe((data) => {
    this.ProductionDeptInfoesListItems=data;  
   
  });
}

  getStatus(){
  this.statusList=this.staticFeaturesService.getStatus();
  }
  getBodyPart(){
    this.bodyPartEntryService.getAll().subscribe(data=>{
    this.bodyPartList=data;
    });
  }
  getBodyPartType(){
    this.staticFeaturesService.getAllBodyPartType().subscribe(data=>{
    this.bodyPartTypeList=data;
    });
  }
  getCompany(){
  this.companyService.getAllCompany().subscribe(data=>{
    this.companyList=data;
  
  })
  }
  getLocation(){
  this.locationService.getAllLocations().subscribe(data=>{
    this.locationList=data;
   
  })
  }
  getFloors(){
  this.staticFeaturesService.getAllFloors().subscribe(data=>{
    this.floorsList=data;
   
  });
  } 

 public getBuyers(): any {
     this.buyerProfileService.getAll().subscribe(
      (res: any) => {
      this.buyerList=res;
      },
      err => {
        return 'error';
      }
    );
  }
  public getSuppliers(): any {
    this.supplierProfileService.getAllSupplier().subscribe(
     (res: any) => {
     this.subpplierList=res;
     }, 
     err => {
       return 'error';
     }
   );
 }
 getAllProductionProcess(){
  this.staticFeaturesService.getAllProductionProcess().subscribe(data=>{
    this.processList=data;
    
    });
} 
 getAgents(): any {
  this.agentInfoesService.getAllAgentInfoes().subscribe(
   (res: any) => {
   this.agentList=res;
   },
   err => {
     return 'error';
   }
 );
}
getTeamleaders(): any {
  this.userMappingService.getAllUserMapping().subscribe(
   res => {
   
    let teamleaderids= res.filter(f=>f.additionDesignationId == 1);
      
     teamleaderids.forEach(element => {
      this.userService.getAllUser().subscribe((data) => {
       
        let teamLeaderName = data.find((f) => f.userID == element.userId)
          .fullName;
        element.userId = teamLeaderName;
      
      });
    });
     
    this.teamleaderList=teamleaderids;
    
   },
   err => {
     return 'error';
   }
 );
}
getDealingMerchant() {
  this.userMappingService.getAllUserMapping().subscribe((data) => {
   
    let marchandisingInfoByempCategoryId = data.filter(
      (f) => f.empCategoryId == 5
    );
  
    marchandisingInfoByempCategoryId.forEach((element) => {
      this.userService.getAllUser().subscribe((data) => {
        let marchandName = data.find((f) => f.userID == element.userId)
          .fullName;
        element.userId = marchandName;
   
      });
    });

    this.dealiningMarchandList = marchandisingInfoByempCategoryId;
   
  });
}
getFactoryMerchant() {
  this.userMappingService.getAllUserMapping().subscribe((data) => {
    
    let factoryMerchantInfoByempCategoryId = data.filter(
      (f) => f.empCategoryId == 6
    );
   

    factoryMerchantInfoByempCategoryId.forEach((element) => {
      this.userService.getAllUser().subscribe((data) => {
    
        let factoryMerchant = data.find((f) => f.userID == element.userId)
          .fullName;
        element.userId = factoryMerchant;
      });
    });
    this.factoryMarchandList = factoryMerchantInfoByempCategoryId;
 
  });
}
getUom(){
this.staticFeaturesService.getAllUOM().subscribe(data=>{
this.uomList=data;

});
}
getDepartmentCode(){
  this.departmentCodeList=this.staticFeaturesService.getDepartmentCode();
}
getSMVBasic(){
  this.sMVBasicList=this.staticFeaturesService.getSMVBasic();
}
public getCurrency(){
  this.staticFeaturesService.getAllDiscountMethod().subscribe(data=>{
  this.currencyList=data;
  
  });
  }
 getProductDept(){
   this.productDeptList=this.staticFeaturesService.getProductDept();
 }
 getGarmentsItem(){
   this.garmentsItemEntriesService.getGarmentsItemEntries().subscribe(res=>{
      this.garmentsItemList=res;
      
   });
 }
 getProductCategory(){
   this.staticFeaturesService.getAllProductCategory().subscribe(res=>{
     this.productCategoryList=res; 
   })

 }
 getPackingInfoes(){
  this.packingInfoesService.getAllPackingInfoes().subscribe((data) => {
    this.packingInfoesItemsList = data;
  });
 }

 getSampleDevelopmentSeason(){
   this.sampleDevelopmentSeasonList=this.staticFeaturesService.getSampleDevelopmentSeason();
 }
 getRegion(){
  this.regionService.getAllCountry().subscribe(res=>{
      this.regionList=res;
  });
 }
 getAllResources(){
  this.staticFeaturesService.getAllResources().subscribe(res=>{
      this.resourcesList=res;
  });
 }
  public getYear(){
   this.staticFeaturesService.getAllYears().subscribe(data=>{
     this.yearList=data;
    
   });
 }
 public getMonth(){
   this.staticFeaturesService.getAllMonths().subscribe(data=>{
     this.monthList=data;
    
   
   
    });
 }
 public getPayMode(){
 this.payModeList=this.staticFeaturesService.getPayMode();
 }

 getMaterialSource(){
  this.materialSourceList=this.staticFeaturesService.getMaterialSource();
 }
//  getReadyToApproved(){
//   this.readyToApprovedList=this.staticFeaturesService.getYesOrNo();
//  }
 public getSource(){
 this.sourceList=this.staticFeaturesService.getInvetoryILEorLandedCostStandardSource();
 }
 getLevel(){
 this.levelList=this.staticFeaturesService.getLevel();
 }
 getAopSource(){
 this.aopSourceList=this.staticFeaturesService.getAopSource();
 }

 getsampleType(){
   this.staticFeaturesService.getAllSampleType().subscribe(data=>{
     this.sampleTypeList=data;
   })
 }

 getfabricSourceList(){
   this.fabricSourceList=this.staticFeaturesService.getFabricSource();
 }

 getapprovalStatus(){
   this.approvalStatusList=this.staticFeaturesService.getApprovalStatus();
 }
 getDelayFor(){
  this.delayForList= this.staticFeaturesService.getDelayFor()
 }
 getSampleStage(){
  this.SampleStageList= this.staticFeaturesService.getSampleStage()
 }
 getBuyerWiseSeason(buyerId){
 this.buyerWiesSeasonService.getAll().subscribe(data=>{
   this.buyerWiseSeasonList=data.filter(f=>f.buyerId==buyerId);
 
 });
 }

 getGarmentItemsByOrderNo(orderAutoId){
  this.itemDetailsOrderEntriesService.getAllItemDetailsOrderEntries().subscribe(data=>{
       
    let itemDtls=data.filter(f=>f.order_entry_id==orderAutoId);

    // var result = [];
    // itemDtls.reduce(function(res, value) {
    //     if (!res[value.item]) {
    //       res[value.item] = { item: value.item};
    //       result.push(res[value.item])
    //     }
    //     res[value.item].item=value.item;
    //     return res;
    //   }, {});



    this.garmentsItemEntriesService.getGarmentsItemEntries().subscribe(res=>{
      this.garmentsItemList=res;
      let items=[];
      itemDtls.forEach(element => {
     let item=this.garmentsItemList.find(f=>f.id==parseInt(element.item));
        items.push(item);
      });
      if(items.length!=0){
        this.garmentsItemList=items;  
       }
      
      
   });

  });
 }

 getItemCategory(){
   this.itemCategoryService.getItemCategory().subscribe(data=>{
     this.itemCategoryList=data;
   });
 }

//  getIsShort(){
//    this.isShortList=this.staticFeaturesService.getYesOrNo();

//  }	

 
  getColorType(){
    this.staticFeaturesService.getAllColorTypes().subscribe(data=>{
   this.colorTypeList=data;
    });
  }
  getYarnCountDetermination(){
    this.yarnCountDeterminationService.getAll().subscribe(data=>{
      this.yarnCountDeterminationList=data;
     
     });
  }
  
  getFabricDescription(){
  // this.getYarnCountDetermination();
  // this.getYarnCount();

    this.fabricDesPreCostService.getAll().subscribe(data=>{
     this.fabricDescriptionList=data;
    });
  }
  
getFabricNature(){
  this.staticFeaturesService.getAllFabricNature().subscribe(data=>{
    this.fabricNatureList=data;
  })
}

getYarnCount(){
  this.yarnCountsService.getAllYarnCount().subscribe(data=>{
      this.yarnCountList=data;
  })
}
// async function myMeeting(){
//   const meetingDetails= await meeting;
//   const message=await addToCalander(meetingDetails);
//   console.log(message)
// }
 getColor(){
   this.colourEntryService.getColourEntry().subscribe(data=>{
    this.colorList=data;
    
  })
}
 getClr(){
  this.colourEntryService.getClrEntry().then(data=>{
    this.testcolorList=data;
  });

}

getColorRange(){
  this.staticFeaturesService.getAllColorRange().subscribe(data=>{
    this.colorRangeList=data;
  })
}
 
public getYesNo(){
   this.yesNoList=this.staticFeaturesService.getYesOrNo();
}
getShortFabricBookingType(){
this.shortFabricBookingTypeList= this.staticFeaturesService.getShortFabricBookingType();
}

getSampleName(){
  this.sampleNameList=this.staticFeaturesService.getSampleName();
}

getProductionProcess(){
  this.staticFeaturesService.getAllProductionProcess().subscribe(data=>{
    this.productionProcessList=data;
  })
}

getSensitivity(){
  this.sensitivityList=this.staticFeaturesService.getSensitivity();
}

getERPModules(){
  this.staticFeaturesService.getERPModule().subscribe(data=>{
    this.erpModuleList=data;
  });
}

getUsersByEmail(){
  this.userService.getAllUser().subscribe(data=>{
  
     let items:any;
     
     items=data.filter(f=>f.email!='');

   this.userList=items;


  
  });
}

getMailType(){

  this.mailTypeList=this.staticFeaturesService.getMailType();
}

getTNAShortName(){
  this.tNATaskEntriesService.getTNATaskEntries().subscribe(data=>{
    this.tnaShortNameList=data;
  });
}

//item color
getGarmentsColor(poId){
 
  this.inputPannelPodetailsService.getGarmentsColorByPoDetailsId(poId).subscribe(data=>{
 
    this.garmentsColorList=data;
    //id field color value field color
});



}


//or Item Size
getGarmentsSize(poId){
  this.inputPannelPodetailsService.getGarmentsSizeByPoDetailsId(poId).subscribe(data=>{
    
    this.garmentsSizList=data;
  //id field size value field size color
  });
}

getDepartments(){
  this.staticFeaturesService.getEmpDepartments().subscribe(data=>{
    this.departmentsList=data;
 
 });
}

getEmbellishmentName(){
  this.embellishmentNameList=this.staticFeaturesService.getEmbellishmentName();
}

getEmbellishmentType(){
  this.staticFeaturesService.getEmbellismentType().subscribe(data=>{
    this.embellishmentTypeList=data;
  })
}

getTrimsGroup(){
  this.trimsGroupService.getAll().subscribe(data=>{
  this.trimsgroupList=data;
  });
  }
  
  getAccountSource(){
   this.accountSourceList= this.staticFeaturesService.getAccountSource();
  }


  getInitialOrder(){
    this.fetchInitialOrderService.getInitialAllOrderList().subscribe(data=>{
    this.initialOrderList=data;
    });
    }

    getPrecosting(){
      this.precostingService.getAllPrecosting().subscribe(data=>{
      this.preCostingList=data;
      });
    }

    getCalculationBasis(){
      this.calculationBasisList=this.staticFeaturesService.getCalculationBasis();
    }

    getBookingType(){
      this.bookingTypeList=this.staticFeaturesService.getBookingType();
    }

    getPoDetailsInfros(){
      this.masterPodetailsInfroesService.getAllMasterPodetailsInfroes().
      subscribe(data=>{
      this.PodetailsList=data;
      });
    }
    getPoDetailsInfrosByJobNo(orderAutoId){
      this.masterPodetailsInfroesService.getAllMasterPodetailsInfroes().
      subscribe(data=>{
      this.PodetailsList=data.filter(f=>f.initialOrderID==orderAutoId);
      });
    }
    getYarnCostInformation(){
 
    }
    getSizeWiseBreakDwn(){
      this.sizeWisePannelPodetailsService.getAllSizeWisePannelPodetails().subscribe(data=>{
        this.SizeWisePannelPodetailList=data;
      });
    }
    getInputPannelPoDetailsOrCountryInfoByPoNo(poNoId){
      this.inputPannelPodetailsService.getAllInputPannelPodetails().subscribe(data=>{
        this.InputPannelPodetailsList=data.filter(f=>f.po_details_ID==poNoId);
      });
    }
     getSizeWiseBreakDwnByPoNoandCountryId(countryOrInputId){
      this.sizeWisePannelPodetailsService.getAllSizeWisePannelPodetails().subscribe(data=>{
        this.SizeWisePannelPodetailList=data.filter(f=>f.inputPannelId==countryOrInputId);
      });
    }

    // getSizeWiseBreakDwn(){
    //   this.sizeWisePannelPodetailsService.getAllSizeWisePannelPodetails().subscribe(data=>{
    //     this.SizeWisePannelPodetailList=data;
    //   });
    // }
    // getSizeWiseBreakDwnByPoNoandCountryId(countryOrInputId){
    //   this.sizeWisePannelPodetailsService.getAllSizeWisePannelPodetails().subscribe(data=>{
    //     this.SizeWisePannelPodetailList=data;
    //   });
    // }

    getMarketingTeamInfo(){
      this.marketingTeamInfoService.getAll().subscribe(data=>{
        this.marketingTeamInfoList=data;
      })
    } 
    getItemGroup(){
      this.itemGroupService.getAll().
      subscribe(data=>{
      this.itemGroupList=data;
         
      });
     } 
    getFabricCost(){
      this.fabricCostService.getAll().subscribe(data=>{
      this.fabricCostList=data;
     
      });
    }

    getYarnComp1DDL() {
      this.compositionEntryService.getCompositionEntry().subscribe((data) => {
        this.yarnComp1List = data;
       
      });
    }
    gettypeDDL() {
      this.staticFeaturesService.getAllType().subscribe((data) => {
        this.typeList = data;
        
      });
    }

    getModule(){
      this.staticFeaturesService.getERPModule().subscribe(data=>{
        this.moduleList=data;
      })
    }

    //for commercial

    getPIBasis(){
      this.piBasisList=this.staticFeaturesService.getPIBasis();
    }
    getGoodsRcvStatus(){
      this.goodsRcvStatusList=this.staticFeaturesService.getGoodsRcvStatus();

    }
    getIndentor(){
      this.indentorList=this.staticFeaturesService.getIndentor();
    }


}


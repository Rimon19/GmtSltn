import { Component, OnInit, Input } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { UserMapping } from '../../../../@core/data/user-mapping';
import { company } from '../../../../@core/data/company';
import { BuyerProfile } from '../../../../@core/data/Library-Modul-model/buyer-profile';
import { ProductionDeptInfoes } from '../../../../@core/data/ProductionDeptInfoes';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { ShipmentModeInfoes } from '../../../../@core/data/marchanzider-model/shipment-mode-infoes.model';
import { SeasonInfoes } from '../../../../@core/data/marchanzider-model/season-infoes.model';
import { PackingInfoes } from '../../../../@core/data/marchanzider-model/packing-infoes.model';
import { AgentInfoes } from '../../../../@core/data/marchanzider-model/agent-infoes.model';
import { UserInfoes } from '../../../../@core/data/marchanzider-model/user-infoes.model';
import { SubDeptInfoes } from '../../../../@core/data/SubDeptInfoes';
import { location } from "../../../../@core/data/location";
import { UserMappingService } from '../../../../@core/mock/user-mapping.service';
import { CompanyService } from '../../../../@core/mock/company.service';
import { LocationService } from '../../../../@core/mock/location.service';
import { BuyerProfileService } from '../../../../@core/mock/library/buyer-profile.service';
import { ProductionDeptInfoesService } from '../../../../@core/mock/production-dept-infoes.service';
import { CountryService } from '../../../../@core/mock/country.service';
import { ShipmentModeInfoesService } from '../../../../@core/mock/shipment-mode-infoes.service';
import { MarchandizerInfoService } from '../../../../@core/mock/marchandizer/marchandizer-info.service';
import { SeasonInfoesService } from '../../../../@core/mock/marchandizer/season-infoes.service';
import { PackingInfoesService } from '../../../../@core/mock/marchandizer/packing-infoes.service';
import { AgentInfoesService } from '../../../../@core/mock/marchandizer/agent-infoes.service';
import { UserInfoesService } from '../../../../@core/mock/marchandizer/user-infoes.service';
import { SubDeptInfoesService } from '../../../../@core/mock/marchandizer/sub-dept-infoes.service';
import { FetchInitialOrderService } from '../../../../@core/mock/fetch-initial-order.service';
import { NbToastrService } from '@nebular/theme';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UserService } from '../../../../@core/mock/users.service';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { ItemDetailsOrderEntriesService } from '../../../../@core/mock/marchandizer/item-details-order-entries.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { NgForm, FormBuilder } from '@angular/forms';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { OrderOrJobSelectionFormComponent } from '../../order-or-job-selection-form/order-or-job-selection-form.component';
import { OrderInfo } from '../../../../@core/data/marchanzider-model/order-info.model';
import { ItemDetailsOrderEntries } from '../../../../@core/data/marchanzider-model/item-details-order-entries.model';
@Component({
  selector: 'ngx-edit-initial-order',
  templateUrl: './edit-initial-order.component.html',
  styleUrls: ['./edit-initial-order.component.scss']
})
export class EditInitialOrderComponent  {
  
  SMV: number = 0;
  Tostr = new Tostr();
  public userMapping: UserMapping[] = [];
  public companyListItems: company[] = [];
  public locationListItems: location[] = [];
  public teamLeaderItems: any[] = [];
  public buyerListItems: BuyerProfile[] = [];
  public countryList: CountryInfo[] = [];
  public ProductionDeptInfoesListItems: ProductionDeptInfoes[] = [];
  public shipmentModeInfoesItems: ShipmentModeInfoes[] = [];
  public currencyList: any[] = [];
  public productCategoryItems: any[] = [];
  public MarchandizerInfoItems: UserMapping[] = [];
  public factoryMerchantInfoItems: UserMapping[] = [];
  public orderUomInfoItems: any[] = [];
  public seasonInfoesItems: SeasonInfoes[] = [];
  public packingInfoesItems: PackingInfoes[] = [];
  public agentInfoesItems: AgentInfoes[] = [];
  public orderinfo:OrderInfo[] = [];
  public userInfoesItems: UserInfoes[] = [];
  public subDeptInfoesItems: SubDeptInfoes[] = [];
  public itemList:ItemDetailsOrderEntries[]=[];
  public totalSMV=0;
  editedId:any;
  selectedFilesForImage: FileList;
  orderImageUrlFile: File;
  output_image;
  itemDetailsArray: any = this.fb.array([]);
  constructor(
    private fb: FormBuilder,
    private userMappingService: UserMappingService,
    private companyService: CompanyService,
    private locationService: LocationService,
    private buyerService: BuyerProfileService,
    private productionDeptInfoesService: ProductionDeptInfoesService,
    private countryService: CountryService,
    private staticFeaturesService:StaticFeaturesService,
    private shipmentModeInfoesService: ShipmentModeInfoesService,
    private marchandizerInfoService: MarchandizerInfoService,
    private seasonInfoesService: SeasonInfoesService,
    private packingInfoesService: PackingInfoesService,
    private agentInfoesService: AgentInfoesService,
    private userInfoesService: UserInfoesService,
    private subDeptInfoesService: SubDeptInfoesService,
    public fetchInitialOrderService: FetchInitialOrderService,
    private toastrService: NbToastrService,
    private dialog: MatDialog,
    private userService: UserService,
    private route: ActivatedRoute,
    private datapassingService: DatapassingService,
    private itemDetailsOrderEntriesService: ItemDetailsOrderEntriesService,
    private router: Router
  ) { 
      this.itemDetailsOrderEntriesService.getAllItemDetailsOrderEntries().subscribe(data=>{
        this.itemList=data.filter(f=>f.order_entry_id==this.editedId);
        this.itemList.forEach(element => {
      this.totalSMV =this.totalSMV+element.ratio *element.sew_smv_pcs;
    });
   this.fetchInitialOrderService.orderInfo.smv=this.totalSMV ;
      })  

    
    this.editedId = this.route.snapshot.paramMap.get('id');

    this.fetchInitialOrderService.getInitialAllOrderList().subscribe(item=>{
   let items=  item.find(f=>f.orderAutoID==this.editedId);
   this.fetchInitialOrderService.orderInfo=items;

  
  })
  }

  ngOnInit() {
    this.teamLeaderDDL();
    this.companyDDL();
    this.locationDDL();
    this.buyerDDL();
    this.ProductionDeptInfoDDL();
    this.subDeptInfoesDDL();
    this.countryDDL();
    this.shipmentModeInfoesDDL();
    this.currencyDDL();
    this.productCategoryDDL();
    this.dealingMerchantDDL();
    this.orderUomInfoDDL();
    this.seasonInfoesDDL();
    this.packingInfoesDDL();
    this.agentInfoesDDL();
    this.userInfoesDDL();
    this.factoryMerchantDDL();
    this.resetFormForOrderInfo();
    this.loadSmvValueFromItemDetails();
 this.datapassingService.subjectsourceItemsDetails.subscribe((data) => {
      if(data==0){
      }else{
         this.itemDetailsArray.value=data.ItemDetailsInformationForm;          
      }       
  });
  
}
  loadSmvValueFromItemDetails() {
    this.datapassingService.subjectsourceItemsDetails.subscribe((data) => {
   
      if (data.SMV == undefined) {
        this.fetchInitialOrderService.orderInfo.smv = "";
      } else {
        this.fetchInitialOrderService.orderInfo.smv = data.SMV;
      }
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
  factoryMerchantDDL() {
    this.userMappingService.getAllUserMapping().subscribe((data) => {
      this.userMapping = data;
      let factoryMerchantInfoByempCategoryId = this.userMapping.filter(
        (f) => f.empCategoryId == 6
      );
     

      factoryMerchantInfoByempCategoryId.forEach((element) => {
        this.userService.getAllUser().subscribe((data) => {
          let factoryMerchant = data.find((f) => f.userID == element.userId)
            .fullName;
          element.userId = factoryMerchant;
        });
      });
      this.factoryMerchantInfoItems = factoryMerchantInfoByempCategoryId;
     
    });
  }
  companyDDL() {
    this.companyService.getAllCompany().subscribe((data) => {
      this.companyListItems = data;
    
    });
  }
  locationDDL() {
    this.locationService.getAllLocations().subscribe((data) => {
      this.locationListItems = data;
  
    });
  }
  teamLeaderDDL() {
    this.userMappingService.getAllUserMapping().subscribe((data) => {
      this.userMapping = data;
      let teamLeaderId = this.userMapping.filter(
        (f) => f.additionDesignationId == 1
      );
      teamLeaderId.forEach((element) => {
        this.userService.getAllUser().subscribe((data) => {
          let teamLeaderName = data.find((f) => f.userID == element.userId)
            .fullName;
          element.userId = teamLeaderName;
        
        });
      });
      this.teamLeaderItems = teamLeaderId;
     
    });
  }
  buyerDDL() {
    this.buyerService.getAll().subscribe((data) => {
      this.buyerListItems = data;
     
    });
  }
  ProductionDeptInfoDDL() {
    this.productionDeptInfoesService
      .getProductionDeptInfoesDDL()
      .subscribe((data) => {
        this.ProductionDeptInfoesListItems = data;
       
      });
  }
  countryDDL() {
    this.countryService.getAllCountry().subscribe((data) => {
      this.countryList = data;
    
    });
  }
  shipmentModeInfoesDDL() {
    this.shipmentModeInfoesService
      .getAllShipmentModeInfoes()
      .subscribe((data) => {
        this.shipmentModeInfoesItems = data;
      
      });
  }
  currencyDDL() {
    this.staticFeaturesService.getAllDiscountMethod().subscribe((data) => {
      this.currencyList = data;
     
    });
  }
  productCategoryDDL() {
    this.staticFeaturesService.getAllProductCategory().subscribe((data) => {
      this.productCategoryItems = data;
     
    });
  }
  orderUomInfoDDL() {
    this.staticFeaturesService.getAllUOM().subscribe((data) => {
      this.orderUomInfoItems = data;
     
    });
  }
  seasonInfoesDDL() {
    this.seasonInfoesService.getAllSeasonInfoes().subscribe((data) => {
      this.seasonInfoesItems = data;
     
    });
  }
  packingInfoesDDL() {
    this.packingInfoesService.getAllPackingInfoes().subscribe((data) => {
      this.packingInfoesItems = data;
    
    });
  }
  agentInfoesDDL() {
    this.agentInfoesService.getAllAgentInfoes().subscribe((data) => {
      this.agentInfoesItems = data;
     
    });
  }
  userInfoesDDL() {
    this.userInfoesService.getAllUserInfoes().subscribe((data) => {
      this.userInfoesItems = data;
     
    });
  }
  subDeptInfoesDDL() {
    this.subDeptInfoesService.getAllSubDeptInfoes().subscribe((data) => {
      this.subDeptInfoesItems = data;
    
    });
  }
  resetFormForOrderInfo(form?: NgForm) {
    if (form != null) form.resetForm();
    this.fetchInitialOrderService.orderInfo = {
      orderAutoID: 0,
      jobNo: "",
      companyID: "",
      locationID: "",
      buyerID: "",
      style_Ref: "",
      style_Description: "",
      prod_DeptID: "",
      sub_DeptID: "",
      currencyID: "",
      regionID: "",
      product_CatID: "",
      team_Leader_ID: "",
      dealing_Merchant_ID: "",
      factory_merchant: "",
      bH_Merchant: "",
      remarks: "",
      shipment_Mode_ID: "",
      order_Uom_ID: "",
      smv: "",
      packing_ID: "",
      season_ID: "",
      agent_ID: 0,
      userID: 0,
      repeat_No_Job: "",
      order_Number: "",
      orderImagePath: "",
      status:"",
     entryDate:'',
     entryBy:'',
  
     merchandApprovalDate:'',
     merchandApproval: false,
     approvedByMerchandUserId: '',
  
     agmApprovalDate:'',
     agmApproval: false,
     approvedByAgmUserId:'',
  
      gmApprovalDate:'',
      gmApproval: false,
      approvedByGmUserId:'',
  
      mdApprovalDate: '',
      mdApproval: false,
      approvedByMdUserId:''
    };
  }
  onSubmit() {
    if(this.fetchInitialOrderService.orderInfo.agent_ID==0){
      this.fetchInitialOrderService.orderInfo.agent_ID=0;
    }
    if(this.fetchInitialOrderService.orderInfo.season_ID==''){
      this.fetchInitialOrderService.orderInfo.season_ID=0;
    }
    if(this.fetchInitialOrderService.orderInfo.sub_DeptID==''){
      this.fetchInitialOrderService.orderInfo.sub_DeptID=0;
    }
    if(this.fetchInitialOrderService.orderInfo.regionID==''){
      this.fetchInitialOrderService.orderInfo.regionID=0;
    }
    this.fetchInitialOrderService.getInitialAllOrderList().subscribe(data=>{
      this.orderinfo=data;
      let orderDetailsInfoByStyleRef=( this.fetchInitialOrderService.orderInfo.style_Ref) ?
      this.orderinfo.filter(p => p.style_Ref.toLowerCase()==
            this.fetchInitialOrderService.orderInfo.style_Ref.toLowerCase()):
            this.orderinfo; 

            if(orderDetailsInfoByStyleRef.length>=2){
              //styleref==userStyle&&season!=userSeason
              //save
           let orderInfoBystyleRefNSeason=this.orderinfo.filter(f=>f.style_Ref==this.fetchInitialOrderService.orderInfo.style_Ref&&
                f.season_ID==this.fetchInitialOrderService.orderInfo.season_ID);

            if(orderInfoBystyleRefNSeason.length>=2) {
              this.Tostr.showToast('danger','', 'Style Ref Duplicate not Allow !', '',this.toastrService);
               }  
               else{
                 let orderAutoID=this.fetchInitialOrderService.orderInfo.orderAutoID;
              
                this.fetchInitialOrderService
                .updateInitialAllOrder(this.fetchInitialOrderService.orderInfo)
                .subscribe(
                  (res) => {
                   
                     
                      this.itemDetailsArray.value.forEach((element) => {
                        element.order_entry_id = orderAutoID;
                        if(element.id!=0){
                        
                          this.itemDetailsOrderEntriesService
                            .updateItemDetailsOrderEntries(element)
                            .subscribe();
                        }else{
                          this.itemDetailsOrderEntriesService
                            .addItemDetailsOrderEntries(element)
                            .subscribe();
                        }
                       
                      });
                      
                   
                    this.Tostr.showToast(
                      "primary",
                      "",
                      "Update Successfully",
                      "",
                      this.toastrService
                    ); (err) => {
                      this.Tostr.showToast(
                        "danger",
                        "",
                        err.statusText,
                        "",
                        this.toastrService
                      );
                    }
                   
                     
                    this.router.navigate(["/pages/marchandizer"]);
                    this.resetFormForOrderInfo();
                   // var itemDetailsObject = localStorage.getItem("itemDetailsObject");
                   // var itemDetailsJsonParseObject = JSON.parse(itemDetailsObject);
          
                    
                  
                    
                 
                
              });


            }
             
            }
            else{
              let orderAutoID=this.fetchInitialOrderService.orderInfo.orderAutoID;
             
             this.fetchInitialOrderService
             .updateInitialAllOrder(this.fetchInitialOrderService.orderInfo)
             .subscribe(
               (res) => {
 
                   this.itemDetailsArray.value.forEach((element) => {
                     element.order_entry_id = orderAutoID;
                     if(element.id!=0){
                     
                      this.itemDetailsOrderEntriesService
                        .updateItemDetailsOrderEntries(element)
                        .subscribe();
                    }else{
                      this.itemDetailsOrderEntriesService
                        .addItemDetailsOrderEntries(element)
                        .subscribe();
                    }
                   });

                 this.Tostr.showToast(
                  "primary",
                  "",
                  "Update Successfully",
                  "",
                  this.toastrService
                ); (err) => {
                  this.Tostr.showToast(
                    "danger",
                    "",
                    err.statusText,
                    "",
                    this.toastrService
                  );
                }
                this.router.navigate(["/pages/marchandizer"]);
                  this.resetFormForOrderInfo();
                // var itemDetailsObject = localStorage.getItem("itemDetailsObject");
                // var itemDetailsJsonParseObject = JSON.parse(itemDetailsObject);
       
                 
               
             
                 
              
             
           })
         }
       
    })
  
  }
  
  onAdd(orderAutoId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "90%";
    dialogConfig.height = "70%";
    dialogConfig.id=orderAutoId;

    this.dialog.open(ItemDetailsComponent, dialogConfig);
  }
  onLoadOrderOrJobSelectionFormComponent() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "90%";
    dialogConfig.height = "70%";

    this.dialog.open(OrderOrJobSelectionFormComponent, dialogConfig);
  }
  detectFilesForImageUrlFile(event) {
    this.selectedFilesForImage = event.target.files;
    this.orderImageUrlFile = this.selectedFilesForImage.item(0);
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.output_image = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  backTo(){
    this.router.navigate(["/pages/marchandizer"]); 
  }
}

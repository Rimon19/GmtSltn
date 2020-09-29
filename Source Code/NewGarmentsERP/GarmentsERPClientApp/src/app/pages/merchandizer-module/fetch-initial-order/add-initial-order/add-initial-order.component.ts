import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatDialogRef, MatDialogConfig, MatDialog } from "@angular/material";
import { NbDialogRef, NbToastrService } from "@nebular/theme";
import { InitorderData } from "../../../../@core/data/smart-table";
import { NgForm, FormArray, FormBuilder } from "@angular/forms";
import { SmartTableService } from "../../../../@core/mock/smart-table.service";
import { LocationService } from "../../../../@core/mock/location.service";
import { ItemsService } from "../../../../@core/mock/items.service";
import { ProductionDeptInfoesService } from "../../../../@core/mock/production-dept-infoes.service";
import { CompanyService } from "../../../../@core/mock/company.service";
import { company } from "../../../../@core/data/company";
import { location } from "../../../../@core/data/location";
import { buyer } from "../../../../@core/data/buyer";
import { ProductionDeptInfoes } from "../../../../@core/data/ProductionDeptInfoes";
import { CountryInfo } from "../../../../@core/data/country-info.model";
import { CountryService } from "../../../../@core/mock/country.service";
import { ShipmentModeInfoes } from "../../../../@core/data/marchanzider-model/shipment-mode-infoes.model";
import { ShipmentModeInfoesService } from "../../../../@core/mock/shipment-mode-infoes.service";
import { MarchandizerInfo } from "../../../../@core/data/marchanzider-model/marchandizer-info.model";
import { MarchandizerInfoService } from "../../../../@core/mock/marchandizer/marchandizer-info.service";
import { SeasonInfoes } from "../../../../@core/data/marchanzider-model/season-infoes.model";
import { SeasonInfoesService } from "../../../../@core/mock/marchandizer/season-infoes.service";
import { PackingInfoes } from "../../../../@core/data/marchanzider-model/packing-infoes.model";
import { PackingInfoesService } from "../../../../@core/mock/marchandizer/packing-infoes.service";
import { AgentInfoes } from "../../../../@core/data/marchanzider-model/agent-infoes.model";
import { AgentInfoesService } from "../../../../@core/mock/marchandizer/agent-infoes.service";
import { UserInfoes } from "../../../../@core/data/marchanzider-model/user-infoes.model";
import { SubDeptInfoes } from "../../../../@core/data/SubDeptInfoes";
import { UserInfoesService } from "../../../../@core/mock/marchandizer/user-infoes.service";
import { SubDeptInfoesService } from "../../../../@core/mock/marchandizer/sub-dept-infoes.service";
import { FetchInitialOrderService } from "../../../../@core/mock/fetch-initial-order.service";
import { Tostr } from "../../../../@core/data/tostr.model";
import { ItemDetailsComponent } from "../item-details/item-details.component";
import { ItemDetailsOrderEntriesService } from "../../../../@core/mock/marchandizer/item-details-order-entries.service";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BuyerProfile } from "../../../../@core/data/Library-Modul-model/buyer-profile";
import { BuyerProfileService } from "../../../../@core/mock/library/buyer-profile.service";
import { UserMappingService } from "../../../../@core/mock/user-mapping.service";
import { UserMapping } from "../../../../@core/data/user-mapping";
import { StaticFeaturesService } from "../../../../@core/mock/library/static-features.service";
import { UserService } from "../../../../@core/mock/users.service";
import { DatapassingService } from "../../../../@core/mock/shared/datapassing.service";
import { OrderOrJobSelectionFormComponent } from '../../order-or-job-selection-form/order-or-job-selection-form.component';
import { OrderInfo } from '../../../../@core/data/marchanzider-model/order-info.model';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { Subscription } from 'rxjs';
import { ErpImagesComponent } from '../../../Shared/erp-images/erp-images.component';
@Component({
  selector: "ngx-add-initial-order",
  templateUrl: "./add-initial-order.component.html",
  styleUrls: ["./add-initial-order.component.scss"],
})
export class AddInitialOrderComponent implements OnInit,OnDestroy {
  SMV: number = 0;
  Tostr = new Tostr();
  public userMapping: UserMapping[] = [];
  public orderinfo:OrderInfo[] = [];
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
  public userInfoesItems: UserInfoes[] = [];
  public subDeptInfoesItems: SubDeptInfoes[] = [];

  selectedFilesForImage: FileList;
  orderImageUrlFile: File;
  output_image;

  itemDetailsArray: any = this.fb.array([]);
  subscription:Subscription;

  constructor(
    private fb: FormBuilder,
    private userMappingService: UserMappingService,
    private companyService: CompanyService,
    private locationService: LocationService,
    private buyerService: BuyerProfileService,
    private staticFeaturesService: StaticFeaturesService,
    private productionDeptInfoesService: ProductionDeptInfoesService,
    private countryService: CountryService,
    private StaticFeaturesService: StaticFeaturesService,
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
    private dropdownValueService:DropdownValueService,
    private userService: UserService,
    private datapassingService: DatapassingService,
    private itemDetailsOrderEntriesService: ItemDetailsOrderEntriesService,
    private router: Router,
    
  ) {}
    ngOnDestroy(){
      this.subscription.unsubscribe();
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
    this.dropdownValueService.getBuyerWiseSeason(0);
    this.packingInfoesDDL();
    this.agentInfoesDDL();
    this.userInfoesDDL();
   
    this.factoryMerchantDDL();
    this.resetFormForOrderInfo();
    this.loadSmvValueFromItemDetails();
   
  this.subscription=this.datapassingService.subjectsourceItemsDetails.subscribe((data) => {
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
  onChangeUom(UomItem){
  localStorage.setItem('Uom',UomItem);
  }
  // seasonInfoesDDL() {
  //   this.seasonInfoesService.getAllSeasonInfoes().subscribe((data) => {
  //     this.seasonInfoesItems = data;
     
  //   });
  // }
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
      currencyID:2,
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
      agent_ID:0,
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
    // if(fetchInitialOrderService.orderInfo.agent_ID==){

    // }
    this.fetchInitialOrderService.getInitialAllOrderList().subscribe(data=>{
      this.orderinfo=data;
      let orderDetailsInfoByStyleRef=( this.fetchInitialOrderService.orderInfo.style_Ref) ?
      this.orderinfo.filter(p => p.style_Ref.toLowerCase()==
            this.fetchInitialOrderService.orderInfo.style_Ref.toLowerCase()):
            this.orderinfo; 

            if(orderDetailsInfoByStyleRef.length>=1){
              //styleref==userStyle&&season!=userSeason
              //save
           let orderInfoBystyleRefNSeason=this.orderinfo.filter(f=>f.style_Ref==this.fetchInitialOrderService.orderInfo.style_Ref&&
                f.season_ID==this.fetchInitialOrderService.orderInfo.season_ID);

            if(orderInfoBystyleRefNSeason.length>=1) {
              this.Tostr.showToast('danger','', 'Style Ref Duplicate not Allow !', '',this.toastrService);
               }  else{
                 
                this.fetchInitialOrderService
                .addInitialAllOrderList(this.fetchInitialOrderService.orderInfo)
                .subscribe(
                  (res) => {
                   
                    this.itemDetailsArray.value.forEach(element => {
                             element.order_entry_id = res.orderAutoID;
                          
                          this.itemDetailsOrderEntriesService
                            .addItemDetailsOrderEntries(element)
                            .subscribe();
                   
                      this.resetFormForOrderInfo();
                     });
                     this.Tostr.showToast(
                      "primary",
                      "",
                      "Save Successfully",
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
        
              });


            }
             
            }
            else{
             
             this.fetchInitialOrderService
             .addInitialAllOrderList(this.fetchInitialOrderService.orderInfo)
             .subscribe(
               (res) => {

                this.itemDetailsArray.value.forEach(element => {
               element.order_entry_id = res.orderAutoID;
                  
                    this.itemDetailsOrderEntriesService
                      .addItemDetailsOrderEntries(element)
                      .subscribe();           
                });
                this.Tostr.showToast(
                  "primary",
                  "",
                  "Save Successfully",
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
             
             
           })
         }
       
    })
  
  }
  
  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "90%";
    dialogConfig.height = "70%";

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
  onChangeBuyer(buyerId){
    this.dropdownValueService.getBuyerWiseSeason(buyerId);
  }
  backTo(){
    this.router.navigate(["/pages/marchandizer"]); 
  }

  onAddImage(){
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
}

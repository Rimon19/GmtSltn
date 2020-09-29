import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, Validators, NgForm } from "@angular/forms";
import {
  MatSort,
  MatPaginator,
  MatTableDataSource,
  Sort,
} from "@angular/material";

import {

  NbToastrService,
  NbDateService,
} from "@nebular/theme";
import { company } from "../../../../@core/data/company";
import { CompanyService } from "../../../../@core/mock/company.service";
import {Subscription } from "rxjs";
import { FetchInitialOrderService } from "../../../../@core/mock/fetch-initial-order.service";
import { OrderInfo } from "../../../../@core/data/marchanzider-model/order-info.model";
import { MarchandizerInfo } from "../../../../@core/data/marchanzider-model/marchandizer-info.model";
import { Tostr } from "../../../../@core/data/tostr.model";
import { MatDialogService } from "../../../../@core/mock/mat-dialog.service";
import { location } from "../../../../@core/data/location";
import { ProductionDeptInfoesService } from "../../../../@core/mock/production-dept-infoes.service";
import { ProductionDeptInfoes } from "../../../../@core/data/ProductionDeptInfoes";
import { CountryInfo } from "../../../../@core/data/country-info.model";
import { Currency } from "../../../../@core/data/marchanzider-model/currency.model";
import { ShipmentModeInfoes } from "../../../../@core/data/marchanzider-model/shipment-mode-infoes.model";
import { PackingInfoes } from "../../../../@core/data/marchanzider-model/packing-infoes.model";
import { SeasonInfoes } from "../../../../@core/data/marchanzider-model/season-infoes.model";
import { AgentInfoes } from "../../../../@core/data/marchanzider-model/agent-infoes.model";
import { UserInfoes } from "../../../../@core/data/marchanzider-model/user-infoes.model";
import { SubDeptInfoes } from "../../../../@core/data/SubDeptInfoes";
import { MasterPodetailsInfroes } from "../../../../@core/data/marchanzider-model/master-podetails-infroes.model";
import { InputPannelPodetails } from "../../../../@core/data/marchanzider-model/input-pannel-podetails.model";
import { SizeWisePannelPodetailsService } from "../../../../@core/mock/marchandizer/size-wise-pannel-podetails.service";
import { SizeWisePannelPodetails } from "../../../../@core/data/marchanzider-model/size-wise-pannel-podetails.model";
import { OrderItems } from "../../../../@core/data/marchanzider-model/order-items.model";
import { ItemDetailsOrderEntries } from "../../../../@core/data/marchanzider-model/item-details-order-entries.model";
import { Router } from "@angular/router";
import { BuyerProfileService } from "../../../../@core/mock/library/buyer-profile.service";
import { BuyerProfile } from "../../../../@core/data/Library-Modul-model/buyer-profile";
import { UserMapping } from "../../../../@core/data/user-mapping";
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
@Component({
  selector: "ngx-show-initial-order",
  templateUrl: "./show-initial-order.component.html",
  styleUrls: ["./show-initial-order.component.scss"],
})
export class ShowInitialOrderComponent implements OnInit {
  animalControl = new FormControl("", [Validators.required]);
  @ViewChild("InitialOrderMatSort", { static: true }) InitialOrdersort: MatSort;

  @ViewChild("InitialOrderMatPaginator", { static: true })
  InitialOrderpaginator: MatPaginator;
  @ViewChild("testForm", { static: true }) testForm: NgForm;

  dataSource = new MatTableDataSource();
  displayedColumns = [
    "Action",
    "jobNo",
    "companyID",
    "locationID",
    "buyerID",
    "style_Ref",
    "prod_DeptID",
    "product_CatID",
    "team_Leader_ID",
    "dealing_Merchant_ID",
    "order_Uom_ID",
    "smv",
    "packing_ID",
  ];
  
 
  orderInfo: OrderInfo[];
  poDetailsInfo: MasterPodetailsInfroes[];
  inputPannelInfo: InputPannelPodetails[];
  sizeWisePannelInfo: SizeWisePannelPodetails[];
  itemDetailsOrderEntriesInfo: ItemDetailsOrderEntries[];
  public companyListItems: company[] = [];
  public userMapping: UserMapping[] = [];
  public locationListItems: location[] = [];
  public buyerListItems: BuyerProfile[] = [];
  public teamLeaderItems: any[] = [];
  public ProductionDeptInfoesListItems: ProductionDeptInfoes[] = [];
  public countryList: CountryInfo[] = [];
  public shipmentModeInfoesItems: ShipmentModeInfoes[] = [];
  public itemsListItems: OrderItems[] = [];
  public currencyList: Currency[] = [];
  public productCategoryItems: any[] = [];
  public MarchandizerInfoItems: MarchandizerInfo[] = [];
  public orderUomInfoItems: any[] = [];
  public seasonInfoesItems: SeasonInfoes[] = [];
  public packingInfoesItems: PackingInfoes[] = [];
  public agentInfoesItems: AgentInfoes[] = [];
  public userInfoesItems: UserInfoes[] = [];
  public subDeptInfoesItems: SubDeptInfoes[] = [];
  public PoStatusItems: any[] = [];
  public JobNumberItems: OrderInfo[] = [];
  public PoNumberItems: MasterPodetailsInfroes[] = [];
  public SizeWisePannelPodetailsItems: SizeWisePannelPodetails[] = [];
  Tostr = new Tostr();
  subscription: Subscription;
  IsorderAutoIdHas: boolean;
  isHideOrShowPoDetailsInfos: boolean;
  isHideOrShowCountryInfos: boolean;
  isHideOrShowSizeWiseBreakDownInfos: boolean;
  isItemDetailsOrderAutoIdHas: boolean;
  constructor(
   
    private fetchInitialOrderService: FetchInitialOrderService,
    private toastrService: NbToastrService,  
    private sizeWisePannelPodetailsService: SizeWisePannelPodetailsService,
    private mathdialogService: MatDialogService,
    private companyService: CompanyService,
    private dropdownValueService:DropdownValueService,
    private buyerService: BuyerProfileService,
    private datapassingService:DatapassingService,
    protected dateService: NbDateService<Date>,
    private router: Router
  ) {
    
    this.dropdownValueService.getCompany();
    this.dropdownValueService.getBuyers();
    this.dropdownValueService.getCurrency();
    this.dropdownValueService.getLocation();
    this.dropdownValueService.getProductionDeptInfoes();
    this.dropdownValueService.getProductCategory();
    this.dropdownValueService.getUom();
    this.dropdownValueService.getPackingInfoes();
    this.dropdownValueService.getTeamleaders();
    this.dropdownValueService.getDealingMerchant();
    this.dropdownValueService.getUsers();
  }
  ngOnInit() {

   


    this.companyService.getAllCompany().subscribe((data) => {
      this.companyListItems=data;
    });
    this.buyerService.getAll().subscribe((data) => {
      this.buyerListItems=data;
    });
    this.getOrderInitialInfoList();
    

    this.dataSource.sort = this.InitialOrdersort;

    const sortState: Sort = {active: 'jobNo', direction: 'desc'};
    this.InitialOrdersort.active = sortState.active;
    this.InitialOrdersort.direction = sortState.direction;
  // this.InitialOrdersort.sortChange.emit(sortState);
   // this.getOrderInitialInfoList(); 
    this.StatusDDL();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  //SizeWiseInputPannel DDL
  StatusDDL() {
    this.sizeWisePannelPodetailsService
      .getAllSizeWisePannelPodetails()
      .subscribe((data) => {
        this.SizeWisePannelPodetailsItems = data;
       
      });
  }
  applyFilterForInitialOrder(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  //not delete
  AddNewInpurRow() {
    this.router.navigate(["/pages/add-initial-order"]);
  }
  //not delete
  edit(element){
    this.router.navigate(["/pages/edit-initial-order/",element.orderAutoID]);  
  }
  //not delete
  deleteOrderInitialInfoList(element) {

    this.mathdialogService
      .openConfirmDialog("Are you sure to delete this record ?")
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.fetchInitialOrderService
            .deleteInitialAllOrder(element)
            .subscribe(
              (res) => {
                this.getOrderInitialInfoList();
                this.Tostr.showToast(
                  "primary",
                  "",
                  "Deleleted",
                  "Successfully",
                  this.toastrService
                );
              },
              (err) => {
                this.Tostr.showToast(
                  "danger",
                  "",
                 "Please Delete Child fast",
                  "",
                  this.toastrService
                );
              }
            );
        }
      });
  }
   //not delete
  orderInfoDetails(orderAutoID) {
   
    localStorage.setItem("oderAutoId", orderAutoID);
    this.datapassingService.recieveOrderAutoId.next({orderId:orderAutoID});
    this.router.navigate(["/pages/show-po-information/",orderAutoID]);  
    // if (orderAutoID != "" && orderAutoID != undefined && orderAutoID != 0) {
    //   //   this.IsorderAutoIdHas=true;
    //   this.isHideOrShowPoDetailsInfos = true;
    //   this.isHideOrShowCountryInfos = false;
    //   this.isHideOrShowSizeWiseBreakDownInfos = false;

    //   this.isItemDetailsOrderAutoIdHas = false;
    //   this.refresPODetailsInfoList(orderAutoID);
    //   this.refresInputPannel(orderAutoID);
    // } else {
    //   this.IsorderAutoIdHas = false;
    // }
  }

  //not delete
  getOrderInitialInfoList() {
    this.subscription = this.fetchInitialOrderService
      .getInitialAllOrderList()
      .subscribe((data) => {
     
       
        this.orderInfo = data;
      

        data.forEach((res) =>{
          //Get company name from company table and then assaign to companyID
            if(res.companyID!=0){
              let company_Name=this.dropdownValueService.companyList
              .find(f=>f.compID==res.companyID) && this.dropdownValueService.companyList
              .find(f=>f.compID==res.companyID).company_Name;
             
              res.companyID=company_Name;
              }else{
                res.companyID='';
              } 

          //Get location name from loaction table and then assaign to locationId 
          if(res.locationID!=0){
            let locationName=this.dropdownValueService.locationList
            .find(f=>f.locationId==res.locationID).location_Name;
            res.locationID=locationName;
            }else{
              res.locationID='';
            } 
          //Get buyer name from buyer table and then assaign to buyerID 
          if(res.buyerID!=0){
            let contactName=this.dropdownValueService.buyerList
            .find(f=>f.id==res.buyerID) && this.dropdownValueService.buyerList
            .find(f=>f.id==res.buyerID).contactName;
            res.buyerID=contactName;
            }else{
              res.buyerID='';
            } 
          //Get ProductionDept name from ProductionDeptInfoes table and then assaign to prod_DeptID
            if(res.prod_DeptID!=0){
              let ProductionDeptName =this.dropdownValueService.ProductionDeptInfoesListItems.find(
                (f) => f.id==res.prod_DeptID
              ).prodDeptName;
              res.prod_DeptID = ProductionDeptName;
              } else{
                res.prod_DeptID='';
              }
          //Get productCategory Name  from productCategory table and then assaign to product_CatID
            if(res.product_CatID!=0){
              let productCategoryName = this.dropdownValueService.productCategoryList.find(
                (f) => f.id == res.product_CatID
              ) && this.dropdownValueService.productCategoryList.find(
                (f) => f.id == res.product_CatID
              ).productCategoryName;
              res.product_CatID = productCategoryName;
              } else{
                res.product_CatID='';
              }
          //Get teamLeader Name  from EmpAdditionalDesignation&UserInfo&UserMapping table and then assaign to team_Leader_ID
          if(res.team_Leader_ID!=0 ){
            
            let teamLeader=this.dropdownValueService.teamleaderList.find(f=>f.id==res.team_Leader_ID)&& this.dropdownValueService.teamleaderList.find(f=>f.id==res.team_Leader_ID).userId;
            res.team_Leader_ID=  this.dropdownValueService.userList.find(f=>f.userID==teamLeader) && this.dropdownValueService.userList.find(f=>f.userID==teamLeader).fullName;
           }else{
            res.team_Leader_ID='';
          } 

          //Get DelingmarchandName Name  from EmpAdditionalDesignation&UserInfo&UserMapping table and then assaign to team_Leader_ID
          if(res.dealing_Merchant_ID!=0){
            let dealingMerchant=this.dropdownValueService.dealiningMarchandList.find(f=>f.id==res.dealing_Merchant_ID) && this.dropdownValueService.dealiningMarchandList.find(f=>f.id==res.dealing_Merchant_ID).userId;
            res.dealing_Merchant_ID=this.dropdownValueService.userList.find(f=>f.userID==dealingMerchant) && this.dropdownValueService.userList.find(f=>f.userID==dealingMerchant).fullName;
            }else{
              res.dealing_Merchant_ID='';
            } 

          //Get OrderUomName   from orderUomInfo table and then assaign to order_Uom_ID
          if(res.order_Uom_ID!=0){
            let OrderUomName =this.dropdownValueService.uomList.find(
              (f) => f.id == res.order_Uom_ID
            ) && this.dropdownValueService.uomList.find(
              (f) => f.id == res.order_Uom_ID
            ).uomName;
            res.order_Uom_ID = OrderUomName;
            } else{
              res.order_Uom_ID='';
            }
          //Get packing Name   from packingInfoes table and then assaign to packing_ID
          if(res.packing_ID!=0){
            let packingName = this.dropdownValueService.packingInfoesItemsList.find(
              (f) => f.packingID == res.packing_ID
            ).packing_Name;
            res.packing_ID = packingName;
            } else{
              res.packing_ID='';
            }

        });

        this.dataSource = new MatTableDataSource(this.orderInfo);
        this.dataSource.sort = this.InitialOrdersort;
        this.dataSource.paginator = this.InitialOrderpaginator;

      
      });
  }
 

}

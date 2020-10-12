import { Component, OnInit, ViewChild } from '@angular/core';
import { PrecostingService } from '../../../../@core/mock/marchandizer/precosting.service';
import { PreCosting } from '../../../../@core/data/marchanzider-model/pre-costing.model';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { FetchInitialOrderService } from '../../../../@core/mock/fetch-initial-order.service';
import { OrderInfo } from '../../../../@core/data/marchanzider-model/order-info.model';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { FabricCostService } from '../../../../@core/mock/marchandizer/fabric-cost.service';
import { TrimCostService } from '../../../../@core/mock/marchandizer/trim-cost.service';
import { EmbelishmentCostService } from '../../../../@core/mock/marchandizer/embelishment-cost.service';
import { WashCostService } from '../../../../@core/mock/marchandizer/wash-cost.service';
import { CommercialCostService } from '../../../../@core/mock/marchandizer/commercial-cost.service';
import { CommissionCostService } from '../../../../@core/mock/marchandizer/commission-cost.service';
import { YarnCostService } from '../../../../@core/mock/marchandizer/yarn-cost.service';
import { ConversionCostService } from '../../../../@core/mock/marchandizer/conversion-cost.service';
import { FabricCost } from '../../../../@core/data/marchanzider-model/fabric-cost.model';
import { YarnCost } from '../../../../@core/data/marchanzider-model/yarn-cost.model';
import { ConversionCost } from '../../../../@core/data/marchanzider-model/conversion-cost.model';
import { BodyPartService } from '../../../../@core/mock/marchandizer/body-part.service';
import { YarnCountsService } from '../../../../@core/mock/marchandizer/yarn-counts.service';
import { YarnComp1Service } from '../../../../@core/mock/marchandizer/yarn-comp1.service';
import { YarnTypesService } from '../../../../@core/mock/marchandizer/yarn-types.service';
import { OtherCostService } from '../../../../@core/mock/marchandizer/other-cost.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { CostComponentsMasterService } from '../../../../@core/mock/marchandizer/cost-components-master.service';

import { MasterPodetailsInfroesService } from '../../../../@core/mock/marchandizer/master-podetails-infroes.service';
import { MasterPodetailsInfroes } from '../../../../@core/data/marchanzider-model/master-podetails-infroes.model';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { SupplierProfileService } from '../../../../@core/mock/library/supplier-profile.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { ConversionCostForPreCosts } from '../../../../@core/data/marchanzider-model/conversion-cost-for-pre-costs';
import { YarnCountDeterminationChild } from '../../../../@core/data/Library-Modul-model/yarn-count-determination-child';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { ConversionCostForPreCostsService } from '../../../../@core/mock/marchandizer/conversion-cost-for-pre-costs.service';
import { FabricDesPreCostService } from '../../../../@core/mock/marchandizer/fabric-des-pre-cost.service';
import { YarnCountDeterminationChildService } from '../../../../@core/mock/library/yarn-count-determination-child.service';
import { AddConsumptionComponent } from '../add-consumption/add-consumption.component';
import { StripeColorDetailsComponent } from '../../stripe-color-details/stripe-color-details.component';
import { FabricDescriptionComponent } from '../../fabric-description/fabric-description.component';
import { TrimCostsService } from '../../../../@core/mock/marchandizer/trim-costs.service';
import { TrimCosts } from '../../../../@core/data/marchanzider-model/trim-costs';
import { WashCost } from '../../../../@core/data/marchanzider-model/wash-cost.model';
import { CommercialCost } from '../../../../@core/data/marchanzider-model/commercial-cost.model';
import { AddConsumptionForTrimCostComponent } from '../add-consumption-for-trim-cost/add-consumption-for-trim-cost.component';
import { AddConsumptionForEmbelCostComponent } from '../add-consumption-for-embel-cost/add-consumption-for-embel-cost.component';

@Component({
  selector: 'ngx-show-pre-coasting',
  templateUrl: './show-pre-coasting.component.html',
  styleUrls: ['./show-pre-coasting.component.scss']
})
export class ShowPreCoastingComponent implements OnInit {
 //add costing property
 PoNoId: any=0;
 PoNoList = [];
 precostingId;


 public totalConsQnty = 0;
 public totalAmount = 0;

 Tostr = new Tostr();

 public yarnCostList: YarnCost[] = [];
 public conversionCostList: ConversionCostForPreCosts[] = [];
 public TrimsCostsList:TrimCosts[];
 public GmtsWashCostList:WashCost[];
 public commercialCostsList:CommercialCost[];
 public yarnCountDeterminationMasterList: YarnCountDeterminationChild[] = [];

isShowFabricCost=false;
isShowYarncost=false;
isShowConversionCost=false;
isShowTrimCost=false;
isShowEmbelishmentCost=false;
isShowWashCost=false;
isShowCommercialCost=false;
isShowCommisionCost=false;

  //precosting property
  @ViewChild('sort', {static: true}) sort: MatSort;
  @ViewChild('MatPaginator', {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();

  bodyPartList:any;

  displayedColumns=
   [
   'actions',
   'orderId',
   'costingDate',
   'incoterm',
   'incotermPlace',
   'sewEfficiency',
   'jobQty',
   'sewSMV',
   'cutSMV',
   'remark',
  ];
  
 
   /*Commercial Cost button Start*/
   commercialItem: any = [
    { btn: 'Lc Cost', val: 'Lc Cost' },
    { btn: 'Port & Clearing', val: 'Port & Clearing' },
    { btn: 'Transpotation', val: 'Transpotation' },
    { btn: 'All to Gether', val: 'All to Gether' }
  ]
  commnBase: any = [
    { btn: 'In Percentage', val: 'In Percentage' },
    { btn: 'Per Pcs', val: 'Per Pcs' },
    { btn: 'Per Dzn', val: 'Per Dzn' }
  ]
precostings:PreCosting[];
OrderInfo:OrderInfo[];
subscription:Subscription;

//load dropdwn property
YarnCountInfo:any[];
YarnComp1Info:any[];
YarnTypesInfo:any[];
SupliersInfo:any[];
status: any = [
  { btn: 'Active', val: 'Active' },
  { btn: 'InActive', val: 'InActive' },
  { btn: 'Cancelled', val: 'Cancelled' }
];

costComponentMasterInfo:any[]=[];

costComponentForm: FormArray = this.fb.array([]);
public PobNumberItems:MasterPodetailsInfroes[] = [];
poId:number=0;
JobNoId:number=0;
poNodropdownList = [];
poNoselectedItems = [];
poNodropdownSettings:IDropdownSettings;

arrayIndex;
  constructor(private precostingService:PrecostingService,
   private fetchInitialOrderService: FetchInitialOrderService,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
   private yarnCountService:YarnCountsService,
   private yarnComp1Service:YarnComp1Service,
   private yarnTypesService:YarnTypesService,
   private router:Router,
   private CostComponentsMasterService:CostComponentsMasterService,
   private fb: FormBuilder,
   private MasterPodetailsInfroesService:MasterPodetailsInfroesService,
   private dropdownValueService:DropdownValueService,
   private trimCostsService: TrimCostsService,
   private commercialCostsService:CommercialCostService,
   private commissionCostService:CommissionCostService,
 //addcosting property

 private dialog: MatDialog,
 private route: ActivatedRoute,
 private yarnCostService: YarnCostService,
 private staticFeaturesService: StaticFeaturesService,
 private conversionCostForPreCostsService: ConversionCostForPreCostsService,
 private dateResizeService: DateResizeService,
 private fabricDesPreCostService: FabricDesPreCostService,
 public fabricCostService: FabricCostService,
 private yarnCountDeterminationChildService: YarnCountDeterminationChildService,
 private embelishmentCostService:EmbelishmentCostService,
 private WashCostService:WashCostService
   ) {
  
   //add costing
  // this.PoNoId = this.route.snapshot.paramMap.get("poNoId");
  // var precostingId = parseInt(localStorage.getItem("PreCostingId"));
   //this.precostingId = precostingId;
  
 //precosting
     this.dropdownValueService.getInitialOrder();
  

     this.fetchInitialOrderService.getInitialAllOrderList().subscribe(data=>{
      this.OrderInfo=data;     
     });
    
    
 
      this.yarnCountService.getAllYarnCount().subscribe(data=>{
      this.YarnCountInfo=data;
     
      });
 
      this.yarnComp1Service.getAllYarnComp1().subscribe(data=>{
        this.YarnComp1Info=data;
      });
      
      this.yarnTypesService.getAllYarnTypes().subscribe(data=>{
       this.YarnTypesInfo=data;
      
      });
 
   
 
 
     this.dropdownValueService.getPrecosting();
      this.refresList();
     
    }

  ngOnInit() {

 
   // var CostComponentFormAndIndex = JSON.parse(localStorage.getItem("CostComponentFormAndIndex"));
 
  //   if(CostComponentFormAndIndex!=null){
  //     //var budgetedCost = JSON.parse(localStorage.getItem("budgetedCost"));
  //     var budgetedCost = parseFloat(localStorage.getItem("budgetedCost"));
  //     //after visiting other page and edit mode data load here
  //     var poNoselectedItems = JSON.parse(localStorage.getItem("poNoselectedItems"));
  //     this.poNoselectedItems=poNoselectedItems;

  //     this.poNodropdownSettings= {
  //       singleSelection: false,
  //       idField: 'poDetID',
  //       textField: 'pO_No',
  //       selectAllText: 'Select All',
  //       unSelectAllText: 'UnSelect All',
  //       itemsShowLimit: 4,
  //       allowSearchFilter: true
  //     };

    
  //     CostComponentFormAndIndex.costComponentform[CostComponentFormAndIndex.index].budgetedCost=budgetedCost;
 
  //    this.onLoadCostComponentFormWithData( CostComponentFormAndIndex.costComponentform);
  // }else{
     this.refreshCostComponentList();
  // }
 
  
//add costing
 //load DDL
 this.dropdownValueService.getGarmentsItem();
 this.dropdownValueService.getYarnCount();
 this.dropdownValueService.getYarnComp1DDL();
 this.dropdownValueService.gettypeDDL();
 this.dropdownValueService.getSuppliers();
 this.dropdownValueService.getBodyPartType();
 this.dropdownValueService.getFabricNature();
 this.dropdownValueService.getColorType();
 this.dropdownValueService.getFabricDescription();
 this.dropdownValueService.getColor();
 this.dropdownValueService.getBodyPart();
 this.dropdownValueService.getAllProductionProcess();
  
 this.dropdownValueService.getRegion();
 this.dropdownValueService.getItemGroup();
 this.dropdownValueService.getUom();

 this.dropdownValueService.getEmbellishmentType();



 this.fabricDesLoadFromModal();

 this.dateResizeService.sourceConsumptionObj.subscribe((data) => {
   console.log(data);
   //data holds average grey cons  and index which come from consumption entry form
   //initial value of data is 0
   //after visiting consumption entry page data hold object value that's why its goes to else part

   if (data != 0) {
     
   
     this.fabricCostService.fabricCostInformationForm.value[data.index].avgGreyCons =
       data.averageGreyCons;
     this.fabricCostService.fabricCostInformationForm.value[data.index].rate = data.rate;
     this.fabricCostService.fabricCostInformationForm.value[data.index].amount = data.amount;
     this.fabricCostService.fabricCostInformationForm.value[data.index].totalQty =
       data.totalQty;
     this.fabricCostService.fabricCostInformationForm.value[data.index].totalAmount =
       data.totalAmount;

     let fabricCostFormValues = this.fabricCostService.fabricCostInformationForm.value;

   this.fabricCostService.loadFabricCostFormWithData(fabricCostFormValues);
   }
 });
  
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    }
  

 

   
     
  
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }
   
    addnewPreCostingInputform(){
      this.router.navigate(['/pages/add-precosting']);
    }
      //precosting crud
      save(element){
     
        this.precostingService.addPrecosting(element).subscribe(data=>{
        
          this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
          this.refresList();
        },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
    
      }
    
      redirectToEditPage(element){
        this.router.navigate(["pages/add-precosting/",element.precostingId]);

      }
    
      onDeletePrecosting(element){
        this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
                   .afterClosed().subscribe(res=>{
                    if(res){
                      this.precostingService.deletePrecosting(element.precostingId).subscribe(res=>{
                        this.refresList();
                        this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                    }
                   })
      }
    
      refresList(){
        this.subscription=this.precostingService.getAllPrecosting().subscribe(data=>{
          this.precostings=data;
          
  
        this.precostings.forEach(elm => {
          if(elm.orderId>=0){
            let  jobNo= this.dropdownValueService.initialOrderList.find(f=>f.orderAutoID==elm.orderId) && this.dropdownValueService.initialOrderList.find(f=>f.orderAutoID==elm.orderId).jobNo;
            elm.orderId=jobNo;
          }else{
            elm.orderId='';
          }
          });
        this.dropdownValueService.initialOrderList
          this.dataSource=new MatTableDataSource(this.precostings);     
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
     
        })
       
      }
  
     onLoadCostComponentFormWithData(costComponentMasterDetailsInfoByPreCostingId){
      this.costComponentForm = this.fb.array([]);
      costComponentMasterDetailsInfoByPreCostingId.forEach(itmDts => {
          this.costComponentForm.push(this.fb.group({
            id:itmDts.id,
            costComponetId:itmDts.costComponetId,
            costComponentName:itmDts.costComponentName,
            budgetedCost: itmDts.budgetedCost,
            qPrice:itmDts.qPrice,
            preCostingId:itmDts.preCostingId
          }));
       
    });
     
     }
     
      submitCostComponent(costComponentForm){
      
        // if(this.poId==undefined||this.poId==0){
        //   this.Tostr.showToast("danger","", "Please Select Po No !", "",this.toastrService);
        //   return;
        // }
       // var precostingId = parseInt(localStorage.getItem("PreCostingId"));
        costComponentForm.value.forEach(element => {
          element.preCostingId=this.precostingId ;
          if(element.id!=0){
            this.CostComponentsMasterService.update(element).subscribe(data=>{
            });
          }
          if(element.id==0){
            this.CostComponentsMasterService.add(element).subscribe(data=>{           
            });
          }
          
        });
        localStorage.removeItem('CostComponentFormAndIndex');
        this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
        //refresh code below
        this.poId=0;
       this.refreshCostComponentList();
      }
      deletCostComponent(costComponentForm){
      
        if(this.poNoselectedItems.length<1){
          this.Tostr.showToast("danger","", "Please Select Job No !", "",this.toastrService);
          return;
        }
          this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
          .afterClosed().subscribe(res=>{
           if(res){
            costComponentForm.value.forEach(element => {
              this.CostComponentsMasterService.delete(element.id).subscribe(res=>{
              
               
              },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
             });
             this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
            
             this.poNoselectedItems=[];
             this.refreshCostComponentList();
          
            }
          })
       
      }
      refreshCostComponentList(){
        this.CostComponentsMasterService.getAllCostComponentsMaster().subscribe(data=>{
          this.costComponentMasterInfo=data;
         
          this.costComponentForm = this.fb.array([]);
          this.costComponentMasterInfo.forEach(element => {
            this.costComponentForm.push(this.fb.group({
              id:0,
              costComponetId:element.id,
              costComponentName:element.cost_ComponetName,
              budgetedCost: 0,
              qPrice: 0,
              preCostingId:0
            }));
          });
      });

      this.poNodropdownSettings= {
        singleSelection: false,
        idField: 'poDetID',
        textField: 'pO_No',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 4,
        allowSearchFilter: true
      };
      
      }
      addCostMultipleRow(i){
        console.log(this.poNodropdownList);
      // this.datapassingService.setValue(this.poNoselectedItems);
      //localStorage.setItem("poList", JSON.stringify(this.poNoselectedItems));
        if(this.poNoselectedItems.length<1){
          this.Tostr.showToast("danger","", "Please Select Job No !", "",this.toastrService);
          return;
        }
        if(i==0){
         //   localStorage.setItem("CostComponentFormAndIndex", JSON.stringify({index:i,costComponentform: this.costComponentForm.value}));
             // this.dateResizeService.preCostingSource.next({index:i,costComponentform: this.costComponentForm.value});
             this.isShowFabricCost=true;
             this.isShowYarncost=true;
             this.isShowConversionCost=true;

             this.isShowTrimCost=false;
             this.isShowEmbelishmentCost=false;
            this. isShowWashCost=false;
            this. isShowCommercialCost=false;
           this.isShowCommisionCost=false;
             this.initialFabricCost();
             this.editModeForYarnCost();
             this.editModeForConversion();
             console.log(this.fabricCostService.fabricCostInformationForm.value);
             this.conversionCostForPreCostsService.loadFabricDescriptionValues(this.fabricCostService.fabricCostInformationForm.value);
            //  this.router.navigate(['/pages/add-cost',0]);       
            }
            if(i==1){
              this.isShowFabricCost=false;
             this.isShowYarncost=false;
             this.isShowConversionCost=false;

             this.isShowTrimCost=true;
             this.isShowEmbelishmentCost=false;
             this.isShowWashCost=false;
             this.isShowCommercialCost=false;
             this.isShowCommisionCost=false;
             // localStorage.setItem("CostComponentFormAndIndex", JSON.stringify({index:i,costComponentform: this.costComponentForm.value}));
             this.loadeditModeDataFortrimCost();
             // this.router.navigate(['/pages/trim-cost',0]);      
            }
            if(i==2){
              this.isShowFabricCost=false;
             this.isShowYarncost=false;
             this.isShowConversionCost=false;

             this.isShowTrimCost=false;
             this.isShowEmbelishmentCost=true;
             this.isShowWashCost=false;
             this.isShowCommercialCost=false;
             this.isShowCommisionCost=false;
              this.loadEmblishmentEditModeData();

            //  localStorage.setItem("CostComponentFormAndIndex", JSON.stringify({index:i,costComponentform: this.costComponentForm.value}));
            //  this.router.navigate(['/pages/embel-cost',0]);    
            }
            if(i==3){
              this.isShowFabricCost=false;
              this.isShowYarncost=false;
              this.isShowConversionCost=false;
 
              this.isShowTrimCost=false;
              this.isShowEmbelishmentCost=false;
              this.isShowWashCost=true;
              this.isShowCommercialCost=false;
              this.isShowCommisionCost=false;
              this.editModeDataLoadForWashCost();
            }
            if(i==4){
              this.isShowFabricCost=false;
              this.isShowYarncost=false;
              this.isShowConversionCost=false;
 
              this.isShowTrimCost=false;
              this.isShowEmbelishmentCost=false;
              this.isShowWashCost=false;
              this.isShowCommercialCost=true;
              this.isShowCommisionCost=false;
              this.editForCommercialCosts();
            }
            if(i==18){
              this.isShowFabricCost=false;
              this.isShowYarncost=false;
              this.isShowConversionCost=false;
 
              this.isShowTrimCost=false;
              this.isShowEmbelishmentCost=false;
              this.isShowWashCost=false;
              this.isShowCommercialCost=false;
              this.isShowCommisionCost=true;
              this.loadEditModeDataForCommisionCost();
              // localStorage.setItem("CostComponentFormAndIndex", JSON.stringify({index:i,costComponentform: this.costComponentForm.value}));
              // this.router.navigate(['/pages/commission-cost',0]); 
            }
       
       
        
       }

       onChangeAddCost(element){
        
        this.isShowFabricCost=false;
        this.isShowYarncost=false;
        this.isShowConversionCost=false;
        this.isShowTrimCost=false;
        this.isShowEmbelishmentCost=false;
        this.isShowWashCost=false;
        this.isShowCommercialCost=false;
        this.isShowCommisionCost=false;
         
        this.JobNoId=this.dropdownValueService.initialOrderList.find(f=>f.jobNo.toLowerCase()==element.orderId.toLowerCase()).orderAutoID;
        //localStorage.setItem('PreCostingjobNoId',this.JobNoId.toString());
        localStorage.setItem('PreCostingId',element.precostingId.toString());
       this.precostingId=element.precostingId;
     
    if(element.precostingId!=0)
    {
    this.precostingService.getAllPrecosting().subscribe(item=>{
      let items=  item.find(f=>f.precostingId==element.precostingId);
      
 
      if(items.poId!=""){
          this.MasterPodetailsInfroesService.getAllMasterPodetailsInfroes().subscribe(data=>{
               let poIds= items.poId.split(',');
         let array=[];
         poIds.forEach(ele => {
                 let obj= data.find(f=>f.poDetID==parseInt(ele));
                 
               array.push(obj);
                 
               });
               //this.poNodropdownList=array;
              this.poNoselectedItems=array;
              localStorage.setItem("poNoselectedItems", JSON.stringify(array));
              //var storedNames = JSON.parse(localStorage.getItem("poNoselectedItems"));
         });
      }
 
    
    
       });

      }



      if(element.precostingId!=0){
        this.CostComponentsMasterService.getAllCostComponentsMasterDetails().subscribe(data=>{
          data.sort((a, b) => parseInt(a.costComponetId) - parseInt(b.costComponetId));
        let costComponentMasterDetailsInfoByPreCostingId= data.filter(f=>f.preCostingId==element.precostingId);
        if(costComponentMasterDetailsInfoByPreCostingId.length!=0){
      
        this.onLoadCostComponentFormWithData(costComponentMasterDetailsInfoByPreCostingId)
      
        }else{
         this.refreshCostComponentList();
      
        }
        });
      }else{
       this.refreshCostComponentList();
    
      }

      this.fabricCostService.fabricCostInformationForm=this.fb.array([]);
      this.fabricCostService.count=0;
      
      this.yarnCostService.yarnCostInformationForm==this.fb.array([]);
      this.yarnCostService.count = 0;
      this.yarnCostService.totalConsQnty = 0;
      this.yarnCostService.totalAmount = 0;

      this.conversionCostForPreCostsService.conversionCostInformationForm=this.fb.array([]);
      this.conversionCostForPreCostsService.count=0;
      this.conversionCostForPreCostsService.totalProcessLoss = 0;
      this.conversionCostForPreCostsService.totalReqQty = 0;
      this.conversionCostForPreCostsService.totalAvgReqQty = 0;
      this.conversionCostForPreCostsService.totalAvgChargeOrUnit = 0;

      
    //   this.WashCostService.gmtsWashInformationForm = this.fb.array([]);
    //   this.WashCostService.count = 0;
    //   this.WashCostService.totalRateIn=0;
    //   this.WashCostService.totalAmount=0;

    //  this.commercialCostsService.commlCostInformationForm= this.fb.array([]);
    //  this.commercialCostsService.count=0;
    //  this.commercialCostsService.totalRateIn=0;
    //  this.commercialCostsService.totalAmount=0;

    
  }




  //add costing


  initialFabricCost(){
    console.log(this.precostingId);
    this.fabricCostService.fabricCostInformationForm= this.fb.array([]);
    this.fabricCostService.getAll().subscribe((data) => {
      var fabricCostList = data.filter(
        (f) => f.preCostingId == this.precostingId
      );
      if (fabricCostList.length > 0) {
       
        this.fabricCostService.loadFabricCostFormWithData(fabricCostList);
       
      } else {
        this.fabricCostService.fabricCostForm(this.precostingId);
      }
    });
  }

  fabricDesLoadFromModal() {
    this.dateResizeService.getFabricDesObj.subscribe((data) => {
      console.log(data);
      if (data != 0) {
        this.fabricCostService.fabricCostInformationForm.value[data.index].fabricDescription=
          data.fabricDescription;
        this.fabricCostService.fabricCostInformationForm.value[data.index].fabricDesPreCostId =
          data.id;
          let fabricCostFormValues = this.fabricCostService.fabricCostInformationForm.value;
        
  
      this.fabricCostService.loadFabricCostFormWithData(fabricCostFormValues);
      
      }
    });
  }

  fabricDescrptionModal(i) {
    console.log(i);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    dialogConfig.height = "70%";
    dialogConfig.minWidth = "360px";
    dialogConfig.minHeight = "360px";
    this.dateResizeService.source1.next(i);
    this.dialog.open(FabricDescriptionComponent, dialogConfig);
  }
  stripeColorDetailsModal(){
    const matDialogConfig=new MatDialogConfig();
     matDialogConfig.disableClose=true;
     matDialogConfig.autoFocus=true;
     matDialogConfig.width="80%";
     matDialogConfig.height="70%";
     this.dialog.open(StripeColorDetailsComponent,matDialogConfig);
  }

  onChangeYarnCountDeterminationMasterId(id) {
    localStorage.setItem("YarnCountDeterminationMasterId", id);
  }
  //load edit mode data for yarn rate
  editModeForYarnCost() {
    this.yarnCostService.yarnCostInformationForm = this.fb.array([]);
    this.yarnCostService.getAll().subscribe((data) => {
      console.log(data);
      
      this.yarnCostList = data;
      let yarnCostListByPoNoId = this.yarnCostList.filter(
        (f) => f.precostingId == this.precostingId
      );
      if (yarnCostListByPoNoId.length > 0) {
       console.log(yarnCostListByPoNoId);
        this.yarnCostService.loadYarnCostWithData(yarnCostListByPoNoId);
      } else {
        this.yarnCostService.yarnCostForm();
      }
    });
  }

  onDeleteForyarnCost(yarnCostInformationForm, j) {
    let idToBeDeleted = yarnCostInformationForm.value[j].id;
    if (idToBeDeleted <= 0) {
      this.yarnCostService.count = this.yarnCostService.count - 1;
      yarnCostInformationForm.value.splice(j, 1);
     this.yarnCostService.loadYarnCostWithData(yarnCostInformationForm.value);
    }

    if (idToBeDeleted > 0) {
      this.mathdialogService
        .openConfirmDialog("Are you sure to delete this record ?")
        .afterClosed()
        .subscribe((res) => {
          if (res) {
            this.yarnCostService.deleteWithOutSubcribe(idToBeDeleted).subscribe(
              (s) => {
                this.yarnCostService.count = this.yarnCostService.count - 1;
                yarnCostInformationForm.value.splice(j, 1);
              this.yarnCostService.loadYarnCostWithData(yarnCostInformationForm.value);
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
                  err.statusText,
                  "",
                  this.toastrService
                );
              }
            );
          }
        });
    }
  }
 
  onDeleteForConversionCost(conversionCostInformationForm, k) {
    let idToBeDeleted = conversionCostInformationForm.value[k].id;
    this.conversionCostForPreCostsService.count = this.conversionCostForPreCostsService.count - 1;
    console.log(idToBeDeleted);
    if (idToBeDeleted <= 0) {
      
      conversionCostInformationForm.value.splice(k, 1);
      this.conversionCostForPreCostsService.conversionCostInformationForm = this.fb.array([]);
      this.conversionCostForPreCostsService.loadConversionCostFormData(conversionCostInformationForm.value);
    }
    if (idToBeDeleted > 0) {
      this.mathdialogService
        .openConfirmDialog("Are you sure to delete this record ?")
        .afterClosed()
        .subscribe((res) => {
          if (res) {
            this.conversionCostForPreCostsService
              .deleteWithOutSubcribe(idToBeDeleted)
              .subscribe(
                (s) => {
                 
                  conversionCostInformationForm.value.splice(k, 1);
                  this.conversionCostForPreCostsService.conversionCostInformationForm = this.fb.array([]);
                this.conversionCostForPreCostsService.loadConversionCostFormData(conversionCostInformationForm.value);
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
                    err.statusText,
                    "",
                    this.toastrService
                  );
                }
              );
          }
        });
    }
  }
    //load edit mode data for conversion cost
    editModeForConversion() {
      this.conversionCostForPreCostsService.conversionCostInformationForm = this.fb.array([]);
      this.conversionCostForPreCostsService
        .getAll()
        .subscribe((data) => {
          console.log(data);
          this.conversionCostList = data;
          let conversionCostByPrecostingId = this.conversionCostList.filter(
            (f) => f.precostingId == this.precostingId
          );
          if (conversionCostByPrecostingId.length > 0) {
 
            //  this.conversionCostForPreCostsService.loadConversionCostFormData(conversionCostByPrecostingId);
              this.conversionCostForPreCostsService.totalCalculationForConversionCost(conversionCostByPrecostingId);
              this.conversionCostForPreCostsService.loadFabricDescriptionValues(this.fabricCostService.fabricCostInformationForm.value);
          } else {
            this.conversionCostForPreCostsService.conversionCostForm();
          }
        });
    }
  onAdd(i) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "90%";
    dialogConfig.height = "70%";
    dialogConfig.id = this.route.snapshot.paramMap.get("poNoId");
    //send to modal array index
    this.dateResizeService.source.next(i);

    this.dialog.open(AddConsumptionComponent, dialogConfig);
  }
  onAddTrimCost(i) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "90%";
    dialogConfig.height = "70%";
    dialogConfig.id = this.precostingId;
    this.arrayIndex=i;
    console.log('array index',this.arrayIndex);
    //send to modal array index
   // this.dateResizeService.source.next(i);

    this.dialog.open(AddConsumptionForTrimCostComponent, dialogConfig);
  }
  onAddEmbelishmentCost(i) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "90%";
    dialogConfig.height = "70%";
    dialogConfig.id = this.precostingId;
    this.arrayIndex=i;
    console.log('array index',this.arrayIndex);
    //send to modal array index
   // this.dateResizeService.source.next(i);

    this.dialog.open(AddConsumptionForEmbelCostComponent, dialogConfig);
  }
  onDelete(fabricCostInformationForm, i) {
    let idToBeDeleted = fabricCostInformationForm.value[i].id;

    if (idToBeDeleted == 0) {
      this.fabricCostService.count = this.fabricCostService.count - 1;
      fabricCostInformationForm.value.splice(i, 1);
    this.fabricCostService.loadFabricCostFormWithData(fabricCostInformationForm.value);
    }

    if (idToBeDeleted > 0) {
      this.mathdialogService
        .openConfirmDialog("Are you sure to delete this record ?")
        .afterClosed()
        .subscribe((res) => {
          if (res) {
            this.fabricCostService.deleteWithOutSubcribe(idToBeDeleted).subscribe(
              (s) => {
               
                fabricCostInformationForm.value.splice(i, 1);
                this.fabricCostService.loadFabricCostFormWithData(fabricCostInformationForm.value);

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
                  err.statusText,
                  "",
                  this.toastrService
                );
              }
            );
          }
        });
    }
  }
 
  totalCalculation(yarnCountsForm) {
    console.log(yarnCountsForm.value);
    this.totalConsQnty = 0;
    this.totalAmount = 0;
    yarnCountsForm.value.forEach((itemDts: any) => {
      this.totalConsQnty += parseFloat(itemDts.consQnty);
      this.totalAmount += parseFloat(itemDts.amount);
    });
  }

  recordSubmit() {
  
    console.log(this.yarnCostService.yarnCostInformationForm.value);
   this.yarnCostService.yarnCostInformationForm.value.forEach((element) => {
      element.precostingId = this.precostingId;

      if (element.id != 0) {
        this.yarnCostService.updateMultiline(element,element.id);
      }
      if (element.id == 0) {
        this.yarnCostService.createMultiline(element);
      }
    });

    this.Tostr.showToast(
      "primary",
      "",
      "Saved Successfully",
      "",
      this.toastrService
    );
  }

  recordSumitFabricCost() {
    

      //load yarn cost information by fabric description id .... 
 // this.yarnCountDeterminationService.getAll().subscribe(yarnData=>{
  this.yarnCountDeterminationChildService.getAll().subscribe(yarnChildData=>{
  //  this.staticFeaturesService.getAllType().subscribe((typeData) => {

     let newYarnCountDeterminationChildList=[];
   
     this.fabricCostService.fabricCostInformationForm.value.forEach(element => {
     
      let yarnCountDeterminationChildListByfabDescId=yarnChildData.filter(f=>f.yarnCountDeterminationMasterId==element.fabricDesPreCostId);
      yarnCountDeterminationChildListByfabDescId.map(option => {
        // New properties to be added
        const newPropsObj = {
          avgGreyCons:element.avgGreyCons,
          rate:0,// or element.rate,rate will be set in hand thats why it is 0 .
          amount:element.amount

        };
        // Assign new properties and return
        return Object.assign(option, newPropsObj);
      });
   
       newYarnCountDeterminationChildList.push(...yarnCountDeterminationChildListByfabDescId);
       
       this.yarnCostService.count=0;
       this.yarnCostService.yarnCostInformationForm = this.fb.array([]);
       newYarnCountDeterminationChildList.forEach((itemDts: any) => {
     //     let typeId=typeData.find(f=>f.typeName==itemDts.type)&&typeData.find(f=>f.typeName==itemDts.type).id;
           this.yarnCostService.count = this.yarnCostService.count + 1;
           this.yarnCostService.yarnCostInformationForm.push(
             this.fb.group({
               id: 0,
               countId:0,
               poId: itemDts.poId,
               comp1Id: itemDts.compositionId,
               percentage: itemDts.percentage,
               color: itemDts.color,
               typeId:0,
               consQnty: itemDts.avgGreyCons,
               supplierId: 0,
               rate: itemDts.rate,
               amount: itemDts.amount,
             })
           );
         });
       
 
   // });
  });
});
//});

this.fabricCostService.fabricCostInformationForm.value.forEach((element) => {
      element.precostingId = this.precostingId;
      element.suplierId = 0;
      if (element.id != 0) {
        this.fabricCostService.updateMultiline(element,element.id);
      }
      if (element.id == 0) {
        console.log(element.id);
        
        this.fabricCostService.createMultiline(element);
      }
    });
    this.Tostr.showToast(
      "primary",
      "",
      "Saved Successfully",
      "",
      this.toastrService
    );


    this.conversionCostForPreCostsService.loadFabricDescriptionValues(this.fabricCostService.fabricCostInformationForm.value);
  }

 
  recordSubmitConversionCost(conversionCostInformationForm) {
    console.log(conversionCostInformationForm.value);
    conversionCostInformationForm.value.forEach((element) => {
      element.precostingId=this.precostingId;
      if (element.id != 0) {
        this.conversionCostForPreCostsService
          .updateMultiline(element,element.id);
      }
      if (element.id == 0) {
        this.conversionCostForPreCostsService
          .createMultiline(element);
      }
    });
    this.Tostr.showToast(
      "primary",
      "",
      "Saved Successfully",
      "",
      this.toastrService
    );
  }


  onChangeFabricSource(fabricSourceId){
    localStorage.setItem('fabricSource',fabricSourceId);
  }


  loadeditModeDataFortrimCost(){
    this.trimCostsService.trimsCostInformationForm= this.fb.array([]);
    this.trimCostsService.getAll().subscribe(data=>{
       this.TrimsCostsList=data;
       let trimsCostListByPrecostingId=this.TrimsCostsList.filter(f=>f.precostingId==this.precostingId);
       if(trimsCostListByPrecostingId.length>0){
         
         
         this.trimCostsService.loadTrimsCostData(trimsCostListByPrecostingId);
  
       }else{
         this.trimCostsService.trimsCostDetailsForm();
       }
     })
   }

   onDeleteTrimCost(trimsCostInformationForm,i) {
    let idToBeDeleted=trimsCostInformationForm.value[i].id;
    console.log(idToBeDeleted);
    if(idToBeDeleted<=0){
      this.trimCostsService.count=this.trimCostsService.count-1;
      trimsCostInformationForm.value.splice(i, 1);
                this.trimCostsService.trimsCostInformationForm= this.fb.array([]); 
                 this.trimCostsService.loadTrimsCostData(trimsCostInformationForm.value);
    }
    if(idToBeDeleted>0){
      this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(res=>{
        if(res){
          this.trimCostsService.deleteWithOutSubcribe(idToBeDeleted).subscribe(s=>{
            this.trimCostsService.count=this.trimCostsService.count-1;
            trimsCostInformationForm.value.splice(i, 1);
                this.trimCostsService.trimsCostInformationForm= this.fb.array([]);
                   this.trimCostsService.loadTrimsCostData(trimsCostInformationForm.value); 

            this.Tostr.showToast('primary','', 'Deleleted', 'Successfully',this.toastrService);   
          },(err) => { this.Tostr.showToast('danger','', err.statusText, '',this.toastrService);});
        }
      })   
    }                       
}
 recordSubmittrimsCost(trimsCostInformationForm){
      console.log(trimsCostInformationForm.value);
      trimsCostInformationForm.value.forEach(element => {
        element.precostingId=this.precostingId;
        if(element.id!=0){
          this.trimCostsService.updateMultiline(element,element.id);
          
        }
        if(element.id==0){
          this.trimCostsService.createMultiline(element);
        }
       
      });
      this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
      }
 
      loadEmblishmentEditModeData(){
        this.PoNoId = this.route.snapshot.paramMap.get('poNoId');
        this.embelishmentCostService.getAll().subscribe(data=>{
          let embellismentCostByPoId=data.filter(f=>f.precostingId==this.precostingId);
          if(embellismentCostByPoId.length>0){
            //load  data( edit mode data)
            
            this.embelishmentCostService.count=0;      
            this.embelishmentCostService.TotalCons=0;   
            this.embelishmentCostService.emblCostInformationForm= this.fb.array([]);
            this.embelishmentCostService.loadEmblishmentCostData(embellismentCostByPoId);
      
          }else{
           this.embelishmentCostService.emblCostDetailsForm();
          }
        })
      
      
       }

       onDeleteEmbelishmentCost(emblCostInformationForm, i) {
        let idToBeDeleted = emblCostInformationForm.value[i].id;
    
        if (idToBeDeleted == 0) {
          this.embelishmentCostService.count = this.embelishmentCostService.count - 1;
          emblCostInformationForm.value.splice(i, 1);
    
          this.embelishmentCostService.emblCostInformationForm = this.fb.array([]);
          this.embelishmentCostService.count = 0;
        this.embelishmentCostService.loadEmblishmentCostData(emblCostInformationForm.value);
        }
    
        if (idToBeDeleted > 0) {
          this.mathdialogService
            .openConfirmDialog("Are you sure to delete this record ?")
            .afterClosed()
            .subscribe((res) => {
              if (res) {
                this.embelishmentCostService.deleteWithOutSubcribe(idToBeDeleted).subscribe(
                  (s) => {
                   
                    emblCostInformationForm.value.splice(i, 1);
                    this.embelishmentCostService.emblCostInformationForm = this.fb.array([]);
                    this.embelishmentCostService.count = 0;
                    this.embelishmentCostService.loadEmblishmentCostData(emblCostInformationForm.value);
    
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
                      err.statusText,
                      "",
                      this.toastrService
                    );
                  }
                );
              }
            });
        }
      }
      onSubmitEmbelishmentCost(emblCostInformationForm){
        this.embelishmentCostService.emblCostInformationForm.value.forEach(element => {
          element.precostingId=this.precostingId;
         
          if(element.id!=0){
            this.embelishmentCostService.updateMultiline(element,element.id);
          }
          if(element.id==0){
            console.log(element.id);
            this.embelishmentCostService.createMultiline(element);
          }
          
        });
       
        this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
      }

      editModeDataLoadForWashCost(){
        this.WashCostService.getAll().subscribe(data=>{
           this.GmtsWashCostList=data;
           let GmtsWashCostListByPrecostingId=this.GmtsWashCostList.filter(f=>f.precostingId==this.precostingId);
           if(GmtsWashCostListByPrecostingId.length>0){
             this.WashCostService.gmtsWashInformationForm= this.fb.array([]);
             this.WashCostService.loadGmtsWashData(GmtsWashCostListByPrecostingId);
       
           }else{
             this.WashCostService.gmtsWashDetailsForm();
           }
         })
       }  
      
          onDeleteWashCost(gmtsWashInformationForm, i) {
            let idToBeDeleted = gmtsWashInformationForm.value[i].id;
        
            this.WashCostService.count = this.WashCostService.count - 1;
            gmtsWashInformationForm.value.splice(i, 1);
            this.WashCostService.count = 0;
            this.WashCostService.gmtsWashInformationForm = this.fb.array([]);
            if (idToBeDeleted == 0) {
            this.WashCostService.loadGmtsWashData(gmtsWashInformationForm.value);
            }
        
            if (idToBeDeleted > 0) {
              this.WashCostService.delete(idToBeDeleted);
               this.WashCostService.loadGmtsWashData(gmtsWashInformationForm.value);                 
            }
          }


          recordSubmitGmtsWash(gmtsWashInformationForm){
            gmtsWashInformationForm.value.forEach(element => {
              element.precostingId=this.precostingId;
              if(element.id!=0){
                this.WashCostService.updateMultiline(element,element.id);
                
              }
              if(element.id==0){
                this.WashCostService.createMultiline(element);
              }
             
            });
            this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
            }


              //load edit mode data for CommercialCosts 
   editForCommercialCosts(){
    this.commercialCostsService.getAll().subscribe(data=>{
      console.log(data);
       this.commercialCostsList=data;
       let commercialCostsByPoNoId=this.commercialCostsList.filter(f=>f.precostingId==this.precostingId);
       if(commercialCostsByPoNoId.length>0){
     this.commercialCostsService.loadCommercialDataModel(commercialCostsByPoNoId);
       }else{
         this.commercialCostsService.commlCostDetailsForm();
       }
     })
   }
   onDeleteCommercialCost(commlCostInformationForm, i) {
    let idToBeDeleted = commlCostInformationForm.value[i].id;

    this.commercialCostsService.count = this.commercialCostsService.count - 1;
    commlCostInformationForm.value.splice(i, 1);
    this.commercialCostsService.count = 0;
    if (idToBeDeleted == 0) {
    this.commercialCostsService.loadCommercialDataModel(commlCostInformationForm.value);
    }

    if (idToBeDeleted > 0) {
      this.commercialCostsService.delete(idToBeDeleted);
       this.commercialCostsService.loadCommercialDataModel(commlCostInformationForm.value);                 
    }
  }
  recordSubmitcommlCost(commlCostInformationForm){
    commlCostInformationForm.value.forEach(element => {
      element.precostingId=this.precostingId;
      if(element.id!=0){
        this.commercialCostsService.updateMultiline(element,element.id);
        
      }
      if(element.id==0){
        this.commercialCostsService.createMultiline(element);
       
      }
     
    });
    this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    } 
    
    
    loadEditModeDataForCommisionCost(){
      this.commissionCostService.getAll().subscribe(data=>{
        let commissionCosts=data.filter(f=>f.precostingId==this.precostingId);
        if(commissionCosts.length!=0){
          
          this.commissionCostService.commissionInformationForm= this.fb.array([]);
          this.commissionCostService.TotalCommnRate=0;
          this.commissionCostService.TotalAmmount=0;
          (commissionCosts).forEach((itemDts: any) => {
            this.commissionCostService.count=this.commissionCostService.count+1;
            this.commissionCostService.TotalCommnRate +=parseInt(itemDts.commnRate) ;
            this.commissionCostService.TotalAmmount +=parseInt(itemDts.amount);
            this.commissionCostService.commissionInformationForm.push(this.fb.group({
              id:itemDts.id,
              poNoId :itemDts.poNoId,
              particulars :itemDts.particulars,
              commnBase :itemDts.commnBase,
              commnRate:itemDts.commnRate,
              amount:itemDts.amount,
              status :itemDts.status               
            }));
      });
        
        }else{
          this.commissionCostService.commissionDetailsForm();
        }
      })
    } 
      onDeleteCommisionCost(commissionInformationForm, i) {
        let idToBeDeleted = commissionInformationForm.value[i].id;
    
        this.commissionCostService.count = this.commissionCostService.count - 1;
        commissionInformationForm.value.splice(i, 1);
        
        if (idToBeDeleted == 0) {
        this.commissionCostService.loadCommissionCostModelData(commissionInformationForm.value);
        }
    
        if (idToBeDeleted > 0) {
          this.commissionCostService.delete(idToBeDeleted);
           this.commissionCostService.loadCommissionCostModelData(commissionInformationForm.value);                 
        }
      }
         
          onSubmitCommisionCost(commissionInformationForm){
            commissionInformationForm.value.forEach(element => {
              element.precostingId=this.precostingId ;
             
              if(element.id!=0){
                this.commissionCostService.updateMultiline(element,element.id);
              }
              if(element.id==0){
                console.log(element.id);
                this.commissionCostService.createMultiline(element);
              }
              
            });
           
            this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
            this.commissionCostService.commissionInformationForm= this.fb.array([]);
            this.commissionCostService.count=0;
          }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
    { btn: "Active", val: "Active" },
    { btn: "Inactive", val: "Inactive" },
    { btn: "Cancelled", val: "Cancelled" },
  ];
  yes_no_btn: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Yes', val: 'Yes' },
      { btn: 'No', val: 'No' }
    ]
    washname	: any = [
      { btn: 'Wash', val: 'Wash' }
      
    ]

    items: any = [
      // { btn: 'Select', val: 'Select' },
        { btn: 'LC Cost ', val: 'LC Cost ' },
        { btn: 'Port & Clearing', val:'Port & Clearing' },
        { btn: 'Transportation', val:'Transportation' },
        { btn: 'All Together', val:'All Together' },
      ]
}


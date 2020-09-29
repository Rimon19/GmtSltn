import { Component, OnInit, ViewChild } from '@angular/core';
import { PrecostingService } from '../../../../@core/mock/marchandizer/precosting.service';
import { PreCosting } from '../../../../@core/data/marchanzider-model/pre-costing.model';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
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
import { SupliersService } from '../../../../@core/mock/marchandizer/supliers.service';
import { OtherCostService } from '../../../../@core/mock/marchandizer/other-cost.service';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { CostComponentsMasterService } from '../../../../@core/mock/marchandizer/cost-components-master.service';

import { MasterPodetailsInfroesService } from '../../../../@core/mock/marchandizer/master-podetails-infroes.service';
import { MasterPodetailsInfroes } from '../../../../@core/data/marchanzider-model/master-podetails-infroes.model';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';

@Component({
  selector: 'ngx-show-pre-coasting',
  templateUrl: './show-pre-coasting.component.html',
  styleUrls: ['./show-pre-coasting.component.scss']
})
export class ShowPreCoastingComponent implements OnInit {
 
  @ViewChild('sort', {static: true}) sort: MatSort;

  @ViewChild('sortFabricCost', {static: true}) sortFabricCost: MatSort;
  @ViewChild('sortFabricCost', {static: false}) set contentFabricCost(sortFabricCost: MatSort) {
    this.dataSourceFabricCost.sort = sortFabricCost;
  }
  
  @ViewChild('sortYarnCost', {static: true}) sortYarnCost: MatSort;
  @ViewChild('sortYarnCost', {static: false}) set contentYarnCost(sortYarnCost: MatSort) {
    this.dataSourceForYarnCost.sort = sortYarnCost;
  }
  @ViewChild('sortConversionCost', {static: true}) sortConversionCost: MatSort;
  @ViewChild('sortConversionCost', {static: false}) set contentConversionCost(sortConversionCost: MatSort) {
    this.dataSourceConversionCost.sort = sortConversionCost;
  }

  @ViewChild('sortTrimCost', {static: true}) sortTrimCost: MatSort;
  @ViewChild('sortTrimCost', {static: false}) set contentTrimCost(sortTrimCost: MatSort) {
    this.dataSourceTrimCost.sort = sortTrimCost;
  }
  @ViewChild('sortEmbellishmentCost', {static: true}) sortEmbellishmentCost: MatSort;
  @ViewChild('sortEmbellishmentCost', {static: false}) set contentEmbellishmentCost(sortEmbellishmentCost: MatSort) {
    this.dataSourceEmbellishmentCost.sort = sortEmbellishmentCost;
  }

  @ViewChild('sortWashCost', {static: true}) sortWashCost: MatSort;
  @ViewChild('sortWashCost', {static: false}) set contentWashCost(sortWashCost: MatSort) {
    this.dataSourceWashCost.sort = sortWashCost;
  }


  @ViewChild('sortCommercialCost', {static: true}) sortCommercialCost: MatSort;
  @ViewChild('sortCommercialCost', {static: false}) set contentCommercialCost(sortCommercialCost: MatSort) {
    this.dataSourceCommercialCost.sort = sortCommercialCost;
  }

  @ViewChild('sortCommissionCost', {static: true}) sortCommissionCost: MatSort;
  @ViewChild('sortCommissionCost', {static: false}) set contentCommissionCost(sortCommissionCost: MatSort) {
    this.dataSourceCommissionCost.sort = sortCommissionCost;
  }
  
  @ViewChild('sortOtherCost', {static: true}) sortOtherCost : MatSort;
  @ViewChild('sortOtherCost', {static: false}) set contentOtherCost(sortOtherCost: MatSort) {
    this.dataSourceOtherCost.sort = sortOtherCost;
  }


  @ViewChild('MatPaginator', {static: true}) paginator: MatPaginator;
  @ViewChild('paginatorFabricCost', {static: true}) paginatorFabricCost: MatPaginator;
  @ViewChild('paginatorFabricCost', {static: false}) set contentpaginatorFabricCost(paginatorFabricCost: MatPaginator) {
    this.dataSourceFabricCost.paginator = paginatorFabricCost;
  }

  @ViewChild('paginatorYarnCost', {static: true}) paginatorYarnCost: MatPaginator;
  @ViewChild('paginatorYarnCost', {static: false}) set contentpaginatorYarnCost(paginatorYarnCost: MatPaginator) {
    this.dataSourceForYarnCost.paginator = paginatorYarnCost;
  }

  @ViewChild('paginatorConversionCost', {static: true}) paginatorConversionCost: MatPaginator;
  @ViewChild('paginatorConversionCost', {static: false}) set contentpaginatorConversionCost(paginatorConversionCost: MatPaginator) {
    this.dataSourceConversionCost.paginator = paginatorConversionCost;
  }

  @ViewChild('paginatorTrimCost', {static: true}) paginatorTrimCost: MatPaginator;
  @ViewChild('paginatorTrimCost', {static: false}) set contentpaginatorTrimCost(paginatorTrimCost: MatPaginator) {
    this.dataSourceTrimCost.paginator = paginatorTrimCost;
  }
  @ViewChild('paginatorEmbellishmentCost', {static: true}) paginatorEmbellishmentCost : MatPaginator;
  @ViewChild('paginatorEmbellishmentCost', {static: false}) set contentpaginatorEmbellishmentCost(paginatorEmbellishmentCost: MatPaginator) {
    this.dataSourceEmbellishmentCost.paginator = paginatorEmbellishmentCost;
  }
  @ViewChild('paginatorWashCost', {static: true}) paginatorWashCost: MatPaginator;
  @ViewChild('paginatorWashCost', {static: false}) set contentpaginatorWashCost(paginatorWashCost: MatPaginator) {
    this.dataSourceWashCost.paginator = paginatorWashCost;
  }
  @ViewChild('paginatorCommercialCost', {static: true}) paginatorCommercialCost: MatPaginator;
  @ViewChild('paginatorCommercialCost', {static: false}) set contentpaginatorCommercialCost(paginatorCommercialCost: MatPaginator) {
    this.dataSourceCommercialCost.paginator = paginatorCommercialCost;
  }
  @ViewChild('paginatorCommissionCost', {static: true}) paginatorCommissionCost: MatPaginator;
  @ViewChild('paginatorCommissionCost', {static: false}) set contentpaginatorCommissionCost(paginatorCommissionCost: MatPaginator) {
    this.dataSourceCommissionCost.paginator = paginatorCommissionCost;
  }
  @ViewChild('paginatorOtherCost', {static: true}) paginatorOtherCost: MatPaginator;
  @ViewChild('paginatorOtherCost', {static: false}) set contentpaginatorOtherCost(paginatorOtherCost: MatPaginator) {
    this.dataSourceCommissionCost.paginator = paginatorOtherCost;
  }

  dataSource = new MatTableDataSource();
  dataSourceFabricCost = new MatTableDataSource();
  dataSourceForYarnCost = new MatTableDataSource();
  dataSourceConversionCost = new MatTableDataSource();
  dataSourceTrimCost = new MatTableDataSource();
  dataSourceEmbellishmentCost = new MatTableDataSource();
  dataSourceWashCost = new MatTableDataSource();
  dataSourceCommercialCost = new MatTableDataSource();
  dataSourceCommissionCost = new MatTableDataSource();
  dataSourceOtherCost = new MatTableDataSource();

  IsShowFabricCost:boolean;
  IsShowYarnCost:boolean;
  IsShowConversionCost:boolean;
  IsShowTrimCost:boolean;
  IsShowEmbellishment:boolean;
  IsShowWashCost:boolean;
  IsShowCommercialCost:boolean;
  IsShowCommission:boolean;
  IsShowOtherCost:boolean;

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
  displayedColumnsForFabricCost = ['actions', 'fabricCostId', 'preCostingId','bodyPartId','bodyPartType','fabNature','colorType','fabDescId','fabricSource','nominatedSupplierId','widthorDiaType','colornSizenSensitive'];
  displayedColumnsForYarnCost = ['actions', 'preCostingId', 'countId','comp1Id','percent','yarnTypeId','consQnty','supplierId','rate','amont'];
  displayedColumnsForConversionCost = ['actions', 'conversionCostId', 'preCostingId','fabDescId','conversionProcessId','processLoss','reqQty','avgReqQty','chargeUnit','amount','status'];
  displayedColumnsForTrimCost = ['actions', 'precostingId', 'groupName','country','description','bandSupRef','remarks','nominatedSupp','consUom','consUnitGmts','rate','amount','totalQty','totalAmount','apvlReq','image'];
  displayedColumnsForEmbellishmentCost = ['actions', 'precostingId', 'name','type','bodyPart','country','embSupplier','consDznGmts','rate','amount','status'];
  displayedColumnsForWashCost = ['actions', 'precostingId', 'name','type','country','consDznGmts','rate','amount','status'];
  displayedColumnsForCommercialCost = ['actions', 'precostingId', 'item','rateIn','amount','status'];
  displayedColumnsForCommissionCost = ['actions', 'precostingId', 'particulars','commnBase','commnRate','amount','status'];
  displayedColumnsForOtherCost = ['actions', 'preCostingId', 'costComponent','budgetedCost','percentageQPrice'];

  btnActionsPreCosting: any = [
    { btn: 'Fabric Cost', val: 'fabric_cost' },
    { btn: 'Trims Cost', val: 'trims_cost' },
    { btn: 'Embel.Cost', val: 'embel_cost' },
    { btn: 'Gmts.Wash', val: 'gmts_wash_cost' },
    { btn: 'Comml.Cost', val: 'coml_cost' },
    { btn: 'Commission', val: 'commission' },
    { btn: 'Other Cost', val: 'other_cost' }
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
Tostr=new Tostr();
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
  constructor(private precostingService:PrecostingService,
   private fetchInitialOrderService: FetchInitialOrderService,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
   private fabricCostService:FabricCostService,
   private trimCostService:TrimCostService,
   private embelleshmentCostService:EmbelishmentCostService,
   private washCostService:WashCostService,
   private commercialCostService:CommercialCostService,
   private conversioCostService:ConversionCostService,
   private yarnCostService:YarnCostService,
   private commissionCostService:CommissionCostService,
   private otherCostService:OtherCostService,
   private bodyPartService:BodyPartService,
   private yarnCountService:YarnCountsService,
   private yarnComp1Service:YarnComp1Service,
   private yarnTypesService:YarnTypesService,
   private supliersService:SupliersService,
   private router:Router,
   private CostComponentsMasterService:CostComponentsMasterService,
   private fb: FormBuilder,
   private MasterPodetailsInfroesService:MasterPodetailsInfroesService,
   private dateResizeService:DateResizeService
   ) {
      this.refresList();
    }

  ngOnInit() {
    
   this.PoDDL();

    this.fetchInitialOrderService.getInitialAllOrderList().subscribe(data=>{
     this.OrderInfo=data;
    
    });
   
    //load dropdown
    this.bodyPartService.getAllBodyPart().subscribe(data=>{
    
      this.bodyPartList=data;
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

     this.supliersService.getAllSupliers().subscribe(data=>{
         this.SupliersInfo=data;
        
     });





  this.dateResizeService.preCostingSubjectObj.subscribe(data=>{
    console.log("hello! budget cost and index is here:",data)

    if(data==0){
      //initialy page loaded here
    this.refreshCostComponentList();
    }
    else{

      //after visiting other page and edit mode data load here
      console.log('after visiting',this.costComponentForm);

      this.poId=data.poNoId;
      this.costComponentForm = this.fb.array([]);
      data.costComponentform[data.index].budgetedCost=data.budgetedCost;
      data.costComponentform.forEach(itmDts => {
          this.costComponentForm.push(this.fb.group({
            id:itmDts.id,
            costComponetId:itmDts.costComponetId,
            costComponentName:itmDts.costComponentName,
            budgetedCost: itmDts.budgetedCost,
            qPrice:itmDts.qPrice,
            jobNoId:itmDts.jobNoId,
            poNoId:itmDts.poNoId
          }));
       
    });
     

  }

  });

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    }
    PoDDL(){
      this.MasterPodetailsInfroesService.getAllMasterPodetailsInfroes().
      subscribe(data=>{
      this.PobNumberItems=data;
    
      });}

    selectbtnAction(val, precstid) {
     
   
      if (val == 'fabric_cost') {
  
        this.IsShowFabricCost=true;
        this.IsShowYarnCost=true;
        this.IsShowConversionCost=true;
        this.IsShowTrimCost=false;
        this.IsShowEmbellishment=false;
        this.IsShowWashCost=false;
        this.IsShowCommercialCost=false;
        this.IsShowCommission=false;
        this.IsShowOtherCost=false;
      //  this.getYarnCost(precstid);
        this.getConversionCost(precstid);
        this.getFabricCost(precstid);
  
      }
      else if (val== 'trims_cost') {
        this.IsShowFabricCost=false;
        this.IsShowYarnCost=false;
        this.IsShowConversionCost=false;
        this.IsShowTrimCost=true;
        this.IsShowEmbellishment=false;
        this.IsShowWashCost=false;
        this.IsShowCommercialCost=false;
        this.IsShowCommission=false;
        this.IsShowOtherCost=false;
        this.getTrimsCost(precstid);
      }
      else if (val== 'embel_cost') {
        this.IsShowFabricCost=false;
        this.IsShowYarnCost=false;
        this.IsShowConversionCost=false;
        this.IsShowTrimCost=false;
        this.IsShowEmbellishment=true;
        this.IsShowWashCost=false;
        this.IsShowCommercialCost=false;
        this.IsShowCommission=false;
        this.IsShowOtherCost=false;
        this.getEmbelCost(precstid);
      }
      else if (val == 'gmts_wash_cost') {
        this.IsShowFabricCost=false;
        this.IsShowYarnCost=false;
        this.IsShowConversionCost=false;
        this.IsShowTrimCost=false;
        this.IsShowEmbellishment=false;
        this.IsShowWashCost=true;
        this.IsShowCommercialCost=false;
        this.IsShowCommission=false;
        this.IsShowOtherCost=false;
        this.getGmtsWashCost(precstid);
      }
      else if (val== 'coml_cost') {
        this.IsShowFabricCost=false;
        this.IsShowYarnCost=false;
        this.IsShowConversionCost=false;
        this.IsShowTrimCost=false;
        this.IsShowEmbellishment=false;
        this.IsShowWashCost=false;
        this.IsShowCommercialCost=true;
        this.IsShowCommission=false;
        this.IsShowOtherCost=false;
        this.getCommercialCost(precstid);
      }
      else if (val == 'commission') {
        this.IsShowFabricCost=false;
        this.IsShowYarnCost=false;
        this.IsShowConversionCost=false;
        this.IsShowTrimCost=false;
        this.IsShowEmbellishment=false;
        this.IsShowWashCost=false;
        this.IsShowCommercialCost=false;
        this.IsShowCommission=true;
        this.IsShowOtherCost=false;
        this.getCommissionCost(precstid);
      }
      else if (val == 'other_cost') {
        this.IsShowFabricCost=false;
        this.IsShowYarnCost=false;
        this.IsShowConversionCost=false;
        this.IsShowTrimCost=false;
        this.IsShowEmbellishment=false;
        this.IsShowWashCost=false;
        this.IsShowCommercialCost=false;
        this.IsShowCommission=false;
        this.IsShowOtherCost=true;
        this.getOtherCost(precstid);
      }
    }

    getFabricCost(precostingId){
     
      // this.fabricCostService.getFabricCost(precostingId).subscribe(data=>{
      //   console.log(data);
      //   this.dataSourceFabricCost=new MatTableDataSource(data);     
      //   this.dataSourceFabricCost.sort=this.sortFabricCost;
      //   this.dataSourceFabricCost.paginator = this.paginatorFabricCost;
      // })
    }
    
      // getYarnCost(precstid){
      //   this.yarnCostService.getYarnCost(precstid).subscribe(data=>{
      //     console.log(data);
      //     this.dataSourceForYarnCost=new MatTableDataSource(data);     
      //     this.dataSourceForYarnCost.sort = this.sortYarnCost;
      //     this.dataSourceForYarnCost.paginator = this.paginatorYarnCost;
      //   })
      // }
    
      getConversionCost(precstid){
       this.conversioCostService.getConversionCost(precstid).subscribe(data=>{
         
         this.dataSourceConversionCost=new MatTableDataSource(data);     
           this.dataSourceConversionCost.sort = this.sortConversionCost;
            this.dataSourceConversionCost.paginator = this.paginatorConversionCost;
       })
      }
    
      getEmbelCost(precstid){
      
        this.embelleshmentCostService.getEmbelCost(precstid).subscribe(data=>{
          console.log(data);  
          this.dataSourceEmbellishmentCost=new MatTableDataSource(data);     
            this.dataSourceEmbellishmentCost.sort = this.sortEmbellishmentCost;
            this.dataSourceEmbellishmentCost.paginator = this.paginatorEmbellishmentCost;
          })
      }
    
      getTrimsCost(precstid){
        console.log(precstid);
        this.trimCostService.getTrimsCost(precstid).subscribe(data=>
          {
            console.log(data);
            this.dataSourceTrimCost=new MatTableDataSource(data);     
            this.dataSourceTrimCost.sort = this.sortTrimCost;
            this.dataSourceTrimCost.paginator = this.paginatorTrimCost;
          })
      }
      getGmtsWashCost(precstid){
        console.log(precstid);
        this.washCostService.getWashCost(precstid).subscribe(data=>{
          console.log(data);
          this.dataSourceWashCost=new MatTableDataSource(data);     
            this.dataSourceWashCost.sort = this.sortWashCost;
            this.dataSourceWashCost.paginator = this.paginatorWashCost;
        })
      }
    
      getCommercialCost(precstid){
        console.log(precstid);
        this.commercialCostService.getCommercialCost(precstid).subscribe(data=>{
          console.log(data);
          this.dataSourceCommercialCost=new MatTableDataSource(data);     
          this.dataSourceCommercialCost.sort = this.sortCommercialCost;
          this.dataSourceCommercialCost.paginator = this.paginatorCommercialCost;
        })
      }
    
      getCommissionCost(precstid){
        this.commissionCostService.getAllCommissionCost().subscribe(data=>{
          console.log(data);
          this.dataSourceCommissionCost=new MatTableDataSource(data);     
          this.dataSourceCommissionCost.sort = this.sortCommissionCost;
          this.dataSourceCommissionCost.paginator = this.paginatorCommissionCost;
        })
      }
      getOtherCost(precstid) {
        this.otherCostService.getOtherCost(precstid).subscribe(data=>{
          console.log(data);
          this.dataSourceOtherCost=new MatTableDataSource(data);     
          this.dataSourceOtherCost.sort = this.sortOtherCost;
          this.dataSourceOtherCost.paginator = this.paginatorOtherCost;
        })
      }

  
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }
    applyFilterForFabricCost(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSourceFabricCost.filter = filterValue;
    }
    applyFilterForYarnCost(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSourceForYarnCost.filter = filterValue;
    }
    applyFilterForConversionCost(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSourceConversionCost.filter = filterValue;
    }
    applyFilterForTrimCost(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSourceTrimCost.filter = filterValue;
    }
    applyFilterForEmbellishmentCost(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSourceEmbellishmentCost.filter = filterValue;
    }
    applyFilterForWashCost(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSourceWashCost.filter = filterValue;
    }
    applyFilterForCommercialCost(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSourceCommercialCost.filter = filterValue;
    }
    applyFilterForCommissionCost(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSourceCommissionCost.filter = filterValue;
    }
    applyFilterForOtherCost(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSourceOtherCost.filter = filterValue;
    }
    AddNewInpurRow(){
      this.subscription=   this.precostingService.getAllPrecosting().subscribe(data=>{
        this.precostings=data;
        this.precostings
        .unshift
          ({    
            precostingId:0,
            orderId:0,
           // orderAutoId:0,
           
            costingDate:'',
            incoterm: '',
            incotermPlace: '',
            sewEfficiency:0,
            poId:0,
            buyerId:0,
            buyerName:'',

            quotationId:0,
            approvedId:0,
            currencyId:0,
            currencyName:'',
            jobQty :0,
            companyId :0,
            companyName:'',
            orderUOMId :0,
            orderUOMName:'',
            regionId :0,
            regionName :'',
            budgetMinuite :0,
            eR :0,
            cutSMV :0,
            cutEfficiency:0,
            sewSMV :0,
        
        
           styleRef:'',
           styleDesc:'',
           remark:'',
           agent:'',
           machineLine:'',
           prodLineHr:'',
           readyToApproved:'',
           imagesPath:'',
           fileno:'',
           internalRef:'',
           copyFrom:'',
           unapproverequest:'',    
           costingPer:''

               
          });
        this.dataSource=new MatTableDataSource(this.precostings);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
        console.log(this.precostings);
      })
    }
  

    //precosting crud
    save(element){
      console.log(element);
      this.precostingService.addPrecosting(element).subscribe(data=>{
        console.log(data);
        this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
        this.refresList();
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  
    }
  
    edit(element){
      this.router.navigate(["pages/add-precosting/",element.precostingId]);
      // console.log(element);
      // this.precostingService.updatePrecosting(element).subscribe(data=>{
      //   console.log(data);
      //   this.Tostr.showToast('primary',"", "Updated Successfully", "",this.toastrService);
      //   this.refresList();
      // },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
    }
  
    delete(element){
      console.log(element.precostingId);
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
        console.log(this.precostings);
        this.dataSource=new MatTableDataSource(this.precostings);     
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
   
      })
     
    }


//Fabric-cost  crud

AddNewInpurRowFabricCost(){

  this.router.navigate(['/pages/add-fabric-cost']);
  // this.fabricCostService.getAllFabricCost().subscribe(data=>{
  //   console.log(data);
  //   data.unshift({fabricCostId: 0,
  //     preCostingId: 0,
  //     bodyPartId: 0,
  //     bodyPartType: 0,
  //     fabNature: '',
  //     colorType: '',
  //     fabDescId: 0,
  //     fabricSource: '',
  //     nominatedSupplierId: 0,
  //     widthorDiaType: '',
  //     gsmorWeight:0,
  //     colornSizenSensitive: '',
  //     color: '',
  //     consumptionBasis: '',
  //     uom: '',
  //     avgGreyCons: 0,
  //     rate: 0,
  //     amount: 0,
  //     totalQty: 0,
  //     totalAmount: 0});
  //   this.dataSourceFabricCost=new MatTableDataSource(data);     
  //   this.dataSourceFabricCost.sort=this.sortFabricCost;
  //   this.dataSourceFabricCost.paginator = this.paginatorFabricCost;
  // })

}
saveFabricCost(element){
  element.bodyPartType= element.bodyPartTypeId;
  console.log(element);
  this.fabricCostService.addFabricCost(element).subscribe(data=>{
    console.log(data);
    this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
    this.fabricCostService.getAllFabricCost().subscribe(data=>{
      this.dataSourceFabricCost=new MatTableDataSource(data);     
      this.dataSourceFabricCost.sort=this.sortFabricCost;
      this.dataSourceFabricCost.paginator = this.paginatorFabricCost;
    })
  
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})

}

editFabricCost(element){
  element.bodyPartType= element.bodyPartTypeId;
  console.log(element);
  this.fabricCostService.updateFabricCost(element).subscribe(data=>{
    console.log(data);
    this.Tostr.showToast('primary',"", "Updated Successfully", "",this.toastrService);
    this.refresListFabricCost(element.preCostingId);
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
}

deleteFabricCost(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.fabricCostService.deleteFabricCost(element.fabricCostId).subscribe(res=>{
                  this.refresListFabricCost(element.preCostingId);
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresListFabricCost(precostingId){
this.getFabricCost(precostingId);
}


//yarn cost crud
// AddNewInpurRowYarnCost(){
//   this.yarnCostService.getAllYarnCost().subscribe(data=>{
//     console.log(data);
//     data.unshift({  id: 0,
//       preCostingId: 0,
//       countId: 0,
//       comp1Id: 0,
//       percent: 0,
//       yarnTypeId: 0,
//       consQnty: 0,
//       supplierId: 0,
//       rate: 0,
//       amont: 0});
//     this.dataSourceForYarnCost=new MatTableDataSource(data);     
//     this.dataSourceForYarnCost.sort=this.sortYarnCost;
//     this.dataSourceForYarnCost.paginator = this.paginatorYarnCost;
//   })

// }
// saveYarnCost(element){
  
//   console.log(element);
//   this.yarnCostService.addYarnCost(element).subscribe(data=>{
//     console.log(data);
//     this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
//     this.yarnCostService.getAllYarnCost().subscribe(data=>{
//       this.dataSourceForYarnCost=new MatTableDataSource(data);     
//       this.dataSourceForYarnCost.sort=this.sortYarnCost;
//       this.dataSourceForYarnCost.paginator = this.paginatorYarnCost;
//     })
  
//   },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})

// }

editYarnCost(element){
 
  console.log(element);
  this.yarnCostService.updateYarnCost(element).subscribe(data=>{
    console.log(data);
    this.Tostr.showToast('primary',"", "Updated Successfully", "",this.toastrService);
    this.refresListYarnCost(element.preCostingId);
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
}

deleteYarnCost(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.yarnCostService.deleteYarnCost(element.id).subscribe(res=>{
                  this.refresListYarnCost(element.preCostingId);
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresListYarnCost(id){
this.getFabricCost(id);
}

//conversion cost crud

AddNewInpurRowConversionCost(){
  this.router.navigate(['/pages/add-conversion-cost']);
  // this.conversioCostService.getAllConversionCost().subscribe(data=>{
  //   console.log(data);
  //   data.unshift({conversionCostId:0,
  //     preCostingId: 0,
  //     fabDescId: 0,
  //     conversionProcessId: 0,
  //     processLoss: 0,
  //     reqQty: 0,
  //     avgReqQty: 0,
  //     chargeUnit: 0,
  //     amount: 0,
  //     status: ''});
  //   this.dataSourceConversionCost=new MatTableDataSource(data);     
  //   this.dataSourceConversionCost.sort=this.sortConversionCost;
  //   this.dataSourceConversionCost.paginator = this.paginatorConversionCost;
  // })

}
saveConversionCost(element){
  
  console.log(element);

  this.conversioCostService.addConversionCost(element).subscribe(data=>{
    console.log(data);
    this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
    this.conversioCostService.getAllConversionCost().subscribe(data=>{
      this.dataSourceConversionCost=new MatTableDataSource(data);     
      this.dataSourceConversionCost.sort=this.sortConversionCost;
      this.dataSourceConversionCost.paginator = this.paginatorConversionCost;
    })
  
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})

}

editConversionCost(element){
 
  console.log(element);
  this.conversioCostService.updateConversionCost(element).subscribe(data=>{
    console.log(data);
    this.Tostr.showToast('primary',"", "Updated Successfully", "",this.toastrService);
    this.refresListConversionCost(element.preCostingId);
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
}

deleteConversionCost(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.conversioCostService.deleteConversionCost(element.conversionCostId).subscribe(res=>{
                  this.refresListConversionCost(element.preCostingId);
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresListConversionCost(id){
this.getConversionCost(id);
}

//trim cost crud
AddNewInpurRowTrimCost(){
  this.trimCostService.getAllTrimCost().subscribe(data=>{
    console.log(data);
    data.unshift({id: 0,
      precostingId: 0,
      groupName: '',
      country: '',
      description: '',
      bandSupRef: '',
      remarks: '',
      nominatedSupp: 0,
      consUom: '',
      consUnitGmts: '',
      rate: '',
      amount: 0,
      totalQty: 0,
      totalAmount: 0,
      apvlReq: '',
      image: ''});
    this.dataSourceTrimCost=new MatTableDataSource(data);     
    this.dataSourceTrimCost.sort=this.sortTrimCost;
    this.dataSourceTrimCost.paginator = this.paginatorConversionCost;
  })

}
saveTrimCost(element){
  
  console.log(element);

  this.trimCostService.addTrimCost(element).subscribe(data=>{
    console.log(data);
    this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
    this.trimCostService.getAllTrimCost().subscribe(data=>{
      this.dataSourceTrimCost=new MatTableDataSource(data);     
      this.dataSourceTrimCost.sort=this.sortTrimCost;
      this.dataSourceTrimCost.paginator = this.paginatorTrimCost;
    })
  
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})

}

editTrimCost(element){
 
  console.log(element);
  this.trimCostService.updateTrimCost(element).subscribe(data=>{
    console.log(data);
    this.Tostr.showToast('primary',"", "Updated Successfully", "",this.toastrService);
    this.refresListTrimCost(element.precostingId);
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
}

deleteTrimCost(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.trimCostService.deleteTrimCost(element.id).subscribe(res=>{
                  this.refresListTrimCost(element.precostingId);
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresListTrimCost(precostingId){
this.getTrimsCost(precostingId);
}

// embellishment cost crud
AddNewInpurRowEmbellishmentCost(){
  this.embelleshmentCostService.getAllEmbellishmentCost().subscribe(data=>{
    console.log(data);
    data.unshift({id: 0,
      precostingId: 0,
      name: '',
      type: '',
      bodyPart: 0,
      country: '',
      embSupplier: '',
      consDznGmts: '',
      rate: '',
      amount: 0,
      status: ''
    });
    this.dataSourceEmbellishmentCost=new MatTableDataSource(data);     
    this.dataSourceEmbellishmentCost.sort=this.sortEmbellishmentCost;
    this.dataSourceEmbellishmentCost.paginator = this.paginatorEmbellishmentCost;
  })

}
saveEmbellishmentCost(element){
  
  console.log(element);

  this.embelleshmentCostService.addEmbellishmentCost(element).subscribe(data=>{
    console.log(data);
    this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
    this.embelleshmentCostService.getAllEmbellishmentCost().subscribe(data=>{
      this.dataSourceEmbellishmentCost=new MatTableDataSource(data);     
      this.dataSourceEmbellishmentCost.sort=this.sortEmbellishmentCost;
      this.dataSourceEmbellishmentCost.paginator = this.paginatorEmbellishmentCost;
    })
  
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})

}

editEmbellishmentCost(element){
 
  console.log(element);
  this.embelleshmentCostService.updateEmbellishmentCost(element).subscribe(data=>{
    console.log(data);
    this.Tostr.showToast('primary',"", "Updated Successfully", "",this.toastrService);
    this.refresListEmbellishmentCost(element.precostingId);
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
}

deleteEmbellishmentCost(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.embelleshmentCostService.deleteEmbellishmentCost(element.id).subscribe(res=>{
                  this.refresListEmbellishmentCost(element.precostingId);
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresListEmbellishmentCost(precostingId){
this.getEmbelCost(precostingId);
}

//wash cost crud

AddNewInpurRowWashCost(){
  this.embelleshmentCostService.getAllEmbellishmentCost().subscribe(data=>{
    console.log(data);
    data.unshift({   id:0,
      precostingId:0,
      name:'',
      type:'',
      bodyPart:0,
      country:'',
      embSupplier:'',
      consDznGmts:'',
      rate:'',
      amount:0,
      status:'',
    });
    this.dataSourceWashCost=new MatTableDataSource(data);     
    this.dataSourceWashCost.sort=this.sortWashCost;
    this.dataSourceWashCost.paginator = this.paginatorWashCost;
  })

}
saveWashCost(element){
  
  console.log(element);

  this.washCostService.addWashCost(element).subscribe(data=>{
    console.log(data);
    this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
    this.washCostService.getAllWashCost().subscribe(data=>{
      this.dataSourceWashCost=new MatTableDataSource(data);     
      this.dataSourceWashCost.sort=this.sortWashCost;
      this.dataSourceWashCost.paginator = this.paginatorWashCost;
    })
  
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})

}

editWashCost(element){
 
  console.log(element);
  this.washCostService.updateWashCost(element).subscribe(data=>{
    console.log(data);
    this.Tostr.showToast('primary',"", "Updated Successfully", "",this.toastrService);
    this.refresListWashCost(element.precostingId);
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
}

deleteWashCost(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.washCostService.deleteWashCost(element.id).subscribe(res=>{
                  this.refresListWashCost(element.precostingId);
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresListWashCost(precostingId){
this.getGmtsWashCost(precostingId);
}

//commercial cost crud
AddNewInpurRowCommercialCost(){
  this.commercialCostService.getAllCommercialCost().subscribe(data=>{
    console.log(data);
    data.unshift({  id:0,
      precostingId:0,
      item:'',
      rateIn:'',
      amount:0,
      status:'',
    });
    this.dataSourceCommercialCost=new MatTableDataSource(data);     
    this.dataSourceCommercialCost.sort=this.sortCommercialCost;
    this.dataSourceCommercialCost.paginator = this.paginatorCommercialCost;
  })

}
saveCommercialCost(element){
  
  console.log(element);

  this.commercialCostService.addCommercialCost(element).subscribe(data=>{
    console.log(data);
    this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
    this.commercialCostService.getAllCommercialCost().subscribe(data=>{
      this.dataSourceCommercialCost=new MatTableDataSource(data);     
      this.dataSourceCommercialCost.sort=this.sortCommercialCost;
      this.dataSourceCommercialCost.paginator = this.paginatorCommercialCost;
    })
  
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})

}

editCommercialCost(element){
 
  console.log(element);
  this.commercialCostService.updateCommercialCost(element).subscribe(data=>{
    console.log(data);
    this.Tostr.showToast('primary',"", "Updated Successfully", "",this.toastrService);
    this.refresListCommercialCost(element.precostingId);
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
}

deleteCommercialCost(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.commercialCostService.deleteCommercialCost(element.id).subscribe(res=>{
                  this.refresListCommercialCost(element.precostingId);
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresListCommercialCost(precostingId){
this.getCommercialCost(precostingId);
}

//commission cost crud
AddNewInpurRowCommissionCost(){
  this.commissionCostService.getAllCommissionCost().subscribe(data=>{
    console.log(data);
    data.unshift({ id:0,
      poNoId:0,
      particulars:'',
      commnBase:'',
      commnRate:0,
      amount:0,
      status:''
    });
    
    this.dataSourceCommissionCost=new MatTableDataSource(data);     
    this.dataSourceCommissionCost.sort=this.sortCommissionCost;
    this.dataSourceCommissionCost.paginator = this.paginatorCommissionCost;

  })

}
saveCommissionCost(element){
  
  console.log(element);

  this.commissionCostService.addCommissionCost(element).subscribe(data=>{
    console.log(data);
    this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
    this.commissionCostService.getAllCommissionCost().subscribe(data=>{
      this.dataSourceCommissionCost=new MatTableDataSource(data);     
      this.dataSourceCommissionCost.sort=this.sortCommissionCost;
      this.dataSourceCommissionCost.paginator = this.paginatorCommissionCost;
    })
  
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})

}

editCommissionCost(element){
 
  console.log(element);
  this.commissionCostService.updateCommissionCost(element).subscribe(data=>{
    console.log(data);
    this.Tostr.showToast('primary',"", "Updated Successfully", "",this.toastrService);
    this.refresListCommissionCost(element.precostingId);
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
}

deleteCommissionCost(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.commissionCostService.deleteCommissionCost(element.id).subscribe(res=>{
                  this.refresListCommissionCost(element.precostingId);
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresListCommissionCost(precostingId){
this.getCommissionCost(precostingId);
}

//other cost crud

AddNewInpurRowOtherCost(){
  this.otherCostService.getAllOtherCost().subscribe(data=>{
    console.log(data);
    data.unshift({ id:0,
      preCostingId:0,
      costComponent:'',
      budgetedCost:'',
      percentageQPrice:''
    });
    
    this.dataSourceOtherCost=new MatTableDataSource(data);     
    this.dataSourceOtherCost.sort=this.sortOtherCost;
    this.dataSourceOtherCost.paginator = this.paginatorOtherCost;

  })

}
saveOtherCost(element){
  
  console.log(element);

  this.otherCostService.addOtherCost(element).subscribe(data=>{
    console.log(data);
    this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
    this.otherCostService.getAllOtherCost().subscribe(data=>{
      this.dataSourceOtherCost=new MatTableDataSource(data);     
      this.dataSourceOtherCost.sort=this.sortOtherCost;
      this.dataSourceOtherCost.paginator = this.paginatorOtherCost;
    })
  
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})

}

editOtherCost(element){
 
  console.log(element);
  this.otherCostService.updateOtherCost(element).subscribe(data=>{
    console.log(data);
    this.Tostr.showToast('primary',"", "Updated Successfully", "",this.toastrService);
    this.refresListOtherCost(element.preCostingId);
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
}

deleteOtherCost(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.otherCostService.deleteOtherCost(element.id).subscribe(res=>{
                  this.refresListOtherCost(element.preCostingId);
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

refresListOtherCost(precostingId){
this.getOtherCost(precostingId);
}
addnewPreCostingInputform(){
  this.router.navigate(['/pages/add-precosting']);
}

onChangePoNo(poId){
  if(poId!=0){
    this.CostComponentsMasterService.getAllCostComponentsMasterDetails().subscribe(data=>{
      data.sort((a, b) => parseInt(a.costComponetId) - parseInt(b.costComponetId));
  console.log(data);
    let costComponentMasterDetailsInfoByPoNoId= data.filter(f=>f.poNoId==poId);
    console.log(costComponentMasterDetailsInfoByPoNoId);
    if(costComponentMasterDetailsInfoByPoNoId.length!=0){
  
      this.costComponentForm = this.fb.array([]);
      costComponentMasterDetailsInfoByPoNoId.forEach(itmDts => {
          this.costComponentForm.push(this.fb.group({
            id:itmDts.id,
            costComponetId:itmDts.costComponetId,
            costComponentName:itmDts.costComponentName,
            budgetedCost: itmDts.budgetedCost,
            qPrice:itmDts.qPrice,
            jobNoId:itmDts.jobNoId,
            poNoId:itmDts.poNoId
          }));
       
    });
     
  
    }else{
     this.refreshCostComponentList();
  
    }
    });
  }else{
   this.refreshCostComponentList();

  }

}
submitCostComponent(costComponentForm){

  if(this.poId==undefined||this.poId==0){
    this.Tostr.showToast("danger","", "Please Select Po No !", "",this.toastrService);
    return;
  }
  costComponentForm.value.forEach(element => {
    element.poNoId=this.poId ;
    element.jobNoId=1 ;// test job number
    if(element.id!=0){
      console.log('update',element);
      this.CostComponentsMasterService.update(element).subscribe(data=>{
      
      });
    }
    if(element.id==0){
      element.poNoId=this.poId ;
      element.jobNoId=1 ;
      console.log('add',element);
      this.CostComponentsMasterService.add(element).subscribe(data=>{
      
      });
    }
    
  });
  this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
  //refresh code below
  this.poId=0;
 this.refreshCostComponentList();
}
deletCostComponent(costComponentForm){

  if(this.poId==undefined||this.poId==0){
    this.Tostr.showToast("danger","", "Please Select Po No !", "",this.toastrService);
    return;
  }
 console.log(costComponentForm);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res=>{
     if(res){
      costComponentForm.value.forEach(element => {
        this.CostComponentsMasterService.delete(element.id).subscribe(res=>{
        
         
        },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
       });
       this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
      
       this.poId=0;
       this.refreshCostComponentList();
    
      }
    })
 
}
refreshCostComponentList(){
  this.CostComponentsMasterService.getAllCostComponentsMaster().subscribe(data=>{
    this.costComponentMasterInfo=data;
    console.log(this.costComponentMasterInfo);
    this.costComponentForm = this.fb.array([]);
    this.costComponentMasterInfo.forEach(element => {
      this.costComponentForm.push(this.fb.group({
        id:0,
        costComponetId:element.id,
        costComponentName:element.cost_ComponetName,
        budgetedCost: 0,
        qPrice: 0,
        jobNoId:0,
          poNoId:0
      }));
    });
});

}

addCostMultipleRow(i,poNoId){
 
  if(poNoId==undefined||poNoId==0){
    this.Tostr.showToast("danger","", "Please Select Po No !", "",this.toastrService);
    return;
  }
  if(i==0){
        this.dateResizeService.preCostingSource.next({index:i,costComponentform: this.costComponentForm.value,poNoId:this.poId});
        this.router.navigate(['/pages/add-cost',poNoId]);       
      }
      if(i==1){
         this.dateResizeService.preCostingSource.next({index:i,costComponentform: this.costComponentForm.value,poNoId:this.poId});
        this.router.navigate(['/pages/trim-cost']);      
        this.router.navigate(['/pages/trim-cost',poNoId]);      
      }
      if(i==2){
        this.dateResizeService.preCostingSource.next({index:i,costComponentform: this.costComponentForm.value,poNoId:this.poId});
        this.router.navigate(['/pages/embel-cost']);    
      }
      if(i==3){
        this.router.navigate(['/pages/wash-cost',poNoId]); 
        this.dateResizeService.preCostingSource.next({index:i,costComponentform: this.costComponentForm.value,poNoId:this.poId});
        this.router.navigate(['/pages/wash-cost']); 
      }
      if(i==4){
        this.dateResizeService.preCostingSource.next({index:i,costComponentform: this.costComponentForm.value,poNoId:this.poId});
        this.router.navigate(['/pages/comml-cost',poNoId]); 
      }
      if(i==18){
        this.dateResizeService.preCostingSource.next({index:i,costComponentform: this.costComponentForm.value,poNoId:this.poId});
        this.router.navigate(['/pages/commission-cost',poNoId]); 
      }
 
 
  
 }
}


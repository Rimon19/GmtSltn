import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//import { last } from '@angular/router/src/utils/collection';
//import { ALLOW_MULTIPLE_PLATFORMS } from '@angular/core/src/application_ref';
import { MathCalculationService } from '../services/mathCalculation.service';

@Component({
  selector: 'Precosting',
  providers: [DatePipe],
  templateUrl: './Precosting.component.html'
})

export class PrecostingComponent implements OnInit {
  itemDetailsArray: any[] = [];
  itemDetailsArray2: any[] = [];
  bgColor;
  arrayLength: number = 0;
  countProcessLossLength: number = 0;
  sumColorWisepcs: number = 0;
  //calculation for Avg Gre Collection
  sum_finishCons: number = 0;
  sum_processLoss: number = 0;
  sum_greyCons: number = 0;
  sum_rate: number = 0;
  sum_amount: number = 0;
  sum_pcs: number = 0;
  sum_totalQty: number = 0;
  sum_totalAmount: number = 0;

  avg_finishCons: number = 0;
  avg_processLoss: number = 0;
  avg_greyCons: number = 0;
  avg_rate: number = 0;
  avg_amount: number = 0;
  avg_pcs: number = 0;
  avg_totalQty: number = 0;
  avg_totalAmount: number = 0;
  //calculation for Avg Gre Collection

  // calculation for consUnitGmts start
  array2Length: number = 0;
  sum_cons: number = 0;
  sum_exPercentage: number = 0;
  sum_totCons: number = 0;
  sum_cons_rate: number = 0;
  sum_cons_amount: number = 0;
  sum_cons_totalQty: number = 0;
  sum_cons_totalAmount: number = 0;
  sum_cons_pcs: number = 0;

  avg_cons: number = 0;
  avg_exPercentage: number = 0;
  avg_totCons: number = 0;
  avg_cons_rate: number = 0;
  avg_cons_amount: number = 0;
  avg_cons_totalQty: number = 0;
  avg_cons_totalAmount: number = 0;
  avg_cons_pcs: number = 0;

  // calculation for consUnitGmts end

  fabricCostId: number = 0;
  conversionCostId: number = 0;
  trimCostId: number = 0;
  embelishmentCostId: number = 0;
  washCostId: number = 0;
  commercialCostId: number = 0;
  commissionCostId: number = 0;
  otherCostId: number = 0;
  avgGrayConsId: number = 0;
  consUnitGmtsId: number = 0;

  stable_avgGrayCons: boolean = false;
  // this id is for Yarn Cost entity id
  id: number = 0;
  precostingId: number = 0;
  orderInfo: any;

  errorMessage: any;
  _http: any;
  router: any;

  display = 'none';
  displaytest = 'none';
  displayFabCost = 'none';
  displayTrimCost = 'none';
  displayEmbelishmentCost = 'none';
  displayWashCost = 'none';
  displayCommercialCost = 'none';
  displayCommissionCost = 'none';
  displayOtherCost = 'none';
  displayYarnCost = 'none';
  displayConversionCost = 'none';
  displayAvgGrayCons = 'none';
  displayAvgGrayConsAdd = 'none';
  displayConsUnitGmts = 'none';
  displayConsUnitGmtsAdd = 'none';

  PreCostingForm:FormGroup;
  FabricCosForm: FormGroup;
  TrimCosForm: FormGroup;
  EmbelishmentCostForm: FormGroup;
  WashCostForm: FormGroup;
  CommercialCostForm: FormGroup;
  CommissionCostForm: FormGroup;
  OtherCostForm: FormGroup;
  YarnCostForm: FormGroup;
  ConversionCostForm: FormGroup;
  AvgGreyConsForm: FormGroup;
  ConsUnitGmtsForm: FormGroup;

  title: string = "Create";
  editable: boolean = false;

  public PreCostList: PreCostingData[];
  public FabricCostList: FabricCostData[];
  // public TrimCostdetails: any[];
  public YarnCostlist: YarnCostData[];
  public ConversionCostlist: ConversionCostData[];
  //public TrimsCostList: TrimsCostData[];

  activeRow: string = "0";
  statusValue: string = "Active";
  commnBaseValue: string = "In Percentage";
  particularsValue: string = "Local";
  commercialItemValue: string;
  apvlValue: string;
  _fbdetails: any;
  TrimsCostList: Object;
  EmbellishmentCostList: Object;
  WashCostList: Object;
  CommercialCostsList: Object;
  commissionCostPreCostingsList: Object;
  OtherCostsList: Object;
  YarnCountInfo: Object;
  YarnComp1Info: Object;
  YarnTypesInfo: Object;
  SupliersInfo: Object;
  SupliersForTrimCost: Object;
  BodyPartofForEmbel: Object;
  BodyPartofForfabcost: Object;



  /* Fabric Cost, Trims Cost, Embel.Cost, Gmts.Wash, Comml.Cost, Lab Test, Inspection, Freight, Currier Cost,
     Certificate Cost, Deffd.LC Cost, Design Cost, Studio Cost, Opert Exp., CM Cost, Interest, Income Tax,
       Depc. & Amort, Commission, Total Cost, Price / 1 Dzn, Margin / 1Dzn, Price / Pcs, Final Cost / Pcs, Margin / pcs
   */
  btnActionPreCosting: any = [
    { btn: 'Fabric Cost', val: 'fabric_cost' },
    { btn: 'Trims Cost', val: 'trims_cost' },
    { btn: 'Embel.Cost', val: 'embel_cost' },
    { btn: 'Gmts.Wash', val: 'gmts_wash_cost' },
    { btn: 'Comml.Cost', val: 'coml_cost' },
    { btn: 'Commission', val: 'commission' },
    { btn: 'Other Cost', val: 'other_cost' }
  ];

  /*Trim cost button start*/
  apvl: any = [
    { btn: 'Yes', val: 'Yes' },
    { btn: 'No', val: 'No' }
  ]
  filterApvl(selectedValue: string) {
    this.apvlValue = selectedValue
  }
  /*Trim cost button start*/

  /*Commercial Cost button Start*/
  commercialItem: any = [
    { btn: 'Lc Cost', val: 'Lc Cost' },
    { btn: 'Port & Clearing', val: 'Port & Clearing' },
    { btn: 'Transpotation', val: 'Transpotation' },
    { btn: 'All to Gether', val: 'All to Gether' }
  ]
  filterCommercialItem(selectedValue: string) {
    this.commercialItemValue = selectedValue
  }
  /*Commercial Cost button End*/
  /* Commission Cost Button Start*/
  particulars: any = [
    { btn: 'Local', val: 'Local' },
    { btn: 'Foreign', val: 'Foreign' }
  ]
  commnBase: any = [
    { btn: 'In Percentage', val: 'In Percentage' },
    { btn: 'Per Pcs', val: 'Per Pcs' },
    { btn: 'Per Dzn', val: 'Per Dzn' }
  ]
  statusCost: any = [
    { btn: 'Active', val: 'Active' },
    { btn: 'InActive', val: 'InActive' },
    { btn: 'Cancelled', val: 'Cancelled' }
  ]
  commissionCostStatus: any;
  selectedDevice = 'Active';

  filterparticulars(selectedValue: string) {
    this.particularsValue = selectedValue
    //console.log('value is ', selectedValue);
  }
  filtercommnBase(selectedValue: string) {
    this.commnBaseValue = selectedValue
    //console.log('value is ', selectedValue);
  }
  filterChanged(selectedValue: string) {
    this.statusValue = selectedValue
    //console.log('value is ', selectedValue);
  }



  /* Commission Cost Button End*/


  constructor(public http: HttpClient,
    private datePipe: DatePipe,
    private _fb: FormBuilder,
    private mathCalculationService: MathCalculationService,
    private _router: Router,
    private _avRoute: ActivatedRoute) {
    
    this.http.get<PreCostingData[]>('/api/PreCostings').subscribe(result => {
      this.PreCostList = result;
      console.log('cheack precosting', this.PreCostList);
    });
    this._fbdetails = _fb;
    this._http = http;
    this.router = _router;
  


    this.FabricCosForm = this._fb.group({
      fabricCostId: 0,
      preCostingId: 0,
      bodyPartId: ['', [Validators.required]],
      bodyPartType: ['', [Validators.required]],
      fabNature: ['', [Validators.required]],
      colorType: ['', [Validators.required]],
      fabDescId: ['', [Validators.required]],
      fabricSource: ['', [Validators.required]],
      nominatedSupplierId: ['', [Validators.required]],
      widthorDiaType: ['', [Validators.required]],
      gsmorWeight: ['', [Validators.required]],
      colornSizenSensitive: ['', [Validators.required]],
      color: ['', [Validators.required]],
      consumptionBasis: ['', [Validators.required]],
      uom: ['', [Validators.required]],
      avgGreyCons: ['', [Validators.required]],
      rate: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      totalQty: ['', [Validators.required]],
      totalAmount: ['', [Validators.required]]
    });
    this.YarnCostForm = this._fb.group({
      id: 0,
      preCostingId: 0,
      countId: ['', [Validators.required]],
      comp1Id: ['', [Validators.required]],
      percent: ['', [Validators.required]],
      yarnTypeId: ['', [Validators.required]],
      consQnty: ['', [Validators.required]],
      supplierId: ['', [Validators.required]],
      rate: ['', [Validators.required]],
      amont: ['', [Validators.required]]
    });
    this.ConversionCostForm = this._fb.group({
      conversionCostId: 0,
      preCostingId: 0,
      fabDescId: ['', [Validators.required]],
      conversionProcessId: ['', [Validators.required]],
      processLoss: ['', [Validators.required]],
      reqQty: ['', [Validators.required]],
      avgReqQty: ['', [Validators.required]],
      chargeUnit: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
    this.TrimCosForm = this._fb.group({
      id: 0,
      precostingId: 0,
      groupName: ['', [Validators.required]],
      country: ['', [Validators.required]],
      description: ['', [Validators.required]],
      bandSupRef: ['', [Validators.required]],
      remarks: ['', [Validators.required]],
      nominatedSupp: 0,
      consUom: ['', [Validators.required]],
      consUnitGmts: ['', [Validators.required]],
      rate: ['', [Validators.required]],
      amount: 0,
      totalQty: 0,
      totalAmount: 0,
      apvlReq: [''],
      image: ['', [Validators.required]]
    });
    this.EmbelishmentCostForm = this._fb.group({
      id: 0,
      precostingId: 0,
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      bodyPart: 0,
      country: ['', [Validators.required]],
      embSupplier: ['', [Validators.required]],
      consDznGmts: ['', [Validators.required]],
      rate: ['', [Validators.required]],
      amount: 0,
      status: ['', [Validators.required]]
    });
    this.WashCostForm = this._fb.group({
      id: 0,
      precostingId: 0,
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      country: ['', [Validators.required]],
      consDznGmts: ['', [Validators.required]],
      rate: ['', [Validators.required]],
      amount: 0,
      status: ['', [Validators.required]]
    });
    this.CommercialCostForm = this._fb.group({
      id: 0,
      precostingId: 0,
      item: ['', [Validators.required]],
      rateIn: ['', [Validators.required]],
      amount: 0,
      status: ['', [Validators.required]]
    });
    this.CommissionCostForm = this._fb.group({
      id: 0,
      precostingId: 0,
      particulars: ['', [Validators.required]],
      commnBase: ['', [Validators.required]],
      commnRate: ['', [Validators.required]],
      amount: 0,
      status: this.statusValue
    });
    this.OtherCostForm = this._fb.group({
      id: 0,
      preCostingId: 0,
      costComponent: ['', [Validators.required]],
      budgetedCost: ['', [Validators.required]],
      percentageQPrice: ['', [Validators.required]]
    });

    this.AvgGreyConsForm = this._fb.group({
      id: 0,
      precostingId: 0,
      febricCostId: 0,
      poNo: ['', [Validators.required]],
      color: ['', [Validators.required]],
      gmtsSizes: ['', [Validators.required]],
      dia: ['', [Validators.required]],
      itemSizes: ['', [Validators.required]],
      finishCons: ['', [Validators.required]],
      processLoss: ['', [Validators.required]],
      greyCons: ['', [Validators.required]],
      rate: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      pcs: ['', [Validators.required]],
      totalQty: ['', [Validators.required]],
      totalAmount: ['', [Validators.required]],
      remarks: ['', [Validators.required]]
    });

    this.ConsUnitGmtsForm = this._fb.group({
      id: 0,
      trimCostId: 0,
      poNo: [''],
      gmtsItem: [''],
      country: [''],
      gmtsColor: [''],
      gmtsSizes: [''],
      itemSizes: [''],
      cons: [''],
      exPercentage: [''],
      totCons: [''],
      rate: [''],
      amount: [''],
      totalQty: [''],
      totalAmount: [''],
      placement: [''],
      pcs: ['']
    });

  }
  
  selectbtnAction($event, precstid) {
    this.TrimsCostList = null;
    this.EmbellishmentCostList = null;
    this.WashCostList = null;
    this.CommercialCostsList = null;
    this.commissionCostPreCostingsList = null;
    this.OtherCostsList = null;
    this.FabricCostList = null;
    this.YarnCostlist = null;
    this.ConversionCostlist = null;

    if ($event == 'fabric_cost') {
      this.getFabCost(precstid);
    }
    else if ($event == 'trims_cost') {
      this.getTrimsCost(precstid);
    }
    else if ($event == 'embel_cost') {

      this.getEmbelCost(precstid);
    }
    else if ($event == 'gmts_wash_cost') {
      this.getGmtsWashCost(precstid);
    }
    else if ($event == 'coml_cost') {
      this.getCommlCost(precstid);
    }
    else if ($event == 'commission') {
      this.getCommissionCost(precstid);
    }
    else if ($event == 'other_cost') {
      this.getOtherCost(precstid);
    }
  }



  getFabricCost(precstid) {
    //console.log('get getFabricCost using preCasting ID ');
  }
  getTrimsCost(precstid) {
    this.http.get('/api/TrimCostPreCostings/trimsCostByPreCostId/' + precstid).subscribe(result => {
      this.TrimsCostList = result;
    });
    this.activeRow = precstid;
  }
  getEmbelCost(precstid) {
    this.http.get('/api/EmbellishmentCostPreCostings/embellishmentCostByPreCostId/' + precstid).subscribe(result => {
      this.EmbellishmentCostList = result;
    });
    this.activeRow = precstid;
  }
  getGmtsWashCost(precstid) {
    this.http.get('/api/WashCostPreCostings/washCostPreCostingsByPreCostId/' + precstid).subscribe(result => {
      this.WashCostList = result;
    });
    this.activeRow = precstid;

  }
  getCommlCost(precstid) {
    this.http.get('/api/CommercialCosts/commercialCostsByPreCostId/' + precstid).subscribe(result => {
      this.CommercialCostsList = result;
    });
    this.activeRow = precstid;
  }
  getOtherCost(precstid) {
    this.http.get('api/OtherCostPreCostings/otherCostPreCostingsByPreCostId/' + precstid).subscribe(result => {
      this.OtherCostsList = result;
    });
    this.activeRow = precstid;
  }
  getCommissionCost(precstid) {
    this.http.get('/api/CommissionCostPreCostings/commissionCostPreCostingsByPreCostId/' + precstid).subscribe(result => {
      this.commissionCostPreCostingsList = result;
    });
    this.activeRow = precstid;

  }

  getFabCost(precstid) {
    this.http.get<FabricCostData[]>('/api/PreCostings/DetailsFabCost/' + precstid).subscribe(result => {
      this.FabricCostList = result;
    });
    this.activeRow = precstid;
    this.getYarnCost(precstid);
    this.getConversionCost(precstid);
  }

  getYarnCost(id) {
    this.http.get<YarnCostData[]>('/api/PreCostings/DetailsYarncost/' + id).subscribe(result => {
      this.YarnCostlist = result;
    });
    this.activeRow = id;
  }

  getConversionCost(conversionCostId) {
    this.http.get<ConversionCostData[]>('/api/PreCostings/DetailsConversionCost/' + conversionCostId).subscribe(result => {
      this.ConversionCostlist = result;
    });
    this.activeRow = conversionCostId;
  }

  openModalDialogPrecost(precostingId) {
    //GET:  api/initialorders/Index
    this.http.get('/api/initialorders/Index').subscribe(result => {
      console.log('pre',result);
      this.orderInfo = result;
    });
    this.precostingId = precostingId;
    this.ngOnInit();
    this.display = 'block';
  }

  getInitialordersId() {
    this.http.get('/api/initialorders/Index').subscribe(result => {
      console.log(result);
    });
  }

  saveModalDialogPreCost() {
    console.log('new save the precastting data');
  }

  closeModalDialogPreCost() {
    this.display = 'none';
  }

  openModalDialogFabcost(fabricCostId) {
    //api/BodyPartofPreCostings
    this.http.get('/api/BodyPartofPreCostings').subscribe(result => {
      this.BodyPartofForfabcost = result;
    });

    this.fabricCostId = fabricCostId;
    this.ngOnFabcost();
    this.displayFabCost = 'block';
  }

  closeModalDialogFabcost() {
    this.displayFabCost = 'none';
  }

  openModalDialogYarncost(id) {
    //GET:  api/YarnCounts
    this.http.get('/api/YarnCounts').subscribe(result => {
      this.YarnCountInfo = result;
    });
    //api/YarnComp1
    this.http.get('/api/YarnComp1').subscribe(result => {
      this.YarnComp1Info = result;
    });
    //api/YarnTypes
    this.http.get('/api/YarnTypes').subscribe(result => {
      this.YarnTypesInfo = result;
    });
    //api/Supliers
    this.http.get('/api/Supliers').subscribe(result => {
      this.SupliersInfo = result;
      console.log('this is Supliers');
      //console.log(result);
    });
    this.id = id;
    this.ngOnYarncost();
    this.displayYarnCost = 'block';
  }

  closeYarncost() {
    this.displayYarnCost = 'none';
  }

  openModalDialogConversionost(conversionCostId) {

    this.conversionCostId = conversionCostId;
    this.ngOnConversioncost();
    this.displayConversionCost = 'block';
  }

  closeModalDialogconversioncost() {
    this.displayConversionCost = 'none';
  }
  //Open Modal Trim Cost  
  openModalTrimCost(id) {

    //api/Supliers
    this.http.get('/api/Supliers').subscribe(result => {
      this.SupliersForTrimCost = result;
      //console.log('this is Supliers');
      //console.log(result);
    });

    this.trimCostId = id;
    //console.log(`i am open modal trim cost ${id}`);
    this.ngOnTrimCost();
    this.displayTrimCost = 'block';
  }
  //Close Modal Trim Cost  
  closeModalTrimCost() {
    this.displayTrimCost = 'none';
  }

  //Open Modal 
  openModalEmbelishmentCost(id) {

    //api/BodyPartofPreCostings
    this.http.get('/api/BodyPartofPreCostings').subscribe(result => {
      this.BodyPartofForEmbel = result;
      //console.log('this is Supliers');
      //console.log(result);
    });

    this.embelishmentCostId = id;
    //console.log(`i am open modal Embelishment cost ${id}`);
    //this.ngOnEmbelishmentCost();
    this.displayEmbelishmentCost = 'block';
  }
  //Close Modal 
  closeModalEmbelishmentCost() {
    this.displayEmbelishmentCost = 'none';
  }
  //Open Modal 
  openModalWashCost(id) {
    this.washCostId = id;
    console.log(`i am open modal washCost ${id}`);
    this.ngOnWashCost();
    this.displayWashCost = 'block';
  }
  //Close Modal 
  closeModalWashCost() {
    this.displayWashCost = 'none';
  }

  //Open Modal 
  openModalCommercialCost(id) {
    this.commercialCostId = id;
    console.log(`i am open modal commercial Cost  ${id}`);
    this.ngOnCommercialCost();
    this.displayCommercialCost = 'block';
  }
  //Close Modal 
  closeModalCommercialCost() {
    this.displayCommercialCost = 'none';
  }
  openModalCommissionCost(id) {
    this.commissionCostId = id;
    console.log(`i am open modal commercial Cost  ${id}`);
    this.ngOnCommissionCost();
    this.displayCommissionCost = 'block';
  }
  //Close Modal 
  closeModalCommissionCost() {
    this.displayCommissionCost = 'none';
  }
  //Open Modal
  openModalOtherCost(id) {
    this.otherCostId = id;
    console.log(`i am open modal other cost  ${id}`);
    this.ngOnOtherCost();
    this.displayOtherCost = 'block';
  }
  //Close Modal 
  closeModalOtherCost() {
    this.displayOtherCost = 'none';
  }
  //api/AvgGreyConsFabricCosts/FebricCostId/5
  openModalAvgGreyCons() {
    this.displayAvgGrayCons = 'block';
    if (this.fabricCostId > 0) {
      this._http.get("api/AvgGreyConsFabricCosts/FebricCostId/" + this.fabricCostId)
        .subscribe(result => {
          //const wow = this.mathCalculationService.mathArrayOfObject(result);
          //console.log(wow);
          this.itemDetailsArray = result;
          this.mathArrayOfObject(this.itemDetailsArray)

        }, error => this.errorMessage = error);
    }
  }

  closeModalAvgGreyCons() {
    this.displayAvgGrayCons = 'none';
  }

  openModalAvgGrayConsAdd(id) {
    this.displayAvgGrayConsAdd = 'block';
    this.avgGrayConsId = id;
    this.ngOnAvgGrayConsAdd();
    console.log(`i am open modal AvgGrayCons Add / edit ${id}`);
  }
  closeModalAvgGrayConsAdd() {
    this.displayAvgGrayConsAdd = 'none';
    console.log('closeing avg Gray Cons');
  }

  //Open Modal 
  openModalConsUnitGmts(id) {
    //this.consUnitGmtsId = id;
    //console.log(`i am open modal Cons Unit Gmts  ${id}`);
    this.ngOnConsUnitGmts();
    //console.log('i am here open cons unit');
    //console.log(this.itemDetailsArray2);
    this.displayConsUnitGmts = 'block';
    //this.mathArrayOfObjectCons(this.itemDetailsArray2);

    /*get cons unit gmts filter by  by trim cost id */
    if (this.trimCostId > 0) {
      this._http.get("api/ConsUnitGmtsTrimCosts/TrimCostId/" + this.trimCostId)
        .subscribe(result => {
          this.itemDetailsArray2 = result;
          this.mathArrayOfObjectCons(this.itemDetailsArray2)
        }, error => this.errorMessage = error);
    }
  }
  //Close Modal 
  closeModalConsUnitGmts() {
    this.displayConsUnitGmts = 'none';
  }

  //Open Modal add and edit
  openModalConsUnitGmtsAdd(id) {
    this.consUnitGmtsId = id;
    console.log(`i am open modal items Details  ${id}`);
    this.ngOnConsUnitGmts();
    this.displayConsUnitGmtsAdd = 'block';
  }
  //Close Modal 
  closeModalConsUnitGmtsAdd() {
    this.displayConsUnitGmtsAdd = 'none';
  }
  openModalConsDznGmts() {
    console.log('i am trying to open something');
  }

  mathArrayOfObject(arrayObje) {
    if (arrayObje.length > 0) {

      this.arrayLength = arrayObje.length;
      this.countProcessLossLength = 0;
      this.sumColorWisepcs = 0;
      /*   Sum Calculation   */
      this.sum_finishCons = 0;
      this.sum_processLoss = 0;
      this.sum_greyCons = 0;
      this.sum_rate = 0;
      this.sum_amount = 0;
      this.sum_pcs = 0;
      this.sum_totalQty = 0;
      this.sum_totalAmount = 0;

      /*   Avg Calculation   */
      this.avg_finishCons = 0;
      this.avg_processLoss = 0;
      this.avg_greyCons = 0;
      this.avg_rate = 0;
      this.avg_amount = 0;
      this.avg_pcs = 0;
      this.avg_totalQty = 0;
      this.avg_totalAmount = 0;



      arrayObje.map(item => {
        this.sum_finishCons += Number((item.finishCons).toFixed(4));
        this.sum_processLoss += Number((item.processLoss).toFixed(4));
        this.countProcessLossLength += Number(item.processLoss == 0 || NaN ? 0 : 1);
        this.sum_greyCons += Number((item.greyCons).toFixed(4));
        this.sum_rate += Number((item.rate).toFixed(4));

        this.sum_amount += Number((item.amount).toFixed(4));
        this.sum_pcs += Number((item.pcs).toFixed(4));
        this.sum_totalQty += Number((item.totalQty).toFixed(4));
        this.sum_totalAmount += Number((item.totalAmount).toFixed(4));

        //if (item.color )
      });



      /*   Avg Calculation */
      this.avg_finishCons = Number((this.sum_finishCons / this.arrayLength).toFixed(4));
      this.avg_processLoss = Number((this.sum_processLoss / this.countProcessLossLength).toFixed(4));
      this.avg_greyCons = Number((this.sum_greyCons / this.arrayLength).toFixed(4));
      this.avg_rate = Number((this.sum_rate / this.arrayLength).toFixed(4));
      this.avg_amount = Number((this.sum_amount / this.arrayLength).toFixed(4));
      this.avg_pcs = Number((this.sum_pcs / this.arrayLength).toFixed(4));
      this.avg_totalQty = Number((this.sum_totalQty / this.arrayLength).toFixed(4));
      this.avg_totalAmount = Number((this.sum_totalAmount / this.arrayLength).toFixed(4));

      this.FabricCosForm.controls.avgGreyCons.setValue(this.avg_greyCons);
    } else {
      /*   Sum Calculation   */
      this.sum_finishCons = 0;
      this.sum_processLoss = 0;
      this.sum_greyCons = 0;
      this.sum_rate = 0;
      this.sum_amount = 0;
      this.sum_pcs = 0;
      this.sum_totalQty = 0;
      this.sum_totalAmount = 0;

      /*   Avg Calculation   */
      this.avg_finishCons = 0;
      this.avg_processLoss = 0;
      this.avg_greyCons = 0;
      this.avg_rate = 0;
      this.avg_amount = 0;
      this.avg_pcs = 0;
      this.avg_totalQty = 0;
      this.avg_totalAmount = 0;

    }

  }



  mathArrayOfObjectCons(arrayObje) {
    if (arrayObje.length > 0) {

      this.array2Length = arrayObje.length;


      this.sum_cons = 0;
      this.sum_exPercentage = 0;
      this.sum_totCons = 0;
      this.sum_cons_rate = 0;
      this.sum_cons_amount = 0;
      this.sum_cons_totalQty = 0;
      this.sum_cons_totalAmount = 0;
      this.sum_cons_pcs = 0;

      this.avg_cons = 0;
      this.avg_exPercentage = 0;
      this.avg_totCons = 0;
      this.avg_cons_rate = 0;
      this.avg_cons_amount = 0;
      this.avg_cons_totalQty = 0;
      this.avg_cons_totalAmount = 0;
      this.avg_cons_pcs = 0;



      arrayObje.map(item => {
        this.sum_cons += Number((item.cons).toFixed(4));
        this.sum_exPercentage += Number((item.exPercentage).toFixed(4));
        this.sum_totCons += Number((item.totCons).toFixed(4));
        this.sum_cons_rate += Number((item.rate).toFixed(4));
        this.sum_cons_amount += Number((item.amount).toFixed(4));
        this.sum_cons_totalQty += Number((item.totalQty).toFixed(4));
        this.sum_cons_totalAmount += Number((item.totalAmount).toFixed(4));
        this.sum_cons_pcs += Number((item.pcs).toFixed(4));
      });
      /*   Avg Calculation */
      this.avg_cons = Number((this.sum_cons / this.array2Length).toFixed(4));
      this.avg_exPercentage = Number((this.sum_exPercentage / this.array2Length).toFixed(4));
      this.avg_totCons = Number((this.sum_totCons / this.array2Length).toFixed(4));
      this.avg_cons_rate = Number((this.sum_cons_rate / this.array2Length).toFixed(4));
      this.avg_cons_amount = Number((this.sum_cons_amount / this.array2Length).toFixed(4));
      this.avg_cons_totalQty = Number((this.sum_cons_totalQty / this.array2Length).toFixed(4));
      this.avg_cons_totalAmount = Number((this.sum_cons_totalAmount / this.array2Length).toFixed(4));
      this.avg_cons_pcs = Number((this.sum_cons_pcs / this.array2Length).toFixed(4));


      this.TrimCosForm.controls.consUnitGmts.setValue(this.avg_cons);

      //this.FabricCosForm.controls.avgGreyCons.setValue(this.avg_greyCons);
    } else {
      this.sum_cons = 0;
      this.sum_exPercentage = 0;
      this.sum_totCons = 0;
      this.sum_cons_rate = 0;
      this.sum_cons_amount = 0;
      this.sum_cons_totalQty = 0;
      this.sum_cons_totalAmount = 0;
      this.sum_cons_pcs = 0;

      this.avg_cons = 0;
      this.avg_exPercentage = 0;
      this.avg_totCons = 0;
      this.avg_cons_rate = 0;
      this.avg_cons_amount = 0;
      this.avg_cons_totalQty = 0;
      this.avg_cons_totalAmount = 0;
      this.avg_cons_pcs = 0;

    }

  }



  delete(precostingId) {
    var ans = confirm("Do you want to delete precosting with Id: " + precostingId);
    if (ans) {

      this._http.delete("/api/PreCostings/" + precostingId)
        .subscribe(() => {

          this._http.get('/api/PreCostings').subscribe(result => {
            this.PreCostList = result;
          }, error => console.error(error));


        }, error => this.errorMessage = error)
    }
  }

  deleteFabcost(fabricCostId) {
    var ans = confirm("Do you want to delete Fabcost with Id: " + fabricCostId);
    if (ans) {
      // APi ready for delete multiple avgGreCos delete
      // DELETE: api/AvgGreyConsFabricCosts/ByFabricCost/5
      this.http.delete("/api/AvgGreyConsFabricCosts/ByFabricCost/" + fabricCostId)
        .subscribe(() => {
          this.http.delete("/api/FabricCosts/" + fabricCostId)
            .subscribe(() => {
              this._http.get('/api/PreCostings/DetailsFabCost/' + this.activeRow).subscribe(result => {
                this.FabricCostList = result;
              }, error => console.error(error));
            }, error => this.errorMessage = error)
        }, error => this.errorMessage = error)
    }
  }

  deleteYarnCost(id) {
    var ans = confirm("Do you want to delete Yarn with Id: " + id);
    if (ans) {
      this.http.delete("/api/YarnCostPreCostings/" + id)
        .subscribe(() => {

          this._http.get('/api/PreCostings/DetailsYarncost/' + this.activeRow).subscribe(result => {
            this.YarnCostlist = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }
  }

  deleteConversionCost(conversionCostId) {
    var ans = confirm("Do you want to delete Conversion cost with Id: " + conversionCostId);
    if (ans) {
      this.http.delete("/api/ConversionCostPreCostings/" + conversionCostId)
        .subscribe(() => {


          this._http.get('/api/PreCostings/DetailsConversionCost/' + this.activeRow).subscribe(result => {
            this.ConversionCostlist = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }
  }


  deleteTrimCost(trimCostId) {
    var ans = confirm("Do you want to delete Trim Cost with Id: " + trimCostId);
    if (ans) {
      // first delete all ConsUnitGmtsTrimCosts by trimCostId
      //then delete trimCost by its id
      //api ready : /api/ConsUnitGmtsTrimCosts/BytrimCostId/5
      this.http.delete("/api/ConsUnitGmtsTrimCosts/BytrimCostId/" + trimCostId)
        .subscribe((res1) => {
          this.http.delete("/api/TrimCostPreCostings/" + trimCostId)
            .subscribe((res2) => {
              this._http.get('/api/TrimCostPreCostings/trimsCostByPreCostId/' + this.activeRow).subscribe(result => {
                this.TrimsCostList = result;
              }, error => console.error(error));
            }, error => this.errorMessage = error)
        }, error => console.error(error));

    }
  }
  deleteEmbelishmentCost(embelishmentCostId) {
    var ans = confirm("Do you want to delete Embelishment CostId with Id: " + embelishmentCostId);
    if (ans) {
      this.http.delete("/api/EmbellishmentCostPreCostings/" + embelishmentCostId)
        .subscribe(() => {

          this._http.get('/api/EmbellishmentCostPreCostings/embellishmentCostByPreCostId/' + this.activeRow).subscribe(result => {
            this.EmbellishmentCostList = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }
  }
  deleteWashCost(washCostId) {
    var ans = confirm("Do you want to delete wash Cost with Id: " + washCostId);
    if (ans) {
      this.http.delete("/api/WashCostPreCostings/" + washCostId)
        .subscribe(() => {

          this._http.get('/api/WashCostPreCostings/washCostPreCostingsByPreCostId/' + this.activeRow).subscribe(result => {
            this.WashCostList = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }
  }
  deleteCommercialCost(commercialCostId) {
    var ans = confirm("Do you want to delete commercial Cost with Id: " + commercialCostId);
    if (ans) {
      this.http.delete("/api/CommercialCosts/" + commercialCostId)
        .subscribe(() => {

          this._http.get('/api/CommercialCosts/commercialCostsByPreCostId/' + this.activeRow).subscribe(result => {
            this.CommercialCostsList = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }
  }
  deleteCommissionCost(commissionCostId) {
    var ans = confirm("Do you want to delete commercial Cost with Id: " + commissionCostId);
    if (ans) {
      this.http.delete("/api/CommissionCostPreCostings/" + commissionCostId)
        .subscribe(() => {

          this._http.get('/api/CommissionCostPreCostings/commissionCostPreCostingsByPreCostId/' + this.activeRow).subscribe(result => {
            this.commissionCostPreCostingsList = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }
  }
  deleteOtherCost(otherCostId) {
    var ans = confirm("Do you want to delete commercial Cost with Id: " + otherCostId);
    if (ans) {
      this.http.delete("/api/OtherCostPreCostings/" + otherCostId)
        .subscribe(() => {

          this._http.get('/api/OtherCostPreCostings/otherCostPreCostingsByPreCostId/' + this.activeRow).subscribe(result => {
            this.OtherCostsList = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }
  }
  deleteAvgGrayCons(id) {
    var ans = confirm("Do you want to delete Avg Gray Cons with Id: " + id);
    if (ans) {
      this.http.delete("/api/AvgGreyConsFabricCosts/" + id)
        .subscribe(() => {
          this._http.get('/api/AvgGreyConsFabricCosts/FebricCostId/' + this.fabricCostId).subscribe(result => {
            this.itemDetailsArray = result;

            this.mathArrayOfObject(this.itemDetailsArray);
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }
  }

  deleteConsUnitGmts(consUnitGmtsId) {
    var ans = confirm("Do you want to delete ConsUnitGmts with Id: " + consUnitGmtsId);
    if (ans) {
      this.http.delete("/api/ConsUnitGmtsTrimCosts/" + consUnitGmtsId)
        .subscribe(() => {
          this._http.get('/api/ConsUnitGmtsTrimCosts/TrimCostId/' + this.trimCostId).subscribe(result => {
            //this.OtherCostList = result;
            this.itemDetailsArray2 = result;
            this.mathArrayOfObjectCons(this.itemDetailsArray2)
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }
    /*
     *
     *
      this._http.get("api/ConsUnitGmtsTrimCosts/TrimCostId/" + this.trimCostId)
        .subscribe(result => {
          this.itemDetailsArray2 = result;
          this.mathArrayOfObjectCons(this.itemDetailsArray2)
     * **/
  }


  ngOnInit() {


    this.PreCostingForm = this._fb.group({
      precostingId: 0,
      orderId: [''],
      costingDate: [''],
      incoterm: [''],
      incotermPlace: [''],
      sewEfficiency: [''],

    })

    if (this.precostingId > 0) {
      this.title = "Edit";
      this._http.get("/api/PreCostings/" + this.precostingId)
        .subscribe(resp => this.PreCostingForm.setValue(resp)
          , error => this.errorMessage = error);

    }
    else {
      this.title = "Create";
    }
  }

  ngOnFabcost() {

    if (this.fabricCostId > 0) {
      this.title = "Edit";
      this.http.get("/api/FabricCosts/" + this.fabricCostId)
        .subscribe(resp => this.FabricCosForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }

  ngOnYarncost() {

    if (this.id > 0) {
      this.title = "Edit";
      this.http.get("/api/YarnCostPreCostings/" + this.id)
        .subscribe(resp => this.YarnCostForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }

  ngOnConversioncost() {

    if (this.conversionCostId > 0) {
      this.title = "Edit";
      this.http.get("/api/ConversionCostPreCostings/" + this.conversionCostId)
        .subscribe(resp => this.ConversionCostForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }

  ngOnTrimCost() {
    if (this.trimCostId > 0) {
      this.title = "Edit";
      this.http.get("/api/TrimCostPreCostings/" + this.trimCostId)
        .subscribe(resp => this.TrimCosForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }
  ngOnEmbelishmentCost() {
    if (this.embelishmentCostId > 0) {
      this.title = "Edit";
      this.http.get("/api/EmbellishmentCostPreCostings/" + this.embelishmentCostId)
        .subscribe(resp => this.EmbelishmentCostForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      console.log(this.EmbelishmentCostForm.value);
      this.title = "Create";
    }
  }
  ngOnWashCost() {
    if (this.washCostId > 0) {
      this.title = "Edit";
      this.http.get("/api/WashCostPreCostings/" + this.washCostId)
        .subscribe(resp => this.WashCostForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }
  ngOnCommercialCost() {
    if (this.commercialCostId > 0) {
      this.title = "Edit";
      this.http.get("/api/CommercialCosts/" + this.commercialCostId)
        .subscribe(resp => this.CommercialCostForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }
  ngOnCommissionCost() {
    if (this.commissionCostId > 0) {
      this.title = "Edit";
      this.http.get("/api/CommissionCostPreCostings/" + this.commissionCostId)
        .subscribe(resp => this.CommissionCostForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }
  ngOnOtherCost() {
    if (this.otherCostId > 0) {
      console.log(`i am edited with id is == ${this.otherCostId}`);
      this.title = "Edit";
      this.http.get("/api/OtherCostPreCostings/" + this.otherCostId)
        .subscribe(resp => this.OtherCostForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      //console.log('i am created');
      this.title = "Create";
    }
  }

  ngOnConsUnitGmts() {
    if (this.consUnitGmtsId > 0) {
      this.title = "Edit";
      this.http.get("/api/ConsUnitGmtsTrimCosts/" + this.consUnitGmtsId)
        .subscribe(resp => this.ConsUnitGmtsForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }


  ngOnAvgGrayConsAdd() {
    if (this.avgGrayConsId > 0) {
      this.title = "Edit";
      this.http.get("/api/AvgGreyConsFabricCosts/" + this.avgGrayConsId)
        .subscribe(resp => {
          this.AvgGreyConsForm.setValue(resp)
        }
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }


  savePreCosting() {
    if (!this.PreCostingForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._http.post('/api/PreCostings', this.PreCostingForm.value)
        .subscribe(() => {
          this._http.get('/api/PreCostings').subscribe(result => {
            this.PreCostList = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }

    else if (this.title == "Edit") {
      this._http.put("/api/PreCostings/" + this.precostingId, this.PreCostingForm.value)
        .subscribe(() => {
          this._http.get('/api/PreCostings').subscribe(result => {
            this.PreCostList = result;
          }, error => console.error(error));
          //this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)

    }
    this.closeModalDialogPreCost();
  }

  saveFabCost() {
    if (!this.FabricCosForm.valid) {
      return;
    }

    if (this.title == "Create") {

      this.FabricCosForm.controls.preCostingId.setValue(this.activeRow);
      this._http.post('/api/FabricCosts', this.FabricCosForm.value)
        .subscribe((result) => {
          //api/AvgGreyConsFabricCosts/PrecostingId/FebricCostId
          console.log(result);
          this._http.post('/api/AvgGreyConsFabricCosts/' + this.activeRow + "/" + result.fabricCostId, this.itemDetailsArray)
            .subscribe(() => {

              this._http.get('/api/PreCostings/DetailsFabCost/' + this.activeRow).subscribe(result => {
                this.FabricCostList = result;
              }, error => console.error(error));

            }, error => console.error(error));
        }, error => this.errorMessage = error)
    }

    else if (this.title == "Edit") {
      this._http.put("/api/FabricCosts/" + this.fabricCostId, this.FabricCosForm.value)
        .subscribe(() => {

          this._http.get('/api/PreCostings/DetailsFabCost/' + this.activeRow).subscribe(result => {
            this.FabricCostList = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)

    }
    this.closeModalDialogFabcost();
  }




  saveYarnCost() {

    if (!this.YarnCostForm.valid) {
      return;
    }

    if (this.title == "Create") {

      this.YarnCostForm.controls.preCostingId.setValue(this.activeRow);

      this._http.post('/api/YarnCostPreCostings', this.YarnCostForm.value)
        .subscribe(() => {

          this._http.get('/api/PreCostings/DetailsYarncost/' + this.activeRow).subscribe(result => {
            this.YarnCostlist = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }

    else if (this.title == "Edit") {
      this._http.put("/api/YarnCostPreCostings/" + this.id, this.YarnCostForm.value)
        .subscribe(() => {

          this._http.get('/api/PreCostings/DetailsYarncost/' + this.activeRow).subscribe(result => {
            this.YarnCostlist = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)

    }
    this.closeYarncost();
  }

  saveConversioncost() {

    if (!this.ConversionCostForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this.ConversionCostForm.controls.preCostingId.setValue(this.activeRow);
      this.ConversionCostForm.controls.status.setValue(this.statusValue);
      this._http.post('/api/ConversionCostPreCostings', this.ConversionCostForm.value)
        .subscribe(() => {

          this._http.get('/api/PreCostings/DetailsConversionCost/' + this.activeRow).subscribe(result => {
            this.ConversionCostlist = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }

    else if (this.title == "Edit") {
      this.ConversionCostForm.controls.status.setValue(this.statusValue);
      this._http.put("/api/ConversionCostPreCostings/" + this.conversionCostId, this.ConversionCostForm.value)
        .subscribe(() => {

          this._http.get('/api/PreCostings/DetailsConversionCost/' + this.activeRow).subscribe(result => {
            this.ConversionCostlist = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)

    }
    this.closeModalDialogconversioncost();
  }

  saveTrimCost() {
    if (!this.TrimCosForm.valid) {
      return;
    }
    if (this.title == "Create") {
      this.TrimCosForm.controls.apvlReq.setValue(this.apvlValue);
      this.TrimCosForm.controls.precostingId.setValue(this.activeRow);
      this._http.post('/api/TrimCostPreCostings', this.TrimCosForm.value)
        .subscribe((res) => {
          if (this.itemDetailsArray2.length > 0) {
            this._http.post('/api/ConsUnitGmtsTrimCosts/' + res.id, this.itemDetailsArray2)
              .subscribe((res2) => {
                console.log('added ConsUnitGmtsTrimCosts');
              }, error => console.error(error));
          }
          this._http.get('/api/TrimCostPreCostings/trimsCostByPreCostId/' + this.activeRow).subscribe(result => {
            this.TrimsCostList = result;
          }, error => console.error(error));
        }, error => this.errorMessage = error)
    }

    else if (this.title == "Edit") {
      this.TrimCosForm.controls.apvlReq.setValue(this.apvlValue);
      this._http.put("/api/TrimCostPreCostings/" + this.trimCostId, this.TrimCosForm.value)
        .subscribe(() => {

          if (this.itemDetailsArray2.length > 0) {
            this._http.post('/api/ConsUnitGmtsTrimCosts/' + this.trimCostId, this.itemDetailsArray2)
              .subscribe((res) => {
                console.log('added ConsUnitGmtsTrimCosts');
              }, error => console.error(error));
          }

          this._http.get('/api/TrimCostPreCostings/trimsCostByPreCostId/' + this.activeRow).subscribe(result => {
            this.TrimsCostList = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)

    }
    this.closeModalTrimCost();
  }
  saveEmbelishmentCost() {
    if (!this.EmbelishmentCostForm.valid) {
      return;
    }
    if (this.title == "Create") {
      this.EmbelishmentCostForm.controls.precostingId.setValue(this.activeRow);
      this.EmbelishmentCostForm.controls.status.setValue(this.statusValue);
      console.log(this.EmbelishmentCostForm.value);
      this._http.post('/api/EmbellishmentCostPreCostings', this.EmbelishmentCostForm.value)
        .subscribe(() => {
          this._http.get('/api/EmbellishmentCostPreCostings/embellishmentCostByPreCostId/' + this.activeRow).subscribe(result => {
            this.EmbellishmentCostList = result;
          }, error => console.error(error));
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {
      this.EmbelishmentCostForm.controls.status.setValue(this.statusValue);
      this._http.put("/api/EmbellishmentCostPreCostings/" + this.embelishmentCostId, this.EmbelishmentCostForm.value)
        .subscribe(() => {
          this._http.get('/api/EmbellishmentCostPreCostings/embellishmentCostByPreCostId/' + this.activeRow).subscribe(result => {
            this.EmbellishmentCostList = result;
          }, error => console.error(error));
        }, error => this.errorMessage = error)
    }
    this.closeModalEmbelishmentCost();
  }
  saveWashCost() {
    if (!this.WashCostForm.valid) {
      return;
    }
    if (this.title == "Create") {
      this.WashCostForm.controls.precostingId.setValue(this.activeRow);
      this.WashCostForm.controls.status.setValue(this.statusValue);
      this._http.post('/api/WashCostPreCostings', this.WashCostForm.value)
        .subscribe(() => {
          this._http.get('/api/WashCostPreCostings/washCostPreCostingsByPreCostId/' + this.activeRow).subscribe(result => {
            this.WashCostList = result;
          }, error => console.error(error));
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {
      this.WashCostForm.controls.status.setValue(this.statusValue);
      this._http.put("/api/WashCostPreCostings/" + this.washCostId, this.WashCostForm.value)
        .subscribe(() => {
          this._http.get('/api/WashCostPreCostings/washCostPreCostingsByPreCostId/' + this.activeRow).subscribe(result => {
            this.WashCostList = result;
          }, error => console.error(error));
        }, error => this.errorMessage = error)
    }
    this.closeModalWashCost();
  }
  saveCommercialCost() {
    if (!this.CommercialCostForm.valid) {
      return;
    }
    if (this.title == "Create") {
      this.CommercialCostForm.controls.precostingId.setValue(this.activeRow);
      this.CommercialCostForm.controls.item.setValue(this.commercialItemValue);
      this.CommercialCostForm.controls.status.setValue(this.statusValue);
      this._http.post('/api/CommercialCosts', this.CommercialCostForm.value)
        .subscribe(() => {
          this._http.get('/api/CommercialCosts/commercialCostsByPreCostId/' + this.activeRow).subscribe(result => {
            this.CommercialCostsList = result;
          }, error => console.error(error));
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {
      this.CommercialCostForm.controls.status.setValue(this.statusValue);
      this.CommercialCostForm.controls.item.setValue(this.commercialItemValue);
      this._http.put("/api/CommercialCosts/" + this.commercialCostId, this.CommercialCostForm.value)
        .subscribe(() => {
          this._http.get('/api/CommercialCosts/commercialCostsByPreCostId/' + this.activeRow).subscribe(result => {
            this.CommercialCostsList = result;
          }, error => console.error(error));
        }, error => this.errorMessage = error)
    }

    this.closeModalCommercialCost();
  }

  saveCommissionCost() {
    if (!this.CommissionCostForm.valid) {
      return;
    }
    if (this.title == "Create") {
      this.CommissionCostForm.controls.precostingId.setValue(this.activeRow);
      this.CommissionCostForm.controls.status.setValue(this.statusValue);
      this.CommissionCostForm.controls.commnBase.setValue(this.commnBaseValue);
      this.CommissionCostForm.controls.particulars.setValue(this.particularsValue);
      /*

  commnBaseValue: string;
  particularsValue: string;*/

      //this.FabricCosForm.controls.preCostingId.setValue(this.activeRow);
      this._http.post('/api/CommissionCostPreCostings', this.CommissionCostForm.value)
        .subscribe(() => {
          this._http.get('/api/CommissionCostPreCostings/commissionCostPreCostingsByPreCostId/' + this.activeRow).subscribe(result => {
            this.commissionCostPreCostingsList = result;
          }, error => console.error(error));
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {
      this.CommissionCostForm.controls.status.setValue(this.statusValue);
      this.CommissionCostForm.controls.commnBase.setValue(this.commnBaseValue);
      this.CommissionCostForm.controls.particulars.setValue(this.particularsValue);

      this._http.put("/api/CommissionCostPreCostings/" + this.commissionCostId, this.CommissionCostForm.value)
        .subscribe(() => {
          this._http.get('/api/CommissionCostPreCostings/commissionCostPreCostingsByPreCostId/' + this.activeRow).subscribe(result => {
            this.commissionCostPreCostingsList = result;
          }, error => console.error(error));
        }, error => this.errorMessage = error)
    }

    this.closeModalCommissionCost();

  }

  saveOtherCost() {
    if (!this.OtherCostForm.valid) {
      return;
    }
    if (this.title == "Create") {
      this.OtherCostForm.controls.preCostingId.setValue(this.activeRow);
      this._http.post('/api/OtherCostPreCostings', this.OtherCostForm.value)
        .subscribe(() => {
          this._http.get('/api/OtherCostPreCostings/otherCostPreCostingsByPreCostId/' + this.activeRow).subscribe(result => {
            this.OtherCostsList = result;
          }, error => console.error(error));
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {
      this._http.put("/api/OtherCostPreCostings/" + this.otherCostId, this.OtherCostForm.value)
        .subscribe(() => {
          this._http.get('/api/OtherCostPreCostings/otherCostPreCostingsByPreCostId/' + this.activeRow).subscribe(result => {
            this.OtherCostsList = result;
          }, error => console.error(error));
        }, error => this.errorMessage = error)
    }

    this.closeModalOtherCost();

  }
  saveAvgGreCons() {
    if (!this.AvgGreyConsForm.valid) {
      return;
    }
    if (this.title == "Create") {

      this.itemDetailsArray.push(this.AvgGreyConsForm.value);



      this.mathArrayOfObject(this.itemDetailsArray);

      console.log(this.itemDetailsArray);

      this.displayAvgGrayConsAdd = 'none'

    } else if (this.title == "Edit") {
      this.mathArrayOfObject(this.itemDetailsArray);

      this._http.put("/api/AvgGreyConsFabricCosts/" + this.avgGrayConsId, this.AvgGreyConsForm.value)
        .subscribe(result => {

          console.log(result);
          //this._http.get("/api/AvgGreyConsFabricCosts/" + this.fabricCostId)
          //  .subscribe(res => {
          //    this.itemDetailsArray = res;


          //  }, error => this.errorMessage = error);
          //this.itemDetailsArray.push(result);
          this.mathArrayOfObject(this.itemDetailsArray);
        }, error => this.errorMessage = error)
    }
    this.mathArrayOfObject(this.itemDetailsArray);
    this.closeModalAvgGrayConsAdd();
  }

  saveConsUnitGmts() {
    if (!this.ConsUnitGmtsForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this.itemDetailsArray2.push(this.ConsUnitGmtsForm.value);
      this.mathArrayOfObjectCons(this.itemDetailsArray2);
      //push itemdetailarry2 this ConsUnitGmtsForm
      // & doing calculation for new item
      //console.log('i am submited saveConsUnitGmts ADD');

    }

    else if (this.title == "Edit") {
      this._http.put("/api/ConsUnitGmtsTrimCosts/" + this.consUnitGmtsId, this.ConsUnitGmtsForm.value)
        .subscribe(() => {
          this._http.get("/api/ConsUnitGmtsTrimCosts/TrimCostId/" + this.trimCostId)
            .subscribe(result => {
              //push itemdetailarry2 this ConsUnitGmtsForm
              // & doing calculation for new item
            }, error => console.error(error));
        }, error => this.errorMessage = error)

    }
    this.closeModalConsUnitGmtsAdd();
  }
}



export interface PreCostingData {
  precostingId: number;
  orderId: number;
  costingDate: string;
  incoterm: string;
  incotermPlace: string;
  sewEfficiency: string;
}

export interface FabricCostData {
  fabricCostId: number;
  preCostingId: number;
  bodyPartId: number;
  bodyPartType: string;
  fabNature: string;
  colorType: string;
  fabDescId: number;
  fabricSource: string;
  nominatedSupplierId: number;
  widthorDiaType: string;
  gsmorWeight: DoubleRange;
  colornSizenSensitive: string;
  color: string;
  consumptionBasis: string;
  uom: string;
  avgGreyCons: DoubleRange;
  rate: DoubleRange;
  amount: DoubleRange;
  totalQty: DoubleRange;
  totalAmount: DoubleRange;
}
export interface YarnCostData {
  id: number;
  preCostingId: number;
  countId: number;
  comp1Id: number;
  percent: DoubleRange;
  yarnTypeId: number;
  consQnty: DoubleRange;
  supplierId: number;
  rate: DoubleRange;
  amont: DoubleRange;
}

export interface ConversionCostData {
  conversionCostId: number;
  preCostingId: number;
  fabDescId: number;
  conversionProcessId: number;
  processLoss: DoubleRange;
  reqQty: DoubleRange;
  avgReqQty: DoubleRange;
  chargeUnit: DoubleRange;
  amount: DoubleRange;
  status: string;
}
export interface TrimsCostData {
  id: number;
  precostingId: number;
  groupName: string;
  country: string;
  description: string;
  bandSupRef: string;
  remarks: string;
  nominatedSupp: number;
  consUom: string;
  consUnitGmts: string
  rate: string;
  amount: DoubleRange;
  totalQty: DoubleRange;
  totalAmount: DoubleRange;
  apvlReq: string;
  image: string;
}

import { Component, Inject, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-fetchInitialOrdere',
  templateUrl: './fetchInitialOrdere.component.html',

})


export class FetchinitialorderComponent implements OnInit {
  itemDetailsArray: any = [];

  public iniorderlist: InitorderData[];
  public OrderMasterDetailsList: MasterOderDetailsData[];
  public complist: companyData[];
  public locationlist: locationData[];
  public buyerlist: buyerData[];
  public proddeptlist: ProdDeptData[];
  public SubDeptlist: SubDeptData[];
  public Currencylist: CurrencyData[];
  public Regionlist: RegionData[];
  public ProductionCattlist: PrdouctionCategoryData[];
  public Teamleaderlist: TeamleaderData[];
  public ShipmentModelist: ShipmentModeData[];
  public OrderUomlist: OrderUomData[];
  public Seasonlist: SeasonData[];
  public Agentlist: AgentData[];
  public Userslist: UserData[];
  public PoOrderStatusList: PoOrderStatusData[];
  public Packinglist: PackingData[];
  public DealingMarcentdizerlist: DealingMarchntdizeryData[];
  public postatuslist: PoStatusData[];
  public OrderImagelist: OrderImageData[];
  public OrderItemlist: OrderItemData[]


  public InputPannelPodetailslist: InputPannelPodetailsData[];
  public SizewisePODetailsList: SizeWisePODetailsData[];


  itemDetailId: number = 0;
  orderAutoId: number = 0;
  poDetId: number = 0;
  inputPannelId: number = 0;
  sizePannelId: number = 0;


  // ratio calculation for item details
  totalRatio: number = 0;
  totalSewSmvPcs: number = 0;
  totalCutSmvPcs: number = 0;
  totalFinSmvPcs: number = 0;
  // ratio calculation for item details


  //filter value
  itemsValue: string;
  complexity_val: string;
  print_val: string;
  embro_val: string;
  wash_val: string;
  spworks_val: string;
  gmtsdyeing_val: string;
  aop_val: string;
  //filter value

  errorMessage: any;
  _http: any;
  router: any;

  display = 'none';
  displayDetails = 'none';
  displayinputpannel = 'none';
  displaysizewise = 'none';
  displayItemDetails = 'none';
  displayItemDetailsAdd = 'none';

  inputpannelPoDetailsForm: FormGroup;
  SizePannelPODetailsForm: FormGroup;
  masterorderDetailsForm: FormGroup;
  masterorderForm: FormGroup;
  ItemDetailsForm: FormGroup;
  editable: boolean = false;

  title: string = "Create";
  myName: string;
  activeRow: string = "0";
  activeRow1: string = "0";
  _fbdetails: any;

  public progress: number;
  public message: string;
  public url: any;
  ddd: string;




  constructor(public _DomSanitizer: DomSanitizer, public http: HttpClient, private _fb: FormBuilder, private _router: Router, private _avRoute: ActivatedRoute) {
    this.http.get<InitorderData[]>('/api/initialorders/Index').subscribe(result => {
      this.iniorderlist = result;
    });

    this._fbdetails = _fb;

    this._http = http;
    this.router = _router;

    //Initializing form group Details table 
    this.masterorderDetailsForm = this._fb.group({
      poDetId: 0,
      initialOrderId: 0,
      poorderStatusId: [''],
      poNo: [''],
      poReceivedDate: [''],
      pubShipmentDate: [''],
      orgShipmentDate: [''],
      facReceiveDate: [''],
      poQuantity: [''],
      avgPrice: [''],
      amount: [''],
      excessCut: [''],
      planCut: [''],
      poStatusId: [''],
      projectedPo: [''],
      tnaFromOrUpto: [''],
      internalRefOrGrouping: [''],
      delayFor: [''],
      packingId: [''],
      fileNo: [''],
      scorLc: [''],
      remarks: [''],
     
    });
    this.inputpannelPoDetailsForm = this._fb.group({
      inputPannelId: 0,
      poDetailsId: 0,
      countryId: [''],
      countryType: [''],
      cuttOffDate: [''],
      cuttOff: [''],
      countryShipmentDate: [''],
      remarks: [''],
      packingId: [''],
      quantity: ['']
    });
    this.SizePannelPODetailsForm = this._fb.group({
      sizePannelId: 0,
      inputPannelId: 0,
      itemId: [''],
      articleNumber: [''],
      color: [''],
      size: [''],
      quanity: ['']
    });

    this.ItemDetailsForm = this._fb.group({
      id: 0,
      orderEntryId: 0,
      item: [''],
      ratio: 0,
      sewSmvPcs: 0,
      cutSmvPcs: 0,
      finSmvPcs: 0,
      complexity: [''],
      print: [''],
      embroYesNo: [''],
      embroNumber: [''],
      washYesNo: [''],
      washNumber: [''],
      spWorksYesNo: [''], 
      spWorksNumber: [''],
      gmtsDyeingYesNo: [''],
      gmtsDyeingNumber: [''],
      aopYesNo: [''],
      aopNumber: ['']
    });
    //ratio   ,totalRatio, ratio*sewSmvPcs  , ratio*cutSmvPcs   ,  ratio*finSmvPcs

    http.get<companyData[]>('/api/CompanyInfoes/Index').subscribe(result => {
      this.complist = result;
    }, error => console.error(error));

    http.get<locationData[]>('/api/LocationInfoes/Index').subscribe(result => {
      this.locationlist = result;
    }, error => console.error(error));



    http.get<buyerData[]>('/api/BuyerInfoes/Index').subscribe(result => {
      this.buyerlist = result;
    }, error => console.error(error));

    //his.baseUrl + 'api

    http.get<ProdDeptData[]>('/api/ProductionDeptInfoes/Index').subscribe(result => {
      this.proddeptlist = result;
    }, error => console.error(error));

    http.get<SubDeptData[]>('/api/SubDeptInfoes/Index').subscribe(result => {
      this.SubDeptlist = result;
    }, error => console.error(error));

    http.get<CurrencyData[]>('/api/CurrencyInfoes/Index').subscribe(result => {
      this.Currencylist = result;
    }, error => console.error(error));

    http.get<RegionData[]>('/api/RegionInfoes/Index').subscribe(result => {
      this.Regionlist = result;
    }, error => console.error(error));

    http.get<PrdouctionCategoryData[]>('/api/ProductCategoryInfoes/Index').subscribe(result => {
      this.ProductionCattlist = result;
    }, error => console.error(error));

    http.get<DealingMarchntdizeryData[]>('/api/DealingMrcndiserInfoes/Index').subscribe(result => {
      this.DealingMarcentdizerlist = result;
    }, error => console.error(error));

    http.get<TeamleaderData[]>('/api/TeamlederInfoes/Index').subscribe(result => {
      this.Teamleaderlist = result;
    }, error => console.error(error));

    http.get<ShipmentModeData[]>('/api/ShipmentModeInfoes/Index').subscribe(result => {
      this.ShipmentModelist = result;
    }, error => console.error(error));

    http.get<OrderUomData[]>('/api/OrderUomInfoes/Index').subscribe(result => {
      this.OrderUomlist = result;
    }, error => console.error(error));

    http.get<SeasonData[]>('/api/SeasonInfoes/Index').subscribe(result => {
      this.Seasonlist = result;
    }, error => console.error(error));

    http.get<AgentData[]>('/api/AgentInfoes/Index').subscribe(result => {
      this.Agentlist = result;
    }, error => console.error(error));

    http.get<UserData[]>('/api/UserInfoes/Index').subscribe(result => {
      this.Userslist = result;
    }, error => console.error(error));

    http.get<PoOrderStatusData[]>('/api/PoOrderStatusInfoes/Index').subscribe(result => {
      this.PoOrderStatusList = result;
    }, error => console.error(error));

    http.get<PackingData[]>('/api/PackingInfoes/Index').subscribe(result => {
      this.Packinglist = result;
    }, error => console.error(error));


    http.get<PoStatusData[]>('/api/PoStatus/Index').subscribe(result => {
      this.postatuslist = result;
    }, error => console.error(error));

    http.get<OrderImageData[]>('/api/OrderImageUploadTbls').subscribe(result => {
      this.OrderImagelist = result;
    }, error => console.error(error));

    http.get<OrderItemData[]>('/api/OrderItems').subscribe(result => {
      this.OrderItemlist = result;
    }, error => console.error(error));

  }


  upload(files, event: any, AutoID: number) {
    if (files.length === 0)
      return;

    const formData = new FormData();


    for (let file of files) {
      formData.append(file.name, file);
    }

    const uploadReq = new HttpRequest('POST', '/api/OrderImageUploadTbls/upload/' + AutoID, formData, {
      reportProgress: true,
    });

    this.http.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) { }

    });

    this.readUrl(event);
    //alert("upload has been successfully !! ");

  }


  item_btn: any = [
    { btn: 'Select', val: 'Select' },
    { btn: 'Blanket', val: 'Blanket' },
    { btn: 'Bodysuit', val: 'Bodysuit' },
    { btn: 'Burmuda', val: 'Burmuda' },
    { btn: 'Cap', val: 'Cap' },
    { btn: 'Dress', val: 'Dress' },
    { btn: 'Dungaress', val: 'Dungaress' },
    { btn: 'Hoody Jacket', val: 'Hoody Jacket' },
    { btn: 'Jacket', val: 'Jacket' },
    { btn: 'Legging', val: 'Legging' },
    { btn: 'Long Sleeve Dress with Frill', val: 'Long Sleeve Dress with Frill' },
    { btn: 'Long Sleeve Raglam Tee', val: 'Long Sleeve Raglam Tee' },
    { btn: 'Long Sleeve Tee', val: 'Long Sleeve Tee' },
    { btn: 'Necker Chief', val: 'Necker Chief' },
    { btn: 'Pant', val: 'Pant' },
    { btn: 'Playsuit', val: 'Playsuit' },
    { btn: 'Polo Shirt', val: 'Polo Shirt' },
    { btn: 'T-Shirt', val: 'T-Shirt' },
    { btn: 'TANK TOP', val: 'TANK TOP' },
    { btn: 'Trousers', val: 'Trousers' },
    { btn: 'shorts', val: 'shorts' }
  ]

  filterItems(selectedValue: string) {
    //console.log(selectedValue)
    this.itemsValue = selectedValue
    //console.log(this.itemsValue)
    //console.log('value is ', selectedValue);
  }


  complexity_btn: any = [
    { btn: 'Select', val: 'Select' },
    { btn: 'Fancy', val: 'Fancy' },
    { btn: 'Critical', val: 'Critical' },
    { btn: 'Average', val: 'Average' }
  ]

  filterComplexity_btn(selectedValue: string) {
    this.complexity_val = selectedValue
  }
  yes_no_btn: any = [
    { btn: 'Select', val: 'Select' },
    { btn: 'Yes', val: 'Yes' },
    { btn: 'No', val: 'No' }
  ]

  filterPrint_btn(selectedValue: string) {
    this.print_val = selectedValue
  }
  filterEmbro_btn(selectedValue: string) {
    this.embro_val = selectedValue
  }
  filterWash_btn(selectedValue: string) {
    this.wash_val = selectedValue
  }
  filterSPWorks_btn(selectedValue: string) {
    this.spworks_val = selectedValue
  }
  filterGmtsDyeing_btn(selectedValue: string) {
    this.gmtsdyeing_val = selectedValue
  }
  filterAop_btn(selectedValue: string) {
    this.aop_val = selectedValue
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }


  getOrderMasterDetails(orderAutoId) {
    this.http.get<MasterOderDetailsData[]>('/api/initialorders/Details/' + orderAutoId).subscribe(result => {
      this.OrderMasterDetailsList = result;
    });
    this.activeRow = orderAutoId;
    this.GetInputPannelDetails(this.activeRow);
  }


  GetInputPannelDetails(poDetId) {
    this.http.get<InputPannelPodetailsData[]>('/api/MasterPodetailsInfroes/Details/' + poDetId).subscribe(result => {
      this.InputPannelPodetailslist = result;
    });
    this.activeRow = poDetId;
    this.getSizeWizePoDetails(this.activeRow);
  }


  getSizeWizePoDetails(inputPannelId) {
    this.http.get<SizeWisePODetailsData[]>('/api/InputPannelPodetails/Details/' + inputPannelId).subscribe(result => {
      this.SizewisePODetailsList = result;
    });
    this.activeRow = inputPannelId;
  }



  openModalDialog(orderAutoId) {
    this.orderAutoId = orderAutoId;
    this.ngOnInit();
    this.display = 'block';
  }

  closeModalDialog() {
    this.display = 'none';
    //this.mathArrayOfObject(this.itemDetailsArray = []);
  }

  openDetailsModalDialog(poDetId) {
    //api/Studentdetails
    this.poDetId = poDetId;
    this.ngOnDetailsInit();
    this.displayDetails = 'block';
  }

  closeDetailsModalDialog() {
    this.displayDetails = 'none';
  }

  openModalDialogForInputPannel(inputPannelId) {
    this.inputPannelId = inputPannelId;
    this.ngOnInitForInputPannel();
    this.displayinputpannel = 'block';
  }

  closeModalDialogForInputPannel() {
    this.displayinputpannel = 'none';
  }

  openDetailsModalDialogForSizeWise(sizePannelId) {

    this.sizePannelId = sizePannelId;
    this.ngOnsizewise();
    this.displaysizewise = 'block';
  }

  closeDetailsModalDialogForsizewise() {
    this.displaysizewise = 'none';
  }

  mathArrayOfObject(arrayObje) {
    if (arrayObje.length > 0) {
      this.totalRatio = 0;
      this.totalSewSmvPcs = 0;
      this.totalCutSmvPcs = 0;
      this.totalFinSmvPcs = 0;

      arrayObje.map(item => {
        this.totalRatio += Number((item.ratio).toFixed(2));
        this.totalSewSmvPcs += Number((item.ratio * item.sewSmvPcs).toFixed(2));
        this.totalCutSmvPcs += Number((item.ratio * item.cutSmvPcs).toFixed(2));
        this.totalFinSmvPcs += Number((item.ratio * item.finSmvPcs).toFixed(2));
      });
      this.masterorderForm.controls.smv.setValue(this.totalSewSmvPcs);
    } else {
      this.totalRatio = 0;
      this.totalSewSmvPcs = 0;
      this.totalCutSmvPcs = 0;
      this.totalFinSmvPcs = 0;
    }
  }

  //Open Modal 
  openModalItemDetails(id) {
    this.display = 'block';
    this.itemDetailId = id;
    //console.log(`i am open modal items Details  ${id}`);
    if (this.orderAutoId > 0) {
      this._http.get("api/ItemDetailsOrderEntries/ByOrderEntryId/" + this.orderAutoId)
        .subscribe(result => {
          this.itemDetailsArray = result;

          this.mathArrayOfObject(this.itemDetailsArray);
        }, error => this.errorMessage = error);
    }
    //this.ngOnItemDetails();
    this.displayItemDetails = 'block';
  }
  //Close Modal 
  closeModalItemDetails() {

    this.displayItemDetails = 'none';
  }

  //Open Modal 
  openModalItemDetailsAdd(id) {
    this.display = 'block';
    //console.log('sodjfosj');
    this.itemDetailId = id;
    this.ngOnItemDetailsAdd();
    console.log(`i am open modal items Details Add ${id}`);
    //this.ngOnItemDetails();
    this.displayItemDetailsAdd = 'block';
  }
  //Close Modal 
  closeModalItemDetailsAdd() {
    this.displayItemDetailsAdd = 'none';

  }

  openModalItemDetailsEdit(id) {
    //console.log(`i am going to be edit & my id is  ${id}`);
  }

  deleteItemDetails2(id) {
    //console.log(`i am going to die ${id}`);
    var ans = confirm("Do you want to delete Master Order with Id: " + id);
    if (ans) {
      this._http.delete("/api/ItemDetailsOrderEntries/" + id)
        .subscribe(() => {
          this._http.get("/api/ItemDetailsOrderEntries/ByOrderEntryId/" + this.orderAutoId)
            .subscribe(result => {
              this.itemDetailsArray = result;

              this.mathArrayOfObject(this.itemDetailsArray);
            }, error => console.error(error));
        }, error => this.errorMessage = error)
    }
  }
  delete(orderAutoID) {
    var ans = confirm("Do you want to delete Master Order with Id: " + orderAutoID);
    if (ans) {
      //api/ItemDetailsOrderEntries/ByOrderEntryId/319
      this._http.delete("/api/ItemDetailsOrderEntries/ByOrderEntryId/" + orderAutoID)
        .subscribe(() => {
          this._http.delete("/api/initialorders/" + orderAutoID)
            .subscribe(() => {

              this._http.get('/api/initialorders/Index').subscribe(result => {
                this.iniorderlist = result;
              }, error => console.error(error));
            }, error => this.errorMessage = error)
        }, error => this.errorMessage = error)
    }
  }


  deleteMasterDetails(poDetId) {
    var ans = confirm("Do you want to delete Master Order with Id: " + poDetId);
    if (ans) {
      this.http.delete("/api/MasterPodetailsInfroes/" + poDetId)
        .subscribe(() => {

          this._http.get('/api/initialorders/Details/' + this.activeRow).subscribe(result => {
            this.OrderMasterDetailsList = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }
  }



  deleteinputpannel(inputPannelId) {
    var ans = confirm("Do you want to delete Master Order with Id: " + inputPannelId);
    if (ans) {
      this._http.delete("/api/InputPannelPodetails/" + inputPannelId)
        .subscribe(() => {

          this._http.get('/api/MasterPodetailsInfroes/Details/' + this.activeRow).subscribe(result => {
            this.InputPannelPodetailslist = result;
          }, error => console.error(error));



        }, error => this.errorMessage = error)
    }
  }


  deleteSizewisePO(sizePannelId) {
    var ans = confirm("Do you want to delete Master Order with Id: " + sizePannelId);
    if (ans) {
      this.http.delete("/api/SizePannelPodetails/" + sizePannelId)
        .subscribe(() => {

          this._http.get('/api/InputPannelPodetails/Details/' + this.activeRow).subscribe(result => {
            this.SizewisePODetailsList = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }
  }


  deleteItemDetails(itemDetailId) {
    var ans = confirm("Do you want to delete ItemDetails with Id: " + itemDetailId);
    if (ans) {
      this.http.delete("/api/OtherCostPreCostings/" + itemDetailId)
        .subscribe(() => {
          this._http.get('/api/OtherCostPreCostings/otherCostPreCostingsByPreCostId/' + this.activeRow).subscribe(result => {
            console.log(result);
            //this.OtherCostList = result;
          }, error => console.error(error));
        }, error => this.errorMessage = error)
    }
  }

  deleteItemDetailsAdd(itemDetailId) {
    var ans = confirm("Do you want to delete ItemDetails with Id: " + itemDetailId);
    if (ans) {
      this.http.delete("/api/OtherCostPreCostings/" + itemDetailId)
        .subscribe(() => {
          this._http.get('/api/OtherCostPreCostings/otherCostPreCostingsByPreCostId/' + this.activeRow).subscribe(result => {
            console.log(result);
            //this.OtherCostList = result;
          }, error => console.error(error));
        }, error => this.errorMessage = error)
    }
  }

  ngOnInit()
  {
    this.masterorderForm = this._fb.group({
      orderAutoId: 0,
      companyId: ['', [Validators.required]],
      locationId: ['', [Validators.required]],
      buyerId: ['', [Validators.required]],
      styleRef: ['', [Validators.required]],
      styleDescription: [''],
      prodDeptId: ['', [Validators.required]],
      subDeptId: [''],
      currencyId: [''],
      regionId: [''],
      productCatId: ['', [Validators.required]],
      teamLeaderId: ['', [Validators.required]],
      dealingMerchantId: ['', [Validators.required]],
      bhMerchant: [''],
      remarks: [''],
      shipmentModeId: [''],
      orderUomId: ['', [Validators.required]],
      smv: ['0', [Validators.required]],
      packingId: ['', [Validators.required]],
      seasonId: [''],
      agentId: [''],
      userId: [''],
     // imagefile: [''],
      orderNumber: ['', [Validators.required]],
      jobNo: [''],
      repeatNoJob: ['']
    })

    if (this.orderAutoId > 0) {
      this.title = "Edit";
      this._http.get("/api/initialorders/" + this.orderAutoId)
        .subscribe(resp => {
          this.masterorderForm.setValue(resp);
        }, error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }

  ngOnDetailsInit() {

    if (this.poDetId > 0) {
      this.title = "Edit";
      this.http.get("/api/MasterPodetailsInfroes/" + this.poDetId)
        .subscribe(resp => this.masterorderDetailsForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }

  ngOnInitForInputPannel() {




    if (this.inputPannelId > 0) {
      this.title = "Edit";
      this._http.get("/api/InputPannelPodetails/" + this.inputPannelId)
        .subscribe(resp => this.inputpannelPoDetailsForm.setValue(resp)
          , error => this.errorMessage = error);

    }
    else {
      this.title = "Create";
    }
  }

  ngOnsizewise() {


    if (this.sizePannelId > 0) {
      this.title = "Edit";
      this.http.get("/api/SizePannelPodetails/" + this.sizePannelId)
        .subscribe(resp => this.SizePannelPODetailsForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }
  ngOnItemDetailsAdd() {
    if (this.itemDetailId > 0) {
      this.title = "Edit";
      this.http.get("/api/ItemDetailsOrderEntries/" + this.itemDetailId)
        .subscribe(resp => {
          this.ItemDetailsForm.setValue(resp)
        }
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }


  saveItemDetails() {
    if (!this.ItemDetailsForm.valid) {
      return;
    }


    if (this.title == "Create") {
      this.ItemDetailsForm.controls.item.setValue(this.itemsValue);
      this.ItemDetailsForm.controls.complexity.setValue(this.complexity_val);
      this.ItemDetailsForm.controls.print.setValue(this.print_val);
      this.ItemDetailsForm.controls.embroYesNo.setValue(this.embro_val);
      this.ItemDetailsForm.controls.washYesNo.setValue(this.wash_val);
      this.ItemDetailsForm.controls.spWorksYesNo.setValue(this.spworks_val);
      this.ItemDetailsForm.controls.gmtsDyeingYesNo.setValue(this.gmtsdyeing_val);
      this.ItemDetailsForm.controls.aopYesNo.setValue(this.aop_val);
      this.itemDetailsArray.push(this.ItemDetailsForm.value);
      console.log("here is item details create end");

      this.mathArrayOfObject(this.itemDetailsArray);

    }
    else if (this.title == "Edit") {
      this.mathArrayOfObject(this.itemDetailsArray);

      this._http.put("/api/ItemDetailsOrderEntries/" + this.itemDetailId, this.ItemDetailsForm.value)
        .subscribe(result => {
          console.log(result);
        }, error => this.errorMessage = error)
      //console.log(this.ItemDetailsForm.value);

    }
    this.closeModalItemDetailsAdd();
  }

  saveOrderMaster(files, event: any) {
    if (!this.masterorderForm.valid) {
      return;
    }


    if (this.title == "Create") {
      this._http.post('/api/initialorders', this.masterorderForm.value).subscribe(result => {
        //console.log("itemDetailsArray");
        //console.log(this.itemDetailsArray);
        if (this.itemDetailsArray.length > 0) {
          this._http.post('/api/ItemDetailsOrderEntries/' + result.orderAutoId, this.itemDetailsArray)
            .subscribe(resInit => {
              this.itemDetailsArray = [];

              this.totalRatio = 0;
              this.totalSewSmvPcs = 0;
              this.totalCutSmvPcs = 0;
              this.totalFinSmvPcs = 0;
            }, error => console.error(error));
        }
        if (files.length === 0)
          return;
        const formData = new FormData();
        for (let file of files) {
          formData.append(file.name, file);
        }
        this._http.post('/api/OrderImageUploadTbls/' + result.orderAutoId, formData).subscribe(result => {
          this._http.get('/api/OrderImageUploadTbls/').subscribe(result => {
            this.OrderImagelist = result;
          }, error => console.error(error));
          this._http.get('/api/initialorders/Index').subscribe(result => {
            this.iniorderlist = result;
          }, error => this.errorMessage = error);
        });
        //}, error => console.error(error));
      }, error => this.errorMessage = error)
    }

    else if (this.title == "Edit") {
      this._http.put("/api/initialorders/" + this.orderAutoId, this.masterorderForm.value)
        .subscribe(result => {
          if (files.length === 0)
            return;
          const formData = new FormData();
          for (let file of files) {
            formData.append(file.name, file);
          }
          this._http.post('/api/OrderImageUploadTbls/' + result.orderAutoId, formData).subscribe(result => {

            this._http.get('/api/OrderImageUploadTbls/').subscribe(result => {
              this.OrderImagelist = result;
            }, error => console.error(error));
            this._http.get('/api/initialorders/Index').subscribe(result => {
              this.iniorderlist = result;
            }, error => console.error(error));
          });

        }, error => this.errorMessage = error)
    }
    this.closeModalDialog();
  }


  saveMasterOrderDetails() {
    if (!this.masterorderDetailsForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this.masterorderDetailsForm.controls.initialOrderId.setValue(this.activeRow);
      this._http.post('/api/MasterPodetailsInfroes', this.masterorderDetailsForm.value)
        .subscribe(() => {

          this._http.get('/api/initialorders/Details/' + this.activeRow).subscribe(result => {
            this.OrderMasterDetailsList = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }


    else if (this.title == "Edit") {
      this._http.put("/api/MasterPodetailsInfroes/" + this.poDetId, this.masterorderDetailsForm.value)
        .subscribe(() => {

          this._http.get('/api/initialorders/Details/' + this.activeRow).subscribe(result => {
            this.OrderMasterDetailsList = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)

    }
    this.closeDetailsModalDialog();
  }

  saveInputPannel() {
    if (!this.inputpannelPoDetailsForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this.inputpannelPoDetailsForm.controls.poDetailsId.setValue(this.activeRow);
      this._http.post('/api/InputPannelPodetails', this.inputpannelPoDetailsForm.value)
        .subscribe(() => {

          this._http.get('/api/MasterPodetailsInfroes/Details/' + this.activeRow).subscribe(result => {
            this.InputPannelPodetailslist = result;
          }, error => console.error(error));


        }, error => this.errorMessage = error)
    }

    else if (this.title == "Edit") {
      this._http.put("/api/InputPannelPodetails/" + this.inputPannelId, this.inputpannelPoDetailsForm.value)
        .subscribe(() => {

          this._http.get('/api/MasterPodetailsInfroes/Details/' + this.activeRow).subscribe(result => {
            this.InputPannelPodetailslist = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)

    }
    this.closeModalDialogForInputPannel();
  }

  saveSizePannelPodetails() {
    if (!this.SizePannelPODetailsForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this.SizePannelPODetailsForm.controls.inputPannelId.setValue(this.activeRow);
      this._http.post('/api/SizePannelPodetails', this.SizePannelPODetailsForm.value)
        .subscribe(() => {

          this._http.get('/api/InputPannelPodetails/Details/' + this.activeRow).subscribe(result => {
            this.SizewisePODetailsList = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }

    else if (this.title == "Edit") {
      this._http.put("/api/SizePannelPodetails/" + this.sizePannelId, this.SizePannelPODetailsForm.value)
        .subscribe(() => {

          this._http.get('/api/InputPannelPodetails/Details/' + this.activeRow).subscribe(result => {
            this.SizewisePODetailsList = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)

    }
    this.closeDetailsModalDialogForsizewise();
  }


}

export interface InitorderData {


  orderAutoId: number;
  jobNo: string;
  companyId: number;
  locationId: number;
  buyerId: number;
  styleRef: string;
  styleDescription: string;
  prodDeptId: number;
  subDeptId: number;
  currencyId: number;
  regionId: number;
  productCatId: number;
  teamLeaderId: number;
  dealingMerchantId: number;
  bhMerchant: string;
  remarks: string;
  shipmentModeId: number;
  orderUomId: number;
  smv: string;
  packingId: number;
  seasonId: number;
  agentId: number;
  userId: number;
  repeatNoJob: string;
  orderNumber: string;

}


export interface MasterOderDetailsData {

  poDetId: number;
  initialOrderId: number;
  poorderStatusId: number;
  poNo: number;
  poReceivedDate: Date;
  pubShipmentDate: Date;
  orgShipmentDate: Date;
  facReceiveDate: Date;
  poQuantity: DoubleRange;
  avgPrice: DoubleRange;
  amount: DoubleRange;
  excessCut: DoubleRange;
  planCut: DoubleRange;
  poStatusId: number;
  projectedPo: number;
  tnaFromOrUpto: Date;
  internalRefOrGrouping: string;
  delayFor: string;
  packingId: number;
  fileNo: string;
  scorLc: string;
  remarks: string;

}



interface companyData {

  compId: number;
  companyName: string;


}
interface locationData {

  locationId: number;
  locationName: string;
}


interface buyerData {

  buyerId: number;
  buyerName: string;
  details: string;
}

interface ProdDeptData {

  id: number;
  prodDeptName: string;
  departmentId: number;
}

interface SubDeptData {

  subDeptId: number;
  subDeptName: string;
  departmentId: number;
}

interface CurrencyData {

  currencyId: number;
  currencyName: string;
}

interface RegionData {

  regionId: number;
  regionName: string;
}

interface PrdouctionCategoryData {

  prodCatId: number;
  prodCategoryName: string;
}

interface DealingMarchntdizeryData {

  id: number;
  teamleaderId: number;
  userId: number;
}

interface TeamleaderData {

  teamleaderId: number;
  userId: number;
}

interface ShipmentModeData {

  id: number;
  shipmentMode: string;
}

interface OrderUomData {

  uomid: number;
  orderUomName: string;
}

interface SeasonData {

  seasonId: number;
  seasonName: string;
}


interface AgentData {

  agentId: number;
  agentName: string;
}

interface UserData {

  userId: number;
  fullName: string;
  email: string;
  contact: string;
  regDate: Date;
  userName: string;
  userPassword: string;
  userTypeId: number;
  deptId: number;
}


interface PoOrderStatusData {
  id: number;
  orderStatus: string;
}


interface PackingData {
  packingId: number;
  packingName: string;
}

interface PoStatusData {
  id: number;
  status: string;
}

interface OrderImageData {

  orderImgUploadId: number;
  initialOrderId: number;
  fileName: string;
  fileSize: string;
  imgPath: string;
}


export interface InputPannelPodetailsData {


  inputPannelId: number;
  poDetailsId: number;
  countryId: number;
  countryType: string;
  cuttOffDate: Date;
  cuttOff: string;
  countryShipmentDate: Date;
  remarks: string;
  packingId: number;
  quantity: DoubleRange;

}


export interface SizeWisePODetailsData {

  sizePannelId: number;
  inputPannelId: number;
  itemId: number;
  articleNumber: string;
  color: string;
  size: DoubleRange;
  quanity: DoubleRange;



}
export interface OrderItemData {

  itemId: number;
  name: string;
}

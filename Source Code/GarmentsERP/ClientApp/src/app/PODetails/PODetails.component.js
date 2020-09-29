//import { Component, Inject, OnInit } from '@angular/core';
//import { HttpClient, HttpHandler } from '@angular/common/http';
//import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
//import { Http, Headers } from '@angular/http';
//import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
//import { Router, ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';
//import { HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
//import { DomSanitizer } from '@angular/platform-browser';
//@Component({
//  selector: 'app-PODetails',
//  templateUrl: './PODetails.component.html',
//})
//export class PODetailsComponent implements OnInit {
//  public InputPannelPodetailslist: InputPannelPodetailsData[];
//  public SizewisePODetailsList: SizeWisePODetailsData[];
//  public OrderMasterDetails: MasterOderDetailsData[];
//  public Regionlist: RegionData[];
//  public ProductionCattlist: PrdouctionCategoryData[];
//  public Packinglist: PackingData[];
//  inputPannelId: number = 0;
//  sizePannelId: number = 0;
//  errorMessage: any;
//  _http: any;
//  router: any;
//  display = 'none';
//  displayDetails = 'none';
//  inputpannelPoDetailsForm: FormGroup;
//  SizePannelPODetailsForm: FormGroup;
//  title: string = "Create";
//  myName: string;
//  activeRow: string = "0";
//  _fbdetails: any;
//  public progress: number;
//  public message: string;
//  public url: any;
//  constructor(public _DomSanitizer: DomSanitizer, public http: HttpClient, private _fb: FormBuilder, private _router: Router, private _avRoute: ActivatedRoute) {
//    this.http.get<InputPannelPodetailsData[]>('/api/InputPannelPodetails/Index').subscribe(result => {
//      this.InputPannelPodetailslist = result;
//    });
//    this._fbdetails = _fb;
//    this._http = http;
//    this.router = _router;
//    this.SizePannelPODetailsForm = this._fb.group({
//      sizePannelId: 0,
//      poDetailsId: 0,
//      countryId: [''],
//      countryType: [''],
//      cuttOffDate: [''],
//      cuttOff: [''],
//      countryShipmentDate: [''],
//      facReceiveDate: [''],
//      remarks: [''],
//      packingId: [''],
//      quantity: [''],
//    });
//    http.get<MasterOderDetailsData[]>('/api/MasterPodetailsInfroes/Index').subscribe(result => {
//      this.OrderMasterDetails = result;
//    }, error => console.error(error));
//    http.get<RegionData[]>('/api/RegionInfoes/Index').subscribe(result => {
//      this.Regionlist = result;
//    }, error => console.error(error));
//    http.get<PrdouctionCategoryData[]>('/api/ProductCategoryInfoes/Index').subscribe(result => {
//      this.ProductionCattlist = result;
//    }, error => console.error(error));
//    http.get<PackingData[]>('/api/PackingInfoes/Index').subscribe(result => {
//      this.Packinglist = result;
//    }, error => console.error(error));
//}
//  getSizeWizePoDetails(inputPannelId) {
//    this.http.get<SizeWisePODetailsData[]>('/api/InputPannelPodetails/Details/' + inputPannelId).subscribe(result => {
//      this.SizewisePODetailsList = result;
//    });
//    this.activeRow = inputPannelId;
//  }
//  openModalDialogForInputPannel(inputPannelId) {
//    this.inputPannelId = inputPannelId;
//    this.ngOnInitFoInputPannel();
//    this.display = 'block';
//  }
//  closeModalDialogForInputPannel() {
//    this.display = 'none';
//  }
//  openDetailsModalDialog(sizePannelId) {
//    this.sizePannelId = sizePannelId;
//    this.ngOnDetailsInit();
//    this.displayDetails = 'block';
//  }
//  closeDetailsModalDialog() {
//    this.displayDetails = 'none';
//  }
//  openModalDialogOrderImage() {
//    this.display = 'block';
//  }
//  closeModalDialogOrderImage() {
//    this.display = 'none';
//  }
//  delete(inputPannelId) {
//    var ans = confirm("Do you want to delete Master Order with Id: " + inputPannelId);
//    if (ans) {
//      this._http.delete("/api/InputPannelPodetails/" + inputPannelId)
//        .subscribe(() => {
//          this._http.get('/api/InputPannelPodetails/Index').subscribe(result => {
//            this.InputPannelPodetailslist = result;
//          }, error => console.error(error));
//        }, error => this.errorMessage = error)
//    }
//  }
//  deleteMasterDetails(sizePannelId) {
//    var ans = confirm("Do you want to delete Master Order with Id: " + sizePannelId);
//    if (ans) {
//      this.http.delete("/api/MasterPodetailsInfroes/" + sizePannelId)
//        .subscribe(() => {
//          this._http.get('/api/InputPannelPodetails/Details/' + this.activeRow).subscribe(result => {
//            this.OrderMasterDetailsList = result;
//          }, error => console.error(error));
//        }, error => this.errorMessage = error)
//    }
//  }
//  ngOnInitFoInputPannel() {
//    if (this._avRoute.snapshot.params["id"]) {
//      this.employeeid = this._avRoute.snapshot.params["id"];
//    }
//    this.SizePannelPODetailsForm = this._fb.group({
//      inputPannelId: 0,
//      companyId: ['', [Validators.required]],
//      locationId: ['', [Validators.required]],
//      buyerId: ['', [Validators.required]],
//      styleRef: ['', [Validators.required]],
//      styleDescription: [''],
//      prodDeptId: ['', [Validators.required]],
//      subDeptId: [''],
//      currencyId: [''],
//      regionId: [''],
//      productCatId: ['', [Validators.required]],
//      teamLeaderId: ['', [Validators.required]],
//      dealingMerchantId: ['', [Validators.required]],
//      bhMerchant: [''],
//      remarks: [''],
//      shipmentModeId: [''],
//      orderUomId: ['', [Validators.required]],
//      smv: ['', [Validators.required]],
//      packingId: ['', [Validators.required]],
//      seasonId: [''],
//      agentId: [''],
//      userId: [''],
//      orderNumber: ['', [Validators.required]],
//      jobNo: [''],
//      repeatNoJob: [''],
//    })
//    if (this.inputPannelId > 0) {
//      this.title = "Edit";
//      this._http.get("/api/InputPannelPodetails/" + this.inputPannelId)
//        .subscribe(resp => this.SizePannelPODetailsForm.setValue(resp)
//          , error => this.errorMessage = error);
//    }
//    else {
//      this.title = "Create";
//    }
//  }
//  ngOnDetailsInit() {
//    if (this.sizePannelId > 0) {
//      this.title = "Edit";
//      this.http.get("/api/MasterPodetailsInfroes/Details/" + this.sizePannelId)
//        .subscribe(resp => this.inputpannelPoDetailsForm.setValue(resp)
//          , error => this.errorMessage = error);
//    }
//    else {
//      this.title = "Create";
//    }
//  }
//  saveOrderMaster(files, event: any) {
//    if (!this.SizePannelPODetailsForm.valid) {
//      return;
//    }
//    if (this.title == "Create") {
//      this._http.post('/api/InputPannelPodetails', this.SizePannelPODetailsForm.value)
//        .subscribe(result => {
//          if (files.length === 0)
//            return;
//          const formData = new FormData();
//          for (let file of files) {
//            formData.append(file.name, file);
//          }
//          this._http.post('/api/OrderImageUploadTbls/' + result.inputPannelId, formData).subscribe(result => {
//            this._http.get('/api/OrderImageUploadTbls/').subscribe(result => {
//              this.OrderImagelist = result;
//            }, error => console.error(error));
//            this._http.get('/api/InputPannelPodetails/Index').subscribe(result => {
//              this.InputPannelPodetailslist = result;
//            }, error => console.error(error));
//          });
//        }, error => this.errorMessage = error)
//    }
//    else if (this.title == "Edit") {
//      this._http.put("/api/InputPannelPodetails/" + this.inputPannelId, this.SizePannelPODetailsForm.value)
//        .subscribe(result => {
//          if (files.length === 0)
//            return;
//          const formData = new FormData();
//          for (let file of files) {
//            formData.append(file.name, file);
//          }
//          this._http.post('/api/OrderImageUploadTbls/' + result.inputPannelId, formData).subscribe(result => {
//            this._http.get('/api/OrderImageUploadTbls/').subscribe(result => {
//              this.OrderImagelist = result;
//            }, error => console.error(error));
//            this._http.get('/api/InputPannelPodetails/Index').subscribe(result => {
//              this.InputPannelPodetailslist = result;
//            }, error => console.error(error));
//          });
//        }, error => this.errorMessage = error)
//    }
//    this.closeModalDialog();
//  }
//  saveMasterOrderDetails() {
//    if (!this.inputpannelPoDetailsForm.valid) {
//      return;
//    }
//    if (this.title == "Create") {
//      this.inputpannelPoDetailsForm.controls.poDetailsId.setValue(this.activeRow);
//      this._http.post('/api/MasterPodetailsInfroes', this.inputpannelPoDetailsForm.value)
//        .subscribe(() => {
//          this._http.get('/api/InputPannelPodetails/Details/' + this.activeRow).subscribe(result => {
//            this.OrderMasterDetailsList = result;
//          }, error => console.error(error));
//        }, error => this.errorMessage = error)
//    }
//    else if (this.title == "Edit") {
//      this._http.put("/api/MasterPodetailsInfroes/" + this.sizePannelId, this.inputpannelPoDetailsForm.value)
//        .subscribe(() => {
//          this._http.get('/api/InputPannelPodetails/Details/' + this.activeRow).subscribe(result => {
//            this.OrderMasterDetailsList = result;
//          }, error => console.error(error));
//        }, error => this.errorMessage = error)
//    }
//    this.closeDetailsModalDialog();
//  }
//}
//export interface MasterOderDetailsData {
//  poDetId: number;
//  initialOrderId: number;
//  poorderStatusId: number;
//  poNo: number;
//  poReceivedDate: Date;
//  pubShipmentDate: Date;
//  orgShipmentDate: Date;
//  facReceiveDate: Date;
//  poQuantity: DoubleRange;
//  avgPrice: DoubleRange;
//  amount: DoubleRange;
//  excessCut: DoubleRange;
//  planCut: DoubleRange;
//  poStatusId: number;
//  projectedPo: number;
//  tnaFromOrUpto: Date;
//  internalRefOrGrouping: string;
//  delayFor: string;
//  packingId: number;
//  fileNo: string;
//  scorLc: string;
//  remarks: string;
//}  
//export interface InputPannelPodetailsData {
//  inputPannelId: number;
//  jobNo: string;
//  companyId: number;
//  locationId: number;
//  buyerId: number;
//  styleRef: string;
//  styleDescription: string;
//  prodDeptId: number;
//  subDeptId: number;
//  currencyId: number;
//  regionId: number;
//  productCatId: number;
//  teamLeaderId: number;
//  dealingMerchantId: number;
//  bhMerchant: string;
//  remarks: string;
//  shipmentModeId: number;
//  orderUomId: number;
//  smv: string;
//  packingId: number;
//  seasonId: number;
//  agentId: number;
//  userId: number;
//  repeatNoJob: string;
//  orderNumber: string;
//}
//export interface SizeWisePODetailsData {
//  sizePannelId: number;
//  poDetailsId: number;
//  countryId: number;
//  poNo: number;
//  cuttOffDate: Date;
//  cuttOff: string;
//  countryShipmentDate: Date;
//  facReceiveDate: Date;
//  remarks: string;
//  packingId: number;
//  quantity: DoubleRange;
//}
//interface companyData {
//  compId: number;
//  companyName: string;
//}
//interface locationData {
//  locationId: number;
//  locationName: string;
//}
//interface RegionData {
//  regionId: number;
//  regionName: string;
//}
//interface PrdouctionCategoryData {
//  prodCatId: number;
//  prodCategoryName: string;
//}
//interface ShipmentModeData {
//  id: number;
//  shipmentMode: string;
//}
//interface PackingData {
//  packingId: number;
//  packingName: string;
//}
//# sourceMappingURL=PODetails.component.js.map
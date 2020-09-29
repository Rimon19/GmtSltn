import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Component({
  selector: 'app-addInitialOrder',
  templateUrl: './addInitialOrder.component.html'
})
export class CreateInitorder implements OnInit {

  initialoderForm: FormGroup;
  public complist: companyData[];
  public locationlist: locationData[];
  public buyerlist: buyerData[];
  public proddeptlist: ProdDeptData[];



  title: string = "Create";
  orderAutoId: number = 0;
  errorMessage: any;
  _http: any;
  myAppUrl: string = "";
  selectedValue = null

  constructor(http: HttpClient, private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _router: Router, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
    this._http = http;


    http.get<companyData[]>(baseUrl + 'api/CompanyInfoes/Index').subscribe(result => {
      this.complist = result;
    }, error => console.error(error));


    http.get<locationData[]>(baseUrl + 'api/LocationInfoes/Index').subscribe(result => {
      this.locationlist = result;
    }, error => console.error(error));

    http.get<buyerData[]>(baseUrl + 'api/BuyerInfoes/Index').subscribe(result => {
      this.buyerlist = result;
    }, error => console.error(error));

    http.get<ProdDeptData[]>(baseUrl + 'api/ProductionDeptInfoes/Index').subscribe(result => {
      this.proddeptlist = result;
    }, error => console.error(error));


  }
  ngOnInit() {
    if (this._avRoute.snapshot.params["id"]) {
      this.orderAutoId = this._avRoute.snapshot.params["id"];
    }

    this.initialoderForm = this._fb.group({
      orderAutoId: 0,
      jobNo: ['', [Validators.required]],
      companyId: ['', [Validators.required]],
      locationId: ['', [Validators.required]],
      buyerId: ['', [Validators.required]],
      styleRef: ['', [Validators.required]],
      styleDescription: ['', [Validators.required]],
      prodDeptId: ['', [Validators.required]],
      subDeptId: ['', [Validators.required]],
      currencyId: ['', [Validators.required]],
      regionId: ['', [Validators.required]],
      productCatId: ['', [Validators.required]],
      dealingMerchantId: ['', [Validators.required]],
      teamLeaderId: ['', [Validators.required]],
      bhMerchant: ['', [Validators.required]],

      remarks: ['', [Validators.required]],
      shipmentModeId: ['', [Validators.required]],
      orderUomId: ['', [Validators.required]],
      smv: ['', [Validators.required]],
      packingId: ['', [Validators.required]],
      seasonId: ['', [Validators.required]],
      agentId: ['', [Validators.required]],
      userId: ['', [Validators.required]],
    })

    if (this.orderAutoId > 0) {
      this.title = "Edit";
      this._http.get(this.myAppUrl + "api/initialorders/" + this.orderAutoId)
        .subscribe(resp => this.initialoderForm.setValue(resp)
          , error => this.errorMessage = error);
      //.subscribe(resp => this.employeeForm.setValue(resp)
      //  , error => this.errorMessage = error);
    }

  }
  save() {
    if (!this.initialoderForm.valid) {
      return;
    }
    if (this.title == "Create") {

      this._http.post(this.myAppUrl + 'api/initialorders', this.initialoderForm.value)
        .subscribe(() => {
          this._router.navigate(['/fetchInitialOrdere']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {

      this._http.put(this.myAppUrl + "api/initialorders/" + this.orderAutoId, this.initialoderForm.value)
        .subscribe(() => {
          this._router.navigate(['/fetchInitialOrdere']);
        }, error => this.errorMessage = error)

    }
  }
  cancel() {
    this._router.navigate(['/fetchInitialOrdere']);
  }
  get jobNo() { return this.initialoderForm.get('jobNo'); }
  get companyId() { return this.initialoderForm.get('companyId'); }
  get locationId() { return this.initialoderForm.get('locationId'); }
  get buyerId() { return this.initialoderForm.get('buyerId'); }
  get styleRef() { return this.initialoderForm.get('styleRef'); }
  get styleDescription() { return this.initialoderForm.get('styleDescription'); }
  get prodDeptId() { return this.initialoderForm.get('prodDeptId'); }
  get subDeptId() { return this.initialoderForm.get('subDeptId'); }
  get currencyId() { return this.initialoderForm.get('currencyId'); }
  get regionId() { return this.initialoderForm.get('regionId'); }
  get productCatId() { return this.initialoderForm.get('productCatId'); }
  get dealingMerchantId() { return this.initialoderForm.get('dealingMerchantId'); }
  get teamLeaderId() { return this.initialoderForm.get('teamLeaderId'); }
  get bhMerchant() { return this.initialoderForm.get('bhMerchant'); }
  get remarks() { return this.initialoderForm.get('remarks'); }
  get shipmentModeId() { return this.initialoderForm.get('shipmentModeId'); }
  get orderUomId() { return this.initialoderForm.get('orderUomId'); }
  get smv() { return this.initialoderForm.get('smv'); }
  get packingId() { return this.initialoderForm.get('packingId'); }
  get seasonId() { return this.initialoderForm.get('seasonId'); }
  get agentId() { return this.initialoderForm.get('agentId'); }
  get userId() { return this.initialoderForm.get('userId'); }
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

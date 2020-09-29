import { Component, Inject, OnInit } from '@angular/core';
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
  selector: 'app-PODetails',
  templateUrl: './PODetails.component.html',

})


export class PODetailsComponent {
    

  public InputPannelPodetailslist: InputPannelPodetailsData[];
  public SizewisePODetailsList: SizeWisePODetailsData[];
  public OrderMasterDetails: MasterOderDetailsData[];
  public Regionlist: RegionData[];
  public ProductionCattlist: PrdouctionCategoryData[];
  public Packinglist: PackingData[];



  inputPannelId: number = 0;
  sizePannelId: number = 0;
  errorMessage: any;
  _http: any;
  router: any;
  displayinputpannel = 'none';
  displaysizewise = 'none';
  inputpannelPoDetailsForm: FormGroup;
  SizePannelPODetailsForm: FormGroup;


  title: string = "Create";
  myName: string;
  activeRow: string = "0";
  _fbdetails: any;

  public progress: number;
  public message: string;
  public url: any;



  constructor(public _DomSanitizer: DomSanitizer, public http: HttpClient, private _fb: FormBuilder, private _router: Router, private _avRoute: ActivatedRoute) {
    this.http.get<InputPannelPodetailsData[]>('/api/InputPannelPodetails/Index').subscribe(result => {
      this.InputPannelPodetailslist = result;
    });
    this._fbdetails = _fb;
   
    this._http = http;
    this.router = _router;

    this.SizePannelPODetailsForm = this._fb.group({

      sizePannelId: 0,
      inputPannelId: 0,
      itemId: [''],
      articleNumber: [''],
      color: [''],
      size: [''],
      quanity: [''],
     
     
    });



  


    http.get<MasterOderDetailsData[]>('/api/MasterPodetailsInfroes/Index').subscribe(result => {
      this.OrderMasterDetails = result;
    }, error => console.error(error));

 
    http.get<RegionData[]>('/api/RegionInfoes/Index').subscribe(result => {
      this.Regionlist = result;
    }, error => console.error(error));

    http.get<PrdouctionCategoryData[]>('/api/ProductCategoryInfoes/Index').subscribe(result => {
      this.ProductionCattlist = result;
    }, error => console.error(error));

    http.get<PackingData[]>('/api/PackingInfoes/Index').subscribe(result => {
      this.Packinglist = result;
    }, error => console.error(error));


}


  getSizeWizePoDetails(inputPannelId) {
    this.http.get<SizeWisePODetailsData[]>('/api/InputPannelPodetails/Details/' + inputPannelId).subscribe(result => {
      this.SizewisePODetailsList = result;
    });
    this.activeRow = inputPannelId;
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


  deleteinputpannel(inputPannelId) {
    var ans = confirm("Do you want to delete Master Order with Id: " + inputPannelId);
    if (ans) {
      this._http.delete("/api/InputPannelPodetails/" + inputPannelId)
        .subscribe(() => {

          this._http.get('/api/InputPannelPodetails/Index').subscribe(result => {
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


  ngOnInitForInputPannel() {


    this.inputpannelPoDetailsForm = this._fb.group({


      inputPannelId: 0,
      poDetailsId:[''],
      countryId: [''],
      countryType: [''],
      cuttOffDate: [''],
      cuttOff: [''],
      countryShipmentDate: [''],
      remarks: [''],
      packingId: [''],
      quantity: [''],
      
    });

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

  saveInputPannel() {
    if (!this.inputpannelPoDetailsForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this.SizePannelPODetailsForm.controls.inputPannelId.setValue(this.activeRow);
      this._http.post('/api/InputPannelPodetails', this.inputpannelPoDetailsForm.value)
        .subscribe(() => {
          this._http.get('/api/InputPannelPodetails/Index').subscribe(result => {
            this.InputPannelPodetailslist = result;
          }, error => console.error(error));
         
        }, error => this.errorMessage = error)
    }

    else if (this.title == "Edit") {
      this._http.put("/api/InputPannelPodetails/" + this.inputPannelId, this.inputpannelPoDetailsForm.value)
        .subscribe(() => {
          this._http.get('/api/InputPannelPodetails/Index').subscribe(result => {
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
      this._http.put("/api/SizePannelPodetails/" + this.inputPannelId, this.SizePannelPODetailsForm.value)
        .subscribe(() => {

          this._http.get('/api/InputPannelPodetails/Details/' + this.activeRow).subscribe(result => {
            this.SizewisePODetailsList = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)

    }
    this.closeDetailsModalDialogForsizewise();
  }


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

interface companyData {

  compId: number;
  companyName: string;


}
interface locationData {

  locationId: number;
  locationName: string;
}







interface RegionData {

  regionId: number;
  regionName: string;
}

interface PrdouctionCategoryData {

  prodCatId: number;
  prodCategoryName: string;
}



interface ShipmentModeData {

  id: number;
  shipmentMode: string;
}



interface PackingData {
  packingId: number;
  packingName: string;
}



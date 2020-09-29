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


@Component({
  selector: 'app-fetchBuyer',
  templateUrl: './fetchBuyer.component.html',
})

export class FetchCBuyerComponent implements OnInit {

  public buyerlist: buyerData[];
  BuyerForm: FormGroup;
  buyerId: number=0;
  //employeeid: number = 0;
  errorMessage: any;
  _http: any;
  myAppUrl: string = "";
  router: any;
  display = 'none';
  title: string = "Create";
  myName: string;
  activeRow: string = "0";
  _fbdetails: any;

  constructor(public http: HttpClient, private _fb: FormBuilder, private _router: Router, private _avRoute: ActivatedRoute) {
    http.get<buyerData[]>('/api/BuyerInfoes/Index').subscribe(result => {
      this.buyerlist = result;
    }, error => console.error(error));
    this._http = http;
    this.router = _router;
    this._fbdetails = _fb;
  }

  openModalDialog(buyerId) {
    this.buyerId = buyerId;
    this.ngOnInit();
    this.display = 'block';
  }

  closeModalDialog() {
    this.display = 'none';
  }


  ngOnInit() {

    this.BuyerForm = this._fb.group({
      buyerId: 0,
      buyerName: ['', [Validators.required]],
      details: ['', [Validators.required]],

    })

    if (this.buyerId > 0) {
      this.title = "Edit";
      this._http.get("/api/BuyerInfoes/" + this.buyerId)
        .subscribe(resp => this.BuyerForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }

  save() {

    if (!this.BuyerForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._http.post('/api/BuyerInfoes', this.BuyerForm.value)
        .subscribe(() => {
          this._http.get('/api/BuyerInfoes/Index').subscribe(result => {
            this.buyerlist = result;
          }, error => console.error(error));
          //this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)
    }

    else if (this.title == "Edit") {
      this._http.put("/api/BuyerInfoes/" + this.buyerId, this.BuyerForm.value)
        .subscribe(() => {
          this._http.get('/api/BuyerInfoes/Index').subscribe(result => {
            this.buyerlist = result;
          }, error => console.error(error));
          //this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)

    }

    this.closeModalDialog();
  }


  delete(buyerId)
  {
    var ans = confirm("Do you want to delete Buyer with Id: " + buyerId);
    if (ans)
    {

      this._http.delete(this.myAppUrl + "api/BuyerInfoes/" + buyerId)
        .subscribe(() => {

          this._http.get(this.myAppUrl + 'api/BuyerInfoes/Index').subscribe(result => {
            this.buyerlist = result;
          }, error => console.error(error));


        }, error => this.errorMessage = error)
    }
  }

}

interface buyerData {

  buyerId: number;
  buyerName: string;
  details: string;
}

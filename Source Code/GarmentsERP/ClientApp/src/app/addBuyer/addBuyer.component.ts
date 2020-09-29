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
  selector: 'app-addBuyer',
  templateUrl: './addBuyer.component.html'
})
export class CreateBuyer implements OnInit
{

  BuyerForm: FormGroup;

  title: string = "Create";
  buyerId: number = 0;
  errorMessage: any;
  _http: any;
  myAppUrl: string = "";
 

  constructor(http: HttpClient, private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _router: Router, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
    this._http = http;


  }
  ngOnInit() {
    if (this._avRoute.snapshot.params["id"]) {
      this.buyerId = this._avRoute.snapshot.params["id"];
    }

    this.BuyerForm = this._fb.group({
      buyerId: 0,
      buyerName: ['', [Validators.required]],
      details: ['', [Validators.required]],
     
    })

    if (this.buyerId > 0) {
      this.title = "Edit";
      this._http.get(this.myAppUrl + "api/BuyerInfoes/" + this.buyerId)
        .subscribe(resp => this.BuyerForm.setValue(resp)
          , error => this.errorMessage = error);
      //.subscribe(resp => this.employeeForm.setValue(resp)
      //  , error => this.errorMessage = error);
    }

  }
  save() {
    if (!this.BuyerForm.valid) {
      return;
    }
    if (this.title == "Create") {

      this._http.post(this.myAppUrl + 'api/BuyerInfoes', this.BuyerForm.value)
        .subscribe(() => {
          this._router.navigate(['/fetchBuyer']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {

      this._http.put(this.myAppUrl + "api/BuyerInfoes/" + this.buyerId, this.BuyerForm.value)
        .subscribe(() => {
          this._router.navigate(['/fetchBuyer']);
        }, error => this.errorMessage = error)

    }
  }
  cancel() {
    this._router.navigate(['/fetchBuyer']);
  }
  get buyerName() { return this.BuyerForm.get('buyerName'); }
  get details() { return this.BuyerForm.get('details'); }
  
}

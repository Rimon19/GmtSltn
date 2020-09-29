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
  selector: 'app-addCompany',
  templateUrl: './addCompany.component.html'
})
export class CreateCompany implements OnInit
{

  companyForm: FormGroup;

  title: string = "Create";
  compId: number = 0;
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
      this.compId = this._avRoute.snapshot.params["id"];
    }

    this.companyForm = this._fb.group({
      compId: 0,
      companyName: ['', [Validators.required]],
      details: ['', [Validators.required]],
     
    })

    if (this.compId > 0) {
      this.title = "Edit";
      this._http.get(this.myAppUrl + "api/CompanyInfoes/" + this.compId)
        .subscribe(resp => this.companyForm.setValue(resp)
          , error => this.errorMessage = error);
      //.subscribe(resp => this.employeeForm.setValue(resp)
      //  , error => this.errorMessage = error);
    }

  }
  save() {
    if (!this.companyForm.valid) {
      return;
    }
    if (this.title == "Create") {

      this._http.post(this.myAppUrl + 'api/CompanyInfoes', this.companyForm.value)
        .subscribe(() => {
          this._router.navigate(['/fetchCompany']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {

      this._http.put(this.myAppUrl + "api/CompanyInfoes/" + this.compId, this.companyForm.value)
        .subscribe(() => {
          this._router.navigate(['/fetchCompany']);
        }, error => this.errorMessage = error)

    }
  }
  cancel() {
    this._router.navigate(['/fetchCompany']);
  }
  get companyName() { return this.companyForm.get('companyName'); }
  get details() { return this.companyForm.get('details'); }
  
}

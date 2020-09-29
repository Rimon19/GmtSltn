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
  selector: 'app-addCountry',
  templateUrl: './addCountry.component.html'
})
export class CreateCountry implements OnInit {

  RegionForm: FormGroup;

  title: string = "Create";
  regionId: number = 0;
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
      this.regionId = this._avRoute.snapshot.params["id"];
    }

    this.RegionForm = this._fb.group({
      regionId: 0,
      regionName: ['', [Validators.required]],


    })

    if (this.regionId > 0) {
      this.title = "Edit";
      this._http.get(this.myAppUrl + "api/RegionInfoes/" + this.regionId)
        .subscribe(resp => this.RegionForm.setValue(resp)
          , error => this.errorMessage = error);
      //.subscribe(resp => this.employeeForm.setValue(resp)
      //  , error => this.errorMessage = error);
    }

  }
  save() {
    if (!this.RegionForm.valid) {
      return;
    }
    if (this.title == "Create") {

      this._http.post(this.myAppUrl + 'api/RegionInfoes', this.RegionForm.value)
        .subscribe(() => {
          this._router.navigate(['/fetchCountry']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {

      this._http.put(this.myAppUrl + "api/RegionInfoes/" + this.regionId, this.RegionForm.value)
        .subscribe(() => {
          this._router.navigate(['/fetchCountry']);
        }, error => this.errorMessage = error)

    }
  }
  cancel() {
    this._router.navigate(['/fetchCountry']);
  }
  get regionName() { return this.RegionForm.get('regionName'); }


}

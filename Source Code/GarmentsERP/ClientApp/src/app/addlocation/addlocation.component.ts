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
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html'
})
export class CreateLocation implements OnInit {

  LocationForm: FormGroup;

  title: string = "Create";
  locationId: number = 0;
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
      this.locationId = this._avRoute.snapshot.params["id"];
    }

    this.LocationForm = this._fb.group({
      locationId: 0,
      locationName: ['', [Validators.required]],
    
     
    })

    if (this.locationId > 0) {
      this.title = "Edit";
      this._http.get(this.myAppUrl + "api/LocationInfoes/" + this.locationId)
        .subscribe(resp => this.LocationForm.setValue(resp)
          , error => this.errorMessage = error);
      //.subscribe(resp => this.employeeForm.setValue(resp)
      //  , error => this.errorMessage = error);
    }

  }
  save() {
    if (!this.LocationForm.valid) {
      return;
    }
    if (this.title == "Create") {

      this._http.post(this.myAppUrl + 'api/LocationInfoes', this.LocationForm.value)
        .subscribe(() => {
          this._router.navigate(['/fetchlocation']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {

      this._http.put(this.myAppUrl + "api/LocationInfoes/" + this.locationId, this.LocationForm.value)
        .subscribe(() => {
          this._router.navigate(['/fetchlocation']);
        }, error => this.errorMessage = error)

    }
  }
  cancel() {
    this._router.navigate(['/fetchlocation']);
  }
  get locationName() { return this.LocationForm.get('locationName'); }

  
}

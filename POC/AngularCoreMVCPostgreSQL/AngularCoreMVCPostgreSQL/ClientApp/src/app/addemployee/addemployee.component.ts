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
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html'
})
export class Createemployee implements OnInit {
  employeeForm: FormGroup;
  title: string = "Create";
  employeeid: number=0;
  errorMessage: any;
  _http: any;
  myAppUrl: string = "";  

  constructor(http: HttpClient,private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _router: Router, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
    this._http = http;
    

  }
  ngOnInit() {
    if (this._avRoute.snapshot.params["id"]) {
      this.employeeid = this._avRoute.snapshot.params["id"];
    }

    this.employeeForm = this._fb.group({
      employeeid: 0,
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      department: ['', [Validators.required]],
      city: ['', [Validators.required]]
    })

    if (this.employeeid > 0) {
      this.title = "Edit";
      this._http.get(this.myAppUrl + "api/employees/" + this.employeeid)
        .subscribe(resp => this.employeeForm.setValue(resp)
          , error => this.errorMessage = error); 
        //.subscribe(resp => this.employeeForm.setValue(resp)
        //  , error => this.errorMessage = error);
    }


  }
  save() {
    if (!this.employeeForm.valid) {
      return;
    }
    if (this.title == "Create") {
      this._http.post(this.myAppUrl +'api/employees', this.employeeForm.value)
        .subscribe(() => {
                this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)


    }
    else if (this.title == "Edit") {
      this._http.put(this.myAppUrl + "api/employees/" + this.employeeid, this.employeeForm.value)
        .subscribe(() => {
          this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)
    
    }
  }
  cancel() {
    this._router.navigate(['/fetchemployee']);
  }
  get name() { return this.employeeForm.get('name'); }
  get gender() { return this.employeeForm.get('gender'); }
  get department() { return this.employeeForm.get('department'); }
  get city() { return this.employeeForm.get('city'); }
}

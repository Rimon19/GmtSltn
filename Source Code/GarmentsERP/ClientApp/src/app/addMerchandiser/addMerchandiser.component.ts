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
  selector: 'app-addMerchandiser',
  templateUrl: './addMerchandiser.component.html'
})
export class CreateMErchandise implements OnInit
{

  public Userslist: UserData[];
  public Teamleaderlist: TeamleaderData[];
  merchandiserForm: FormGroup;

  title: string = "Create";
  id: number = 0;
  errorMessage: any;
  _http: any;
  myAppUrl: string = "";
 

  constructor(http: HttpClient, private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _router: Router, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
    this._http = http;


    http.get<UserData[]>(baseUrl + 'api/UserInfoes/Index').subscribe(result => {
      this.Userslist = result;
    }, error => console.error(error));

    http.get<TeamleaderData[]>(baseUrl + 'api/TeamlederInfoes/Index').subscribe(result => {
      this.Teamleaderlist = result;
    }, error => console.error(error));


  }
  ngOnInit() {
    if (this._avRoute.snapshot.params["id"]) {
      this.id = this._avRoute.snapshot.params["id"];
    }

    this.merchandiserForm = this._fb.group({
      id: 0,
      teamleaderId: ['', [Validators.required]],
      userId: ['', [Validators.required]],
     
    })

    if (this.id > 0) {
      this.title = "Edit";
      this._http.get(this.myAppUrl + "api/DealingMrcndiserInfoes/" + this.id)
        .subscribe(resp => this.merchandiserForm.setValue(resp)
          , error => this.errorMessage = error);
      //.subscribe(resp => this.employeeForm.setValue(resp)
      //  , error => this.errorMessage = error);
    }

  }
  save() {
    if (!this.merchandiserForm.valid) {
      return;
    }
    if (this.title == "Create") {

      this._http.post(this.myAppUrl + 'api/DealingMrcndiserInfoes', this.merchandiserForm.value)
        .subscribe(() => {
          this._router.navigate(['/fetchMerchandiser']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {

      this._http.put(this.myAppUrl + "api/DealingMrcndiserInfoes/" + this.id, this.merchandiserForm.value)
        .subscribe(() => {
          this._router.navigate(['/fetchMerchandiser']);
        }, error => this.errorMessage = error)

    }
  }
  cancel() {
    this._router.navigate(['/fetchMerchandiser']);
  }
  get teamleaderId() { return this.merchandiserForm.get('teamleaderId'); }
  get userId() { return this.merchandiserForm.get('userId'); }
  
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
interface TeamleaderData {

  teamleaderId: number;
  userId: number;
}

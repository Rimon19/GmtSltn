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
  selector: 'app-fetchCompany',
  templateUrl: './fetchCompany.component.html',
})

export class FetchCompanyComponent implements OnInit {

  companyForm: FormGroup;
  public complist: companyData[];
  compId: number = 0;
  errorMessage: any;
  _http: any;
  myAppUrl: string = "";
  router: any;
  display = 'none';
  title: string = "Create";
  myName: string;
  activeRow: string = "0";
  _fbdetails: any;

  constructor(public http: HttpClient,
    private _fb: FormBuilder,
    private _router: Router,
    private _avRoute: ActivatedRoute) {

    http.get<companyData[]>(this.myAppUrl + 'api/CompanyInfoes/Index').subscribe(result => {
      this.complist = result;
    }, error => console.error(error));

    this._http = http;
    this.router = _router;
    this._fbdetails = _fb;
    this.myName = "Shanu";

  }


  openModalDialog(compId) {
    this.compId = compId;
    this.ngOnInit();
    this.display = 'block';
  }

  closeModalDialog() {
    this.display = 'none';
  }



  ngOnInit() {

    this.companyForm = this._fb.group({
      compId: 0,
      companyName: ['', [Validators.required]],
      details: ['', [Validators.required]],

    })

    if (this.compId > 0) {
      this.title = "Edit";
      this._http.get("/api/CompanyInfoes/" + this.compId)
        .subscribe(resp => this.companyForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }

  save() {

    if (!this.companyForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._http.post('/api/CompanyInfoes', this.companyForm.value)
        .subscribe(() => {
          this._http.get('/api/CompanyInfoes/Index').subscribe(result => {
            this.complist = result;
          }, error => console.error(error));
        }, error => this.errorMessage = error)
    }

    else if (this.title == "Edit") {
      this._http.put("/api/CompanyInfoes/" + this.compId, this.companyForm.value)
        .subscribe(() => {
          this._http.get('/api/CompanyInfoes/Index').subscribe(result => {
            this.complist = result;
          }, error => console.error(error));
          //this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)

    }

    this.closeModalDialog();
  }



  delete(compID) {
    var ans = confirm("Do you want to delete company with Id: " + compID);
    if (ans) {

      this._http.delete(this.myAppUrl + "api/CompanyInfoes/" + compID)
        .subscribe(() => {

          this._http.get(this.myAppUrl + 'api/CompanyInfoes/Index').subscribe(result => {
            this.complist = result;
          }, error => console.error(error));


        }, error => this.errorMessage = error)
    }
  }

}

interface companyData {
  compId: number;
  companyName: string;
  details: string;

}

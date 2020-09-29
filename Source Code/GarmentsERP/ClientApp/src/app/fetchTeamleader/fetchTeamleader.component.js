//import { Component, Inject } from '@angular/core';
//import { HttpClient, HttpHandler } from '@angular/common/http';
//import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
//import { Http, Headers } from '@angular/http';
//import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
//import { Router, ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';
//@Component({
//  selector: 'app-fetchCompany',
//  templateUrl: './fetchCompany.component.html',
//})
//export class FetchCompanyComponent {
//  public complist: companyData[];
//  compId: string;
//  //employeeid: number = 0;
//  errorMessage: any;
//  _http: any;
//  myAppUrl: string = "";
//  router: any;
//  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private _router: Router, private _avRoute: ActivatedRoute) {
//    http.get<companyData[]>(baseUrl + 'api/CompanyInfoes/Index').subscribe(result => {
//      this.complist = result;
//    }, error => console.error(error));
//    this.myAppUrl = baseUrl;
//    this._http = http;
//    this.router = _router;
//  }
//  delete(compID)
//  {
//    var ans = confirm("Do you want to delete company with Id: " + compID);
//    if (ans)
//    {
//      this._http.delete(this.myAppUrl + "api/CompanyInfoes/" + compID)
//        .subscribe(() => {
//          this._http.get(this.myAppUrl + 'api/CompanyInfoes/Index').subscribe(result => {
//            this.complist = result;
//          }, error => console.error(error));
//        }, error => this.errorMessage = error)
//    }
//  }
//}
//interface companyData {
//  compId: number;
//  companyName: string;
//  details: string;
//}
//# sourceMappingURL=fetchCompany.component.js.map
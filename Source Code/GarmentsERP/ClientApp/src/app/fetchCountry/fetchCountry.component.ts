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
import { CompanyInfoesService } from '../services/CompanyInfoes.service';

@Component({
  selector: 'app-fetchCountry',
  templateUrl: './fetchCountry.component.html',
})

export class FetchRegionComponent implements OnInit {

  
  public Regionlist: RegionData[];
  regionId: number=0;
  RegionForm: FormGroup;
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
              private _avRoute: ActivatedRoute,
              ) {
    http.get<RegionData[]>('/api/RegionInfoes/Index').subscribe(result => {
      this.Regionlist = result;
    }, error => console.error(error));

    this._http = http;
    this.router = _router;
    this._fbdetails = _fb;
   
  }


  openModalDialog(regionId) {
    this.regionId = regionId;
    this.ngOnInit();
    this.display = 'block';
  }

  closeModalDialog() {
    this.display = 'none';
  }

 

  ngOnInit() {
    this.RegionForm = this._fb.group({
      regionId: 0,
      regionName: ['', [Validators.required]],
    })

    if (this.regionId > 0) {
      this.title = "Edit";
      this._http.get("/api/RegionInfoes/" + this.regionId)
        .subscribe(resp => this.RegionForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }


  save() {

    if (!this.RegionForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._http.post('/api/RegionInfoes', this.RegionForm.value)
        .subscribe(() => {
          this._http.get('/api/RegionInfoes/Index').subscribe(result => {
            this.Regionlist = result;
          }, error => console.error(error));
          //this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)
    }

    else if (this.title == "Edit") {
      this._http.put("/api/RegionInfoes/" + this.regionId, this.RegionForm.value)
        .subscribe(() => {
          this._http.get('/api/RegionInfoes/Index').subscribe(result => {
            this.Regionlist = result;
          }, error => console.error(error));
          //this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)

    }

    this.closeModalDialog();
  }




  delete(regionId)
  {
    var ans = confirm("Do you want to delete Region with Id: " + regionId);
    if (ans)
    {

      this._http.delete(this.myAppUrl + "api/RegionInfoes/" + regionId)
        .subscribe(() => {

          this._http.get(this.myAppUrl + 'api/RegionInfoes/Index').subscribe(result => {
            this.Regionlist = result;
          }, error => console.error(error));


        }, error => this.errorMessage = error)
    }
  }

}

interface RegionData {

  regionId: number;
  regionName: string;
}

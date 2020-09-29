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
  selector: 'app-fetchlocation',
  templateUrl: './fetchlocation.component.html',
})

export class FetchLocationComponent implements OnInit {

  
  public locationlist: locationData[];
  locationId: number=0;
  LocationForm: FormGroup;

  errorMessage: any;
  _http: any;
  myAppUrl: string = "";
  router: any;
  display = 'none';
  title: string = "Create";
  myName: string;
  activeRow: string = "0";
  _fbdetails: any;


  constructor(public http: HttpClient, private _fb: FormBuilder, private _router: Router, private _avRoute: ActivatedRoute){
    http.get<locationData[]>('/api/LocationInfoes/Index').subscribe(result => {
      this.locationlist = result;
    }, error => console.error(error));

    this._http = http;
    this.router = _router;
    this._fbdetails = _fb;
  
  }



  openModalDialog(locationId) {
    this.locationId = locationId;
    this.ngOnInit();
    this.display = 'block';
  }

  closeModalDialog() {
    this.display = 'none';
  }


  ngOnInit() {

    this.LocationForm = this._fb.group({
      locationId: 0,
      locationName: ['', [Validators.required]],
    })

    if (this.locationId > 0) {
      this.title = "Edit";
      this._http.get("/api/LocationInfoes/" + this.locationId)
        .subscribe(resp => this.LocationForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }


  save()
  {

    if (!this.LocationForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._http.post('/api/LocationInfoes', this.LocationForm.value)
        .subscribe(() => {
          this._http.get('/api/LocationInfoes/Index').subscribe(result => {
            this.locationlist = result;
          }, error => console.error(error));
          //this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)
    }

    else if (this.title == "Edit") {
      this._http.put("/api/LocationInfoes/" + this.locationId, this.LocationForm.value)
        .subscribe(() => {
          this._http.get('/api/LocationInfoes/Index').subscribe(result => {
            this.locationlist = result;
          }, error => console.error(error));
          //this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)

    }

    this.closeModalDialog();
  }




  delete(locationID)
  {
    var ans = confirm("Do you want to delete location with Id: " + locationID);
    if (ans)
    {

      this._http.delete(this.myAppUrl + "api/LocationInfoes/" + locationID)
        .subscribe(() => {

          this._http.get(this.myAppUrl + 'api/LocationInfoes/Index').subscribe(result => {
            this.locationlist = result;
          }, error => console.error(error));


        }, error => this.errorMessage = error)
    }
  }

}

interface locationData {

  locationId: number;
  locationName: string;
}


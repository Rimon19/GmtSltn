import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { OnInit } from '@angular/core';




@Component({
  selector: 'app-fetchemployee',
  templateUrl: './fetchemployee.component.html',
})

export class FetchfetchemployeeComponent implements OnInit {
  public empList: EmployeeData[];
  employeeid: number = 0;
  //employeeid: number = 0;
  errorMessage: any;
  _http: any;
  myAppUrl: string = "";
  router: any;
  display = 'none';
  employeeForm: FormGroup;
  title: string = "Create";

  constructor(http: HttpClient, private _fb: FormBuilder, @Inject('BASE_URL') baseUrl: string, private _router: Router, private _avRoute: ActivatedRoute) {
    http.get<EmployeeData[]>(baseUrl + 'api/employees/Index').subscribe(result => {
      this.empList = result;
    }, error => console.error(error));


      this.myAppUrl = baseUrl;
    this._http = http;
    this.router = _router;
  }

  openModalDialog(employeeid) {
    this.employeeid = employeeid;
    this.ngOnInit();
    this.display = 'block';
  }

  closeModalDialog() {
    this.display = 'none';
  }


  delete(employeeID) {
    var ans = confirm("Do you want to delete customer with Id: " + employeeID);
    if (ans) {
      
      this._http.delete(this.myAppUrl + "api/employees/"+employeeID)  
        .subscribe(() => {

          this._http.get(this.myAppUrl + 'api/employees/Index').subscribe(result => {
            this.empList = result;
          }, error => console.error(error));


        }, error => this.errorMessage = error)
    }
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
    else {
      this.title = "Create";
    }


  }
  save() {
    if (!this.employeeForm.valid) {
      return;
    }
    if (this.title == "Create") {
      this._http.post(this.myAppUrl + 'api/employees', this.employeeForm.value)
        .subscribe(() => {
          this._http.get(this.myAppUrl + 'api/employees/Index').subscribe(result => {
            this.empList = result;
          }, error => console.error(error));
          //this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)


    }
    else if (this.title == "Edit") {
      this._http.put(this.myAppUrl + "api/employees/" + this.employeeid, this.employeeForm.value)
        .subscribe(() => {
          this._http.get(this.myAppUrl + 'api/employees/Index').subscribe(result => {
            this.empList = result;
          }, error => console.error(error));
          //this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)

    }

    this.closeModalDialog();
  }

  cancel() {
    this._router.navigate(['/fetchemployee']);
  }

  get name() { return this.employeeForm.get('name'); }
  get gender() { return this.employeeForm.get('gender'); }
  get department() { return this.employeeForm.get('department'); }
  get city() { return this.employeeForm.get('city'); }

}

interface EmployeeData {
  id: number;
  name: string;
  gender: string;
  department: string;
  city: string;
}

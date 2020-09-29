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
  selector: 'students',
  templateUrl: './students.component.html'
})

export class studentsComponent implements OnInit {
  studentid: number = 0;
  studentdetailsid: number = 0;
  //employeeid: number = 0;
  errorMessage: any;
  _http: any;
  router: any;
  display = 'none';
  displayDetails = 'none';
  studentForm: FormGroup;
  studentDetailsForm: FormGroup;
  title: string = "Create";

  public studentList: StudentMasters[];
  public studentdetailsList: StudentDetails[];
  myName: string;
  activeRow: string = "0";
  _fbdetails: any;

  constructor(public http: HttpClient, private _fb: FormBuilder, private _router: Router, private _avRoute: ActivatedRoute)
  {
    this.http.get<StudentMasters[]>('/api/StudentMasters').subscribe(result => {
      this.studentList = result;
    });
    this._fbdetails = _fb;
    this.myName = "Shanu";
    this._http = http;
    this.router = _router;

    //Initializing form group Details table 
    this.studentDetailsForm = this._fb.group({
      stddtlid: 0,
      stdid: 0,
      major: ['', [Validators.required]],
      year: ['', [Validators.required]],
      term: ['', [Validators.required]],
      grade: ['', [Validators.required]]
    });

  }

  getStudentsDetails(StudID) {
    this.http.get<StudentDetails[]>('/api/StudentMasters/Details/' + StudID).subscribe(result => {
      this.studentdetailsList = result;
    });
    this.activeRow = StudID;
  }

  openModalDialog(studentid) {
    this.studentid = studentid;
    this.ngOnInit();
    this.display = 'block';
  }

  closeModalDialog() {
    this.display = 'none';
  }

  openDetailsModalDialog(studentdetailsid) {
    //api/Studentdetails
    this.studentdetailsid = studentdetailsid;
    this.ngOnDetailsInit();
    this.displayDetails = 'block';
  }

  closeDetailsModalDialog() {
    this.displayDetails = 'none';
  }

  delete(employeeID) {
    var ans = confirm("Do you want to delete customer with Id: " + employeeID);
    if (ans) {

      this._http.delete( "/api/StudentMasters/" + employeeID)
        .subscribe(() => {

          this._http.get('/api/StudentMasters').subscribe(result => {
            this.studentList = result;
          }, error => console.error(error));


        }, error => this.errorMessage = error)
    }
  }

  deleteDetails(studentdetailsid) {
    var ans = confirm("Do you want to delete customer with Id: " + studentdetailsid);
    if (ans) {
      this.http.delete("/api/Studentdetails/" + studentdetailsid)
        .subscribe(() => {

          this._http.get('/api/StudentMasters/Details/' + this.activeRow).subscribe(result => {
            this.studentdetailsList = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }
  }

  ngOnInit()
  {
   
    this.studentForm = this._fb.group({
      stdId: 0,
      stdName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]]
    })

    if (this.studentid > 0) {
      this.title = "Edit";
      this._http.get("/api/StudentMasters/" + this.studentid)
        .subscribe(resp => this.studentForm.setValue(resp)
          , error => this.errorMessage = error);
     
    }
    else {
      this.title = "Create";
    }
  }
  
  ngOnDetailsInit() {

    if (this.studentdetailsid > 0) {
      this.title = "Edit";
      this.http.get("/api/Studentdetails/" + this.studentdetailsid)
        .subscribe(resp => this.studentDetailsForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }

  saveStudentMaster() {
    if (!this.studentForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._http.post('/api/StudentMasters', this.studentForm.value)
        .subscribe(() => {
          this._http.get('/api/StudentMasters').subscribe(result => {
            this.studentList = result;
          }, error => console.error(error));
          //this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)
    }

    else if (this.title == "Edit") {
      this._http.put("/api/StudentMasters/" + this.studentid, this.studentForm.value)
        .subscribe(() => {
          this._http.get('/api/StudentMasters').subscribe(result => {
            this.studentList = result;
          }, error => console.error(error));
          //this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)

    }
    this.closeModalDialog();
  }

  saveStudentDetails() {
    if (!this.studentDetailsForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this.studentDetailsForm.controls.stdid.setValue(this.activeRow);
      this._http.post('/api/Studentdetails', this.studentDetailsForm.value)
        .subscribe(() => {

          this._http.get('/api/StudentMasters/Details/' + this.activeRow).subscribe(result => {
            this.studentdetailsList = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }

    else if (this.title == "Edit") {
      this._http.put("/api/Studentdetails/" + this.studentdetailsid, this.studentDetailsForm.value)
        .subscribe(() => {

          this._http.get('/api/StudentMasters/Details/' + this.activeRow).subscribe(result => {
            this.studentdetailsList = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)

    }
    this.closeDetailsModalDialog();
  }


  //cancel() {
  //  this.closeDetailsModalDialog();
  //}
}
//// For Student Master  
export interface StudentMasters {
  stdID: number;
  stdName: string;
  email: string;
  phone: string;
  address: string;
}
// For Student Details  
export interface StudentDetails {
  StdDtlID: number;
  stdID: number;
  Major: string;
  Year: string;
  Term: string;
  Grade: string;
}  

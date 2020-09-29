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
  selector: 'app-fetchTeamleader',
  templateUrl: './fetchTeamleader.component.html',
})

export class fetchTeamleaderComponent implements OnInit {

  
  public Userslist: UserData[];
  public Teamleaderlist: TeamleaderData[];

  teamleaderId: number=0;
  teamleaderForm: FormGroup;

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
    http.get<TeamleaderData[]>('/api/TeamlederInfoes/Index').subscribe(result => {
      this.Teamleaderlist = result;
    }, error => console.error(error));


    http.get<UserData[]>('/api/UserInfoes/Index').subscribe(result => {
      this.Userslist = result;
    }, error => console.error(error));

    this._http = http;
    this.router = _router;
    this._fbdetails = _fb;
  
  }


  openModalDialog(teamleaderId) {
    this.teamleaderId = teamleaderId;
    this.ngOnInit();
    this.display = 'block';
  }

  closeModalDialog() {
    this.display = 'none';
  }


  ngOnInit() {

    this.teamleaderForm = this._fb.group({
      teamleaderId: 0,
      userId: ['', [Validators.required]],
    })

    if (this.teamleaderId > 0) {
      this.title = "Edit";
      this._http.get("/api/TeamlederInfoes/" + this.teamleaderId)
        .subscribe(resp => this.teamleaderForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }


  save() {

    if (!this.teamleaderForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._http.post('/api/TeamlederInfoes', this.teamleaderForm.value)
        .subscribe(() => {
          this._http.get('/api/TeamlederInfoes/Index').subscribe(result => {
            this.Teamleaderlist = result;
          }, error => console.error(error));
          //this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)
    }

    else if (this.title == "Edit") {
      this._http.put("/api/TeamlederInfoes/" + this.teamleaderId, this.teamleaderForm.value)
        .subscribe(() => {
          this._http.get('/api/TeamlederInfoes/Index').subscribe(result => {
            this.Teamleaderlist = result;
          }, error => console.error(error));
          //this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)

    }

    this.closeModalDialog();
  }




  delete(teamleaderId)
  {
    var ans = confirm("Do you want to delete location with Id: " + teamleaderId);
    if (ans)
    {

      this._http.delete(this.myAppUrl + "api/TeamlederInfoes/" + teamleaderId)
        .subscribe(() => {

          this._http.get(this.myAppUrl + 'api/TeamlederInfoes/Index').subscribe(result => {
            this.Teamleaderlist = result;
          }, error => console.error(error));


        }, error => this.errorMessage = error)
    }
  }

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


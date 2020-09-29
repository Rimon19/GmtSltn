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
  selector: 'app-fetchMerchandiser',
  templateUrl: './fetchMerchandiser.component.html',
})

export class FetchCMerchandiserComponent implements OnInit{

  public DealingMarcentdizerlist: DealingMarchntdizeryData[];
  public Userslist: UserData[];
  public Teamleaderlist: TeamleaderData[];

  merchandiserForm: FormGroup;

  id: number=0;
  //employeeid: number = 0;


  errorMessage: any;
  _http: any;
  myAppUrl: string = "";
  router: any;
  display = 'none';
  title: string = "Create";
  myName: string;
  activeRow: string = "0";
  _fbdetails: any;

  constructor(public http: HttpClient, private _fb: FormBuilder, private _router: Router, private _avRoute: ActivatedRoute) {
    http.get<DealingMarchntdizeryData[]>('/api/DealingMrcndiserInfoes/Index').subscribe(result => {
      this.DealingMarcentdizerlist = result;
    }, error => console.error(error));

    http.get<UserData[]>('/api/UserInfoes/Index').subscribe(result => {
      this.Userslist = result;
    }, error => console.error(error));

    http.get<TeamleaderData[]>('/api/TeamlederInfoes/Index').subscribe(result => {
      this.Teamleaderlist = result;
    }, error => console.error(error));

    this._http = http;
    this.router = _router;
    this._fbdetails = _fb;
  }


  openModalDialog(id) {
    this.id = id;
    this.ngOnInit();
    this.display = 'block';
  }

  closeModalDialog() {
    this.display = 'none';
  }


  ngOnInit() {

    this.merchandiserForm = this._fb.group({
      id: 0,
      teamleaderId: ['', [Validators.required]],
      userId: ['', [Validators.required]],

    })

    if (this.id > 0) {
      this.title = "Edit";
      this._http.get("/api/DealingMrcndiserInfoes/" + this.id)
        .subscribe(resp => this.merchandiserForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }


  save() {

    if (!this.merchandiserForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._http.post('/api/DealingMrcndiserInfoes', this.merchandiserForm.value)
        .subscribe(() => {
          this._http.get('/api/DealingMrcndiserInfoes/Index').subscribe(result => {
            this.DealingMarcentdizerlist = result;
          }, error => console.error(error));
          //this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)
    }

    else if (this.title == "Edit") {
      this._http.put("/api/DealingMrcndiserInfoes/" + this.id, this.merchandiserForm.value)
        .subscribe(() => {
          this._http.get('/api/DealingMrcndiserInfoes/Index').subscribe(result => {
            this.DealingMarcentdizerlist = result;
          }, error => console.error(error));
          //this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)

    }

    this.closeModalDialog();
  }


  delete(id)
  {
    var ans = confirm("Do you want to delete Merchandiser with Id: " + id);
    if (ans)
    {

      this._http.delete(this.myAppUrl + "api/DealingMrcndiserInfoes/" + id)
        .subscribe(() => {

          this._http.get(this.myAppUrl + 'api/DealingMrcndiserInfoes/Index').subscribe(result => {
            this.DealingMarcentdizerlist = result;
          }, error => console.error(error));


        }, error => this.errorMessage = error)
    }
  }

}

interface DealingMarchntdizeryData {

  id: number;
  teamleaderId: number;
  userId: number;
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

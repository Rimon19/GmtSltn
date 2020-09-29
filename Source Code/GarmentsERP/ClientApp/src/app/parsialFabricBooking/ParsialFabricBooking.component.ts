import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, FormArray } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//import { last } from '@angular/router/src/utils/collection';
//import { ALLOW_MULTIPLE_PLATFORMS } from '@angular/core/src/application_ref';
import { error } from 'protractor';
import { FabricCostAndPreCostingNinitialOrderViewModel } from '../Model/FabricCostAndPreCostingNinitialOrderViewModel';
import { SearchDataForSave } from '../Model/SearchDataForSave';
import { ParsialBookingEditModelforSave } from '../Model/ParsialBookingEditModelforSave';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ParsialFabricBookingSearchComponent } from './ParsialFabricBookingSearchComponent/parsial-fabric-booking-search/parsial-fabric-booking-search.component';
import { ParsialFabricBookingEditComponent } from './parsial-fabric-booking-edit/parsial-fabric-booking-edit.component';
//import { empty } from 'rxjs/Observer';


@Component({
  selector: 'app-ParsialFabricBooking',
  templateUrl: './ParsialFabricBooking.component.html'
})
export class ParsialFabricBooking implements OnInit {
  notification = null;
  parsialFabricBookingItems;
  apiURL = '/api/ParsialFabricBookingItems/';
  parsialFabricBookingDetailsForm: FormArray = this._fb.array([]);

  SearchDataForSave = new SearchDataForSave;
  parsialBookingEditModelforSave = new ParsialBookingEditModelforSave;

  parsialFabricBookingId: number = 0;
  ModalDialogForInputPanneld: number = 0;
  bookingNoSearch = '';
  loadPreCostingId: any = [];
  holdFabricCostData: any = [];
  holdAvgGrayConsFabricCost: any = [];
  result: any = [];

  activeRow: string = "0";
  displayParsialFabricBooking = 'none';
  displayParsialFabricBookingSearchData = 'none';
  displayFabricBookingSearch = 'none';
  orderAutoId: string = '0';
  jobNoSearchResult: any = [];
  jobNoSearchFinalResult: any = [];
  title: string = "Create";

  JobNo: number = 0;
  ParsialFabricBookingForm: FormGroup;
  ParsialFabricBookingSearchData: FormGroup;
  FabricBookingSearchForm: FormGroup;
  SearchByOrderId: FormGroup;

  errorMessage: any;
  parsialFabricData: any;
  parsialFabricBookingDetails: any;

  jobNo;
  constructor(private http: HttpClient, private dialog: MatDialog,
    private toastr: ToastrService,
    private router: Router,
    private _fb: FormBuilder,
    private _router: Router,
    private currentRoute: ActivatedRoute,
    private _avRoute: ActivatedRoute) {


    this.ParsialFabricBookingForm = this._fb.group({
      id: 0,
      bookingNo: [''],
      bookingMonth: [''],
      bookingYear: [''],
      companyName: ['', [Validators.required]],
      buyerName: ['', [Validators.required]],
      fabricNature: ['', [Validators.required]],
      fabricSource: ['', [Validators.required]],
      bookingDate: ['', [Validators.required]],
      deliveryDate: ['', [Validators.required]],
      payMode: ['', [Validators.required]],
      supplierName: ['', [Validators.required]],
      currency: [''],
      exchangeRate: [''],
      source: [''],
      attention: [''],
      bookingPercent: [''],
      collarExcessCutPercentage: [''],
      cuffExcessCutPercentage: [''],
      readyToApproved: [''],
      internalRefNo: [''],
      fileNo: [''],
      unApproveRequest: [''],
      fabricComposition: [''],
      level: [''],
      remarks: ['']
    });
    this.ParsialFabricBookingSearchData = this._fb.group({
      acWoQnty: [0],
      adjQnty: [0],
      amount: [0],
      bodyPart: [''],
      bookingMasterId: [0],
      colorType: [''],
      composition: [''],
      construction: [''],
      dia: [0],
      diaWidthType: [''],
      gmtsColor: [''],
      gsm: [''],
      id: [0],
      itemColor: [''],
      item: [''],
      poNumber: [''],
      rate: [0],
      woQnty: [0],
      orderId: [0],
      jobNo: [''],
      fabricSource: [''],
      fabricNature: ['']
    });


    this.FabricBookingSearchForm = this._fb.group({
      //company: [''],
      //buyer: [''],
      //year: [''],
      jobNo: [''],
      //internalRef: [''],
      //fileNo: [''],
      //styleRef: [''],
      //orderNo: [''],
      //dateRange: ['']
    });

    this.SearchByOrderId = this._fb.group({
      orderAutoId: ['']
    });

    this.http.get('/api/ParsialFabricBookingMasters').subscribe(result => {
      this.parsialFabricData = result;
      console.log('check parsialFabricData', this.parsialFabricData);
    }, error => console.error(error));
  }

  returnLength(data) {
    return data.length;
  }



  //Open Modal 
  openModalFabricBooking(id) {
    this.parsialFabricBookingId = id;
    console.log(`i am open modal parsial fabric booking  ${id}`);
    this.ngOnFabricBooking();
    this.displayParsialFabricBooking = 'block';
  }
  //Close Modal 
  closeModalFabricBooking() {
    this.displayParsialFabricBooking = 'none';
  }
  //Open Modal 
  openModalFabricBookingSearch(id) {
    //this.parsialFabricBookingId = id;
    //console.log(`i am open Search modal parsial fabric booking  ${id}`);
    //this.ngOnFabricBooking();
    this.displayFabricBookingSearch = 'block';
  }
  //Close Modal 
  closeModalFabricBookingSearch() {
    this.displayFabricBookingSearch = 'none';
  }
  openModalDialogForInputPannel(id) {
    this.ModalDialogForInputPanneld = id;
    this.ngonModalDialogForInputPannel(id);
    this.displayParsialFabricBookingSearchData = 'block';
  }
  ngOnFabricBooking() {
    if (this.parsialFabricBookingId > 0) {
      this.title = "Edit";
      this.http.get("/api/ParsialFabricBookingMasters/" + this.parsialFabricBookingId)
        .subscribe(resp => this.ParsialFabricBookingForm.setValue(resp)
          , error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }
  }
  ngonModalDialogForInputPannel(bookingDetailsid) {
    if (this.ModalDialogForInputPanneld > 0) {
      this.title = "Edit";
      this.http.get("/api/ParsialFabricBookingItems/" + bookingDetailsid)
        .subscribe(resp => {
          this.ParsialFabricBookingSearchData.setValue(resp);
          //console.log("response data", resp);
          console.log("boss testing", this.ParsialFabricBookingSearchData);
        }, error => this.errorMessage = error);
    }
    else {
      this.title = "Create";
    }




  }
  closeModalDialog() {
    this.displayParsialFabricBookingSearchData = 'none';

  }
  getOrderMasterDetails(id) {
    console.log('i am details');
  }
  deleteFabricBooking(parsialFabricBookingId) {
    var ans = confirm("Do you want to delete FabricBooking with Id: " + parsialFabricBookingId);
    if (ans) {
      this.http.delete("/api/ParsialFabricBookingMasters/" + parsialFabricBookingId)
        .subscribe(() => {
          this.http.get('/api/ParsialFabricBookingMasters').subscribe(result => {
            this.parsialFabricData = result;
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }
  }
  deleteinputpannel(parsialFabricBookingId) {
    var ans = confirm("Do you want to delete FabricBooking with Id: " + parsialFabricBookingId);
    if (ans) {
      this.http.delete("/api/ParsialFabricBookingItems/" + parsialFabricBookingId)
        .subscribe(() => {
          this.http.get("/api/ParsialFabricBookingItems/").subscribe(result => {
            this.parsialFabricBookingDetails = result;
            this.showNotification('delete');
          }, error => console.error(error));

        }, error => this.errorMessage = error)
    }
  }
  saveParsialFabricBooking(result) {
    console.log('checking', result);
    this.http.post('/api/ParsialFabricBookingItems', result)
      .subscribe(() => {
        result => {

        }

      }, error => this.errorMessage = error);
    this.closeModalFabricBooking();

  }

  //saveParsialFabricBookingAfterEdit(result) {
  //  console.log(result);
  //  this.http.post('/api/ParsialFabricBookingItems', result)
  //    .subscribe(() => {

  //    }, error => this.errorMessage = error);
  //  this.closeModalFabricBooking();

  //}

  searchFabricItems(jobNo: string) {
    console.log('result', jobNo);
    this.http.get('/api/initialorders/jobsearch/' + jobNo).subscribe(result => {

      this.jobNoSearchResult = result;
      console.log(this.jobNoSearchResult);
    });
  }
  addNewParsialBookingItem(result) {
    console.log(result);

  }

  bookingNoSearchChange(value) {
    console.log('my value', value);
    if (value != '') {
      this.http.get('/api/ParsialFabricBookingMasters').subscribe(result => {
        this.parsialFabricData = result;
        console.log(result);
      }, error => console.error(error));
    } else {
      value = value.toLowerCase();

      this.http.get('/api/ParsialFabricBookingMasters/searchBookingNo/' + value).subscribe(result => {
        this.parsialFabricData = result;
      }, error => console.error(error));
    }
  }
  getParsialBookingDetails(masterId) {
    console.log('print details ' + masterId);

    this.http.get('/api/ParsialFabricBookingItems/masterId/' + masterId).subscribe(result => {
      console.log('consol data', result);
      this.parsialFabricBookingDetails = result;
    });

    //this.activeRow = masterId;

  }
  clearParsialFabricBooking() {
    this.ParsialFabricBookingForm.reset();
  }

  AddOrEditItem(bookingMasterId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "1000px";
    dialogConfig.height = "590px";
    dialogConfig.position = {
      top: '', left: '300px'
    };

    dialogConfig.data = { bookingMasterId };

    this.dialog.open(ParsialFabricBookingSearchComponent, dialogConfig).afterClosed();
  }

  //AddItems(bookingMasterId) {
  //  const dialogConfig = new MatDialogConfig();
  //  dialogConfig.autoFocus = true;
  //  dialogConfig.disableClose = true;
  //  dialogConfig.width = "1000px";
  //  dialogConfig.height = "590px";
  //  dialogConfig.position = {
  //    top: '', left: '300px'
  //  };

  //  dialogConfig.data = { bookingMasterId };

  //  this.dialog.open(ParsialFabricBookingSearchComponent, dialogConfig).afterClosed();
  //}
  //EditItem(id) {
  //  const dialogConfig = new MatDialogConfig();
  //  dialogConfig.autoFocus = true;
  //  dialogConfig.disableClose = true;
  //  dialogConfig.width = "1000px";
  //  dialogConfig.height = "590px";
  //  dialogConfig.position = {
  //    top: '', left: '300px'
  //  };
  //  dialogConfig.data = {id};

  //  this.dialog.open(ParsialFabricBookingEditComponent, dialogConfig).afterClosed();
  //}
  public updateParsialFabricBooking(object) {
    console.log('test data', object.id)
    return this.http.put(`${this.apiURL}/${object.id}`, object).subscribe(result => {
      this.parsialFabricBookingItems = result;

      this.http.get('/api/ParsialFabricBookingItems/masterId/' + object.id).subscribe(result => {

      });
      this.showNotification('update');
    });

  }
  ngOnInit() {

  }
  showNotification(category) {
    switch (category) {
      case 'insert':
        this.notification = { class: 'text-success', message: 'saved!' };
        break;
      case 'update':
        this.notification = { class: 'text-primary', message: 'updated!' };
        break;
      case 'delete':
        this.notification = { class: 'text-danger', message: 'deleted!' };
        break;

      default:
        break;
    }
    setTimeout(() => {
      this.notification = null;
    }, 3000);
  }
}

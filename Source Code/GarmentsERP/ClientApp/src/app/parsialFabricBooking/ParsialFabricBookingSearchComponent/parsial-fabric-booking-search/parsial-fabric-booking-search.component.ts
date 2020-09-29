import { Component, OnInit, Inject} from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-parsial-fabric-booking-search',
  templateUrl: './parsial-fabric-booking-search.component.html',
  styleUrls: ['./parsial-fabric-booking-search.component.css']
})
export class ParsialFabricBookingSearchComponent implements OnInit {
  parsialFabricBookingDetails: Object;
  activeRow: string = "0";
  apiURL = '/api/ParsialFabricBookingItems/';
  itemDetailsArray: any = [];
  jobNoSearchResult: any = [];
  constructor(private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data) {

    console.log('rrr', data.bookingMasterId);
  }

  ngOnInit() {
  }
  searchFabricItems(jobNo: string) {
    console.log('result', jobNo);
    this.http.get('/api/initialorders/jobsearch/' + jobNo).subscribe(result => {

      this.jobNoSearchResult = result;
     
      console.log(this.jobNoSearchResult);
    });
  }
  saveParsialFabricBooking(result, bookingMasterId) {
    result.bookingMasterId = bookingMasterId;
    console.log('sss',result);
    this.http.post('/api/ParsialFabricBookingItems', result)
      .subscribe(result => {
        this.itemDetailsArray = result;

        this.http.get(`${this.apiURL}/` + bookingMasterId).subscribe(result => {

          this.parsialFabricBookingDetails = result;
        });
        this.activeRow = bookingMasterId;
      });

  }
}

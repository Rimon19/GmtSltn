import { Component, OnInit, Inject } from '@angular/core';
import { ParsialBookingEditModelforSave } from '../../Model/ParsialBookingEditModelforSave';
import { MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient, HttpHandler } from '@angular/common/http';
@Component({
  selector: 'app-parsial-fabric-booking-edit',
  templateUrl: './parsial-fabric-booking-edit.component.html',
  styleUrls: ['./parsial-fabric-booking-edit.component.css']
})
export class ParsialFabricBookingEditComponent implements OnInit {
  
  parsialFabricBookingItems;
  apiURL = '/api/ParsialFabricBookingItems/';
  constructor(private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data) {
    console.log('sssss', data.id);
  
    this.http.get('/api/ParsialFabricBookingItems/' + data.id).subscribe(result => {
   
      this.parsialFabricBookingItems = result;
      console.log('co data', this.parsialFabricBookingItems);
      });
  }
  
  ngOnInit() {
  }
  public updateParsialFabricBooking(object) {

    return this.http.put(`${this.apiURL}/${object.id}`, object).subscribe(result => {
      this.parsialFabricBookingItems = result;
    });
  }
}

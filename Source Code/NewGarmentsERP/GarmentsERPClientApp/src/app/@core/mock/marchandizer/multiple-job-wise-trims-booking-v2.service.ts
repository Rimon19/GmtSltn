import { Injectable } from '@angular/core';
import { MultipleJobWiseTrimsBookingV2 } from '../../data/marchanzider-model/multiple-job-wise-trims-booking-v2';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class MultipleJobWiseTrimsBookingV2Service {

  multipleJobWiseTrimsBookingV2:MultipleJobWiseTrimsBookingV2; 
  constructor(public http:HttpClient) { }
  getAll():Observable<MultipleJobWiseTrimsBookingV2[]>{
    return this.http.get<MultipleJobWiseTrimsBookingV2[]>(BaseURL.apiUrl+'/MultipleJobWiseTrimsBookingV2');
  } 
  add(multipleJobWiseTrimsBookingV2:MultipleJobWiseTrimsBookingV2){
    
    return this.http.post<MultipleJobWiseTrimsBookingV2>(BaseURL.apiUrl+'/MultipleJobWiseTrimsBookingV2',multipleJobWiseTrimsBookingV2);
  }
  update(multipleJobWiseTrimsBookingV2:MultipleJobWiseTrimsBookingV2){
    return this.http.put(BaseURL.apiUrl+'/MultipleJobWiseTrimsBookingV2/'+multipleJobWiseTrimsBookingV2.id,multipleJobWiseTrimsBookingV2);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/MultipleJobWiseTrimsBookingV2/'+id);
  }
}

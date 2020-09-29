import { Injectable } from '@angular/core';
import { MultipleJobWiseShortTrimsBookingV2 } from '../../data/marchanzider-model/multiple-job-wise-short-trims-booking-v2';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class MultipleJobWiseShortTrimsBookingV2Service {

  multipleJobWiseShortTrimsBookingV2:MultipleJobWiseShortTrimsBookingV2; 
  constructor(public http:HttpClient) { }
  getAll():Observable<MultipleJobWiseShortTrimsBookingV2[]>{
    return this.http.get<MultipleJobWiseShortTrimsBookingV2[]>(BaseURL.apiUrl+'/MultipleJobWiseShortTrimsBookingV2');
  } 
  add(multipleJobWiseShortTrimsBookingV2:MultipleJobWiseShortTrimsBookingV2){
    
    return this.http.post<MultipleJobWiseShortTrimsBookingV2>(BaseURL.apiUrl+'/MultipleJobWiseShortTrimsBookingV2',multipleJobWiseShortTrimsBookingV2);
  }
  update(multipleJobWiseShortTrimsBookingV2:MultipleJobWiseShortTrimsBookingV2){
    return this.http.put(BaseURL.apiUrl+'/MultipleJobWiseShortTrimsBookingV2/'+multipleJobWiseShortTrimsBookingV2.id,multipleJobWiseShortTrimsBookingV2);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/MultipleJobWiseShortTrimsBookingV2/'+id);
  }
}

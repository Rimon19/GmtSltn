import { Injectable } from '@angular/core';
import { MultiJobWiseServiceBookingKnitting } from '../../data/marchanzider-model/multi-job-wise-service-booking-knitting';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class MultiJobWiseServiceBookingKnittingService {

  multiJobWiseServiceBookingKnitting:MultiJobWiseServiceBookingKnitting; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<MultiJobWiseServiceBookingKnitting[]>{
    return this.http.get<MultiJobWiseServiceBookingKnitting[]>(BaseURL.apiUrl+'/MultiJobWiseServiceBookingKnittings');
  } 
  add(multiJobWiseServiceBookingKnitting:MultiJobWiseServiceBookingKnitting){
    
    return this.http.post<MultiJobWiseServiceBookingKnitting>(BaseURL.apiUrl+'/MultiJobWiseServiceBookingKnittings',multiJobWiseServiceBookingKnitting);
  }
  update(multiJobWiseServiceBookingKnitting:MultiJobWiseServiceBookingKnitting){
    return this.http.put(BaseURL.apiUrl+'/MultiJobWiseServiceBookingKnittings/'+multiJobWiseServiceBookingKnitting.id,multiJobWiseServiceBookingKnitting);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/MultiJobWiseServiceBookingKnittings/'+id);
  }
}

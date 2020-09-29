import { Injectable } from '@angular/core';
import { SampleRequisitionWithBooking } from '../../data/marchanzider-model/sample-requisition-with-booking';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class SampleRequisitionWithBookingService {
  sampleRequisitionWithBooking:SampleRequisitionWithBooking; 
  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<SampleRequisitionWithBooking[]>{
    return this.http.get<SampleRequisitionWithBooking[]>(BaseURL.apiUrl+'/SampleRequisitionWithBookings');
  } 
  add(sampleRequisitionWithBooking:SampleRequisitionWithBooking){
    
    return this.http.post<SampleRequisitionWithBooking>(BaseURL.apiUrl+'/SampleRequisitionWithBookings',sampleRequisitionWithBooking);
  }
  update(sampleRequisitionWithBooking:SampleRequisitionWithBooking){
    return this.http.put(BaseURL.apiUrl+'/SampleRequisitionWithBookings/'+sampleRequisitionWithBooking.id,sampleRequisitionWithBooking);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/SampleRequisitionWithBookings/'+id);
  }
  
}

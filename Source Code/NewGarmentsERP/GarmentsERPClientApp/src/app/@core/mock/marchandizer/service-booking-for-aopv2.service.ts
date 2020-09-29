import { Injectable } from '@angular/core';
import { ServiceBookingForAOPV2 } from '../../data/marchanzider-model/service-booking-for-aopv2';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ServiceBookingForAOPV2Service {

  serviceBookingForAOPV2:ServiceBookingForAOPV2; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<ServiceBookingForAOPV2[]>{
    return this.http.get<ServiceBookingForAOPV2[]>(BaseURL.apiUrl+'/ServiceBookingForAOPV2');
  } 
  add(serviceBookingForAOPV2:ServiceBookingForAOPV2){
    
    return this.http.post<ServiceBookingForAOPV2>(BaseURL.apiUrl+'/ServiceBookingForAOPV2',serviceBookingForAOPV2);
  }
  update(serviceBookingForAOPV2:ServiceBookingForAOPV2){
    return this.http.put(BaseURL.apiUrl+'/ServiceBookingForAOPV2/'+serviceBookingForAOPV2.id,serviceBookingForAOPV2);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ServiceBookingForAOPV2/'+id);
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceBookingForAOPWithoutOrderDetails } from '../../data/marchanzider-model/service-booking-for-aopwithout-order-details';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ServiceBookingForAOPWithoutOrderDetailsService {

  serviceBookingForAOPWithoutOrderDetails:ServiceBookingForAOPWithoutOrderDetails; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<ServiceBookingForAOPWithoutOrderDetails[]>{
    return this.http.get<ServiceBookingForAOPWithoutOrderDetails[]>(BaseURL.apiUrl+'/ServiceBookingForAOPWithoutOrderDetails');
  } 
  add(serviceBookingForAOPWithoutOrderDetails:ServiceBookingForAOPWithoutOrderDetails){
    
    return this.http.post<ServiceBookingForAOPWithoutOrderDetails>(BaseURL.apiUrl+'/ServiceBookingForAOPWithoutOrderDetails',serviceBookingForAOPWithoutOrderDetails);
  }
  update(serviceBookingForAOPWithoutOrderDetails:ServiceBookingForAOPWithoutOrderDetails){
    return this.http.put(BaseURL.apiUrl+'/ServiceBookingForAOPWithoutOrderDetails/'+serviceBookingForAOPWithoutOrderDetails.id,serviceBookingForAOPWithoutOrderDetails);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ServiceBookingForAOPWithoutOrderDetails/'+id);
  }
  
}

import { Injectable } from '@angular/core';
import { ServiceBookingForAOPWithoutOrder } from '../../data/marchanzider-model/service-booking-for-aopwithout-order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ServiceBookingForAOPWithoutOrderService {
  serviceBookingForAOPWithoutOrder:ServiceBookingForAOPWithoutOrder; 
  constructor(public http:HttpClient) { 
  }
  getAll():Observable<ServiceBookingForAOPWithoutOrder[]>{
    return this.http.get<ServiceBookingForAOPWithoutOrder[]>(BaseURL.apiUrl+'/ServiceBookingForAOPWithoutOrders');   
  } 
  add(serviceBookingForAOPWithoutOrder:ServiceBookingForAOPWithoutOrder){
    return this.http.post<ServiceBookingForAOPWithoutOrder>(BaseURL.apiUrl+'/ServiceBookingForAOPWithoutOrders',serviceBookingForAOPWithoutOrder);
  }
  update(serviceBookingForAOPWithoutOrder:ServiceBookingForAOPWithoutOrder){
    return this.http.put(BaseURL.apiUrl+'/ServiceBookingForAOPWithoutOrders/'+serviceBookingForAOPWithoutOrder.id,serviceBookingForAOPWithoutOrder);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ServiceBookingForAOPWithoutOrders/'+id);
  }
 
}

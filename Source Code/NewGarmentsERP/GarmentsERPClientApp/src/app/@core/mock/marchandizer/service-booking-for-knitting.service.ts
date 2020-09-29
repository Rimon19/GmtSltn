import { Injectable } from '@angular/core';
import { ServiceBookingForKnitting } from '../../data/marchanzider-model/service-booking-for-knitting';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ServiceBookingForKnittingService {

  serviceBookingForKnitting:ServiceBookingForKnitting; 

constructor(public http:HttpClient) { 
 
}
getAll():Observable<ServiceBookingForKnitting[]>{
  return this.http.get<ServiceBookingForKnitting[]>(BaseURL.apiUrl+'/ServiceBookingForKnittings');
} 
add(serviceBookingForKnitting:ServiceBookingForKnitting){
  
  return this.http.post<ServiceBookingForKnitting>(BaseURL.apiUrl+'/ServiceBookingForKnittings',serviceBookingForKnitting);
}
update(serviceBookingForKnitting:ServiceBookingForKnitting){
  return this.http.put(BaseURL.apiUrl+'/ServiceBookingForKnittings/'+serviceBookingForKnitting.id,serviceBookingForKnitting);
}
delete(id: number){
  return this.http.delete(BaseURL.apiUrl+'/ServiceBookingForKnittings/'+id);
}
} 

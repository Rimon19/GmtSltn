import { Injectable } from '@angular/core';
import { ServiceBookingForDyeing } from '../../data/marchanzider-model/service-booking-for-dyeing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ServiceBookingForDyeingService {

  serviceBookingForDyeing:ServiceBookingForDyeing; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<ServiceBookingForDyeing[]>{
    return this.http.get<ServiceBookingForDyeing[]>(BaseURL.apiUrl+'/ServiceBookingForDyeings');
  } 
  add(serviceBookingForDyeing:ServiceBookingForDyeing){
    
    return this.http.post<ServiceBookingForDyeing>(BaseURL.apiUrl+'/ServiceBookingForDyeings',serviceBookingForDyeing);
  }
  update(serviceBookingForDyeing:ServiceBookingForDyeing){
    return this.http.put(BaseURL.apiUrl+'/ServiceBookingForDyeings/'+serviceBookingForDyeing.id,serviceBookingForDyeing);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ServiceBookingForDyeings/'+id);
  }
  
}

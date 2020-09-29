import { Injectable } from '@angular/core';
import { PartialFabricBooking } from '../../data/marchanzider-model/partial-fabric-booking';
import { BaseURL } from '../../data/baseUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartialFabricBookingService {

  partialFabricBooking:PartialFabricBooking; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<PartialFabricBooking[]>{
    return this.http.get<PartialFabricBooking[]>(BaseURL.apiUrl+'/PartialFabricBookings');
  } 
  add(partialFabricBooking:PartialFabricBooking){
    
    return this.http.post<PartialFabricBooking>(BaseURL.apiUrl+'/PartialFabricBookings',partialFabricBooking);
  }
  update(partialFabricBooking:PartialFabricBooking){
    return this.http.put(BaseURL.apiUrl+'/PartialFabricBookings/'+partialFabricBooking.id,partialFabricBooking);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/PartialFabricBookings/'+id);
  }
}

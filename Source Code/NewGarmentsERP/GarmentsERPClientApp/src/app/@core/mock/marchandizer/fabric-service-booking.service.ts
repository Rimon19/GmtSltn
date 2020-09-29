import { Injectable } from '@angular/core';
import { FabricServiceBooking } from '../../data/marchanzider-model/fabric-service-booking.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class FabricServiceBookingService {

  fabricServiceBooking:FabricServiceBooking; 
  constructor(public http:HttpClient) { 
 
  }
  getAll():Observable<FabricServiceBooking[]>{
    return this.http.get<FabricServiceBooking[]>(BaseURL.apiUrl+'/FabricServiceBookings');
  } 
  add(fabricServiceBooking:FabricServiceBooking){
    
    return this.http.post<FabricServiceBooking>(BaseURL.apiUrl+'/FabricServiceBookings',fabricServiceBooking);
  }
  update(fabricServiceBooking:FabricServiceBooking){
    return this.http.put(BaseURL.apiUrl+'/FabricServiceBookings/'+fabricServiceBooking.id,fabricServiceBooking);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/FabricServiceBookings/'+id);
  }
}

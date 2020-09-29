import { Injectable } from '@angular/core';
import { ShortFabricBooking } from '../../data/marchanzider-model/short-fabric-booking';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ShortFabricBookingService {

  shortFabricBooking:ShortFabricBooking; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<ShortFabricBooking[]>{
    return this.http.get<ShortFabricBooking[]>(BaseURL.apiUrl+'/ShortFabricBookings');
  } 
  add(shortFabricBooking:ShortFabricBooking){
    
    return this.http.post<ShortFabricBooking>(BaseURL.apiUrl+'/ShortFabricBookings',shortFabricBooking);
  }
  update(shortFabricBooking:ShortFabricBooking){
    return this.http.put(BaseURL.apiUrl+'/ShortFabricBookings/'+shortFabricBooking.id,shortFabricBooking);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ShortFabricBookings/'+id);
  }
  
}

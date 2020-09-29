import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { ShortFabricBookingDetails } from '../../data/marchanzider-model/short-fabric-booking-details';

@Injectable({
  providedIn: 'root'
})
export class ShortFabricBookingDetailsService {

  shortFabricBookingDetails:ShortFabricBookingDetails; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<ShortFabricBookingDetails[]>{
    return this.http.get<ShortFabricBookingDetails[]>(BaseURL.apiUrl+'/ShortFabricBookingDetails');
  } 
  add(shortFabricBookingDetails:ShortFabricBookingDetails){
    
    return this.http.post<ShortFabricBookingDetails>(BaseURL.apiUrl+'/ShortFabricBookingDetails',shortFabricBookingDetails);
  }
  update(shortFabricBookingDetails:ShortFabricBookingDetails){
    return this.http.put(BaseURL.apiUrl+'/ShortFabricBookingDetails/'+shortFabricBookingDetails.id,shortFabricBookingDetails);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ShortFabricBookingDetails/'+id);
  }
  
}

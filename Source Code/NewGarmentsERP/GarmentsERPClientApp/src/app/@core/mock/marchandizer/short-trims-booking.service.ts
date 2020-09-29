import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { ShortTrimsBooking } from '../../data/marchanzider-model/short-trims-booking';

@Injectable({
  providedIn: 'root'
})
export class ShortTrimsBookingService {
  shortTrimsBooking:ShortTrimsBooking;

  constructor(public http:HttpClient) {
  
  }
          getAllShortTrimsBooking():Observable<ShortTrimsBooking[]>{
          return this.http.get<ShortTrimsBooking[]>(BaseURL.apiUrl+'/ShortTrimsBookings');
        } 
          addShortTrimsBooking(shortTrimsBooking:ShortTrimsBooking){
            //console.log(seasonInfoes);
            return this.http.post<ShortTrimsBooking>(BaseURL.apiUrl+'/ShortTrimsBookings',shortTrimsBooking);
          }
          updateShortTrimsBooking(shortTrimsBooking:ShortTrimsBooking){
            return this.http.put(BaseURL.apiUrl+'/ShortTrimsBookings/'+shortTrimsBooking.id,shortTrimsBooking);
          }
          deleteShortTrimsBooking(id: number){
            return this.http.delete(BaseURL.apiUrl+'/ShortTrimsBookings/'+id);
          }
}

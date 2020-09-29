import { Injectable } from '@angular/core';
import { SampleFabricBooking } from '../../data/marchanzider-model/sample-fabric-booking';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleFabricBookingService {
  sampleFabricBooking:SampleFabricBooking; 
constructor(public http:HttpClient) { 
 
}
getAll():Observable<SampleFabricBooking[]>{
  return this.http.get<SampleFabricBooking[]>(BaseURL.apiUrl+'/SampleFabricBookings');
} 
add(sampleFabricBooking:SampleFabricBooking){
  
  return this.http.post<SampleFabricBooking>(BaseURL.apiUrl+'/SampleFabricBookings',sampleFabricBooking);
}
update(sampleFabricBooking:SampleFabricBooking){
  return this.http.put(BaseURL.apiUrl+'/SampleFabricBookings/'+sampleFabricBooking.id,sampleFabricBooking);
}
delete(id: number){
  return this.http.delete(BaseURL.apiUrl+'/SampleFabricBookings/'+id);
}

}

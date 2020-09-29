import { Injectable } from '@angular/core';
import { SampleFabricBookingWithorder } from '../../data/marchanzider-model/sample-fabric-booking-withorder';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class SampleFabricBookingWithorderService {

  sampleFabricBookingWithorder:SampleFabricBookingWithorder; 

constructor(public http:HttpClient) { 
 
}
getAll():Observable<SampleFabricBookingWithorder[]>{
  return this.http.get<SampleFabricBookingWithorder[]>(BaseURL.apiUrl+'/SampleFabricBookingWithorders');
} 
add(sampleFabricBookingWithorder:SampleFabricBookingWithorder){
  
  return this.http.post<SampleFabricBookingWithorder>(BaseURL.apiUrl+'/SampleFabricBookingWithorders',sampleFabricBookingWithorder);
}
update(sampleFabricBookingWithorder:SampleFabricBookingWithorder){
  return this.http.put(BaseURL.apiUrl+'/SampleFabricBookingWithorders/'+sampleFabricBookingWithorder.id,sampleFabricBookingWithorder);
}
delete(id: number){
  return this.http.delete(BaseURL.apiUrl+'/SampleFabricBookingWithorders/'+id);
}

}

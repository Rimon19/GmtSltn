import { Injectable } from '@angular/core';
import { SampleFabricBookingWithOrderDetails } from '../../data/marchanzider-model/sample-fabric-booking-woDtls';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleFabricBookingWoDtlsService {

  
  sampleFabricBookingWithOrderDetails:SampleFabricBookingWithOrderDetails; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<SampleFabricBookingWithOrderDetails[]>{
    return this.http.get<SampleFabricBookingWithOrderDetails[]>(BaseURL.apiUrl+'/SampleFabricBookingWithOrderDetails');
  } 
  add(sampleFabricBookingWithOrderDetails:SampleFabricBookingWithOrderDetails){
    
    return this.http.post<SampleFabricBookingWithOrderDetails>(BaseURL.apiUrl+'/SampleFabricBookingWithOrderDetails',sampleFabricBookingWithOrderDetails);
  }
  update(sampleFabricBookingWithOrderDetails:SampleFabricBookingWithOrderDetails){
    return this.http.put(BaseURL.apiUrl+'/SampleFabricBookingWithOrderDetails/'+sampleFabricBookingWithOrderDetails.id,sampleFabricBookingWithOrderDetails);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/SampleFabricBookingWithOrderDetails/'+id);
  }
  
}

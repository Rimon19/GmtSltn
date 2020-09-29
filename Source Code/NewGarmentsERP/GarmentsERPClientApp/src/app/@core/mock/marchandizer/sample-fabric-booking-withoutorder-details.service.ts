import { Injectable } from '@angular/core';
import { SampleFabricBookingWithoutorderDetails } from '../../data/marchanzider-model/SampleFabricBookingWithoutorderDetails';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleFabricBookingWithoutorderDetailsService {

  sampleFabricBookingWithoutorderDetails:SampleFabricBookingWithoutorderDetails; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<SampleFabricBookingWithoutorderDetails[]>{
    return this.http.get<SampleFabricBookingWithoutorderDetails[]>(BaseURL.apiUrl+'/SampleFabricBookingWithoutorderDetails');
  } 
  add(sampleFabricBookingWithoutorderDetails:SampleFabricBookingWithoutorderDetails){
    
    return this.http.post<SampleFabricBookingWithoutorderDetails>(BaseURL.apiUrl+'/SampleFabricBookingWithoutorderDetails',sampleFabricBookingWithoutorderDetails);
  }
  update(sampleFabricBookingWithoutorderDetails:SampleFabricBookingWithoutorderDetails){
    return this.http.put(BaseURL.apiUrl+'/SampleFabricBookingWithoutorderDetails/'+sampleFabricBookingWithoutorderDetails.id,sampleFabricBookingWithoutorderDetails);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/SampleFabricBookingWithoutorderDetails/'+id);
  }
  
  
}

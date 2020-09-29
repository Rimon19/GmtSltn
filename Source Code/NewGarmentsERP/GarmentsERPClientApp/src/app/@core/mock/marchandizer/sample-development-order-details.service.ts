import { Injectable } from '@angular/core';
import { SampleDevelopmentOrderDetails } from '../../data/marchanzider-model/sample-development-order-details.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class SampleDevelopmentOrderDetailsService {
    
 sampleDevelopmentOrderDetails:SampleDevelopmentOrderDetails; 
  constructor(public http:HttpClient) { }

  getAll():Observable<SampleDevelopmentOrderDetails[]>{
    return this.http.get<SampleDevelopmentOrderDetails[]>(BaseURL.apiUrl+'/SampleDevelopmentOrderDetails');
  } 
  add(sampleDevelopmentOrderDetails:SampleDevelopmentOrderDetails){
    
    return this.http.post<SampleDevelopmentOrderDetails>(BaseURL.apiUrl+'/SampleDevelopmentOrderDetails',sampleDevelopmentOrderDetails);
  }
  update(sampleDevelopmentOrderDetails:SampleDevelopmentOrderDetails){
    return this.http.put(BaseURL.apiUrl+'/SampleDevelopmentOrderDetails/'+sampleDevelopmentOrderDetails.id,sampleDevelopmentOrderDetails);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/SampleDevelopmentOrderDetails/'+id); 
  }
   
}

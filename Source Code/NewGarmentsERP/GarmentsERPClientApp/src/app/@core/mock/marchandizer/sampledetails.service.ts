import { Injectable } from '@angular/core';
import { Sampledetails } from '../../data/marchanzider-model/sampledetails';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampledetailsService {

  sampledetails:Sampledetails; 

  constructor(public http:HttpClient) { 
  
  }
  getAll():Observable<Sampledetails[]>{
    return this.http.get<Sampledetails[]>(BaseURL.apiUrl+'/Sampledetails');
  } 
  add(sampledetails:Sampledetails[]){
    
    return this.http.post<Sampledetails>(BaseURL.apiUrl+'/Sampledetails',sampledetails);
  }
  update(sampledetails:Sampledetails){
    return this.http.put(BaseURL.apiUrl+'/Sampledetails/'+sampledetails.id,sampledetails);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/Sampledetails/'+id);
  }
  
}

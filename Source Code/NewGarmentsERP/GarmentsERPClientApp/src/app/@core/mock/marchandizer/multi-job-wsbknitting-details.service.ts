import { Injectable } from '@angular/core';
import { MultiJobWSBKnittingDetails } from '../../data/marchanzider-model/multi-job-wsbknitting-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class MultiJobWSBKnittingDetailsService {
 
  multiJobWSBKnittingDetails:MultiJobWSBKnittingDetails; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<MultiJobWSBKnittingDetails[]>{
    return this.http.get<MultiJobWSBKnittingDetails[]>(BaseURL.apiUrl+'/MultiJobWSBKnittingDetails');
  } 
  add(multiJobWSBKnittingDetails:MultiJobWSBKnittingDetails){
    
    return this.http.post<MultiJobWSBKnittingDetails>(BaseURL.apiUrl+'/MultiJobWSBKnittingDetails',multiJobWSBKnittingDetails);
  }
  update(multiJobWSBKnittingDetails:MultiJobWSBKnittingDetails){
    return this.http.put(BaseURL.apiUrl+'/MultiJobWSBKnittingDetails/'+multiJobWSBKnittingDetails.id,multiJobWSBKnittingDetails);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/MultiJobWSBKnittingDetails/'+id);
  }
}

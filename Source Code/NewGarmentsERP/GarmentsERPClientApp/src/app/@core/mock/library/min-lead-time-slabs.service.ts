import { Injectable } from '@angular/core';
import { MinLeadTimeSlabs } from '../../data/Library-Modul-model/min-lead-time-slabs';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinLeadTimeSlabsService {

  minLeadTimeSlabs:MinLeadTimeSlabs; 
  constructor(public http:HttpClient) { }
  getAllMinLeadTimeSlabs():Observable<MinLeadTimeSlabs[]>{
    return this.http.get<MinLeadTimeSlabs[]>(BaseURL.apiUrl+'/MinLeadTimeSlabs');
  } 
  addMinLeadTimeSlabs(minLeadTimeSlabs:MinLeadTimeSlabs){
 
    return this.http.post<MinLeadTimeSlabs>(BaseURL.apiUrl+'/MinLeadTimeSlabs',minLeadTimeSlabs);
  }
  updateMinLeadTimeSlabs(minLeadTimeSlabs:MinLeadTimeSlabs){
    return this.http.put(BaseURL.apiUrl+'/MinLeadTimeSlabs/'+minLeadTimeSlabs.id,minLeadTimeSlabs);
  }
  deleteMinLeadTimeSlabs(id: number){
    return this.http.delete(BaseURL.apiUrl+'/MinLeadTimeSlabs/'+id);
  }
}

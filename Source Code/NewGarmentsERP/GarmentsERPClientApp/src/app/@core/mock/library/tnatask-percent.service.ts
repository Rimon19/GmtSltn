import { Injectable } from '@angular/core';
import { TNATaskPercent } from '../../data/Library-Modul-model/tnatask-percent';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class TNATaskPercentService {

  tNATaskPercent:TNATaskPercent; 
  constructor(public http:HttpClient) { }
  getTNATaskPercent():Observable<TNATaskPercent[]>{
    return this.http.get<TNATaskPercent[]>(BaseURL.apiUrl+'/TNATaskPercents');
  } 
  addTNATaskPercent(tNATaskPercent:TNATaskPercent){
    console.log('service data',tNATaskPercent);
    return this.http.post<TNATaskPercent[]>(BaseURL.apiUrl+'/TNATaskPercents',tNATaskPercent);
  }
  updateTNATaskPercent(tNATaskPercent:TNATaskPercent){
    return this.http.put(BaseURL.apiUrl+'/TNATaskPercents/'+tNATaskPercent.id,tNATaskPercent);
  }
  deleteTNATaskPercent(id: number){
    return this.http.delete(BaseURL.apiUrl+'/TNATaskPercents/'+id);
  }
}

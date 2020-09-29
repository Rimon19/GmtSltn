import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TNATaskEntries } from '../../data/Library-Modul-model/tnatask-entries';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class TNATaskEntriesService {
  tNATaskEntries:TNATaskEntries;
  constructor(public http:HttpClient) { }
  getTNATaskEntries():Observable<TNATaskEntries[]>{
    return this.http.get<TNATaskEntries[]>(BaseURL.apiUrl+'/TNATaskEntries');
  } 
  addTNATaskEntries(tNATaskEntries:TNATaskEntries){
    console.log('service data',tNATaskEntries);
    return this.http.post<TNATaskEntries[]>(BaseURL.apiUrl+'/TNATaskEntries',tNATaskEntries);
  }
  updateTNATaskEntries(tNATaskEntries:TNATaskEntries){
    return this.http.put(BaseURL.apiUrl+'/TNATaskEntries/'+tNATaskEntries.id,tNATaskEntries);
  }
  deleteTNATaskEntries(id: number){
    return this.http.delete(BaseURL.apiUrl+'/TNATaskEntries/'+id);
  }
}

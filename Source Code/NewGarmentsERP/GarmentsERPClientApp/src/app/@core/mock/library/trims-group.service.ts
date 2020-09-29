import { Injectable } from '@angular/core';
import { TrimsGroup } from '../../data/Library-Modul-model/trims-groups';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class TrimsGroupService {

  trimsGroup:TrimsGroup; 
  constructor(public http:HttpClient) { }
  getAll():Observable<TrimsGroup[]>{
    return this.http.get<TrimsGroup[]>(BaseURL.apiUrl+'/TrimsGroups');
  } 
  add(trimsGroup:TrimsGroup){
    console.log('service data',trimsGroup);
    return this.http.post<TrimsGroup[]>(BaseURL.apiUrl+'/TrimsGroups',trimsGroup);
  }
  update(trimsGroup:TrimsGroup){
    return this.http.put(BaseURL.apiUrl+'/TrimsGroups/'+trimsGroup.id,trimsGroup);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/TrimsGroups/'+id);
  }
}

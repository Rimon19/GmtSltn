import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GarmentsItemEntries } from '../../data/Library-Modul-model/garments-item-entries';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GarmentsItemEntriesService {

  garmentsItemEntries:GarmentsItemEntries;
  constructor(public http:HttpClient) { }
  getGarmentsItemEntries():Observable<GarmentsItemEntries[]>{
    return this.http.get<GarmentsItemEntries[]>(BaseURL.apiUrl+'/GarmentsItemEntries');
  } 
  addGarmentsItemEntries(garmentsItemEntries:GarmentsItemEntries){
    return this.http.post<GarmentsItemEntries>(BaseURL.apiUrl+'/GarmentsItemEntries',garmentsItemEntries);
  }
  updateGarmentsItemEntries(garmentsItemEntries:GarmentsItemEntries){
    return this.http.put(BaseURL.apiUrl+'/GarmentsItemEntries/'+garmentsItemEntries.id,garmentsItemEntries);
  }
  deleteGarmentsItemEntries(id: number){
    return this.http.delete(BaseURL.apiUrl+'/GarmentsItemEntries/'+id);
  }
}

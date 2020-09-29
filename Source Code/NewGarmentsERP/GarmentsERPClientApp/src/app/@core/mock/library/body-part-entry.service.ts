import { Injectable } from '@angular/core';
import { BodyPartEntry } from '../../data/Library-Modul-model/BodyPartEntry';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class BodyPartEntryService { 

  bodyPartEntry:BodyPartEntry; 
  constructor(public http:HttpClient) { }
  getAll():Observable<BodyPartEntry[]>{
    return this.http.get<BodyPartEntry[]>(BaseURL.apiUrl+'/BodyPartEntries');
  } 
  add(bodyPartEntry:BodyPartEntry){
    console.log('service data',bodyPartEntry);
    return this.http.post<BodyPartEntry>(BaseURL.apiUrl+'/BodyPartEntries',bodyPartEntry);
  }
  update(bodyPartEntry:BodyPartEntry){
    return this.http.put(BaseURL.apiUrl+'/BodyPartEntries/'+bodyPartEntry.id,bodyPartEntry);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/BodyPartEntries/'+id);
  }
}

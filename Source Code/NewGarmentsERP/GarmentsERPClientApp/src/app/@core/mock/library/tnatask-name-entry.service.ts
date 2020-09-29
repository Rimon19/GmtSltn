import { Injectable } from '@angular/core';
import { TNATaskNameEntry } from '../../data/Library-Modul-model/tnatask-name-entry';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TNATaskNameEntryService {

  tNATaskNameEntry:TNATaskNameEntry; 
  constructor(public http:HttpClient) { }
  getTNATaskNameEntry():Observable<TNATaskNameEntry[]>{
    return this.http.get<TNATaskNameEntry[]>(BaseURL.apiUrl+'/TNATaskNameEntries');
  } 
  addTNATaskNameEntry(tNATaskNameEntry:TNATaskNameEntry){
    console.log('service data',tNATaskNameEntry);
    return this.http.post<TNATaskNameEntry[]>(BaseURL.apiUrl+'/TNATaskNameEntries',tNATaskNameEntry);
  }
  updateTNATaskNameEntry(tNATaskNameEntry:TNATaskNameEntry){
    return this.http.put(BaseURL.apiUrl+'/TNATaskNameEntries/'+tNATaskNameEntry.id,tNATaskNameEntry);
  }
  deleteTNATaskNameEntry(id: number){
    return this.http.delete(BaseURL.apiUrl+'/TNATaskNameEntries/'+id);
  }
}

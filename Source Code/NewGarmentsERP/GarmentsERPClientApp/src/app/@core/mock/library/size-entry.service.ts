import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';
import { SizeEntry } from '../../data/Library-Modul-model/size-entry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SizeEntryService {

  sizeEntry:SizeEntry; 
  constructor(public http:HttpClient) { }
  getSizeEntry():Observable<SizeEntry[]>{
    return this.http.get<SizeEntry[]>(BaseURL.apiUrl+'/SizeEntries');
  } 
  addSizeEntry(sizeEntry:SizeEntry){
    console.log('service data',sizeEntry);
    return this.http.post<SizeEntry[]>(BaseURL.apiUrl+'/SizeEntries',sizeEntry);
  }
  updateSizeEntry(sizeEntry:SizeEntry){
    return this.http.put(BaseURL.apiUrl+'/SizeEntries/'+sizeEntry.id,sizeEntry);
  }
  deleteSizeEntry(id: number){
    return this.http.delete(BaseURL.apiUrl+'/SizeEntries/'+id);
  }
}

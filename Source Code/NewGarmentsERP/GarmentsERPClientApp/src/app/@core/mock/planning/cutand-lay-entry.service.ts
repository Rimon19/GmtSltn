import { Injectable } from '@angular/core';
import { CutandLayEntry } from '../../data/planning-model/CutandLayEntry';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CutandLayEntryService {

  cutandLayEntry:CutandLayEntry; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<CutandLayEntry[]>{
    return this.http.get<CutandLayEntry[]>(BaseURL.apiUrl+'/CutandLayEntries');
  } 
  add(cutandLayEntry:CutandLayEntry){
    
    return this.http.post<CutandLayEntry>(BaseURL.apiUrl+'/CutandLayEntries',cutandLayEntry);
  }
  update(cutandLayEntry:CutandLayEntry){
    return this.http.put(BaseURL.apiUrl+'/CutandLayEntries/'+cutandLayEntry.id,cutandLayEntry);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/CutandLayEntries/'+id);
  }
  
}

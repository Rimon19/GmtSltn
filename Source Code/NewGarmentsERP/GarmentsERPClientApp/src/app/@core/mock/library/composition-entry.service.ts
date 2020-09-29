import { Injectable } from '@angular/core';
import { CompositionEntry } from '../../data/Library-Modul-model/composition-entry';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CompositionEntryService {

  compositionEntry:CompositionEntry; 
  constructor(public http:HttpClient) { }
  getCompositionEntry():Observable<CompositionEntry[]>{
    return this.http.get<CompositionEntry[]>(BaseURL.apiUrl+'/Compositions');
  } 
  addCompositionEntry(compositionEntry:CompositionEntry){
    console.log('service data',compositionEntry);

    return this.http.post<CompositionEntry[]>(BaseURL.apiUrl+'/Compositions',compositionEntry);
  }
  updateCompositionEntry(compositionEntry:CompositionEntry){
    return this.http.put(BaseURL.apiUrl+'/Compositions/'+compositionEntry.id,compositionEntry);
  }
  deleteCompositionEntry(id: number){
    return this.http.delete(BaseURL.apiUrl+'/Compositions/'+id);
  }
}

import { Injectable } from '@angular/core';
import { SampleDevelopmentEntry } from '../../data/marchanzider-model/sample-development-entry.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class SampleDevelopmentEntryService {
  sampleDevelopmentEntry:SampleDevelopmentEntry;

  sampaleDevlopmentList:SampleDevelopmentEntry[]=[];
  constructor(public http:HttpClient) { } 

  getAll():Observable<SampleDevelopmentEntry[]>{
    return this.http.get<SampleDevelopmentEntry[]>(BaseURL.apiUrl+'/SampleDevelopmentEntries');
  }  
  add(sampleDevelopmentEntry:SampleDevelopmentEntry){
    
    return this.http.post<SampleDevelopmentEntry>(BaseURL.apiUrl+'/SampleDevelopmentEntries',sampleDevelopmentEntry);
  }
  update(sampleDevelopmentEntry:SampleDevelopmentEntry){
    return this.http.put(BaseURL.apiUrl+'/SampleDevelopmentEntries/'+sampleDevelopmentEntry.id,sampleDevelopmentEntry);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/SampleDevelopmentEntries/'+id);
  }
 
  smeRefreshList(){
    this.http.get(BaseURL.apiUrl+'/SampleDevelopmentEntries')
    .subscribe(result=> this.sampaleDevlopmentList =result as SampleDevelopmentEntry[])
  }
}

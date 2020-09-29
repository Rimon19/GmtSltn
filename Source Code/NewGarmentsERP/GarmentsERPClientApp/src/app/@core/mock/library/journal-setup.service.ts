import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { JournalSetup } from '../../data/Library-Modul-model/journal-setup.model';

@Injectable({
  providedIn: 'root'
})
export class JournalSetupService {

journalSetup : JournalSetup;
  constructor(public http:HttpClient) { }

  getAll():Observable<JournalSetup[]>{
    return this.http.get<JournalSetup[]>(BaseURL.apiUrl+'/JournalSetups');
  } 
  add(journalSetup:JournalSetup){
    console.log('service data',journalSetup);
    return this.http.post<JournalSetup>(BaseURL.apiUrl+'/JournalSetups',journalSetup);
  }
  update(journalSetup:JournalSetup){
    return this.http.put(BaseURL.apiUrl+'/JournalSetups/'+journalSetup.id,journalSetup);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/JournalSetups/'+id);
  }
}

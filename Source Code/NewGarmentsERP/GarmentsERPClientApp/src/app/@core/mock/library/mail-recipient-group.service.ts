import { Injectable } from '@angular/core';
import { MailRecipientGroup } from '../../data/Library-Modul-model/mail-recipient-group';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class MailRecipientGroupService {

  mailRecipientGroup:MailRecipientGroup; 
  constructor(public http:HttpClient) { }
  getAllMailRecipientGroup():Observable<MailRecipientGroup[]>{
    return this.http.get<MailRecipientGroup[]>(BaseURL.apiUrl+'/MailRecipientGroups');
  } 
  addMailRecipientGroup(machineEntrie:MailRecipientGroup){
 
    return this.http.post<MailRecipientGroup>(BaseURL.apiUrl+'/MailRecipientGroups',machineEntrie);
  }
  updateMailRecipientGroup(machineEntrie:MailRecipientGroup){
    return this.http.put(BaseURL.apiUrl+'/MailRecipientGroups/'+machineEntrie.id,machineEntrie);
  }
  deleteMailRecipientGroup(id: number){
    return this.http.delete(BaseURL.apiUrl+'/MailRecipientGroups/'+id);
  }
}

import { Injectable } from '@angular/core';
import { EmailAddressSetup } from '../../data/Library-Modul-model/email-address-setup';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class EmailAddressSetupService {

  emailAddressSetup:EmailAddressSetup; 
  constructor(public http:HttpClient) { }
  getAllEmailAddressSetup():Observable<EmailAddressSetup[]>{
    return this.http.get<EmailAddressSetup[]>(BaseURL.apiUrl+'/EmailAddressSetups');
  } 
  addEmailAddressSetup(emailAddressSetup:EmailAddressSetup){
 
    return this.http.post<EmailAddressSetup>(BaseURL.apiUrl+'/EmailAddressSetups',emailAddressSetup);
  }
  updateEmailAddressSetup(emailAddressSetup:EmailAddressSetup){
    return this.http.put(BaseURL.apiUrl+'/EmailAddressSetups/'+emailAddressSetup.id,emailAddressSetup);
  }
  deleteEmailAddressSetup(id: number){
    return this.http.delete(BaseURL.apiUrl+'/EmailAddressSetups/'+id);
  }
}

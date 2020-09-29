import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OtherPartyProfile } from '../../data/Library-Modul-model/other-party-profile';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class OtherPartyProfileService {
  otherPartyProfile:OtherPartyProfile;
  constructor(public http:HttpClient) { }
  getOtherPartyProfile():Observable<OtherPartyProfile[]>{
    return this.http.get<OtherPartyProfile[]>(BaseURL.apiUrl+'/OtherPartyProfiles');
  } 
  addOtherPartyProfile(otherPartyProfile:OtherPartyProfile){
    
    return this.http.post<OtherPartyProfile[]>(BaseURL.apiUrl+'/OtherPartyProfiles',otherPartyProfile);
  }
  updateOtherPartyProfile(otherPartyProfile:OtherPartyProfile){
    return this.http.put(BaseURL.apiUrl+'/OtherPartyProfiles/'+otherPartyProfile.id,otherPartyProfile);
  }
  deleteOtherPartyProfile(id: number){
    return this.http.delete(BaseURL.apiUrl+'/OtherPartyProfiles/'+id);
  }
}

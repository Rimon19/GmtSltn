import { Injectable } from '@angular/core';
import { DivisionProfile } from '../../data/Library-Modul-model/division-profile';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class DivisionProfileService {
  divisionProfile:DivisionProfile;
  constructor(public http:HttpClient) { }
  getDivisionProfile():Observable<DivisionProfile[]>{
    return this.http.get<DivisionProfile[]>(BaseURL.apiUrl+'/DivisionProfiles');
  } 
  addDivisionProfile(divisionProfile:DivisionProfile){
    
    return this.http.post<DivisionProfile>(BaseURL.apiUrl+'/DivisionProfiles',divisionProfile);
  }
  updateDivisionProfile(divisionProfile:DivisionProfile){
    return this.http.put(BaseURL.apiUrl+'/DivisionProfiles/'+divisionProfile.id,divisionProfile);
  }
  deleteDivisionProfile(id: number){
    return this.http.delete(BaseURL.apiUrl+'/DivisionProfiles/'+id);
  }
}

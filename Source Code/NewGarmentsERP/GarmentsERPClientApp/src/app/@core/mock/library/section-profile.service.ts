import { Injectable } from '@angular/core';
import { BaseURL } from '../../data/baseUrl';
import { SectionProfile } from '../../data/Library-Modul-model/section-profile';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectionProfileService {
  sectionProfile:SectionProfile;
  constructor(public http:HttpClient) { }
  getSectionProfile():Observable<SectionProfile[]>{
    return this.http.get<SectionProfile[]>(BaseURL.apiUrl+'/SectionProfiles');
  } 
  addSectionProfile(sectionProfile:SectionProfile){
    
    return this.http.post<SectionProfile[]>(BaseURL.apiUrl+'/SectionProfiles',sectionProfile);
  }
  updateSectionProfile(sectionProfile:SectionProfile){
    return this.http.put(BaseURL.apiUrl+'/SectionProfiles/'+sectionProfile.id,sectionProfile);
  }
  deleteSectionProfile(id: number){
    return this.http.delete(BaseURL.apiUrl+'/SectionProfiles/'+id);
  }
}

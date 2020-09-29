import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { GroupProfile } from '../../data/Library-Modul-model/group-profile';

@Injectable({
  providedIn: 'root'
})
export class GroupProfileService {
  groupProfile:GroupProfile;
  constructor(public http:HttpClient) { }
  getGroupProfile():Observable<GroupProfile[]>{
    return this.http.get<GroupProfile[]>(BaseURL.apiUrl+'/GroupProfiles');
  } 
  addGroupProfile(groupProfile:GroupProfile){

    return this.http.post<GroupProfile>(BaseURL.apiUrl+'/GroupProfiles',groupProfile);
  }
  updateGroupProfile(groupProfile:GroupProfile){
    return this.http.put(BaseURL.apiUrl+'/GroupProfiles/'+groupProfile.id,groupProfile);
  }
  deleteGroupProfile(id: number){
    return this.http.delete(BaseURL.apiUrl+'/GroupProfiles/'+id);
  }
}

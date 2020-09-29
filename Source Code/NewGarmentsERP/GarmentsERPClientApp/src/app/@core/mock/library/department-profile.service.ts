import { Injectable } from '@angular/core';
import { DepartmentProfile } from '../../data/Library-Modul-model/department-profile';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class DepartmentProfileService {
  departmentProfile:DepartmentProfile;
  constructor(public http:HttpClient) { }
  getDepartmentProfile():Observable<DepartmentProfile[]>{
    return this.http.get<DepartmentProfile[]>(BaseURL.apiUrl+'/DepartmentProfiles');
  } 
  addDepartmentProfile(departmentProfile:DepartmentProfile){
    
    return this.http.post<DepartmentProfile>(BaseURL.apiUrl+'/DepartmentProfiles',departmentProfile);
  }
  updateDepartmentProfile(departmentProfile:DepartmentProfile){
    return this.http.put(BaseURL.apiUrl+'/DepartmentProfiles/'+departmentProfile.id,departmentProfile);
  }
  deleteDepartmentProfile(id: number){
    return this.http.delete(BaseURL.apiUrl+'/DepartmentProfiles/'+id);
  }
}

import { Injectable } from '@angular/core';

import { BaseURL } from '../data/baseUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserTypeInfo } from '../data/user-info-type';

@Injectable({
  providedIn: 'root'
})
export class UserTypeInfoService {

  UserTypeInfo:UserTypeInfo; 
  constructor(public http:HttpClient) { }
  getAll():Observable<UserTypeInfo[]>{
    return this.http.get<UserTypeInfo[]>(BaseURL.apiUrl+'/UserTypeInfoes/Index');
  } 
  add(UserTypeInfo:UserTypeInfo){
    console.log('service data',UserTypeInfo);
    return this.http.post<UserTypeInfo>(BaseURL.apiUrl+'/UserTypeInfoes',UserTypeInfo);
  }
  update(UserTypeInfo:UserTypeInfo){
    return this.http.put(BaseURL.apiUrl+'/UserTypeInfoes/'+UserTypeInfo.userTypeId,UserTypeInfo);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/UserTypeInfoes/'+id);
  }
}

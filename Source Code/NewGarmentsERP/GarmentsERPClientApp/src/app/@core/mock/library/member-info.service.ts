import { Injectable } from '@angular/core';
import { MemberInfo } from '../../data/Library-Modul-model/member-info';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberInfoService {

  memberInfo:MemberInfo; 
  constructor(public http:HttpClient) { }
  getAll():Observable<MemberInfo[]>{
    return this.http.get<MemberInfo[]>(BaseURL.apiUrl+'/MemberInfoes');
  } 
  add(memberInfo:MemberInfo){
    console.log('service data',memberInfo);
    return this.http.post<MemberInfo>(BaseURL.apiUrl+'/MemberInfoes',memberInfo);
  }
  update(memberInfo:MemberInfo){
    return this.http.put(BaseURL.apiUrl+'/MemberInfoes/'+memberInfo.id,memberInfo);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/MemberInfoes/'+id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { UserInfoes } from '../../data/marchanzider-model/user-infoes.model';

@Injectable({
  providedIn: 'root'
})
export class UserInfoesService {

  constructor(public http:HttpClient) {
    
  }
 getAllUserInfoes():Observable<any>{
   return this.http.get<UserInfoes[]>(BaseURL.apiUrl+'/UserInfoes/Index');
 }
 addUserInfoes(userInfoes:UserInfoes){
   //console.log(userInfoes);
   return this.http.post<UserInfoes[]>(BaseURL.apiUrl+'/UserInfoes',userInfoes);
 }
 updateUserInfoes(userInfoes:UserInfoes){
   return this.http.put(BaseURL.apiUrl+'/UserInfoes/'+userInfoes.userId,userInfoes);
 }
 deleteUserInfoes(id: number){
   return this.http.delete(BaseURL.apiUrl+'/UserInfoes/'+id);
 }
}

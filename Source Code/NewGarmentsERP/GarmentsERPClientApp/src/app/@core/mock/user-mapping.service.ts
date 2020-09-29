import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../data/baseUrl';
import { UserMapping } from '../data/user-mapping';

@Injectable({
  providedIn: 'root'
})
export class UserMappingService {
  userMapping:UserMapping;
  constructor(public http:HttpClient) {
    
  }
 getAllUserMapping():Observable<any>{
   return this.http.get<UserMapping[]>(BaseURL.apiUrl+'/UserMappings');
 }
 addUserMapping(userMapping:UserMapping){
   console.log(location);
   return this.http.post<UserMapping>(BaseURL.apiUrl+'/UserMappings',userMapping);
 }
 updateUserMapping(userMapping:UserMapping){
   return this.http.put(BaseURL.apiUrl+'/UserMappings/'+userMapping.id,userMapping);
 }
 deleteUserMapping(id: number){
   return this.http.delete(BaseURL.apiUrl+'/UserMappings/'+id);
 }
}

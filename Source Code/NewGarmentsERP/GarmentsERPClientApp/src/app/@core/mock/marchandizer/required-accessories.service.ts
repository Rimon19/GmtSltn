import { Injectable } from '@angular/core';
import { RequiredAccessories } from '../../data/marchanzider-model/required-accessories';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class RequiredAccessoriesService {

  requiredAccessories:RequiredAccessories; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<RequiredAccessories[]>{
    return this.http.get<RequiredAccessories[]>(BaseURL.apiUrl+'/RequiredAccessories');
  } 
  add(requiredAccessories:RequiredAccessories){
    
    return this.http.post<RequiredAccessories>(BaseURL.apiUrl+'/RequiredAccessories',requiredAccessories);
  }
  update(requiredAccessories:RequiredAccessories){
    return this.http.put(BaseURL.apiUrl+'/RequiredAccessories/'+requiredAccessories.id,requiredAccessories);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/RequiredAccessories/'+id);
  }
  
}

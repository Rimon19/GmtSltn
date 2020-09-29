import { Injectable } from '@angular/core';
import { RequiredEmbellishment } from '../../data/marchanzider-model/required-embellishment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class RequiredEmbellishmentService { 


  requiredEmbellishment:RequiredEmbellishment; 

  constructor(public http:HttpClient) { 
   
  }
  getAll():Observable<RequiredEmbellishment[]>{
    return this.http.get<RequiredEmbellishment[]>(BaseURL.apiUrl+'/RequiredEmbellishments');
  } 
  add(requiredEmbellishment:RequiredEmbellishment){
    
    return this.http.post<RequiredEmbellishment>(BaseURL.apiUrl+'/RequiredEmbellishments',requiredEmbellishment);
  }
  update(requiredEmbellishment:RequiredEmbellishment){
    return this.http.put(BaseURL.apiUrl+'/RequiredEmbellishments/'+requiredEmbellishment.id,requiredEmbellishment);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/RequiredEmbellishments/'+id);
  }
}

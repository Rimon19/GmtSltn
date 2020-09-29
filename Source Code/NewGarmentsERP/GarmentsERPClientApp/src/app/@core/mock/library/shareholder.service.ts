import { Injectable } from '@angular/core';
import { Shareholder } from '../../data/Library-Modul-model/shareholder';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShareholderService {
  shareholder:Shareholder; 
  constructor(public http:HttpClient) { }
  getAll():Observable<Shareholder[]>{
    return this.http.get<Shareholder[]>(BaseURL.apiUrl+'/Shareholders');
  } 
  add(shareholder:Shareholder){
    console.log('service data',shareholder);
    return this.http.post<Shareholder>(BaseURL.apiUrl+'/Shareholders',shareholder);
  }
  update(shareholder:Shareholder){
    return this.http.put(BaseURL.apiUrl+'/Shareholders/'+shareholder.id,shareholder);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/Shareholders/'+id);
  }
}

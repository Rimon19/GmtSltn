import { Injectable } from '@angular/core';
import { ShareholderShareDetails } from '../../data/Library-Modul-model/shareholder-share-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ShareholderShareDetailsService {

  shareholdersharedetails:ShareholderShareDetails; 
  constructor(public http:HttpClient) { }
  getAll():Observable<ShareholderShareDetails[]>{
    return this.http.get<ShareholderShareDetails[]>(BaseURL.apiUrl+'/ShareholderShareDetails');
  } 
  add(shareholdersharedetails:ShareholderShareDetails){
    console.log('service data',shareholdersharedetails);
    return this.http.post<ShareholderShareDetails[]>(BaseURL.apiUrl+'/ShareholderShareDetails',shareholdersharedetails);
  }
  update(shareholdersharedetails:ShareholderShareDetails){
    return this.http.put(BaseURL.apiUrl+'/ShareholderShareDetails/'+shareholdersharedetails.id,shareholdersharedetails);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ShareholderShareDetails/'+id);
  }
}

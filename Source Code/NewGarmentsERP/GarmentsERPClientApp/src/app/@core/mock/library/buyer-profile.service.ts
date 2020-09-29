import { Injectable } from '@angular/core';
import { BuyerProfile } from '../../data/Library-Modul-model/buyer-profile';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class BuyerProfileService {

  buyerProfile:BuyerProfile; 
 
  constructor(public http:HttpClient) { 
 
  }
  getAll():Observable<BuyerProfile[]>{
  return this.http.get<BuyerProfile[]>(BaseURL.apiUrl+'/BuyerProfiles');
  } 
  add(buyerProfile:BuyerProfile){
    console.log('service data',BuyerProfile);
    return this.http.post<BuyerProfile>(BaseURL.apiUrl+'/BuyerProfiles',buyerProfile);
  }
  update(buyerProfile:BuyerProfile){
    return this.http.put(BaseURL.apiUrl+'/BuyerProfiles/'+buyerProfile.id,buyerProfile);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/BuyerProfiles/'+id);
  }
  
 
}

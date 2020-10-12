import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WashCost } from '../data/marchanzider-model/wash-cost';
import { BaseURL } from '../data/baseUrl';


@Injectable({
  providedIn: 'root'
})
export class WashCostService {
  washCost:WashCost;
  constructor(public http:HttpClient) {
    
  }
 getAllWashCost():Observable<any>{
   return this.http.get<WashCost[]>(BaseURL.apiUrl+'/WashCosts');
 }
 addWashCost(washCost:WashCost){
   console.log(location);
   return this.http.post<WashCost[]>(BaseURL.apiUrl+'/WashCosts',washCost);
 }
 updateWashCost(washCost:WashCost){
   return this.http.put(BaseURL.apiUrl+'/WashCosts/'+washCost.id,washCost);
 }
 deleteWashCost(id: number){
   return this.http.delete(BaseURL.apiUrl+'/WashCosts/'+id);
 }
}

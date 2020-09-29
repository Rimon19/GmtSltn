import { Injectable } from '@angular/core';
import { CommercialCosts } from '../data/commercial-costs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CommercialCostsService {

  commercialCosts:CommercialCosts;
  constructor(public http:HttpClient) {
   
   }
   getAllCommercialCosts():Observable<CommercialCosts[]>{
    return this.http.get<CommercialCosts[]>(BaseURL.apiUrl+'/CommercialCosts');
  }
  addCommercialCosts(commercialCosts:CommercialCosts){
    console.log(CommercialCosts);
    return this.http.post<CommercialCosts[]>(BaseURL.apiUrl+'/CommercialCosts',commercialCosts);
  }
  updateCommercialCosts(commercialCosts:CommercialCosts){
    return this.http.put(BaseURL.apiUrl+'/CommercialCosts/'+commercialCosts.id,commercialCosts);
  }
  deleteCommercialCosts(id: number){
    return this.http.delete(BaseURL.apiUrl+'/CommercialCosts/'+id);
  }
}

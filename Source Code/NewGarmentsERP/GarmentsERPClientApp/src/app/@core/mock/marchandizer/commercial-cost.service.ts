import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { CommercialCost } from '../../data/marchanzider-model/commercial-cost.model';

@Injectable({
  providedIn: 'root'
})
export class CommercialCostService {

  constructor(public http:HttpClient) { }


  getAllCommercialCost():Observable<CommercialCost[]>{
    return this.http.get<CommercialCost[]>(BaseURL.apiUrl+'/CommercialCosts');
  }
  getCommercialCost(precstid) {
   return this.http.get<CommercialCost[]>(BaseURL.apiUrl+'/CommercialCosts/commercialCostsByPreCostId/' + precstid);
  }
  addCommercialCost(commercialCost:CommercialCost){
    console.log(commercialCost);
    return this.http.post<CommercialCost[]>(BaseURL.apiUrl+'/CommercialCosts',commercialCost);
  }
  updateCommercialCost(commercialCost:any){
    return this.http.put(BaseURL.apiUrl+'/CommercialCosts/'+commercialCost.id,commercialCost);
  }
  deleteCommercialCost(id: number){
    return this.http.delete(BaseURL.apiUrl+'/CommercialCosts/'+id);
  }
}

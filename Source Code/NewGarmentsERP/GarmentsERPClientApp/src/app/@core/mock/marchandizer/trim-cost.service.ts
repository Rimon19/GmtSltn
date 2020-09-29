import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { TrimCost } from '../../data/marchanzider-model/trim-cost.model';

@Injectable({
  providedIn: 'root'
})
export class TrimCostService {

  constructor(public http:HttpClient) { }
  getAllTrimCost():Observable<TrimCost[]>{
    return this.http.get<TrimCost[]>(BaseURL.apiUrl+'/TrimCostPreCostings');
  }
  getTrimsCost(precstid):Observable<any> {
    return this.http.get(BaseURL.apiUrl+'/TrimCostPreCostings/trimsCostByPreCostId/' + precstid);
   
  }
  addTrimCost(trimCost:TrimCost){
    console.log(trimCost);
    return this.http.post<TrimCost[]>(BaseURL.apiUrl+'/TrimCostPreCostings',trimCost);
  }
  updateTrimCost(trimCost:TrimCost){
    return this.http.put(BaseURL.apiUrl+'/TrimCostPreCostings/'+trimCost.id,trimCost);
  }
  deleteTrimCost(id: number){
    return this.http.delete(BaseURL.apiUrl+'/TrimCostPreCostings/'+id);
  }
}

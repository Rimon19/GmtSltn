import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { ConversionCost } from '../../data/marchanzider-model/conversion-cost.model';

@Injectable({
  providedIn: 'root'
})
export class ConversionCostService {

  constructor(public http:HttpClient) { }
  getAllConversionCost():Observable<ConversionCost[]>{
    return this.http.get<ConversionCost[]>(BaseURL.apiUrl+'/ConversionCostPreCostings');
  }
  getConversionCost(conversionCostId) {
   return this.http.get<ConversionCost[]>(BaseURL.apiUrl+'/PreCostings/DetailsConversionCost/' + conversionCostId);
  }
  addConversionCost(conversionCost:ConversionCost){
    console.log(conversionCost);
    return this.http.post<ConversionCost[]>(BaseURL.apiUrl+'/ConversionCostPreCostings',conversionCost);
  }
  updateConversionCost(conversionCost:ConversionCost){
    return this.http.put(BaseURL.apiUrl+'/ConversionCostPreCostings/'+conversionCost.conversionCostId,conversionCost);
  }
  deleteConversionCost(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ConversionCostPreCostings/'+id);
  }
}

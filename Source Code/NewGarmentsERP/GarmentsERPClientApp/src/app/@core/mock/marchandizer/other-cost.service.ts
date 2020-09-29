import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class OtherCostService {

  constructor(public http:HttpClient) { }
  getAllOtherCost():Observable<any[]>{
    return this.http.get<any[]>(BaseURL.apiUrl+'/OtherCostPreCostings');
  }
  
  getOtherCost(id) {
  return  this.http.get<any[]>(BaseURL.apiUrl+'/OtherCostPreCostings/otherCostPreCostingsByPreCostId/' + id);

  }
  addOtherCost(yarnCost:any){
    console.log(yarnCost);
    return this.http.post<any[]>(BaseURL.apiUrl+'/OtherCostPreCostings',yarnCost);
  }
  updateOtherCost(yarnCost:any){
    return this.http.put(BaseURL.apiUrl+'/OtherCostPreCostings/'+yarnCost.id,yarnCost);
  }
  deleteOtherCost(id: number){
    return this.http.delete(BaseURL.apiUrl+'/OtherCostPreCostings/'+id);
  }
}

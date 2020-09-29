import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { CommissionCost } from '../../data/marchanzider-model/commission-cost.model';

@Injectable({
  providedIn: 'root'
})
export class CommissionCostService {

  constructor(public http:HttpClient) { }
  getAllCommissionCost():Observable<CommissionCost[]>{
    return this.http.get<CommissionCost[]>(BaseURL.apiUrl+'/CommissionCosts');
  }

  addCommissionCost(commissionCost:CommissionCost){
    console.log(commissionCost);
    return this.http.post<CommissionCost>(BaseURL.apiUrl+'/CommissionCosts',commissionCost);
  }
  updateCommissionCost(commissionCost:CommissionCost){
    return this.http.put(BaseURL.apiUrl+'/CommissionCosts/'+commissionCost.id,commissionCost);
  }
  deleteCommissionCost(id: number){
    return this.http.delete(BaseURL.apiUrl+'/CommissionCosts/'+id);
  }
}

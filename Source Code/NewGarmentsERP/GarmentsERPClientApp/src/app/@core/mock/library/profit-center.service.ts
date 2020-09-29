import { Injectable } from '@angular/core';
import { BaseURL } from '../../data/baseUrl';
import { ProfitCenter } from '../../data/Library-Modul-model/profit-center';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfitCenterService {

  profitCenter:ProfitCenter;
  constructor(public http:HttpClient) { }
  getProfitCenter():Observable<ProfitCenter[]>{
    return this.http.get<ProfitCenter[]>(BaseURL.apiUrl+'/ProfitCenters');
  } 
  addProfitCenter(profitCenter:ProfitCenter){
    
    return this.http.post<ProfitCenter[]>(BaseURL.apiUrl+'/ProfitCenters',profitCenter);
  }
  updateProfitCenter(profitCenter:ProfitCenter){
    return this.http.put(BaseURL.apiUrl+'/ProfitCenters/'+profitCenter.id,profitCenter);
  }
  deleteProfitCenter(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ProfitCenters/'+id);
  }
}

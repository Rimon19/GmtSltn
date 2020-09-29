import { Injectable } from '@angular/core';
import { KnittingCharge } from '../../data/Library-Modul-model/knitting-charge';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class KnittingChargeService {

  knittingCharge:KnittingCharge;
  constructor(public http:HttpClient) { }
  getKnittingCharge():Observable<KnittingCharge[]>{
    return this.http.get<KnittingCharge[]>(BaseURL.apiUrl+'/KnittingCharges');
  } 
  addItemKnittingCharge(knittingCharge:KnittingCharge){
    return this.http.post<KnittingCharge[]>(BaseURL.apiUrl+'/KnittingCharges',knittingCharge);
  }
  updateKnittingCharge(knittingCharge:KnittingCharge){
    return this.http.put(BaseURL.apiUrl+'/KnittingCharges/'+knittingCharge.id,knittingCharge);
  }
  deleteKnittingCharge(id: number){
    return this.http.delete(BaseURL.apiUrl+'/KnittingCharges/'+id);
  }
}

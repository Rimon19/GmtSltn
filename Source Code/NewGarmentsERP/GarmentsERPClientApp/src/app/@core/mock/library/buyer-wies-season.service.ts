import { Injectable } from '@angular/core';
import { BuyerWiesSeason } from '../../data/Library-Modul-model/buyer-wies-season.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
@Injectable({
  providedIn: 'root'
})
export class BuyerWiesSeasonService {
   
  buyerWiesSeason :BuyerWiesSeason;
  constructor(public http:HttpClient) { }

  getAll():Observable<BuyerWiesSeason[]>{
    return this.http.get<BuyerWiesSeason[]>(BaseURL.apiUrl+'/BuyerWiesSeasons');
  } 
  add(buyerWiesSeason:BuyerWiesSeason){
    console.log('service data',buyerWiesSeason);
    return this.http.post<BuyerWiesSeason>(BaseURL.apiUrl+'/BuyerWiesSeasons',buyerWiesSeason);
  }
  update(buyerWiesSeason:BuyerWiesSeason){
    return this.http.put(BaseURL.apiUrl+'/BuyerWiesSeasons/'+buyerWiesSeason.id,buyerWiesSeason);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/BuyerWiesSeasons/'+id);
  }
}

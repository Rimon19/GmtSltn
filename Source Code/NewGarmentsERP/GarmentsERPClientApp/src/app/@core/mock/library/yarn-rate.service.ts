import { Injectable } from '@angular/core';
import { YarnRate } from '../../data/Library-Modul-model/yarn-rate';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class YarnRateService {

  yarnRate:YarnRate; 
  constructor(public http:HttpClient) { }
  getAll():Observable<YarnRate[]>{
    return this.http.get<YarnRate[]>(BaseURL.apiUrl+'/YarnRates');
  } 
  add(yarnRate:YarnRate){
    console.log('service data',yarnRate);
    return this.http.post<YarnRate>(BaseURL.apiUrl+'/YarnRates',yarnRate);
  }
  update(yarnRate:YarnRate){
    return this.http.put(BaseURL.apiUrl+'/YarnRates/'+yarnRate.id,yarnRate);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/YarnRates/'+id);
  }
}

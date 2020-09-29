import { Injectable } from '@angular/core';
import { CurrencyConversionRate } from '../../data/Library-Modul-model/currency-conversion-rate';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionRateService {

  currencyConversionRate:CurrencyConversionRate;
  constructor(public http:HttpClient) { }
  getCurrencyConversionRate():Observable<CurrencyConversionRate[]>{
    return this.http.get<CurrencyConversionRate[]>(BaseURL.apiUrl+'/CurrencyConversionRates');
  } 
  addCurrencyConversionRate(currencyConversionRate:CurrencyConversionRate){
    return this.http.post<CurrencyConversionRate>(BaseURL.apiUrl+'/CurrencyConversionRates',currencyConversionRate);
  }
  updateCurrencyConversionRate(currencyConversionRate:CurrencyConversionRate){
    return this.http.put(BaseURL.apiUrl+'/CurrencyConversionRates/'+currencyConversionRate.id,currencyConversionRate);
  }
  deleteCurrencyConversionRate(id: number){
    return this.http.delete(BaseURL.apiUrl+'/CurrencyConversionRates/'+id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { SalesForecastEntry } from '../../data/marchanzider-model/sales-forecast-entry.model';

@Injectable({
  providedIn: 'root'
})
export class SalesForecastEntryService {

  salesForecastEntry :SalesForecastEntry;
  constructor(public http:HttpClient) { } 

  getAll():Observable<SalesForecastEntry[]>{
    return this.http.get<SalesForecastEntry[]>(BaseURL.apiUrl+'/SalesForecastEntries');
  } 
  add(salesForecastEntry:SalesForecastEntry){
    console.log('service data',salesForecastEntry);
    return this.http.post<SalesForecastEntry>(BaseURL.apiUrl+'/SalesForecastEntries',salesForecastEntry);
  }
  update(salesForecastEntry:SalesForecastEntry){
    return this.http.put(BaseURL.apiUrl+'/SalesForecastEntries/'+salesForecastEntry.id,salesForecastEntry);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/SalesForecastEntries/'+id);
  }
}

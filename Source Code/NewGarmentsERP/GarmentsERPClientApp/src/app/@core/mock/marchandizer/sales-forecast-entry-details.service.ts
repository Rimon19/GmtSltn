import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';
import { SalesForecastEntryDetails } from '../../data/marchanzider-model/sales-forecast-entry-details.model';

@Injectable({
  providedIn: 'root'
})
export class SalesForecastEntryDetailsService {

  salesForecastEntryDetails :SalesForecastEntryDetails;
  constructor(public http:HttpClient) { } 
  getAll():Observable<SalesForecastEntryDetails[]>{
    return this.http.get<SalesForecastEntryDetails[]>(BaseURL.apiUrl+'/SalesForecastEntryDetails');
  } 
  add(salesForecastEntryDetails:SalesForecastEntryDetails){
    console.log('service data',salesForecastEntryDetails);
    return this.http.post<SalesForecastEntryDetails>(BaseURL.apiUrl+'/SalesForecastEntryDetails',salesForecastEntryDetails);
  }
  update(salesForecastEntryDetails:SalesForecastEntryDetails){
    return this.http.put(BaseURL.apiUrl+'/SalesForecastEntryDetails/'+salesForecastEntryDetails.id,salesForecastEntryDetails);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/SalesForecastEntryDetails/'+id);
  }
}

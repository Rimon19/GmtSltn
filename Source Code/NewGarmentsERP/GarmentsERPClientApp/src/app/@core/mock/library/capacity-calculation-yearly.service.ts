import { Injectable } from '@angular/core';
import { CapacityCalculationYearly } from '../../data/Library-Modul-model/capacity-calculation-yearly';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CapacityCalculationYearlyService {

  capacityCalculationYearly:CapacityCalculationYearly; 
  constructor(public http:HttpClient) { }
  getAll():Observable<CapacityCalculationYearly[]>{
    return this.http.get<CapacityCalculationYearly[]>(BaseURL.apiUrl+'/CapacityCalculationYearly');
  } 
  add(capacityCalculationYearly:CapacityCalculationYearly){
    console.log('service data',capacityCalculationYearly);
    return this.http.post<CapacityCalculationYearly>(BaseURL.apiUrl+'/CapacityCalculationYearly',capacityCalculationYearly);
  }
  update(capacityCalculationYearly:CapacityCalculationYearly){
    return this.http.put(BaseURL.apiUrl+'/CapacityCalculationYearly/'+capacityCalculationYearly.id,capacityCalculationYearly);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/CapacityCalculationYearly/'+id);
  }
}

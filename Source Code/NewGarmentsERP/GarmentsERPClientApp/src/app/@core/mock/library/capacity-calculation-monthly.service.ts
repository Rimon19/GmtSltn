import { Injectable } from '@angular/core';
import { CapacityCalculationMonthly } from '../../data/Library-Modul-model/capacity-calculation-monthly';
import { BaseURL } from '../../data/baseUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapacityCalculationMonthlyService {
  capacityCalculationMonthly:CapacityCalculationMonthly; 
  constructor(public http:HttpClient) { }
  getAll():Observable<CapacityCalculationMonthly[]>{
    return this.http.get<CapacityCalculationMonthly[]>(BaseURL.apiUrl+'/CapacityCalculationMonths');
  } 
  add(capacityCalculationMonthly:CapacityCalculationMonthly){
    console.log('service data',capacityCalculationMonthly);
    return this.http.post<CapacityCalculationMonthly>(BaseURL.apiUrl+'/CapacityCalculationMonths',capacityCalculationMonthly);
  }
  update(capacityCalculationMonthly:CapacityCalculationMonthly){
    return this.http.put(BaseURL.apiUrl+'/CapacityCalculationMonths/'+capacityCalculationMonthly.id,capacityCalculationMonthly);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/CapacityCalculationMonths/'+id);
  }
}

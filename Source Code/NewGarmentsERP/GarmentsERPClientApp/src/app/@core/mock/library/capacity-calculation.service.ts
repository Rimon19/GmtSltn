import { Injectable } from '@angular/core';
import { CapacityCalculation } from '../../data/Library-Modul-model/capacity-calculation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CapacityCalculationService {

  capacityCalculation:CapacityCalculation; 
  constructor(public http:HttpClient) { }
  getAll():Observable<CapacityCalculation[]>{
    return this.http.get<CapacityCalculation[]>(BaseURL.apiUrl+'/CapacityCalculations');
  } 
  add(capacityCalculation:CapacityCalculation){
    console.log('service data',capacityCalculation);
    return this.http.post<CapacityCalculation>(BaseURL.apiUrl+'/CapacityCalculations',capacityCalculation);
  }
  update(capacityCalculation:CapacityCalculation){
    return this.http.put(BaseURL.apiUrl+'/CapacityCalculations/'+capacityCalculation.id,capacityCalculation);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/CapacityCalculations/'+id);
  }
}

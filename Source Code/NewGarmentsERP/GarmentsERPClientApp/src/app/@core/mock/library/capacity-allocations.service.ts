import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CapacityAllocations } from '../../data/Library-Modul-model/capacity-allocations';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CapacityAllocationsService {
  capacityAllocations:CapacityAllocations; 
  constructor(public http:HttpClient) { }
  getCapacityAllocations():Observable<CapacityAllocations[]>{
    return this.http.get<CapacityAllocations[]>(BaseURL.apiUrl+'/CapacityAllocations');
  } 
  addCapacityAllocations(capacityAllocations:CapacityAllocations){

    return this.http.post<CapacityAllocations>(BaseURL.apiUrl+'/CapacityAllocations',capacityAllocations);
  }
  updateCapacityAllocations(capacityAllocations:CapacityAllocations){
    return this.http.put(BaseURL.apiUrl+'/CapacityAllocations/'+capacityAllocations.id,capacityAllocations);
  }
  deleteCapacityAllocations(id: number){
    return this.http.delete(BaseURL.apiUrl+'/CapacityAllocations/'+id);
  }
}

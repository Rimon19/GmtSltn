import { Injectable } from '@angular/core';
import { StoreLocation } from '../../data/Library-Modul-model/store-location';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class StoreLocationService {

  storeLocation:StoreLocation;
  constructor(public http:HttpClient) { }
  getStoreLocation():Observable<StoreLocation[]>{
    return this.http.get<StoreLocation[]>(BaseURL.apiUrl+'/StoreLocations');
  } 
  addStoreLocation(storeLocation:StoreLocation){
    
    return this.http.post<StoreLocation[]>(BaseURL.apiUrl+'/StoreLocations',storeLocation);
  }
  updateStoreLocation(storeLocation:StoreLocation){
    return this.http.put(BaseURL.apiUrl+'/StoreLocations/'+storeLocation.id,storeLocation);
  }
  deleteStoreLocation(id: number){
    return this.http.delete(BaseURL.apiUrl+'/StoreLocations/'+id);
  }
}

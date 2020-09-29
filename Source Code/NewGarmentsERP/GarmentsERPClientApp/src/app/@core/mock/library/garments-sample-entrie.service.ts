import { Injectable } from '@angular/core';
import { GarmentsSampleEntrie } from '../../data/Library-Modul-model/garments-sample-entrie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class GarmentsSampleEntrieService {

  garmentsSampleEntrie:GarmentsSampleEntrie;
  constructor(public http:HttpClient) { }
  getGarmentsSampleEntrie():Observable<GarmentsSampleEntrie[]>{
    return this.http.get<GarmentsSampleEntrie[]>(BaseURL.apiUrl+'/GarmentsSampleEntries');
  } 
  addGarmentsSampleEntrie(garmentsSampleEntrie:GarmentsSampleEntrie){
    return this.http.post<GarmentsSampleEntrie>(BaseURL.apiUrl+'/GarmentsSampleEntries',garmentsSampleEntrie);
  }
  updateGarmentsSampleEntrie(garmentsSampleEntrie:GarmentsSampleEntrie){
    return this.http.put(BaseURL.apiUrl+'/GarmentsSampleEntries/'+garmentsSampleEntrie.id,garmentsSampleEntrie);
  }
  deleteGarmentsSampleEntrie(id: number){
    return this.http.delete(BaseURL.apiUrl+'/GarmentsSampleEntries/'+id);
  }
}

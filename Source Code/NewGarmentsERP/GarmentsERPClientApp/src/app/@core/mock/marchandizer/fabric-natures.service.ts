import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FabricNatures } from '../../data/marchanzider-model/fabric-natures';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class FabricNaturesService {
  fabricNatures:FabricNatures;
  constructor(public http:HttpClient) { }
  getAllFabricNatures():Observable<FabricNatures[]>{
    return this.http.get<FabricNatures[]>(BaseURL.apiUrl+'/FabricNatures');
  }

  addFabricNatures(fabricNatures:FabricNatures){
    console.log(FabricNatures);
    return this.http.post<FabricNatures[]>(BaseURL.apiUrl+'/FabricNatures',fabricNatures);
  }
 
  updateFabricNatures(fabricNatures:FabricNatures){
    return this.http.put(BaseURL.apiUrl+'/FabricNatures/'+fabricNatures.id,fabricNatures);
  }
  
  deleteFabricNatures(id: number){
    return this.http.delete(BaseURL.apiUrl+'/FabricNatures/'+id);
  }
}

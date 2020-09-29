import { Injectable } from '@angular/core';
import { ItemGroup } from '../../data/Library-Modul-model/ItemGroup';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemGroupService {

  itemGroup:ItemGroup; 
  constructor(public http:HttpClient) { }
  getAll():Observable<ItemGroup[]>{
    return this.http.get<ItemGroup[]>(BaseURL.apiUrl+'/ItemGroups');
  } 
  add(itemGroup:ItemGroup){
    console.log('service data',itemGroup);
    return this.http.post<ItemGroup>(BaseURL.apiUrl+'/ItemGroups',itemGroup);
  }
  update(itemGroup:ItemGroup){
    return this.http.put(BaseURL.apiUrl+'/ItemGroups/'+itemGroup.id,itemGroup);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ItemGroups/'+id);
  }
}

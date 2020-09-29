import { Injectable } from '@angular/core';
import { ItemAccountCreation } from '../../data/Library-Modul-model/ItemAccountCreation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ItemAccountCreationService {

  itemAccountCreation:ItemAccountCreation; 
  constructor(public http:HttpClient) { }
  getAll():Observable<ItemAccountCreation[]>{
    return this.http.get<ItemAccountCreation[]>(BaseURL.apiUrl+'/ItemAccountCreations');
  } 
  add(itemAccountCreation:ItemAccountCreation){
    console.log('service data',itemAccountCreation);
    return this.http.post<ItemAccountCreation>(BaseURL.apiUrl+'/ItemAccountCreations',itemAccountCreation);
  }
  update(itemAccountCreation:ItemAccountCreation){
    return this.http.put(BaseURL.apiUrl+'/ItemAccountCreations/'+itemAccountCreation.id,itemAccountCreation);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/ItemAccountCreations/'+id);
  }
}

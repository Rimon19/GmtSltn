import { Injectable } from '@angular/core';
import { DepoLocationMapping } from '../../data/Library-Modul-model/DepoLocationMapping';
import { BaseURL } from '../../data/baseUrl';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepoLocationMappingService {
  depoLocationMapping:DepoLocationMapping; 
  constructor(public http:HttpClient) { }
  getAll():Observable<DepoLocationMapping[]>{
    return this.http.get<DepoLocationMapping[]>(BaseURL.apiUrl+'/DepoLocationMappings');
  } 
  add(depoLocationMapping:DepoLocationMapping){
    
    return this.http.post<DepoLocationMapping>(BaseURL.apiUrl+'/DepoLocationMappings',depoLocationMapping);
  }
  update(depoLocationMapping:DepoLocationMapping){
    return this.http.put(BaseURL.apiUrl+'/DepoLocationMappings/'+depoLocationMapping.id,depoLocationMapping);
  }
  delete(id: number){
    return this.http.delete(BaseURL.apiUrl+'/DepoLocationMappings/'+id);
  }
}

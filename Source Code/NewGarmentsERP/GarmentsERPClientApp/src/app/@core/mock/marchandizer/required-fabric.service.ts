import { Injectable } from '@angular/core';
import { RequiredFabric } from '../../data/marchanzider-model/required-fabric';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class RequiredFabricService {

  requiredFabric:RequiredFabric; 

constructor(public http:HttpClient) { 
 
}
getAll():Observable<RequiredFabric[]>{
  return this.http.get<RequiredFabric[]>(BaseURL.apiUrl+'/RequiredFabrics');
} 
add(requiredFabric:RequiredFabric){
  
  return this.http.post<RequiredFabric>(BaseURL.apiUrl+'/RequiredFabrics',requiredFabric);
}
update(requiredFabric:RequiredFabric){
  return this.http.put(BaseURL.apiUrl+'/RequiredFabrics/'+requiredFabric.id,requiredFabric);
}
delete(id: number){
  return this.http.delete(BaseURL.apiUrl+'/RequiredFabrics/'+id);
}

}

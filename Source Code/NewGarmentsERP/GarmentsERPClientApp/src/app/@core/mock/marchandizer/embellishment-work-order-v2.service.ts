import { Injectable } from '@angular/core';
import { EmbellishmentWorkOrderV2 } from '../../data/marchanzider-model/embellishment-work-order-v2';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseURL } from '../../data/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class EmbellishmentWorkOrderV2Service {

  embellishmentWorkOrderV2:EmbellishmentWorkOrderV2; 

constructor(public http:HttpClient) { 
 
}
getAll():Observable<EmbellishmentWorkOrderV2[]>{
  return this.http.get<EmbellishmentWorkOrderV2[]>(BaseURL.apiUrl+'/EmbellishmentWorkOrderV2');
} 
add(embellishmentWorkOrderV2:EmbellishmentWorkOrderV2){
  
  return this.http.post<EmbellishmentWorkOrderV2>(BaseURL.apiUrl+'/EmbellishmentWorkOrderV2',embellishmentWorkOrderV2);
}
update(embellishmentWorkOrderV2:EmbellishmentWorkOrderV2){
  return this.http.put(BaseURL.apiUrl+'/EmbellishmentWorkOrderV2/'+embellishmentWorkOrderV2.id,embellishmentWorkOrderV2);
}
delete(id: number){
  return this.http.delete(BaseURL.apiUrl+'/EmbellishmentWorkOrderV2/'+id);
}
} 
